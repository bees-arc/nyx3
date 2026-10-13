'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Skiper60SideNav.module.css';

/**
 * Skiper60: Side Navigation & Interactive Content Loader
 * Adapted from Skiper UI (https://skiper-ui.com/v1/skiper60)
 *
 * Renders in a clean white container ("podi sudu theeruwaka"):
 * Left side: Clickable principle titles
 * Right side: The corresponding loaded paragraph & details
 */

interface PrincipleItem {
  id: string;
  icon: string;
  num: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
}

const principles: PrincipleItem[] = [
  {
    id: 'business-first',
    icon: '◎',
    num: '01',
    title: 'Business-first design',
    shortDesc: 'Every design decision is tied to a business goal — not just aesthetics.',
    fullDesc:
      'Every design decision is tied to a business goal — not just aesthetics. We prioritize metrics, user journeys, and revenue impact over superficial trends. Every layout element, color accent, and typography scale exists to communicate value and convert visitors into clients.',
    highlights: ['ROI-Driven Strategy', 'Measurable Conversion Lift', 'Clear Customer Intent'],
  },
  {
    id: 'custom-experiences',
    icon: '◈',
    num: '02',
    title: 'Custom experiences',
    shortDesc: 'No templates. No shortcuts. Every project is built specifically for you.',
    fullDesc:
      'No templates. No shortcuts. Every project is built specifically for you — handcrafted layouts, tailored typography hierarchy, bespoke interactive shaders, and distinct brand identities that set you apart from competitors using generic theme builders.',
    highlights: ['100% Bespoke Craft', 'Fluid Physics & Motion', 'Unique Brand Authority'],
  },
  {
    id: 'conversion-focused',
    icon: '◉',
    num: '03',
    title: 'Conversion-focused thinking',
    shortDesc: 'We design for visitors to take action — not just to look at the page.',
    fullDesc:
      'We design for visitors to take action — not just to look at the page. Clear CTAs, frictionless pathways, and compelling copy hierarchy ensure visitors know exactly what to do next without second-guessing or getting lost.',
    highlights: ['Frictionless User Journeys', 'High-Converting CTAs', 'Behavioral Architecture'],
  },
  {
    id: 'modern-development',
    icon: '◐',
    num: '04',
    title: 'Modern development',
    shortDesc: "Next.js, performance-optimised, SEO-ready. Built for today's standards.",
    fullDesc:
      "Next.js, performance-optimised, SEO-ready. Built for today's standards. Engineered with the App Router, TypeScript, edge caching, and scalable architecture so your website loads instantly, scales effortlessly, and dominates rankings.",
    highlights: ['Next.js App Router', 'TypeScript Engineering', 'Technical SEO 100'],
  },
  {
    id: 'responsive-default',
    icon: '◑',
    num: '05',
    title: 'Responsive by default',
    shortDesc: 'Every build is mobile-first. Always. Not as an afterthought.',
    fullDesc:
      'Every build is mobile-first. Always. Not as an afterthought. Over 65% of your target decision-makers browse on mobile. We design and test on real devices to guarantee fluid ergonomics, touch-optimized tap targets, and crisp retina scaling.',
    highlights: ['Mobile-First Framework', 'Touch Ergonomics', 'Retina Typography'],
  },
  {
    id: 'performance-delivery',
    icon: '◒',
    num: '06',
    title: 'Performance-focused delivery',
    shortDesc: 'Fast sites rank better and convert more. Speed is a feature.',
    fullDesc:
      'Fast sites rank better and convert more. Speed is a feature. We optimize asset payloads, utilize next-gen image compression, eliminate layout shifts, and target 99+ Google Core Web Vitals so your visitors never experience friction.',
    highlights: ['Sub-Second Load Times', 'Core Web Vitals 99+', 'Global Edge Caching'],
  },
];

export default function Skiper60SideNav() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const activeItem = principles[activeIdx];

  return (
    <div className={styles.wrapper}>
      {/* Left: Clickable Side Titles */}
      <div className={styles.navList} role="tablist" aria-label="Core Principles">
        {principles.map((item, index) => {
          const isActive = activeIdx === index;

          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`${styles.navItem} ${isActive ? styles.navItemActive : ''}`}
              onClick={() => setActiveIdx(index)}
            >
              {/* Active indicator bar */}
              {isActive && (
                <motion.div
                  layoutId="activeSideNav"
                  className={styles.activeIndicator}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}

              <span className={styles.navItemTitle}>{item.title}</span>
            </button>
          );
        })}
      </div>

      {/* Right: Clean Dynamic Text Panel with AnimatePresence */}
      <div className={styles.contentWrap}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className={styles.contentArea}
          >
            <h3 className={styles.contentTitle}>{activeItem.title}</h3>
            <p className={styles.contentDesc}>{activeItem.fullDesc}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
