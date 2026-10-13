'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export interface LiquidSimulationProps {
  imagePath?: string;
  text?: string;
  className?: string;
}

export default function LiquidSimulation({
  imagePath,
  text,
  className,
}: LiquidSimulationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const scene = new THREE.Scene();
    const simScene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    container.appendChild(renderer.domElement);

    const mouse = new THREE.Vector2(-1000, -1000);
    let frame = 0;

    let width = window.innerWidth * window.devicePixelRatio;
    let height = window.innerHeight * window.devicePixelRatio;

    const renderTargetOptions = {
      format: THREE.RGBAFormat,
      type: THREE.FloatType,
      minFilter: THREE.NearestFilter,
      magFilter: THREE.NearestFilter,
      stencilBuffer: false,
      depthBuffer: false,
    };

    let targetA = new THREE.WebGLRenderTarget(width, height, renderTargetOptions);
    let targetB = new THREE.WebGLRenderTarget(width, height, renderTargetOptions);

    const simMaterial = new THREE.ShaderMaterial({
      uniforms: {
        textureA: { value: null },
        mouse: { value: mouse },
        resolution: { value: new THREE.Vector2(width, height) },
        time: { value: 0 },
        frame: { value: 0 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D textureA;
        uniform vec2 mouse;
        uniform vec2 resolution;
        uniform float time;
        uniform int frame;
        varying vec2 vUv;

        const float delta = 1.4;  

        void main() {
            vec2 uv = vUv;
            if (frame == 0) {
                gl_FragColor = vec4(0.0);
                return;
            }
            
            vec4 data = texture2D(textureA, uv);
            float pressure = data.x;
            float pVel = data.y;
            
            vec2 texelSize = 1.0 / resolution;
            float p_right = texture2D(textureA, uv + vec2(texelSize.x, 0.0)).x;
            float p_left = texture2D(textureA, uv + vec2(-texelSize.x, 0.0)).x;
            float p_up = texture2D(textureA, uv + vec2(0.0, texelSize.y)).x;
            float p_down = texture2D(textureA, uv + vec2(0.0, -texelSize.y)).x;
            
            if (uv.x <= texelSize.x) p_left = p_right;
            if (uv.x >= 1.0 - texelSize.x) p_right = p_left;
            if (uv.y <= texelSize.y) p_down = p_up;
            if (uv.y >= 1.0 - texelSize.y) p_up = p_down;
            
            // Enhanced wave equation matching ShaderToy
            pVel += delta * (-2.0 * pressure + p_right + p_left) / 4.0;
            pVel += delta * (-2.0 * pressure + p_up + p_down) / 4.0;
            
            pressure += delta * pVel;
            pVel -= 0.005 * delta * pressure;
            pVel *= 1.0 - 0.002 * delta;
            pressure *= 0.999;
            
            // Mouse interaction
            vec2 mouseUV = mouse / resolution;
            if (mouse.x > 0.0) {
                float dist = distance(uv, mouseUV);
                if (dist <= 0.02) {  // Radius for ripples
                    pressure += 2.0 * (1.0 - dist / 0.02);  // Intensity
                }
            }
            
            gl_FragColor = vec4(pressure, pVel, (p_right - p_left) / 2.0, (p_up - p_down) / 2.0);
        }
      `,
    });

    const renderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        textureA: { value: null },
        textureB: { value: null },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D textureA;
        uniform sampler2D textureB;
        varying vec2 vUv;

        void main() {
            vec4 data = texture2D(textureA, vUv);
            
            vec2 distortion = 0.3 * data.zw;
            vec4 color = texture2D(textureB, vUv + distortion);
            
            vec3 normal = normalize(vec3(-data.z * 2.0, 0.5, -data.w * 2.0));
            vec3 lightDir = normalize(vec3(-3.0, 10.0, 3.0));
            float specular = pow(max(0.0, dot(normal, lightDir)), 60.0) * 1.5;
            
            gl_FragColor = color + vec4(specular);
        }
      `,
      transparent: true,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const simMesh = new THREE.Mesh(geometry, simMaterial);
    const renderMesh = new THREE.Mesh(geometry, renderMaterial);

    simScene.add(simMesh);
    scene.add(renderMesh);

    const canvas2D = document.createElement('canvas');
    canvas2D.width = width;
    canvas2D.height = height;
    const ctx2D = canvas2D.getContext('2d', { alpha: true });

    if (!ctx2D) return;

    ctx2D.fillStyle = '#000000';
    ctx2D.fillRect(0, 0, width, height);

    const textTexture = new THREE.CanvasTexture(canvas2D);
    textTexture.minFilter = THREE.NearestFilter;
    textTexture.magFilter = THREE.NearestFilter;
    textTexture.format = THREE.RGBAFormat;

    const drawNyxVectorLogo = (w: number, h: number) => {
      ctx2D.fillStyle = '#000000';
      ctx2D.fillRect(0, 0, w, h);

      // Centered, bold architectural NYX branding
      const baseFontSize = Math.min(w * 0.26, h * 0.46);

      ctx2D.save();
      ctx2D.translate(w / 2, h * 0.44); // Positioned slightly above center for optical balance

      ctx2D.font = `900 ${baseFontSize}px system-ui, -apple-system, sans-serif`;
      ctx2D.textAlign = 'center';
      ctx2D.textBaseline = 'middle';
      ctx2D.letterSpacing = '-0.04em';

      const metrics = ctx2D.measureText('NYX');
      const textHalfW = metrics.width / 2;

      // Chrome specular gradient
      const chromeGrad = ctx2D.createLinearGradient(
        -textHalfW,
        -baseFontSize / 2,
        textHalfW,
        baseFontSize / 2
      );
      chromeGrad.addColorStop(0, '#FFFFFF');
      chromeGrad.addColorStop(0.35, '#F1F5F9');
      chromeGrad.addColorStop(0.7, '#94A3B8');
      chromeGrad.addColorStop(1, '#FFFFFF');

      ctx2D.fillStyle = chromeGrad;
      ctx2D.fillText('NYX', 0, 0);

      // Iconic Electric Blue Dot
      const dotRadius = baseFontSize * 0.085;
      const dotX = textHalfW + dotRadius * 1.5;
      const dotY = -baseFontSize * 0.32;

      // Ambient dot glow
      ctx2D.beginPath();
      ctx2D.arc(dotX, dotY, dotRadius * 2.2, 0, Math.PI * 2);
      ctx2D.fillStyle = 'rgba(59, 130, 246, 0.45)';
      ctx2D.fill();

      // Sharp blue core
      ctx2D.beginPath();
      ctx2D.arc(dotX, dotY, dotRadius, 0, Math.PI * 2);
      ctx2D.fillStyle = '#3B82F6';
      ctx2D.fill();

      ctx2D.restore();
      textTexture.needsUpdate = true;
    };

    const renderImageOrText = (w: number, h: number) => {
      ctx2D.fillStyle = '#000000';
      ctx2D.fillRect(0, 0, w, h);

      if (imagePath) {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => {
          const screenAspect = w / h;
          const imgAspect = img.width / img.height;
          let drawW: number, drawH: number;

          if (screenAspect < 1.0) {
            // Mobile portrait
            drawW = 0.84 * w;
            drawH = drawW / imgAspect;
          } else {
            // Desktop / tablet
            const targetW = 0.55 * w;
            const maxH = 0.40 * h;
            if (targetW / imgAspect > maxH) {
              drawH = maxH;
              drawW = drawH * imgAspect;
            } else {
              drawW = targetW;
              drawH = drawW / imgAspect;
            }
          }

          const drawX = (w - drawW) / 2;
          const drawY = (h * 0.44) - (drawH / 2);
          ctx2D.drawImage(img, drawX, drawY, drawW, drawH);
          textTexture.needsUpdate = true;
        };
        img.onerror = () => {
          drawNyxVectorLogo(w, h);
        };
        img.src = imagePath;
      } else if (text) {
        const fontSize = Math.round(250 * window.devicePixelRatio);
        ctx2D.fillStyle = '#ffffff';
        ctx2D.font = `bold ${fontSize}px Arial, sans-serif`;
        ctx2D.textAlign = 'center';
        ctx2D.textBaseline = 'middle';
        ctx2D.fillText(text, w / 2, h / 2);
        textTexture.needsUpdate = true;
      } else {
        drawNyxVectorLogo(w, h);
      }
    };

    const handleResize = () => {
      const newW = window.innerWidth * window.devicePixelRatio;
      const newH = window.innerHeight * window.devicePixelRatio;
      renderer.setSize(window.innerWidth, window.innerHeight);
      targetA.setSize(newW, newH);
      targetB.setSize(newW, newH);
      simMaterial.uniforms.resolution.value.set(newW, newH);
      canvas2D.width = newW;
      canvas2D.height = newH;
      renderImageOrText(newW, newH);
    };

    const updateMousePos = (clientX: number, clientY: number) => {
      const rect = container.getBoundingClientRect();
      const relX = clientX - rect.left;
      const relY = clientY - rect.top;
      mouse.x = relX * window.devicePixelRatio;
      mouse.y = (rect.height - relY) * window.devicePixelRatio;
    };

    const handleMouseMove = (e: MouseEvent) => {
      updateMousePos(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        updateMousePos(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handleMouseLeave = () => {
      mouse.set(-1000, -1000);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    renderImageOrText(width, height);

    const animate = () => {
      simMaterial.uniforms.frame.value = frame++;
      simMaterial.uniforms.time.value = performance.now() / 1000;
      simMaterial.uniforms.textureA.value = targetA.texture;

      renderer.setRenderTarget(targetB);
      renderer.render(simScene, camera);

      renderMaterial.uniforms.textureA.value = targetB.texture;
      renderMaterial.uniforms.textureB.value = textTexture;

      renderer.setRenderTarget(null);
      renderer.render(scene, camera);

      const temp = targetA;
      targetA = targetB;
      targetB = temp;

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      renderer.dispose();
      targetA.dispose();
      targetB.dispose();
      textTexture.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [imagePath, text]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    />
  );
}
