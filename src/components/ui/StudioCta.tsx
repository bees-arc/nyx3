import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './StudioCta.module.css';

interface StudioCtaProps {
  label?: string;
  title?: string;
  subtitle?: string;
  primaryBtnText?: string;
  primaryBtnHref?: string;
  secondaryBtnText?: string;
  secondaryBtnHref?: string;
  availabilityText?: string;
}

export default function StudioCta({
  label = 'Start a Project',
  title = "Have a project in mind? Let's build something worth remembering.",
  subtitle = 'We operate in dedicated 2-week synchronized sprint windows. No agency bloat, no junior handoffs — only direct craft from senior practitioners.',
  primaryBtnText = 'Start a Project',
  primaryBtnHref = '/contact',
  secondaryBtnText = 'See the Work',
  secondaryBtnHref = '/work',
  availabilityText = 'Booking 2-Week Sprints — Next Availability Open',
}: StudioCtaProps) {
  return (
    <section className={styles.section}>
      <div className={styles.ambientOrb} aria-hidden="true" />
      <div className={`container ${styles.container}`}>
        <div className={styles.contentCol}>
          <div className={styles.badgeRow}>
            <span className={styles.statusPill}>
              <span className={styles.statusDot} />
              {availabilityText}
            </span>
            <span className={styles.labelTag}>{label}</span>
          </div>

          <h2 className={`t-h1 ${styles.title}`}>
            {title}
          </h2>

          <p className={`t-body-lg ${styles.subtitle}`}>
            {subtitle}
          </p>

          <div className={styles.btnRow}>
            <Link href={primaryBtnHref} className="btn btn--primary btn--lg">
              {primaryBtnText}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            {secondaryBtnText && (
              <Link href={secondaryBtnHref} className="btn btn--outline btn--lg">
                {secondaryBtnText}
              </Link>
            )}
          </div>

          {/* Quick Direct Contacts & Guarantee */}
          <div className={styles.metaStrip}>
            <div className={styles.metaItem}>
              <span className={styles.metaIcon}>✓</span>
              <span>Fixed 2-Week Sprint Delivery</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaIcon}>✓</span>
              <span>Lighthouse 99+ Speed Guarantee</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaIcon}>✓</span>
              <span>Full Code & IP Ownership</span>
            </div>
          </div>
        </div>

        <div className={styles.visualCol}>
          <div className={styles.logoCardWrapper}>
            <div className={styles.logoCard}>
              <Image
                src="/images/favicon.jpeg"
                alt="NYX-SaaS Emblem"
                width={380}
                height={380}
                className={styles.logoImg}
                priority
              />
              <div className={styles.logoBadge}>
                <span className={styles.logoBadgeDot} />
                <span className={styles.logoBadgeText}>NYX-SAAS // 2-WEEK SPRINT FRAMEWORK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
