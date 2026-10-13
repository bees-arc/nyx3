'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useSpring } from 'framer-motion';
import Link from 'next/link';
import styles from './HoverMemberServices.module.css';

export interface ServiceItem {
  id: string;
  name: string;
  shortName: string;
  num: string;
  desc: string;
  tags: string[];
  href: string;
  accentColor: string;
  icon: React.ReactNode;
}

const defaultServices: ServiceItem[] = [
  {
    id: 'web-design',
    num: '01',
    name: 'WEBSITE DESIGN',
    shortName: 'Design',
    accentColor: '#3B82F6', // NYX Blue
    desc: 'Marketing sites, corporate platforms, and landing pages designed to communicate value and convert visitors.',
    tags: ['Marketing Sites', 'Landing Pages', 'Redesigns', 'Corporate'],
    href: '/services#design',
    icon: (
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="18" rx="3" />
        <line x1="2" y1="8" x2="22" y2="8" />
        <circle cx="5" cy="5.5" r="0.75" fill="currentColor" />
        <circle cx="8" cy="5.5" r="0.75" fill="currentColor" />
        <rect x="6" y="12" width="7" height="5" rx="1" fill="currentColor" fillOpacity="0.25" />
        <line x1="16" y1="12" x2="19" y2="12" />
        <line x1="16" y1="15" x2="18" y2="15" />
      </svg>
    ),
  },
  {
    id: 'development',
    num: '02',
    name: 'WEB DEVELOPMENT',
    shortName: 'Dev',
    accentColor: '#60A5FA', // Light NYX Blue
    desc: 'Cutting-edge Next.js builds that are lightning fast, responsive, and SEO-ready from day one.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'APIs'],
    href: '/services#development',
    icon: (
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="13.5" y1="4" x2="10.5" y2="20" />
      </svg>
    ),
  },
  {
    id: 'ui-ux',
    num: '03',
    name: 'UI/UX DESIGN',
    shortName: 'UI/UX',
    accentColor: '#818CF8', // Indigo Blue
    desc: 'Research-backed interfaces — wireframes, prototypes, design systems, and delightful digital journeys.',
    tags: ['UX Research', 'Wireframing', 'Design Systems', 'Prototypes'],
    href: '/services#uiux',
    icon: (
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    id: 'motion-3d',
    num: '04',
    name: 'MOTION & 3D',
    shortName: 'Motion',
    accentColor: '#38BDF8', // Cyan Blue
    desc: 'WebGL, Three.js shaders, and interactive micro-animations that turn casual visitors into loyal fans.',
    tags: ['Three.js', 'WebGL', 'Framer Motion', 'Micro-interactions'],
    href: '/services#motion',
    icon: (
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    id: 'ecommerce',
    num: '05',
    name: 'E-COMMERCE',
    shortName: 'Commerce',
    accentColor: '#34D399', // Emerald Teal
    desc: 'High-conversion storefronts engineered for fast checkout, seamless payments, and repeat sales.',
    tags: ['Shopify', 'Headless', 'CRO', 'Stripe Integration'],
    href: '/services#ecommerce',
    icon: (
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    id: 'design-systems',
    num: '06',
    name: 'DESIGN SYSTEMS',
    shortName: 'Systems',
    accentColor: '#A78BFA', // Violet
    desc: 'Modular design tokens, reusable component libraries, and scalable UI guidelines for fast shipping.',
    tags: ['Tokens', 'Component Library', 'Figma Tokens', 'Scale'],
    href: '/services#uiux',
    icon: (
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    id: 'seo-speed',
    num: '07',
    name: 'SPEED & SEO',
    shortName: 'Vitals',
    accentColor: '#F59E0B', // Amber
    desc: 'Perfect 100/100 Core Web Vitals, sub-second load times, and technical search architecture.',
    tags: ['Core Web Vitals', 'Technical SEO', 'CDN Edge', 'Audit'],
    href: '/services#seo',
    icon: (
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    id: 'mobile',
    num: '08',
    name: 'MOBILE BUILDS',
    shortName: 'Mobile',
    accentColor: '#22D3EE', // Sky Cyan
    desc: 'Mobile-first PWA experiences designed with tactile touch feedback and thumb-friendly UX.',
    tags: ['PWA', 'Touch Gestures', 'Mobile UI', 'Offline First'],
    href: '/services#mobile',
    icon: (
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="3" />
        <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" />
      </svg>
    ),
  },
];

// Authentic Skiper6 Spring physics
const springConfig = { mass: 0.1, damping: 16, stiffness: 71 };
const scaleSpringConfig = { mass: 0.1, damping: 10, stiffness: 150 };

// Center-outward stagger wave function (exact formula from Skiper6)
const getDelay = (index: number, total: number) => {
  return 0.055 * Math.abs(index - Math.floor(total / 2));
};

// Skiper6 Character Animation Variants
const letterVariantsIn = {
  hidden: { y: '100%' },
  visible: { y: '0%' },
  exit: { y: '-100%' },
};

const letterVariantsDefault = {
  hidden: { y: '-100%' },
  visible: { y: '0%' },
  exit: { y: '-100%' },
};

interface HoverMemberServicesProps {
  services?: ServiceItem[];
  defaultName?: string;
  backgroundColor?: string;
  hoverTextColor?: string;
  cursorColor?: string;
}

export default function HoverMemberServices({
  services = defaultServices,
  defaultName = 'OUR SERVICES',
  backgroundColor = '#0E0E0C',
  hoverTextColor = '#3B82F6', // NYX Blue
  cursorColor = '#2563EB',    // NYX Brand Blue
}: HoverMemberServicesProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [mounted, setMounted] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Magnetic cursor springs matching Skiper6
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);
  const cursorScale = useSpring(0, scaleSpringConfig);

  useEffect(() => {
    setMounted(true);
    return () => {
      if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    };
  }, []);

  if (!mounted) {
    return <section className={styles.sectionPlaceholder} style={{ backgroundColor }} />;
  }

  // Active index: preview on hover, or stay pinned on clicked selection
  const activeIdx = hoveredIdx !== null ? hoveredIdx : selectedIdx;
  const activeService = activeIdx !== null ? services[activeIdx] : null;

  const handlePointerEnter = () => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    cursorScale.set(1);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  const handleContainerLeave = () => {
    cursorScale.set(0);
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
    }
    leaveTimeoutRef.current = setTimeout(() => {
      setHoveredIdx(null);
    }, 120);
  };

  const handleCardHoverStart = (index: number) => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    setHoveredIdx(index);
  };

  const handleCardHoverEnd = (index: number) => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
    }
    leaveTimeoutRef.current = setTimeout(() => {
      setHoveredIdx((current) => (current === index ? null : current));
    }, 100);
  };

  const handleCardClick = (index: number) => {
    // If clicked on already pinned card, toggle off to default; otherwise pin it
    setSelectedIdx((prev) => (prev === index ? null : index));
  };

  return (
    <section className={styles.skiper6Section} style={{ backgroundColor }}>
      {/* Background ambient lighting */}
      <div className={styles.bgGlowOrb} aria-hidden="true" />

      {/* ─── INTERACTIVE AVATAR ROW & MAGNETIC FOLLOWER ─── */}
      <div
        ref={containerRef}
        className={styles.avatarsWrapper}
        onPointerMove={handlePointerMove}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handleContainerLeave}
      >
        {services.map((item, index) => {
          const isActive = activeIdx === index;
          const isSelected = selectedIdx === index;

          return (
            <div
              key={item.id}
              className={`${styles.avatarCard} ${isActive ? styles.avatarCardActive : ''}`}
              onMouseEnter={() => handleCardHoverStart(index)}
              onMouseLeave={() => handleCardHoverEnd(index)}
              onClick={() => handleCardClick(index)}
              style={{
                borderColor: isActive ? item.accentColor : 'rgba(255, 255, 255, 0.12)',
                boxShadow: isActive
                  ? `0 14px 34px rgba(0, 0, 0, 0.65), 0 0 24px ${item.accentColor}45`
                  : 'none',
              }}
            >
              {/* Radial glow backdrop */}
              <div
                className={styles.iconBackdropGlow}
                style={{
                  backgroundColor: item.accentColor,
                  opacity: isActive ? 0.28 : 0.04,
                }}
              />

              {/* Card Top bar with category number and pulse indicator */}
              <div className={styles.cardTopBar}>
                <span
                  className={styles.avatarNum}
                  style={{
                    color: isActive ? item.accentColor : 'rgba(255, 255, 255, 0.45)',
                  }}
                >
                  {item.num}
                </span>
                {isActive && (
                  <span
                    className={styles.activeDot}
                    style={{
                      backgroundColor: item.accentColor,
                      boxShadow: `0 0 8px ${item.accentColor}`,
                    }}
                  />
                )}
              </div>

              {/* SVG Graphic */}
              <div
                className={styles.iconGraphicWrap}
                style={{
                  color: isActive ? item.accentColor : '#FFFFFF',
                  transform: isActive ? 'scale(1.15)' : 'scale(1)',
                }}
              >
                {item.icon}
              </div>

              {/* Clear service text label */}
              <span
                className={styles.cardServiceLabel}
                style={{
                  color: isActive ? item.accentColor : 'rgba(255, 255, 255, 0.85)',
                  fontWeight: isActive ? 700 : 500,
                  opacity: isActive ? 1 : 0.85,
                }}
              >
                {item.shortName}
              </span>

              {/* Pinned pill tag */}
              {isSelected && (
                <div
                  className={styles.pinnedPill}
                  style={{ backgroundColor: item.accentColor }}
                />
              )}
            </div>
          );
        })}

        {/* Magnetic follower arrow */}
        <motion.div
          style={{
            x: mouseX,
            y: mouseY,
            scale: cursorScale,
            transformOrigin: 'left top',
            backgroundColor: activeService ? activeService.accentColor : cursorColor,
          }}
          className={styles.magneticCursor}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 16 16"
            fill="none"
            style={{ pointerEvents: 'none' }}
          >
            <path
              d="M6.52182 2.75026L12.8858 9.11422L15.253 0.38299L6.52182 2.75026Z"
              fill="white"
            />
            <path
              d="M0.333095 12.3331L3.30294 15.3029L10.3402 6.56864L9.0674 5.29585L0.333095 12.3331Z"
              fill="white"
            />
          </svg>
        </motion.div>
      </div>

      {/* ─── MASSIVE STAGGERED TYPOGRAPHY (EXACT SKIPER6 MOTION) ─── */}
      <div className={styles.typographyViewport}>
        {/* Default 'SERVICES' Title */}
        <AnimatePresence>
          {activeIdx === null && (
            <motion.div
              key="default-title"
              className={styles.titleMotionWrapper}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
            >
              <h2 className={`${styles.mainTitle} ${styles.defaultTitle}`}>
                {Array.from(defaultName).map((char, i) => (
                  <motion.span
                    key={i}
                    className={styles.charSpan}
                    variants={letterVariantsDefault}
                    transition={{
                      duration: 0.7,
                      ease: [0.19, 1, 0.22, 1],
                      delay: getDelay(i, defaultName.length),
                    }}
                  >
                    {char === ' ' ? '\u00a0' : char}
                  </motion.span>
                ))}
              </h2>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Active Hovered / Pinned Service Titles */}
        {services.map((item, index) => (
          <AnimatePresence key={item.id}>
            {activeIdx === index && (
              <motion.div
                key={item.id}
                className={styles.titleMotionWrapper}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
              >
                <h2
                  className={`${styles.mainTitle} ${styles.hoverTitle}`}
                  style={{
                    color: item.accentColor,
                    textShadow: `0 0 24px ${item.accentColor}25`,
                  }}
                >
                  {Array.from(item.name).map((char, i) => (
                    <motion.span
                      key={i}
                      className={styles.charSpan}
                      variants={letterVariantsIn}
                      transition={{
                        duration: 0.7,
                        ease: [0.19, 1, 0.22, 1],
                        delay: getDelay(i, item.name.length),
                      }}
                    >
                      {char === ' ' ? '\u00a0' : char}
                    </motion.span>
                  ))}
                </h2>
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>

      {/* ─── SERVICE DESCRIPTION (SMOOTH CROSSFADE) ─── */}
      <div className={styles.descriptionWrapper}>
        <AnimatePresence mode="wait">
          <motion.p
            key={activeService ? activeService.id : 'default-desc'}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className={styles.serviceDescText}
          >
            {activeService
              ? activeService.desc
              : 'End-to-end digital solutions — high-performance websites, research-backed interfaces, motion design, and scalable web engineering.'}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* ─── SLEEK STATIC FOOTER CAPABILITY LINK ─── */}
      <div className={styles.sectionBottom}>
        <Link
          href={activeService ? activeService.href : '/services'}
          className={styles.exploreLink}
        >
          {activeService ? `Explore ${activeService.shortName}` : 'Explore all capabilities'}{' '}
          <span className={styles.linkArrow}>→</span>
        </Link>
      </div>
    </section>
  );
}
