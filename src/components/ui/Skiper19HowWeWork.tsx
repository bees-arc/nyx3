'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Bebas_Neue } from 'next/font/google';
import styles from './Skiper19HowWeWork.module.css';

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

interface SprintDay {
  day: string;
  focus: string;
  detail: string;
}

interface StepItem {
  id: string;
  num: string;
  phase: string;
  duration: string;
  title: string;
  headline: string;
  desc: string;
  image: string;
  badgeText: string;
  leadParagraph: string;
  secondParagraph: string;
  thirdParagraph: string;
  schedule: SprintDay[];
  deliverables: string[];
  tools: string[];
}

const steps: StepItem[] = [
  {
    id: 'discover',
    num: '01',
    phase: 'PHASE 01',
    duration: 'Days 01–03',
    title: 'DISCOVER',
    headline: 'Strategic Intelligence & Architecture Freeze',
    desc: 'We learn your business, audience, and goals before touching a pixel — extracting your core value proposition and analyzing competitive landscapes.',
    image: '/images/services/uiux_design.jpg',
    badgeText: '[ VIEW PHASE ]',
    leadParagraph:
      'Strategic discovery is <strong>essential for the velocity, precision, and commercial viability</strong> of any high-performance digital platform. Investing in rigorous market interrogation and user behavioral analysis before writing code is not just an option — <strong>it is a strategic necessity for outperforming competitors</strong>.',
    secondParagraph:
      'At NYX, we dissect your business model, customer psychology, and competitive landscape. We map conversion funnels, interview stakeholders, and establish the technical and information architecture to <strong>eliminate rework and ensure every pixel directly drives conversion</strong>.',
    thirdParagraph:
      'By <strong>freezing scope early and establishing unshakeable architectural standards</strong>, we give your project the foundation needed to scale seamlessly from day one.',
    schedule: [
      { day: 'Day 01', focus: 'Stakeholder Discovery & Goals Alignment', detail: 'Deep-dive interviews with leadership to isolate value props, target ICPs, and commercial objectives.' },
      { day: 'Day 02', focus: 'Competitive Audit & Architecture', detail: 'Scrutinizing direct competitors, evaluating technical stacks, and building the information architecture.' },
      { day: 'Day 03', focus: 'User Journey Mapping & Scope Lock', detail: 'Finalizing user flows, primary conversion funnels, and issuing the sprint strategic brief.' },
    ],
    deliverables: [
      'Strategic Sprint Brief (Notion & PDF)',
      'Information Architecture & Sitemap Tree',
      'User Flow & Journey Maps',
      'Technical Specification & Scope Document',
    ],
    tools: ['Figma', 'FigJam', 'Notion', 'Google Analytics Audit', 'Lighthouse Baseline'],
  },
  {
    id: 'design',
    num: '02',
    phase: 'PHASE 02',
    duration: 'Days 04–07',
    title: 'DESIGN',
    headline: 'Bespoke Design Systems & Kinetic Prototypes',
    desc: 'We craft the visual direction — shaping an unmistakable digital presence with interactive wireframes, modular design systems, and fluid prototypes.',
    image: '/images/services/web_design.jpg',
    badgeText: '[ VIEW PHASE ]',
    leadParagraph:
      'Design at NYX is an <strong>instrument of commercial conversion, not mere decoration</strong>. We craft an unmistakable, high-conversion visual language engineered to project authority, captivate visitors within seconds, and <strong>turn casual attention into decisive action</strong>.',
    secondParagraph:
      'We establish a custom design system with bespoke typography scales, dark/light token architecture, and fluid layout grids. We build high-fidelity interactive wireframes that <strong>simulate real user interactions and emotional resonance</strong> across every device.',
    thirdParagraph:
      'Every interaction, micro-animation, and spacing rhythm is <strong>choreographed with intention</strong>, creating an experience that feels alive and instantly memorable.',
    schedule: [
      { day: 'Day 04', focus: 'Art Direction & Moodboarding', detail: 'Exploring typographic hierarchy, bespoke color tokens, and contrasting layout rhythms.' },
      { day: 'Day 05', focus: 'High-Priority Wireframing', detail: 'Designing high-conversion hero blocks, service spotlights, and frictionless conversion funnels.' },
      { day: 'Day 06', focus: 'Design System & Component Tokens', detail: 'Assembling reusable component modules, responsive states, and fluid interaction choreography.' },
      { day: 'Day 07', focus: 'Interactive Prototype & Sign-off', detail: 'Walkthrough of full clickable prototype on desktop and mobile viewports with stakeholder sign-off.' },
    ],
    deliverables: [
      'Production-Ready Figma Design System',
      'High-Fidelity Desktop & Mobile UI Screens',
      'Clickable Interactive Prototypes',
      'Complete Media & Vector Asset Package',
    ],
    tools: ['Figma', 'Framer', 'Adobe Creative Cloud', 'Custom SVG Choreography'],
  },
  {
    id: 'build',
    num: '03',
    phase: 'PHASE 03',
    duration: 'Days 08–11',
    title: 'BUILD',
    headline: 'Production Next.js & Frontend Engineering',
    desc: 'We develop the real thing — engineering blazing Next.js platforms with production-grade TypeScript, fluid animations, and headless CMS integrations.',
    image: '/images/services/web_dev.jpg',
    badgeText: '[ VIEW PHASE ]',
    leadParagraph:
      'We reject slow drag-and-drop page builders and bloated templates. We engineer <strong>custom digital platforms on Next.js 15</strong>, written in strict TypeScript with component-scoped CSS, hardware-accelerated animations, and <strong>instant sub-second navigations</strong>.',
    secondParagraph:
      'Our engineering standards guarantee clean, maintainable codebases that your internal teams can easily scale. We integrate headless CMS solutions, dynamic API endpoints, and fluid Framer Motion spring physics <strong>without sacrificing a single millisecond of load time</strong>.',
    thirdParagraph:
      'The result is a production platform that <strong>feels silky smooth, resilient under high traffic spikes</strong>, and built to stand the test of time.',
    schedule: [
      { day: 'Day 08', focus: 'Next.js App Router Architecture', detail: 'Repository scaffold, design token integration, typography loading, and root layout structure.' },
      { day: 'Day 09', focus: 'Component Development & Responsive Layouts', detail: 'Building pixel-perfect components, dynamic grids, and responsive views across all screen sizes.' },
      { day: 'Day 10', focus: 'Animation Choreography & CMS Integration', detail: 'Framer Motion scroll triggers, interactive hover states, dynamic forms, and backend integration.' },
      { day: 'Day 11', focus: 'Cross-Browser QA & Accessibility', detail: 'Full device testing, keyboard navigation audits, WCAG AA compliance, and performance profiling.' },
    ],
    deliverables: [
      'Clean TypeScript Codebase (GitHub Repository)',
      'Headless CMS or Database Integration',
      'Production Edge Deployment Preview',
      'Automated CI/CD Pipeline Configuration',
    ],
    tools: ['Next.js 15', 'TypeScript', 'Framer Motion', 'Tailwind / CSS Modules', 'Vercel'],
  },
  {
    id: 'launch',
    num: '04',
    phase: 'PHASE 04',
    duration: 'Days 12–14',
    title: 'LAUNCH',
    headline: 'Performance Tuning, SEO & Edge Deployment',
    desc: 'We deploy, configure analytics, optimize Core Web Vitals to 99+, and stress-test across every device to make sure everything is perfect.',
    image: '/images/projects/apex-fintech.jpg',
    badgeText: '[ VIEW PHASE ]',
    leadParagraph:
      'The sprint culminates in flawless execution and deployment. We execute <strong>rigorous Core Web Vitals tuning</strong>, wire up conversion analytics events, configure automated social preview cards, and <strong>switch production DNS with zero downtime</strong>.',
    secondParagraph:
      'We run exhaustive stress tests across Safari, Chrome, Edge, and iOS/Android viewports. Every asset is minified, fonts are preloaded, and images are served in modern AVIF/WebP formats via edge CDNs to <strong>guarantee 99+ Google Lighthouse performance</strong>.',
    thirdParagraph:
      'We handle domain DNS cutover with zero downtime, deliver comprehensive admin training, and <strong>provide a 30-day post-launch warranty</strong> so you launch with absolute confidence.',
    schedule: [
      { day: 'Day 12', focus: 'Performance & Core Web Vitals Tuning', detail: 'Image optimization, bundle splitting, font preloading, and achieving 99+ Lighthouse performance.' },
      { day: 'Day 13', focus: 'Technical SEO, Meta & Event Tracking', detail: 'Automated OpenGraph generation, JSON-LD schema markup, Google Analytics 4, and custom conversion events.' },
      { day: 'Day 14', focus: 'Production DNS Cutover & Handover', detail: 'Zero-downtime DNS migration, SSL provisioning, client handover training, and launch announcement.' },
    ],
    deliverables: [
      'Live Production URL & Edge Infrastructure',
      '99+ Google Lighthouse Audit Report',
      'Technical SEO & OpenGraph Social Setup',
      '30-Day Post-Launch SLA Warranty',
    ],
    tools: ['Vercel Edge Network', 'Google Lighthouse', 'PostHog / GA4', 'Cloudflare DNS'],
  },
];

interface CardProps {
  step: StepItem;
  index: number;
  total: number;
  onSelect: (step: StepItem) => void;
}

function StackingWorkCard({ step, index, total, onSelect }: CardProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const isLast = index === total - 1;

  // Scroll tracking: as user scrolls past this card, it scales down, blurs, and dims!
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end start'],
  });

  // Scales down from 1 to 0.90, blurs to 14px, and darkens to 0.35 (Poseidon Maritime exact scroll swap)
  const scale = useTransform(scrollYProgress, [0, 0.85], [1, isLast ? 1 : 0.9]);
  const blurVal = useTransform(scrollYProgress, [0, 0.7], [0, isLast ? 0 : 14]);
  const brightnessVal = useTransform(scrollYProgress, [0, 0.7], [1, isLast ? 1 : 0.35]);
  const filter = useTransform(
    [blurVal, brightnessVal],
    ([b, br]) => `blur(${b}px) brightness(${br})`
  );
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, isLast ? 1 : 0.5]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Mouse tracking for magnetic circular badge (Poseidon Maritime style)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 22, stiffness: 220, mass: 0.4 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - 60);
    mouseY.set(e.clientY - rect.top - 60);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.jump(e.clientX - rect.left - 60);
    mouseY.jump(e.clientY - rect.top - 60);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      ref={trackRef}
      className={`${styles.cardTrack} ${isLast ? styles.cardTrackLast : ''}`}
    >
      <motion.div
        className={styles.cardStickyContainer}
        style={{
          top: `calc(75px + ${index * 14}px)`,
          zIndex: index + 10,
          scale,
          filter,
          opacity,
        }}
      >
        <motion.div
          className={styles.card}
          onClick={() => onSelect(step)}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onSelect(step);
            }
          }}
          aria-label={`View details for ${step.title} (${step.duration})`}
        >
          {/* Background Image with Cinematic Zoom & Scroll Parallax */}
          <motion.div
            className={`${styles.imageWrapper} ${isHovered ? styles.imageHovered : ''}`}
            style={{ scale: imageScale }}
          >
            <Image
              src={step.image}
              alt={step.title}
              fill
              sizes="(max-width: 1400px) 100vw, 1400px"
              className={styles.bgImage}
              priority={index === 0}
            />
            {/* Dark Cinematic Vignette Overlays */}
            <div className={styles.overlayTop} />
            <div className={styles.overlayBottom} />
            <div className={styles.overlayVignette} />
          </motion.div>

          {/* Floating Magnetic Circular Cursor Badge (Poseidon Style) */}
          <motion.div
            className={styles.cursorBadge}
            style={{
              x: smoothX,
              y: smoothY,
            }}
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.35,
            }}
            transition={{
              opacity: { duration: 0.2 },
              scale: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
            }}
          >
            <span className={styles.badgeText}>{step.badgeText}</span>
          </motion.div>

          {/* Card Top Metadata Bar */}
          <div className={styles.cardTop}>
            <div className={styles.phaseTag}>
              <span className={styles.phaseDot} />
              <span>{step.phase}</span>
              <span className={styles.divider}>//</span>
              <span>{step.duration}</span>
            </div>
            <span className={styles.stepNum}>{step.num} / 0{total}</span>
          </div>

          {/* Giant Condensed Center Title (Poseidon Style) */}
          <div className={styles.cardCenter}>
            <h3
              className={`${styles.cardTitle} ${bebas.className} ${isHovered ? styles.cardTitleHovered : ''}`}
            >
              {step.title}
            </h3>
          </div>

          {/* Card Bottom Content Bar */}
          <div className={styles.cardBottom}>
            <div className={styles.descBox}>
              <p className={styles.descText}>{step.desc}</p>
            </div>
            <div className={styles.bottomArrow}>
              <span>Click to View Phase</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

// Context for full-screen detail scroll container
const DetailScrollContext = React.createContext<React.RefObject<HTMLDivElement | null>>({ current: null });

function ScrollWordReveal({ text, className }: { text: string; className?: string }) {
  const stageRef = React.useContext(DetailScrollContext);
  const targetRef = useRef<HTMLParagraphElement>(null);
  
  // Track scroll position inside the modal container
  const { scrollYProgress } = useScroll({
    target: targetRef,
    container: stageRef,
    offset: ['start 0.88', 'end 0.45'],
  });

  const words = text.split(' ');

  return (
    <p ref={targetRef} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = Math.min(1, start + (1 / words.length) * 2.2);
        return (
          <ScrollWordSpan
            key={i}
            word={word}
            progress={scrollYProgress}
            range={[start, end]}
          />
        );
      })}
    </p>
  );
}

function ScrollWordSpan({
  word,
  progress,
  range,
}: {
  word: string;
  progress: any;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.22, 1]);
  const color = useTransform(progress, range, ['#475569', '#FFFFFF']);

  return (
    <motion.span
      style={{
        opacity,
        color,
        display: 'inline-block',
        marginRight: '0.34em',
        willChange: 'opacity, color',
      }}
    >
      {word}
    </motion.span>
  );
}

export default function Skiper19HowWeWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const detailStageRef = useRef<HTMLDivElement>(null);
  const [selectedStep, setSelectedStep] = useState<StepItem | null>(null);

  // Close full-screen view on Escape key & manage scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedStep(null);
    };
    if (selectedStep) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedStep]);

  // Navigate between steps in full-screen detail view
  const currentIndex = selectedStep ? steps.findIndex((s) => s.id === selectedStep.id) : -1;
  const nextStep = currentIndex >= 0 && currentIndex < steps.length - 1 ? steps[currentIndex + 1] : null;
  const prevStep = currentIndex > 0 ? steps[currentIndex - 1] : null;

  const goToNext = () => {
    if (nextStep) {
      setSelectedStep(nextStep);
      if (detailStageRef.current) {
        detailStageRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const goToPrev = () => {
    if (prevStep) {
      setSelectedStep(prevStep);
      if (detailStageRef.current) {
        detailStageRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const scrollToTop = () => {
    if (detailStageRef.current) {
      detailStageRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Wheel listener: scroll UP at top or scroll DOWN at bottom closes modal (User Requirement)
  useEffect(() => {
    if (!selectedStep) return;
    const stage = detailStageRef.current;
    if (!stage) return;

    let upScrollCount = 0;
    let downScrollCount = 0;

    const handleWheel = (e: WheelEvent) => {
      // Top boundary: scrolled to top and scrolling up
      if (stage.scrollTop <= 5 && e.deltaY < -25) {
        upScrollCount += 1;
        if (upScrollCount >= 2) {
          setSelectedStep(null);
        }
      } else {
        upScrollCount = 0;
      }

      // Bottom boundary: scrolled to bottom and scrolling down
      const isAtBottom = stage.scrollTop + stage.clientHeight >= stage.scrollHeight - 30;
      if (isAtBottom && e.deltaY > 25) {
        downScrollCount += 1;
        if (downScrollCount >= 2) {
          setSelectedStep(null);
        }
      } else {
        downScrollCount = 0;
      }
    };

    stage.addEventListener('wheel', handleWheel, { passive: true });
    return () => {
      stage.removeEventListener('wheel', handleWheel);
    };
  }, [selectedStep]);

  return (
    <section ref={containerRef} className={styles.section} id="how-we-work">
      {/* ─── AMBIENT ATMOSPHERIC BACKGROUND (Poseidon Maritime Depth) ─── */}
      <div className={styles.sectionAmbientBg}>
        <div className={styles.ambientGlowTop} />
        <div className={styles.ambientGlowBottom} />
        <div className={styles.ambientGrid} />
      </div>

      {/* ─── SECTION HEADER ─── */}
      <div className="container">
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className="section-label section-label--dark">OUR SPRINT METHODOLOGY</span>
            <h2 className="t-h2">
              How we work. <br />
              <span className={styles.headerHighlight}>Built for momentum.</span>
            </h2>
          </div>
          <div className={styles.headerRight}>
            <p className={styles.headerSub}>
              From discovery to production deployment in a structured 14-day cycle. Scroll down to experience the image scale and card swap effect, and click any phase for the full roadmap.
            </p>
            <Link href="/process" className="btn btn--outline" style={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.25)' }}>
              Detailed Sprint Roadmap →
            </Link>
          </div>
        </div>
      </div>

      {/* ─── STACKING & SWAPPING CARDS STAGE (Poseidon Maritime Exact Scroll Animation) ─── */}
      <div className={styles.cardsStackWrapper}>
        <div className={styles.cardsStack}>
          {steps.map((step, index) => (
            <StackingWorkCard
              key={step.id}
              step={step}
              index={index}
              total={steps.length}
              onSelect={(item) => setSelectedStep(item)}
            />
          ))}
        </div>
      </div>

      {/* ─── BOTTOM CTA ─── */}
      <div className="container">
        <div className={styles.bottomCta}>
          <p className={styles.bottomNote}>Ready to start your next milestone?</p>
          <Link href="/contact" className="btn btn--primary btn--lg">
            Book an Intro Call →
          </Link>
        </div>
      </div>

      {/* ─── POSEIDON MARITIME EXACT FULLSCREEN DETAIL & NEXT PHASE SWAP ─── */}
      <AnimatePresence>
        {selectedStep && (
          <DetailScrollContext.Provider value={detailStageRef}>
            <motion.div
              key={selectedStep.id}
              id="fullscreen-detail-stage"
              ref={detailStageRef}
              className={styles.fullscreenDetail}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Immersive Fixed Full-Screen Background Image with Maritime Vignette */}
              <motion.div
                className={styles.fullscreenBg}
                initial={{ scale: 1.15, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src={selectedStep.image}
                  alt={selectedStep.title}
                  fill
                  priority
                  sizes="100vw"
                  className={styles.fullscreenBgImg}
                />
                <div className={styles.fullscreenBgOverlay} />
              </motion.div>

              {/* Fixed Floating Top Navigation Bar */}
              <div className={styles.fullscreenNav}>
                <div className={styles.fullscreenNavLeft}>
                  <div className={styles.navLogo}>
                    <Image src="/images/logo-dark.png" alt="NYX" width={90} height={36} className={styles.logoImg} />
                  </div>
                  <div className={styles.navPhaseBadge}>
                    <span className={styles.phaseDot} />
                    <span>{selectedStep.phase}</span>
                    <span className={styles.divider}>//</span>
                    <span>{selectedStep.duration}</span>
                  </div>
                </div>

                <div className={styles.fullscreenNavRight}>
                  <button
                    type="button"
                    className={styles.fullscreenCloseBtn}
                    onClick={() => setSelectedStep(null)}
                    aria-label="Close phase details"
                  >
                    <span className={styles.closeBtnText}>[ CLOSE ]</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Scrollable Stage */}
              <div className={styles.fullscreenScrollStage}>
                {/* 1. Hero Screen: Radar HUD + Giant Condensed Title matching Poseidon Maritime */}
                <div className={styles.heroScreen}>
                  {/* Tactical Reticle Corner Accents */}
                  <div className={`${styles.cornerReticle} ${styles.cornerTL}`}>+</div>
                  <div className={`${styles.cornerReticle} ${styles.cornerTR}`}>+</div>
                  <div className={`${styles.cornerReticle} ${styles.cornerBL}`}>+</div>
                  <div className={`${styles.cornerReticle} ${styles.cornerBR}`}>+</div>

                  {/* Tactical Telemetry HUD Bar */}
                  <div className={styles.hudTelemetryBar}>
                    <span className={styles.hudBadge}>[ SYS // NYX.2.0_ENGINE ]</span>
                    <span className={styles.hudDivider}>|</span>
                    <span className={styles.hudCoords}>COORDS: 25.2048° N // 55.2708° E</span>
                    <span className={styles.hudDivider}>|</span>
                    <span className={styles.hudBadge}>RANGE: 157M</span>
                    <span className={styles.hudDivider}>|</span>
                    <span className={styles.hudStatus}>● STATUS: ONLINE</span>
                  </div>

                  {/* Rotating Radar Ring Effect behind Title */}
                  <div className={styles.radarRingWrapper}>
                    <div className={styles.radarRingCircle} />
                    <div className={styles.radarSweepLine} />
                  </div>

                  <motion.div
                    className={styles.heroScreenCenter}
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <motion.span
                      className={styles.heroSubTag}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {selectedStep.headline}
                    </motion.span>
                    <h1 className={`${styles.heroGiantTitle} ${bebas.className}`}>
                      {selectedStep.title}
                    </h1>
                  </motion.div>

                  {/* Animated Scroll Prompt with Vertical Pulse Line */}
                  <motion.div
                    className={styles.scrollPrompt}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 8, 0] }}
                    transition={{
                      opacity: { duration: 0.6, delay: 0.3 },
                      y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
                    }}
                  >
                    <span>SCROLL TO EXPLORE PHASE</span>
                    <div className={styles.scrollPulseLine} />
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 5v14M19 12l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </div>

                {/* 2. Editorial Narrative Section matching Poseidon Detail Page Content */}
                <div className={styles.contentSection}>
                  <div className={styles.contentContainer}>
                    {/* SECTION 01: Lead editorial paragraphs with Scroll-Driven Word Illumination */}
                    <div className={styles.sectionHeaderBlock}>
                      <span className={styles.sectionTacLabel}>| 01 // STRATEGIC FRAMEWORK</span>
                      <h2 className={styles.sectionMainHeadline}>
                        High-velocity execution engineered without technical compromise.
                      </h2>
                    </div>

                    <div className={styles.editorialNarrative}>
                      <ScrollWordReveal
                        className={styles.leadPara}
                        text="Strategic discovery and rigorous architecture freeze is essential for the velocity, precision, and commercial viability of any high-performance digital platform. Investing in exhaustive market interrogation and user behavioral analysis before writing code is not just an option — it is a strategic necessity for dominating competitive search landscapes."
                      />
                      <ScrollWordReveal
                        className={styles.bodyPara}
                        text="At NYX, we dissect your business model, customer psychology, and competitive landscape. We map conversion funnels, interview stakeholders, and establish the technical and information architecture to eliminate rework and ensure every pixel directly drives conversion and lifetime value."
                      />
                      <ScrollWordReveal
                        className={styles.bodyPara}
                        text="By freezing scope early and establishing unshakeable architectural standards, we give your project the foundation needed to scale seamlessly from day one with zero downtime, instant navigations, and maximum enterprise security."
                      />
                    </div>

                    {/* SECTION 02: Architectural Compliance & Scope (Chevron list with dividers matching Poseidon) */}
                    <div className={styles.complianceBlock}>
                      <div className={styles.sectionHeaderBlock}>
                        <span className={styles.sectionTacLabel}>| 02 // ARCHITECTURAL COMPLIANCE & STANDARDS</span>
                        <h3 className={styles.complianceHeading}>
                          AT NYX WE ENSURE COMPLETE METHODOLOGICAL PRECISION ACROSS EVERY STAGE.
                        </h3>
                      </div>

                      <div className={styles.complianceList}>
                        <div className={styles.complianceRow}>
                          <div className={styles.complianceChevron}>›</div>
                          <div className={styles.complianceContent}>
                            <h4 className={styles.complianceTitle}>100% STRICT TYPESCRIPT & PRODUCTION AUDIT</h4>
                            <p className={styles.complianceDesc}>
                              Every module is engineered with comprehensive type safety, strict ESLint enforcement, and zero tolerance for untyped shortcuts or runtime regressions.
                            </p>
                          </div>
                        </div>

                        <div className={styles.complianceRow}>
                          <div className={styles.complianceChevron}>›</div>
                          <div className={styles.complianceContent}>
                            <h4 className={styles.complianceTitle}>CORE WEB VITALS 99+ SPEED MANDATE</h4>
                            <p className={styles.complianceDesc}>
                              Performance budgets locked at sub-second LCP, zero cumulative layout shift, and instant interaction response across desktop and mobile networks.
                            </p>
                          </div>
                        </div>

                        <div className={styles.complianceRow}>
                          <div className={styles.complianceChevron}>›</div>
                          <div className={styles.complianceContent}>
                            <h4 className={styles.complianceTitle}>ATOMIC COMPONENT DESIGN ARCHITECTURE</h4>
                            <p className={styles.complianceDesc}>
                              Modular, decoupled UI tokens and fluid layout grids that empower rapid feature iteration without styling conflicts or code duplication.
                            </p>
                          </div>
                        </div>

                        <div className={styles.complianceRow}>
                          <div className={styles.complianceChevron}>›</div>
                          <div className={styles.complianceContent}>
                            <h4 className={styles.complianceTitle}>ENTERPRISE SECURITY & SOC2/GDPR READINESS</h4>
                            <p className={styles.complianceDesc}>
                              Zero client-side leakage of sensitive environment secrets, strict CORS headers, parameterized database queries, and secure edge endpoints.
                            </p>
                          </div>
                        </div>

                        <div className={styles.complianceRow}>
                          <div className={styles.complianceChevron}>›</div>
                          <div className={styles.complianceContent}>
                            <h4 className={styles.complianceTitle}>STAKEHOLDER GOVERNANCE & ARCHITECTURE FREEZE</h4>
                            <p className={styles.complianceDesc}>
                              Transparent staging previews, interactive prototype validation, and structured sprint checkpoints to eliminate scope creep and deliver on time.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* SECTION 03: Visual Telemetry Divider Banner (Poseidon Eco/Tech Banner) */}
                    <div className={styles.telemetryBanner}>
                      <div className={styles.telemetryBannerBg}>
                        <Image
                          src={selectedStep.image}
                          alt="Infrastructure telemetry"
                          fill
                          className={styles.telemetryBannerImg}
                        />
                        <div className={styles.telemetryBannerOverlay} />
                      </div>
                      <div className={styles.telemetryBannerContent}>
                        <div className={styles.telemetryBannerHeader}>
                          <span className={styles.telemetryBadge}>[ INFRASTRUCTURE // HIGH-PERFORMANCE EDGE ]</span>
                          <span className={styles.telemetrySub}>MISSION-CRITICAL SPECIFICATIONS</span>
                        </div>
                        <div className={styles.telemetryGrid}>
                          <div className={styles.telemetryMetric}>
                            <span className={styles.metricVal}>99.99%</span>
                            <span className={styles.metricLabel}>UPTIME GUARANTEE</span>
                          </div>
                          <div className={styles.telemetryMetric}>
                            <span className={styles.metricVal}>&lt; 100ms</span>
                            <span className={styles.metricLabel}>GLOBAL EDGE TTFB</span>
                          </div>
                          <div className={styles.telemetryMetric}>
                            <span className={styles.metricVal}>100 / 100</span>
                            <span className={styles.metricLabel}>LIGHTHOUSE SCORE</span>
                          </div>
                          <div className={styles.telemetryMetric}>
                            <span className={styles.metricVal}>0 KB</span>
                            <span className={styles.metricLabel}>UNUSED VENDOR BLOAT</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* SECTION 04: Day-by-Day Sprint Schedule */}
                    <div className={styles.scheduleSection}>
                      <div className={styles.sectionHeaderBlock}>
                        <span className={styles.sectionTacLabel}>| 03 // 14-DAY SPRINT TIMELINE</span>
                        <h3 className={styles.scheduleSectionTitle}>
                          Day-by-Day Milestones ({selectedStep.duration})
                        </h3>
                      </div>

                      <div className={styles.scheduleCardsGrid}>
                        {selectedStep.schedule.map((item, idx) => (
                          <div key={idx} className={styles.sprintCard}>
                            <div className={styles.sprintCardTop}>
                              <span className={styles.sprintCardDay}>{item.day}</span>
                              <span className={styles.sprintCardFocus}>{item.focus}</span>
                            </div>
                            <p className={styles.sprintCardDetail}>{item.detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* SECTION 05: Deliverables & Tooling Environment */}
                    <div className={styles.deliverablesTwoCol}>
                      <div className={styles.deliverablesCol}>
                        <span className={styles.sectionTacLabel}>| 04 // CONCRETE ARTIFACTS</span>
                        <h4 className={styles.colHeading}>Key Deliverables</h4>
                        <ul className={styles.deliverablesList}>
                          {selectedStep.deliverables.map((deliv, idx) => (
                            <li key={idx} className={styles.deliverableItem}>
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                              <span>{deliv}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className={styles.deliverablesCol}>
                        <span className={styles.sectionTacLabel}>| 05 // TOOLS & ENVIRONMENT</span>
                        <h4 className={styles.colHeading}>Technology Stack</h4>
                        <div className={styles.toolPillsGrid}>
                          {selectedStep.tools.map((tool, idx) => (
                            <span key={idx} className={styles.toolBadge}>{tool}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* SECTION 06: Poseidon Maritime Next Service Scroll Swap Section */}
                    {nextStep && (
                      <motion.div
                        className={styles.nextPhaseBanner}
                        onClick={goToNext}
                        role="button"
                        tabIndex={0}
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className={styles.nextPhaseBg}>
                          <Image
                            src={nextStep.image}
                            alt={nextStep.title}
                            fill
                            className={styles.nextPhaseImg}
                          />
                          <div className={styles.nextPhaseOverlay} />
                        </div>

                        <div className={styles.nextPhaseContent}>
                          <span className={styles.nextPhaseLabel}>UPCOMING MILESTONE</span>
                          <h2 className={`${styles.nextPhaseTitle} ${bebas.className}`}>NEXT PHASE: {nextStep.title}</h2>
                          <div className={styles.nextPhaseCta}>
                            <span>CLICK OR SCROLL TO ENTER {nextStep.phase}</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Bottom Navigation & CTA Bar with Back-to-Top */}
                    <div className={styles.phaseNavBottom}>
                      <div className={styles.phaseNavButtons}>
                        <button
                          type="button"
                          className={`${styles.navArrowBtn} ${currentIndex === 0 ? styles.navArrowBtnDisabled : ''}`}
                          onClick={goToPrev}
                          disabled={currentIndex === 0}
                        >
                          ← Previous Phase
                        </button>
                        <button
                          type="button"
                          className={styles.backTopBtn}
                          onClick={scrollToTop}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 15l-6-6-6 6" />
                          </svg>
                          <span>Back to Top</span>
                        </button>
                        <button
                          type="button"
                          className={`${styles.navArrowBtn} ${!nextStep ? styles.navArrowBtnDisabled : ''}`}
                          onClick={goToNext}
                          disabled={!nextStep}
                        >
                          Next Phase →
                        </button>
                      </div>

                      <div className={styles.phaseCtaActions}>
                        <button
                          type="button"
                          className="btn btn--outline"
                          onClick={() => setSelectedStep(null)}
                          style={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.3)' }}
                        >
                          [ ← Back to All Phases ]
                        </button>
                        <Link
                          href="/contact"
                          className="btn btn--primary"
                          onClick={() => setSelectedStep(null)}
                        >
                          Schedule This Sprint →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </DetailScrollContext.Provider>
        )}
      </AnimatePresence>
    </section>
  );
}
