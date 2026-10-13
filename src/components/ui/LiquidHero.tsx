'use client';

import React from 'react';
import Link from 'next/link';
import LiquidSimulation from './LiquidSimulation';
import styles from './LiquidHero.module.css';

interface LiquidHeroProps {
  imagePath?: string;
  headline?: React.ReactNode;
}

export default function LiquidHero({
  imagePath = '/images/liquid/nyx_logo_liquid.avif',
  headline,
}: LiquidHeroProps) {
  return (
    <section className={styles.heroWrapper}>
      {/* ─── WebGL Liquid Shader Simulation (Exact Skiper12) ─── */}
      <LiquidSimulation imagePath={imagePath} />

      {/* ─── Hero Content Overlay (Exact Skiper12 Layout) ─── */}
      <div className={styles.heroContent}>
        <div className={styles.heroBadge}>
          <span className={styles.badgeDot} />
          <span>Website Design &amp; UI/UX Studio</span>
        </div>

        <h1 className={styles.heroHeadline}>
          {headline || (
            <>
              We build digital{' '}
              <em className={styles.headlineHighlight}>experiences</em> that turn
              attention into action.
            </>
          )}
        </h1>

        <div className={styles.heroMetaBar}>
          <div className={`${styles.metaGroup} ${styles.hideOnMobile}`}>
            <p className={styles.metaItem}>
              Colombo, LK <br />
              <span className={styles.metaItemMuted}>&amp; Worldwide</span>
            </p>
            <p className={styles.metaItem}>
              Available Q4 / Q1 <br />
              <span className={styles.metaItemMuted}>Bespoke Builds</span>
            </p>
          </div>

          <div className={styles.actionGroup}>
            <p className={`${styles.metaItem} ${styles.hideOnMobile}`}>
              Next.js &amp; UI/UX <br />
              <span className={styles.metaItemMuted}>100% Custom Code</span>
            </p>
            <p className={`${styles.metaItem} ${styles.hideOnMobile}`}>
              Core Web Vitals <br />
              <span className={styles.metaItemMuted}>Sub-Second Fast</span>
            </p>
            <Link href="/contact" className={`${styles.ctaBtn} ${styles.hideOnMobile}`}>
              Start a Project
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M3 8h10M8 3l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
