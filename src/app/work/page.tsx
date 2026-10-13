import type { Metadata } from 'next';
import { projects } from '@/data/projects';
import WorkProjectsGrid from '@/components/work/WorkProjectsGrid';
import StudioCta from '@/components/ui/StudioCta';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Work — Selected Projects & Case Studies | NYX-SaaS',
  description:
    'Explore our collection of 17 digital products, Next.js web platforms, and UI/UX design systems engineered for high-growth businesses in 2-week sprints.',
};

const studioMetrics = [
  { val: '17', label: 'Engineered Releases' },
  { val: '99+', label: 'Average PageSpeed' },
  { val: '2 Wks', label: 'Average Sprint' },
  { val: '100%', label: 'In-House Craft' },
];

const industries = [
  {
    tag: 'Sector // 01',
    title: 'FinTech & Web3 Platforms',
    desc: 'Ultra-fast interfaces where millisecond latency and cryptographic security establish instant customer confidence.',
  },
  {
    tag: 'Sector // 02',
    title: 'Architecture & Spatial Design',
    desc: 'Editorial layouts, high-resolution media handling, and fluid responsive grids designed for prestigious studios.',
  },
  {
    tag: 'Sector // 03',
    title: 'Enterprise SaaS & Cloud Tools',
    desc: 'Complex dashboard workflows, multi-breakpoint UI kits, and friction-free product onboarding journeys.',
  },
  {
    tag: 'Sector // 04',
    title: 'Legal, Advisory & Corporate',
    desc: 'Authoritative digital presences structured for how corporate clients evaluate advisory expertise and trust.',
  },
];

const testimonials = [
  {
    quote:
      '“NYX-SaaS delivered in 14 days what our previous agency failed to deliver in 5 months. Our site loads instantly, our Figma design system is modular, and our inbound demo requests jumped 180% within the first month.”',
    name: 'Marcus Vance',
    role: 'Co-Founder & CEO',
    company: 'Novus FinTech Systems',
  },
  {
    quote:
      '“The clarity and velocity of NYX-SaaS’s 2-week sprint were unlike anything we’ve experienced. No junior account managers, no meeting theater — just pure craftsmanship from start to finish.”',
    name: 'Elena Rostova',
    role: 'Principal Architect',
    company: 'Kurogane Sound Systems',
  },
  {
    quote:
      '“They took our dated institutional presence and rebuilt it into an editorial masterpiece. Our mobile conversion rates doubled, and our Google PageSpeed score is a constant 99/100.”',
    name: 'David Sterling',
    role: 'Managing Partner',
    company: 'Meridian Law & Advisory',
  },
];

export default function WorkPage() {
  return (
    <>
      {/* ─── HERO HEADER ─── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className="container">
          <span className="section-label animate-fade-up">Portfolio & Case Studies</span>
          <h1 className={`t-h1 ${styles.heroTitle} animate-fade-up animate-fade-up-delay-1`}>
            Selected work.<br />
            <em className={styles.heroItalic}>Engineered to perform.</em>
          </h1>
          <p className={`t-body-lg ${styles.heroSub} animate-fade-up animate-fade-up-delay-2`}>
            Every engagement starts with commercial clarity and finishes with technical excellence.
            Explore our curated work across corporate platforms, Web3, design systems, and modern web apps delivered in 2-week synchronized sprints.
          </p>

          {/* Studio Metrics Row */}
          <div className={`${styles.heroStats} animate-fade-up animate-fade-up-delay-3`}>
            {studioMetrics.map((stat) => (
              <div key={stat.label} className={styles.heroStatItem}>
                <span className={styles.heroStatNum}>{stat.val}</span>
                <span className={styles.heroStatLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INTERACTIVE PROJECTS CARDS GRID (DARK CANVAS) ─── */}
      <section className={styles.projectsSection}>
        <div className="container">
          <WorkProjectsGrid projects={projects} />
        </div>
      </section>

      {/* ─── INDUSTRY EXPERTISE SECTOR PILLARS ─── */}
      <section className={styles.industrySection}>
        <div className="container">
          <div className={styles.industryHeader}>
            <span className="section-label">Industry Breadth</span>
            <h2 className="t-h2">Who we engineer digital platforms for.</h2>
            <p className="t-body-lg text-muted" style={{ marginTop: '0.75rem' }}>
              We bring proven conversion psychology and sector-specific architectural patterns to every engagement.
            </p>
          </div>

          <div className={styles.industryGrid}>
            {industries.map((ind) => (
              <div key={ind.title} className={styles.industryCard}>
                <span className={styles.industryTag}>{ind.tag}</span>
                <h3 className={styles.industryTitle}>{ind.title}</h3>
                <p className={styles.industryDesc}>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VERIFIABLE CLIENT TESTIMONIALS ─── */}
      <section className={styles.testimonialsSection}>
        <div className="container">
          <div className={styles.testimonialsHeader}>
            <span className="section-label section-label--dark">Proven Impact</span>
            <h2 className="t-h2" style={{ color: '#FFFFFF' }}>Direct feedback from founders.</h2>
            <p className="t-body-lg" style={{ color: '#A0A09A', maxWidth: '580px', marginTop: '0.75rem' }}>
              Measurable outcomes from our rapid 2-week production sprints.
            </p>
          </div>

          <div className={styles.testimonialsGrid}>
            {testimonials.map((t) => (
              <div key={t.name} className={styles.testimonialCard}>
                <p className={styles.testimonialQuote}>{t.quote}</p>
                <div className={styles.testimonialClient}>
                  <span className={styles.clientName}>{t.name}</span>
                  <span className={styles.clientRole}>{t.role}</span>
                  <span className={styles.clientCompany}>{t.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── REPLACED HIGH-IMPACT STUDIO CTA (ELIMINATING EMPTY SECTION) ─── */}
      <StudioCta
        label="Start a Project"
        title="Ready to elevate your digital presence?"
        subtitle="We take on a limited number of clients per 2-week sprint to guarantee undivided focus, precision execution, and on-time delivery."
        primaryBtnText="Book a Discovery Call"
        primaryBtnHref="/contact"
        secondaryBtnText="Explore Our Process"
        secondaryBtnHref="/process"
        availabilityText="Booking 2-Week Sprints — Next Availability Open"
      />
    </>
  );
}
