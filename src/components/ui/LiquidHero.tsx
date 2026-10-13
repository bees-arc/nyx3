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
            <span className={styles.titleLine}>WITH NYX, </span>
            <span className={styles.titleLine}>YOU DON'T</span>
            <span className={styles.titleLine}>JUST APPEAR</span>
            <span className={styles.titleLine}>NOW YOU EXIST</span>
          </h1>
        </div>
      </div>

      {/* ─── Minimal Bottom Scroll Pill ─── */}
      <div className={styles.heroBottomBar}>
        <div className={styles.scrollIndicator}>
          <span className={styles.scrollDot} />
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
