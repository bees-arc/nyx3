'use client';

import React from 'react';
import Image from 'next/image';
import LiquidSimulation from './LiquidSimulation';
import styles from './LiquidHero.module.css';

export default function LiquidHero() {
  return (
    <section className={styles.heroWrapper} aria-label="Ideas & People, Experiences That Exist">
      {/* ─── WebGL Liquid Shader Simulation (Interactive fluid waves & specular light) ─── */}
      <LiquidSimulation />

      {/* ─── Ambient Glow Bloom (Electric cobalt atmosphere) ─── */}
      <div className={styles.ambientLight} aria-hidden="true" />

      {/* ─── Hero Content Layout (2-Column Desktop, Stacked on Mobile) ─── */}
      <div className={styles.heroContainer}>
        {/* Left Column: Spacer aligning with the WebGL interactive liquid pebbles */}
        <div className={styles.emblemSpacer} aria-hidden="true" />

        {/* Right Column: High-End Architectural Typography */}
        <div className={styles.typographyWrapper}>
          <h1 className={styles.heroTitle}>
            <span className={styles.titleLine}>, </span>
            <span className={styles.titleLine}>YOU DON'T</span>
            <span className={styles.titleLine}>JUST APPEAR.</span>
            <span className={styles.titleLine}>NOW YOU EXIST</span>
          </h1>
        </div>
      </div>

      {/* ─── Minimal Downward White Arrow Scroll Indicator ─── */}
      <div className={styles.heroBottomBar}>
        <button
          type="button"
          onClick={() => {
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
          }}
          className={styles.scrollArrowBtn}
          aria-label="Scroll down"
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.downArrowIcon}
            aria-hidden="true"
          >
            <line x1="12" y1="4" x2="12" y2="20" />
            <polyline points="19 13 12 20 5 13" />
          </svg>
        </button>
      </div>
    </section>
  );
}
