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
        {/* Left Column: 4 Glowing Blue Frosted Glass Pebbles */}
        <div className={styles.emblemWrapper}>
          <div className={styles.emblemAura} aria-hidden="true" />
          <Image
            src="/images/liquid/nyx_pebbles_transparent.png"
            alt="NYX Emblem"
            width={480}
            height={480}
            priority
            className={styles.emblemImage}
          />
        </div>

        {/* Right Column: High-End Architectural Typography */}
        <div className={styles.typographyWrapper}>
          <h1 className={styles.heroTitle}>
            <span className={styles.titleLine}>IDEAS &amp;</span>
            <span className={styles.titleLine}>PEOPLE</span>
            <span className={styles.titleLine}>EXPERIENCES</span>
            <span className={styles.titleLine}>THAT EXIST</span>
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
