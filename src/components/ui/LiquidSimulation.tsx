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
            
            // Rich electric-blue tinted specular reflection matching the reference visual
            vec3 specColor = vec3(specular * 0.7, specular * 0.85, specular * 1.25);
            gl_FragColor = vec4(color.rgb + specColor, color.a);
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
    textTexture.minFilter = THREE.LinearFilter;
    textTexture.magFilter = THREE.LinearFilter;
    textTexture.format = THREE.RGBAFormat;

    const bgImg = new Image();
    bgImg.crossOrigin = 'anonymous';
    bgImg.src = '/images/liquid/nyx_hero_bg_exact.png';

    const pebblesImg = new Image();
    pebblesImg.crossOrigin = 'anonymous';
    pebblesImg.src = '/images/liquid/pebbles_hd_transparent.png';

    const renderComposite = (w: number, h: number) => {
      // 1. Draw exact background image or dark carbon gradient fallback
      if (bgImg.complete && bgImg.naturalWidth > 0) {
        const imgRatio = bgImg.naturalWidth / bgImg.naturalHeight;
        const canvasRatio = w / h;
        let dw = w;
        let dh = h;
        let dx = 0;
        let dy = 0;

        if (canvasRatio > imgRatio) {
          dw = w;
          dh = w / imgRatio;
          dy = (h - dh) / 2;
        } else {
          dh = h;
          dw = h * imgRatio;
          dx = (w - dw) / 2;
        }
        ctx2D.drawImage(bgImg, dx, dy, dw, dh);
      } else {
        // Fallback matching nyx_hero_bg_exact.png: deep carbon left, electric bloom right
        ctx2D.fillStyle = '#010206';
        ctx2D.fillRect(0, 0, w, h);
        const fallbackBloom = ctx2D.createRadialGradient(
          w * 0.82, h * 0.35, 20,
          w * 0.82, h * 0.35, Math.max(w, h) * 0.85
        );
        fallbackBloom.addColorStop(0, 'rgba(0, 85, 255, 0.7)');
        fallbackBloom.addColorStop(0.35, 'rgba(0, 45, 195, 0.4)');
        fallbackBloom.addColorStop(0.70, 'rgba(1, 4, 25, 0.1)');
        fallbackBloom.addColorStop(1, 'transparent');
        ctx2D.fillStyle = fallbackBloom;
        ctx2D.fillRect(0, 0, w, h);
      }

      // 2. Draw high-definition 4-pebbles logo in the left column
      if (pebblesImg.complete && pebblesImg.naturalWidth > 0) {
        const screenAspect = w / h;
        let size: number;
        let drawX: number;
        let drawY: number;

        if (screenAspect >= 1.0) {
          // Desktop: position pebbles in left column
          size = Math.min(w * 0.38, h * 0.70);
          drawX = w * 0.11;
          drawY = (h - size) / 2;
        } else {
          // Mobile / narrow viewports: centered in upper portion
          size = Math.min(w * 0.58, h * 0.38);
          drawX = (w - size) / 2;
          drawY = h * 0.16;
        }

        ctx2D.drawImage(pebblesImg, drawX, drawY, size, size);
      }

      textTexture.needsUpdate = true;
    };

    bgImg.onload = () => renderComposite(width, height);
    pebblesImg.onload = () => renderComposite(width, height);

    const handleResize = () => {
      const newW = window.innerWidth * window.devicePixelRatio;
      const newH = window.innerHeight * window.devicePixelRatio;
      renderer.setSize(window.innerWidth, window.innerHeight);
      targetA.setSize(newW, newH);
      targetB.setSize(newW, newH);
      simMaterial.uniforms.resolution.value.set(newW, newH);
      canvas2D.width = newW;
      canvas2D.height = newH;
      renderComposite(newW, newH);
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

    renderComposite(width, height);

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
