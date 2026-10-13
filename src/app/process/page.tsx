import type { Metadata } from 'next';
import Link from 'next/link';
import StudioCta from '@/components/ui/StudioCta';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Process — The 2-Week Synchronized Sprint | NYX-SaaS',
  description:
    'Experience our battle-tested 2-week sprint cycle. How NYX-SaaS bridges strategic intelligence, bespoke design systems, and Next.js engineering into production platforms in 14 days.',
};

const sprintPhases = [
  {
    phase: 'Phase 01',
    days: 'Days 01–03',
    title: 'Strategic Intelligence & Architecture Freeze',
    tagline: 'Before touching a single pixel, we extract your core value proposition and lock the scope.',
    summary:
      'We immerse ourselves in your business model, customer psychology, and competitive landscape. We map conversion funnels, interview stakeholders, and establish the technical and information architecture.',
    activities: [
      { day: 'Day 01', task: 'Kickoff discovery workshop, KPI definition & stakeholder interviews' },
      { day: 'Day 02', task: 'Competitive benchmarking, user persona mapping & content audit' },
      { day: 'Day 03', task: 'Information architecture freeze, technical spec sign-off & sitemap tree' },
    ],
    artifacts: [
      'Strategic Architecture Blueprint (Notion / PDF)',
      'User Journey & Conversion Flow Maps',
      'Information Architecture & Content Sitemap',
      'Technical Specification & Scope Freeze Document',
    ],
    accent: '#2563EB',
  },
  {
    phase: 'Phase 02',
    days: 'Days 04–07',
    title: 'Bespoke Design Systems & Kinetic Prototypes',
    tagline: 'We craft an unmistakable visual presence, modular tokens, and fluid interactive prototypes.',
    summary:
      'We establish a custom design system with bespoke typography scales, color tokens, and layout grids. We build high-fidelity interactive wireframes that simulate real user interactions and emotional resonance.',
    activities: [
      { day: 'Day 04', task: 'Wireframe architecture & key visual direction exploratory' },
      { day: 'Day 05', task: 'Design token creation (Typography, Color, Spacing, Surface)' },
      { day: 'Day 06', task: 'High-fidelity screen composition & mobile/tablet responsive breakpoints' },
      { day: 'Day 07', task: 'Interactive prototype review session & kinetic interaction sign-off' },
    ],
    artifacts: [
      'Production-Ready Figma Design System',
      'Clickable High-Fidelity Interactive Prototype',
      'Full Responsive Breakpoint Specs (Desktop, Tablet, Mobile)',
      'Micro-Interaction & Motion Physics Guidelines',
    ],
    accent: '#3B82F6',
  },
  {
    phase: 'Phase 03',
    days: 'Days 08–11',
    title: 'Production Next.js & Full-Stack Engineering',
    tagline: 'We engineer blazing platforms with production-grade TypeScript and zero bloat.',
    summary:
      'We bring designs to life using modern Next.js App Router, clean CSS modules, and Framer Motion spring physics. Zero bloated templates, zero generic page builders — only clean, scalable code.',
    activities: [
      { day: 'Day 08', task: 'Next.js App Router setup, design tokens to CSS variables & component scaffolding' },
      { day: 'Day 09', task: 'Page layout assembly, responsive styling & kinetic animation layer' },
      { day: 'Day 10', task: 'API integrations, headless CMS connections & interactive forms' },
      { day: 'Day 11', task: 'Internal staging deployment & comprehensive alpha feature testing' },
    ],
    artifacts: [
      'Production Next.js (App Router) GitHub Repository',
      'Strictly-Typed TypeScript Component Library',
      'Fluid Framer Motion Animation Implementation',
      'Headless CMS Schema & Dynamic Content API Handlers',
    ],
    accent: '#60A5FA',
  },
  {
    phase: 'Phase 04',
    days: 'Days 12–14',
    title: 'QA, 99+ PageSpeed Tuning & Global Launch',
    tagline: 'We deploy, tune Core Web Vitals to 99+, and stress-test across every device.',
    summary:
      'We rigorously optimize image delivery, edge caching, and semantic SEO. We configure telemetry and analytics to ensure your platform starts generating measurable ROI from the very first hour.',
    activities: [
      { day: 'Day 12', task: 'Multi-device QA, cross-browser validation (Chrome, Safari, iOS, Android)' },
      { day: 'Day 13', task: 'Lighthouse 99+ Core Web Vitals tuning, asset compression & security review' },
      { day: 'Day 14', task: 'DNS cutover, global Vercel Edge deployment & video walkthrough handover' },
    ],
    artifacts: [
      '99+ Google Lighthouse PageSpeed Verification',
      'Live Production Global Edge Deployment',
      'Telemetry & Privacy-First Analytics Dashboard',
      'Recorded Video Walkthrough & 30-Day Post-Launch Warranty',
    ],
    accent: '#93C5FD',
  },
];

const sprintRules = [
  {
    num: '01',
    title: 'Asynchronous Velocity',
    desc: 'We replace endless committee meetings with daily Loom video walkthroughs and a dedicated Slack channel. Decisions happen in hours, not weeks.',
  },
  {
    num: '02',
    title: 'Fixed Scope & Zero Creep',
    desc: 'By locking requirements on Day 03, we protect your launch date. New feature ideas are logged for Phase 2 rather than derailing momentum.',
  },
  {
    num: '03',
    title: '100% In-House Senior Craft',
    desc: 'Your project is never outsourced to low-bid sub-agencies. Every line of TypeScript and every Figma token is engineered directly by our studio founders.',
  },
  {
    num: '04',
    title: 'Commercial Accountability',
    desc: 'Every design and technical choice is benchmarked against conversion rates, bounce reduction, and brand authority. Aesthetics that drive revenue.',
  },
];

const faqs = [
  {
    q: 'How can a custom, high-end website be completed in just 2 weeks?',
    a: 'We eliminate agency bloat. Traditional agencies spend 80% of their 4-month timelines on account management bureaucracy, internal feedback loops, and scope creep. By operating in dedicated 2-week sprint windows with fixed scopes, senior talent, and daily async feedback, we accomplish in 14 days what large agencies drag out for months.',
  },
  {
    q: 'What do you need from our team before Day 01?',
    a: 'Prior to kickoff, we send an onboarding intake to gather your brand assets, existing copy/content, access credentials, and commercial objectives. Once received, we schedule Day 01 and begin immediately.',
  },
  {
    q: 'What happens if we need design revisions during the sprint?',
    a: 'Sprint Phase 02 (Days 04–07) has dedicated review milestones built in. We provide high-fidelity Figma files and interactive prototypes for your structured feedback. Revisions are incorporated synchronously before code engineering begins on Day 08.',
  },
  {
    q: 'What CMS options do you support?',
    a: 'We configure modern headless CMS solutions such as Sanity, Strapi, Contentful, or Git-based markdown. You get a clean, intuitive editor interface where your marketing team can update text and images effortlessly without touching code.',
  },
  {
    q: 'What is included after launch on Day 14?',
    a: 'Every 2-week sprint includes a comprehensive video walkthrough explaining how your site works, full repository ownership, and a complimentary 30-day warranty window covering any bug fixes, technical adjustments, or edge cases.',
  },
];

export default function ProcessPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className="container">
          <span className="section-label animate-fade-up">Methodology & Framework</span>
          <h1 className={`t-h1 ${styles.heroTitle} animate-fade-up animate-fade-up-delay-1`}>
            The 2-Week Sprint.<br />
            <em className={styles.heroItalic}>Architecture of momentum.</em>
          </h1>
          <p className={`t-body-lg ${styles.heroSub} animate-fade-up animate-fade-up-delay-2`}>
            A synchronized 14-day production framework engineered to take ambitious brands from initial strategy
            to a high-performance, production-ready digital platform.
          </p>

          {/* Quick Sprint Vital Stats */}
          <div className={`${styles.vitalStatsRow} animate-fade-up animate-fade-up-delay-3`}>
            <div className={styles.vitalStat}>
              <span className={styles.vitalNum}>14</span>
              <span className={styles.vitalLabel}>Calendar Days</span>
            </div>
            <div className={styles.vitalStat}>
              <span className={styles.vitalNum}>4</span>
              <span className={styles.vitalLabel}>Milestone Phases</span>
            </div>
            <div className={styles.vitalStat}>
              <span className={styles.vitalNum}>99+</span>
              <span className={styles.vitalLabel}>PageSpeed Target</span>
            </div>
            <div className={styles.vitalStat}>
              <span className={styles.vitalNum}>100%</span>
              <span className={styles.vitalLabel}>In-House Craft</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 14-DAY SPRINT BREAKDOWN (DARK EDITORIAL CANVAS) ─── */}
      <section className={styles.sprintSection}>
        <div className="container">
          <div className={styles.sectionHeading}>
            <span className="section-label section-label--dark">Sprint Roadmap</span>
            <h2 className="t-h2" style={{ maxWidth: '640px' }}>
              From initial brief to global launch in 14 days.
            </h2>
            <p className="t-body-lg text-muted" style={{ maxWidth: '580px', marginTop: '0.75rem' }}>
              Explore the exact daily breakdown of what happens behind the scenes during your 2-week engagement.
            </p>
          </div>

          <div className={styles.sprintList}>
            {sprintPhases.map((phase) => (
              <article key={phase.phase} className={styles.sprintCard}>
                {/* Header */}
                <div className={styles.cardHeader}>
                  <div className={styles.weekPill}>
                    <span className={styles.weekDot} style={{ background: phase.accent }} />
                    <span>{phase.days}</span>
                  </div>
                  <span className={styles.phaseNum}>{phase.phase}</span>
                </div>

                {/* Title & Narrative */}
                <h3 className={styles.phaseTitle}>{phase.title}</h3>
                <p className={styles.phaseTagline}>{phase.tagline}</p>
                <p className={styles.phaseSummary}>{phase.summary}</p>

                {/* Daily Activities Timeline */}
                <div className={styles.activitiesBox}>
                  <h4 className={styles.boxTitle}>Daily Checkpoints</h4>
                  <div className={styles.activitiesList}>
                    {phase.activities.map((act) => (
                      <div key={act.day} className={styles.activityItem}>
                        <span className={styles.activityDay}>{act.day}</span>
                        <span className={styles.activityTask}>{act.task}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables checklist */}
                <div className={styles.deliverablesBox}>
                  <h4 className={styles.boxTitle}>Tangible Deliverables</h4>
                  <ul className={styles.deliverablesList}>
                    {phase.artifacts.map((item) => (
                      <li key={item} className={styles.deliverableItem}>
                        <span className={styles.checkIcon}>✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SPRINT OPERATING RULES ─── */}
      <section className="section section--light">
        <div className="container">
          <div className={styles.rulesHeader}>
            <span className="section-label">Execution Principles</span>
            <h2 className="t-h2" style={{ maxWidth: '640px' }}>
              How we sustain velocity without sacrificing craft.
            </h2>
          </div>

          <div className={styles.rulesGrid}>
            {sprintRules.map((rule) => (
              <div key={rule.num} className={styles.ruleCard}>
                <span className={styles.ruleNum}>{rule.num}</span>
                <h3 className={styles.ruleTitle}>{rule.title}</h3>
                <p className={styles.ruleDesc}>{rule.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SPRINT FAQ ─── */}
      <section className="section section--dark">
        <div className="container">
          <div className={styles.faqHeader}>
            <span className="section-label section-label--dark">Clarity First</span>
            <h2 className="t-h2">Frequently asked about our sprints.</h2>
          </div>

          <div className={styles.faqGrid}>
            {faqs.map((faq) => (
              <div key={faq.q} className={styles.faqCard}>
                <h3 className={styles.faqQuestion}>{faq.q}</h3>
                <p className={styles.faqAnswer}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STUDIO CTA ─── */}
      <StudioCta
        label="Sprint Availability"
        title="Ready to schedule your 2-week synchronized sprint?"
        subtitle="We book sprints 2 weeks in advance to ensure dedicated, unbroken senior engineering focus. Reserve your production window today."
        primaryBtnText="Book a Sprint"
        primaryBtnHref="/contact"
        secondaryBtnText="Explore Our Work"
        secondaryBtnHref="/work"
        availabilityText="Booking 2-Week Sprints — Next Availability Open"
      />
    </>
  );
}
