import Image from 'next/image';
import Link from 'next/link';
import { getFeaturedProjects } from '@/data/projects';
import HoverExpandGallery from '@/components/ui/HoverExpandGallery';
import HoverMemberServices from '@/components/ui/HoverMemberServices';
import LiquidHero from '@/components/ui/LiquidHero';
import Skiper19HowWeWork from '@/components/ui/Skiper19HowWeWork';
import Skiper60SideNav from '@/components/ui/Skiper60SideNav';
import styles from './page.module.css';

export default function Home() {
  const featured = getFeaturedProjects();

  return (
    <>
      {/* ─── LIQUID SIMULATION HERO (Skiper12 with NYX Branding) ─── */}
      <LiquidHero />

      {/* ─── MARQUEE ─── */}
      <div className={styles.marqueeWrap} aria-hidden="true">
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <span key={i} className={styles.marqueSet}>
              {['Website Design', 'UI/UX', 'Next.js Development', 'Conversion Design', 'Brand Presence', 'Digital Strategy', 'Responsive Builds', 'Custom Experiences'].map((t) => (
                <span key={t} className={styles.marqueeItem}>
                  <span className={styles.marqueeDot} />
                  {t}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ─── WHAT NYX DOES: SKIPER6 HOVER MEMBERS INTERACTION ─── */}
      <HoverMemberServices
        defaultName="OUR SERVICES"
        backgroundColor="#0E0E0C"
        hoverTextColor="#3B82F6"
        cursorColor="#2563EB"
      />

      {/* ─── SELECTED WORK TOPIC (Outside the shelf section) ─── */}
      {/* 
      <section className={styles.workHeaderSection}>
        <div className="container">
          <div className={styles.workHeader}>
            <h2 className={`t-h2 ${styles.workHeaderTitle}`}>Built with purpose.</h2>
            <p className={styles.workHeaderSub}>
              Explore our project library. Hover any spine to pull out the case study.
            </p>
            <Link href="/work" className={`btn btn--outline ${styles.workHeaderBtn}`}>
              View All Work →
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.shelfSection}>
        <HoverExpandGallery projects={featured} />
      </section>
      */}


      {/* ─── WHY NYX: VALUE PROPOSITION ─── */}
      <section className="section section--dark" style={{ paddingTop: '7rem', paddingBottom: '6rem', paddingLeft: 0, paddingRight: 0 }}>
        {/* Title kept at original position, aligned with site container */}
        <div className="container">
          <div className={styles.whyHeader}>
            {/* <span className="section-label section-label--dark">Why NYX</span> */}
            <h2 className="t-h2" style={{ maxWidth: '640px' }}>
              Not just another agency.<br />A different way of thinking.
            </h2>
          </div>
        </div>

        {/* Full-width white strip (100% edge-to-edge) */}
        <div className={styles.whyFullStrip}>
          <div className="container">
            <Skiper60SideNav />
          </div>
        </div>
      </section>

      {/* ─── SKIPER 19: HOW WE WORK (SVG FOLLOW SCROLL & 4 MEETING CARDS) ─── */}
      <Skiper19HowWeWork />


      {/* ─── CASE STUDY SPOTLIGHT ─── */}
      <section className={`section ${styles.spotlightSection}`}>
        <div className="container">
          <div className={styles.spotlightHeader}>
            {/* <span className="section-label section-label--neutral">Featured Result</span> */}
            <h2 className="t-h2" style={{ maxWidth: '620px' }}>
              How NYX-SaaS transformed Meridian Law's digital presence.
            </h2>
          </div>
          <div className={styles.spotlightGrid}>
            <div className={styles.spotlightLeft}>
              <div className={`${styles.spotlightBlock} ${styles.spotlightProblem}`}>
                <p className={styles.spotlightBlockLabel}>The Problem</p>
                <p className="t-body" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  An outdated website that looked generic, buried their expertise,
                  and gave potential clients no clear reason to get in touch.
                </p>
              </div>
              <div className={`${styles.spotlightBlock} ${styles.spotlightSolution}`}>
                <p className={styles.spotlightBlockLabel}>The NYX-SaaS Solution</p>
                <p className="t-body" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  A complete redesign, restructured for how clients think, not how
                  lawyers think. Benefit-led, trust-building, and conversion-focused.
                </p>
              </div>
            </div>
            <div className={styles.spotlightRight}>
              <p className={`t-label ${styles.spotlightOutcomeLabel}`}>Outcomes</p>
              <ul className={styles.spotlightOutcomes}>
                {[
                  'Clearer practice area navigation',
                  'Stronger brand presentation matching offline reputation',
                  'Improved mobile experience for on-the-go clients',
                  'Simplified contact journey with single clear CTA',
                ].map((o) => (
                  <li key={o} className={styles.spotlightOutcomeItem}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8l4 4 6-7" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {o}
                  </li>
                ))}
              </ul>
              <Link href="/work/meridian-law" className="btn btn--outline-white" style={{ marginTop: '2rem' }}>
                View Case Study →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA (ORIGINAL LIGHT COLOR, ZERO DELAY) ─── */}
      <section className={styles.finalCta}>
        <div className={styles.finalCtaBg} aria-hidden="true">
          <div className={styles.finalCtaOrb} />
        </div>
        <div className={`container ${styles.finalCtaInner}`}>
          <div className={styles.finalCtaContent}>
            <h2 className="t-h1">
              Have a project in mind?
            </h2>
            <p className="t-body-lg text-muted">
              Let's build something worth remembering.
            </p>
            <div className={styles.finalCtaButtons}>
              <Link href="/contact" className="btn btn--primary btn--lg">
                Start a Project
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href="/work" className="btn btn--outline btn--lg">
                See the Work
              </Link>
            </div>
          </div>
          <div className={styles.finalCtaVisual}>
            <div className={styles.finalCtaLogoWrapper}>
              <Image
                src="/images/favicon.jpeg"
                alt="NYX-SaaS Emblem"
                width={360}
                height={360}
                className={styles.finalCtaLogoImg}
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
