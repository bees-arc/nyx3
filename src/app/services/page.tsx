import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import StudioCta from '@/components/ui/StudioCta';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Services — Website Design, Next.js Engineering & UI/UX | NYX-SaaS',
  description:
    'Comprehensive overview of NYX-SaaS capabilities: Website Design, Next.js Development, and UI/UX Design Systems delivered in synchronized 2-week sprints.',
};

interface ServiceDetail {
  id: string;
  num: string;
  title: string;
  tagline: string;
  description: string;
  pillars: {
    idx: string;
    title: string;
    text: string;
  }[];
  deliverables: string[];
  showcase: {
    client: string;
    industry: string;
    image: string;
    metrics: string[];
    slug: string;
  };
}

const detailedServices: ServiceDetail[] = [
  {
    id: 'design',
    num: '01',
    title: 'Website Design & Brand Systems',
    tagline: 'Websites that establish undeniable commercial authority at first glance.',
    description:
      'We view design as visual strategy. Every typography scale, grid structure, and color token serves a direct purpose: communicating value in seconds, guiding buyer decision-making, and converting passive visitors into high-intent inbound inquiries.',
    pillars: [
      {
        idx: '01.A',
        title: 'Brand Art Direction & Editorial Layouts',
        text: 'Bespoke visual identity systems tailored to your market positioning. We establish distinctive typography pairings, curated dark/light palettes, and editorial layout structures that make your brand feel established and unforgettable.',
      },
      {
        idx: '01.B',
        title: 'High-Converting Conversion Architecture',
        text: 'User journeys designed around psychological momentum. We eliminate decision paralysis, streamline navigation funnels, and place strategic conversion checkpoints where prospects are most receptive.',
      },
      {
        idx: '01.C',
        title: 'Responsive Multi-Device Wireframing',
        text: 'Pixel-perfect responsiveness across mobile, tablet, and ultra-wide displays. Every breakpoint is intentionally crafted in Figma, ensuring fluid readability and zero layout shifts across screen sizes.',
      },
    ],
    deliverables: [
      'Comprehensive Figma Design System & Tokens',
      'Clickable High-Fidelity Desktop & Mobile Prototypes',
      'Typography Hierarchy & Color Spec Guidelines',
      'Custom Iconography & Micro-Asset Library',
      'Conversion-Optimized Landing Page Frameworks',
      'Full Vector Asset Package & SVG Handover',
    ],
    showcase: {
      client: 'Aethelgard Watchmakers',
      industry: 'Luxury Horology',
      image: '/images/skiper35/img1.png',
      metrics: ['+210% Inquiries', 'Sub-1.1s LCP'],
      slug: 'aethelgard-horology',
    },
  },
  {
    id: 'development',
    num: '02',
    title: 'Next.js 15 & Full-Stack Web Engineering',
    tagline: 'Ultra-fast, type-safe digital platforms deployed to the global edge.',
    description:
      'We build exclusively in Next.js — the gold standard framework for performance-critical applications. Zero bloated WordPress plugins, zero slow Webflow templates. Only clean, type-safe TypeScript code, sub-50ms edge caching, and 99+ Core Web Vitals.',
    pillars: [
      {
        idx: '02.A',
        title: 'Next.js App Router Architecture',
        text: 'Leveraging React Server Components, streaming SSR, and edge route handlers to minimize client-side JavaScript bundle sizes and maximize organic search crawling velocity.',
      },
      {
        idx: '02.B',
        title: 'Kinetic Physics & Micro-Interactions',
        text: 'Fluid 60fps animations engineered with Framer Motion spring physics. From subtle hover states to scroll-driven SVG transitions, we inject tactile life without compromising execution speed.',
      },
      {
        idx: '02.C',
        title: 'Headless CMS & Serverless APIs',
        text: 'Seamless connections to modern headless content systems (Sanity, Supabase, Payload) and custom lead capture hooks, giving your marketing team complete autonomy without touching code.',
      },
    ],
    deliverables: [
      'Production-Grade Next.js 15 GitHub Repository',
      'Strictly-Typed TypeScript Component Architecture',
      'Vanilla CSS Modules (Zero-Runtime CSS Overhead)',
      'Sub-50ms Global Edge CDN Configuration',
      'Automated SEO, Meta Tags & OpenGraph Automation',
      '99+ Google Lighthouse PageSpeed Audit Guarantee',
    ],
    showcase: {
      client: 'Kurogane Sound Systems',
      industry: 'Audiophile Hardware',
      image: '/images/skiper35/img8.png',
      metrics: ['100/100 Core Web Vitals', '0ms Layout Shift'],
      slug: 'kurogane-audio',
    },
  },
  {
    id: 'uiux',
    num: '03',
    title: 'UI/UX Design Systems & Product Interfaces',
    tagline: 'Intuitive, research-backed interface ecosystems that reduce user churn.',
    description:
      'We turn complex commercial workflows into elegant, friction-free digital experiences. Whether architecting SaaS dashboards, customer portals, or multi-brand token ecosystems, we build systems that scale cleanly with your business.',
    pillars: [
      {
        idx: '03.A',
        title: 'Information Architecture & Cognitive Mapping',
        text: 'Rigorous restructuring of user flows to reduce friction points. We analyze competitor benchmarks, user behavior models, and task completion paths to create natural, frictionless hierarchies.',
      },
      {
        idx: '03.B',
        title: 'Atomic Component Libraries & Figma Kits',
        text: 'Modular, reusable component libraries built on atomic design principles. Every button, input state, dropdown, and modal is documented with strict variant properties and autolayout.',
      },
      {
        idx: '03.C',
        title: 'Accessibility & Design-to-Code Parity',
        text: 'Full WCAG 2.1 AA accessibility compliance with calibrated contrast ratios and keyboard navigation. Seamless parity between Figma tokens and CSS variable tokens.',
      },
    ],
    deliverables: [
      'Atomic Figma UI Component Library',
      'Design Token Spec (JSON, CSS Variables, SCSS)',
      'Interactive User Flow & Wireframe Diagrams',
      'WCAG 2.1 AA Accessibility Audit & Scorecard',
      'Developer Handover Guide & Token Documentation',
      'Component State Matrix (Hover, Active, Focus, Disabled)',
    ],
    showcase: {
      client: 'Novus FinTech Systems',
      industry: 'Enterprise SaaS',
      image: '/images/skiper35/img21.png',
      metrics: ['3.4x Onboarding Lift', 'Zero Churn'],
      slug: 'novus-fintech',
    },
  },
];

const techStack = [
  { name: 'Next.js 15', role: 'Full-Stack React Framework' },
  { name: 'TypeScript', role: 'Production Type Safety' },
  { name: 'Framer Motion', role: 'Physics Kinetic Engine' },
  { name: 'Vanilla CSS Modules', role: 'Zero-Runtime Bloat' },
  { name: 'Figma', role: 'Collaborative Design System' },
  { name: 'Supabase', role: 'Serverless PostgreSQL' },
  { name: 'Vercel Edge', role: 'Sub-50ms Global Routing' },
  { name: 'Lighthouse 99+', role: 'Guaranteed Performance' },
];

const comparisons = [
  {
    feature: 'Development Stack',
    generic: 'Bloated WordPress / Elementor / Webflow templates',
    nyx: 'Custom Next.js App Router & clean TypeScript',
  },
  {
    feature: 'PageSpeed & Performance',
    generic: '30-60 on Google Lighthouse (laggy on mobile)',
    nyx: '95-100 on Google PageSpeed (instantaneous load)',
  },
  {
    feature: 'Communication Layer',
    generic: 'Account managers & junior sub-contractors',
    nyx: 'Direct access to senior founders and engineers',
  },
  {
    feature: 'Design Uniqueness',
    generic: 'Off-the-shelf theme modified with stock icons',
    nyx: '100% bespoke design system tailored to your brand',
  },
  {
    feature: 'Delivery Schedule',
    generic: '3-6 months with frequent scope creep',
    nyx: 'Synchronized 2-week fixed-timeline sprint',
  },
  {
    feature: 'Code Ownership',
    generic: 'Locked in agency proprietary hosting or plugin fees',
    nyx: '100% full GitHub repository & IP handover to client',
  },
];

const serviceFaqs = [
  {
    q: 'How does the 2-week sprint work in practice?',
    a: 'We reserve an exclusive sprint window for your company. Week 1 is dedicated to strategic intelligence, information architecture, and bespoke Figma design sign-off. Week 2 focuses entirely on Next.js 15 TypeScript engineering, fluid micro-interactions, CMS integration, and 99+ Core Web Vitals optimization. On Day 14, your site is deployed live.',
  },
  {
    q: 'Can we manage our own content after the website launches?',
    a: 'Yes. We integrate modern headless content systems like Sanity, Supabase, or Payload CMS. Your marketing team receives an intuitive, clean editorial dashboard to publish blog posts, update copy, upload images, and manage case studies without writing a single line of code.',
  },
  {
    q: 'Why Next.js instead of Webflow or WordPress?',
    a: 'Traditional site builders introduce severe vendor lock-in, sluggish page load times, and rigid layout constraints. Next.js delivers absolute creative freedom, instantaneous sub-second page transitions, automated SEO, and the ability to scale into complex web applications without rewriting the codebase.',
  },
  {
    q: 'Do you charge hourly or fixed-price?',
    a: 'All our sprints are strictly fixed-price. You will never receive an unexpected invoice or hourly billing surprises. The scope, deliverables, and total investment are agreed upon before Day 01 kickoff.',
  },
  {
    q: 'What assets do you need from us before kickoff?',
    a: 'We provide a structured onboarding questionnaire to collect your existing brand collateral (vector logos, brand guidelines), product imagery, target customer profiles, and initial copy drafts. Once received, we lock your kickoff date and begin immediately.',
  },
  {
    q: 'What happens if we need adjustments after launch?',
    a: 'Every sprint includes a complimentary 30-day post-launch warranty window. If any edge cases, browser inconsistencies, or minor text adjustments arise, our engineering team resolves them immediately at zero extra charge.',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className={styles.hero}>
        <div className={styles.heroOrb} aria-hidden="true" />
        <div className="container">
          <span className="section-label animate-fade-up">Disciplines & Capabilities</span>
          <h1 className={`t-h1 ${styles.heroTitle} animate-fade-up animate-fade-up-delay-1`}>
            Design. Development.<br />
            <em className={styles.heroItalic}>Engineered to perform.</em>
          </h1>
          <p className={`t-body-lg ${styles.heroSub} animate-fade-up animate-fade-up-delay-2`}>
            We don't dilute our focus across a hundred shallow services. We specialize in three interconnected
            disciplines and deliver at an uncompromising standard through our battle-tested 2-week sprint framework.
          </p>

          {/* Quick Anchor Navigation */}
          <div className={`${styles.quickNav} animate-fade-up animate-fade-up-delay-3`}>
            <span className={styles.quickNavLabel}>Jump To:</span>
            <a href="#design" className={styles.quickNavLink}>01. Website Design</a>
            <a href="#development" className={styles.quickNavLink}>02. Next.js Development</a>
            <a href="#uiux" className={styles.quickNavLink}>03. UI/UX Systems</a>
            <a href="#stack" className={styles.quickNavLink}>Production Tech Stack</a>
            <a href="#faq" className={styles.quickNavLink}>Engineering FAQ</a>
          </div>
        </div>
      </section>

      {/* ─── 3 PRIMARY SERVICES (RICH 3-PILLAR LAYOUTS) ─── */}
      {detailedServices.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`${styles.serviceSection} ${index % 2 === 1 ? styles.serviceSectionAlt : ''}`}
        >
          <div className="container">
            {/* Service Header */}
            <div className={styles.serviceHeader}>
              <div className={styles.serviceNumPill}>
                <span className={styles.serviceNumDot} />
                <span>{service.num} // DISCIPLINE</span>
              </div>
              <h2 className={`t-h2 ${styles.serviceTitle}`}>{service.title}</h2>
              <p className={styles.serviceTagline}>{service.tagline}</p>
              <p className={styles.serviceDesc}>{service.description}</p>
            </div>

            {/* 3 Pillars Grid */}
            <div className={styles.pillarsGrid}>
              {service.pillars.map((pillar) => (
                <div key={pillar.idx} className={styles.pillarCard}>
                  <span className={styles.pillarIdx}>{pillar.idx}</span>
                  <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                  <p className={styles.pillarText}>{pillar.text}</p>
                </div>
              ))}
            </div>

            {/* Deliverables & Real Case Showcase Row */}
            <div className={styles.serviceBottomGrid}>
              {/* Deliverables Checklist */}
              <div className={styles.deliverablesBox}>
                <div className={styles.deliverablesHeading}>
                  <span>Tangible Deliverables Checklist</span>
                  <span style={{ color: 'var(--nyx-blue)', fontSize: '0.75rem' }}>Strict Quality Standard</span>
                </div>
                <div className={styles.deliverablesList}>
                  {service.deliverables.map((item) => (
                    <div key={item} className={styles.deliverableRow}>
                      <span className={styles.deliverableIcon}>✓</span>
                      <span className={styles.deliverableText}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Real Project Showcase Card */}
              <div className={styles.showcaseCard}>
                <div className={styles.showcaseTop}>
                  <span className={styles.showcaseTag}>{service.showcase.industry}</span>
                  <h3 className={styles.showcaseTitle}>{service.showcase.client}</h3>
                  <div className={styles.showcaseMetrics}>
                    {service.showcase.metrics.map((m) => (
                      <span key={m} className={styles.metricBadge}>{m}</span>
                    ))}
                  </div>
                </div>

                <div className={styles.showcaseImgWrap}>
                  <Image
                    src={service.showcase.image}
                    alt={service.showcase.client}
                    width={400}
                    height={200}
                    className={styles.showcaseImg}
                  />
                </div>

                <Link href={`/work/${service.showcase.slug}`} className={styles.showcaseLink}>
                  Explore Case Study Architecture →
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ─── TECH STACK MATRIX (DARK EDITORIAL CANVAS) ─── */}
      <section className="section section--dark" id="stack">
        <div className="container">
          <div className={styles.techHeader}>
            <span className="section-label section-label--dark">Engineered For Scale</span>
            <h2 className="t-h2" style={{ maxWidth: '640px' }}>
              The modern production stack behind our builds.
            </h2>
            <p className="t-body-lg text-muted" style={{ maxWidth: '580px', marginTop: '0.75rem' }}>
              We carefully curate enterprise-grade tooling that delivers unparalleled speed, accessibility, and reliability.
            </p>
          </div>

          <div className={styles.techGrid}>
            {techStack.map((tech) => (
              <div key={tech.name} className={styles.techCard}>
                <span className={styles.techDot} />
                <h3 className={styles.techName}>{tech.name}</h3>
                <p className={styles.techRole}>{tech.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMPARISON MATRIX ─── */}
      <section className="section section--light">
        <div className="container">
          <div className={styles.compHeader}>
            <span className="section-label">The Studio Advantage</span>
            <h2 className="t-h2">Why clients choose NYX-SaaS over generic agencies.</h2>
          </div>

          <div className={styles.tableWrapper}>
            <table className={styles.compTable}>
              <thead>
                <tr>
                  <th className={styles.thFeature}>Dimension</th>
                  <th className={styles.thGeneric}>Generic Agencies</th>
                  <th className={styles.thNyx}>NYX-SaaS</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row) => (
                  <tr key={row.feature}>
                    <td className={styles.tdFeature}>{row.feature}</td>
                    <td className={styles.tdGeneric}>{row.generic}</td>
                    <td className={styles.tdNyx}>
                      <span className={styles.checkBadge}>✓</span>
                      <span>{row.nyx}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── SERVICES & ENGINEERING FAQS ─── */}
      <section className={styles.faqSection} id="faq">
        <div className="container">
          <div className={styles.faqHeader}>
            <span className="section-label">Common Inquiries</span>
            <h2 className="t-h2">Frequently asked engineering questions.</h2>
          </div>

          <div className={styles.faqGrid}>
            {serviceFaqs.map((faq) => (
              <div key={faq.q} className={styles.faqCard}>
                <h3 className={styles.faqQuestion}>{faq.q}</h3>
                <p className={styles.faqAnswer}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── REPLACED HIGH-IMPACT STUDIO CTA (ELIMINATING EMPTY SECTION) ─── */}
      <StudioCta
        label="Start a Project"
        title="Ready to elevate your digital presence in 2 weeks?"
        subtitle="Schedule a 20-minute technical discovery call. We'll analyze your current platform and outline the exact roadmap for your 14-day synchronized sprint."
        primaryBtnText="Book a Discovery Call"
        primaryBtnHref="/contact"
        secondaryBtnText="Explore Our Work"
        secondaryBtnHref="/work"
        availabilityText="Booking 2-Week Sprints — Next Availability Open"
      />
    </>
  );
}
