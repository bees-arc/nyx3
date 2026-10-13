import type { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Contact — Start a Project | NYX-SaaS',
  description:
    'Have a project in mind? Partner with NYX-SaaS to build conversion-focused websites, Next.js web applications, and precision UI/UX design systems.',
};

const studioContacts = [
  { label: 'General & RFPs', value: 'hello@nyx-saas.com', href: 'mailto:hello@nyx-saas.com' },
  { label: 'Studio Direct', value: '+94 11 234 5678', href: 'tel:+94112345678' },
  { label: 'Studio Base', value: 'Colombo, Sri Lanka — Deploying Worldwide', href: '#' },
];

const processFaqs = [
  {
    q: 'How fast do you respond to project inquiries?',
    a: 'We review all briefs and respond within 24 business hours with an initial evaluation and recommended sprint dates.',
  },
  {
    q: 'What is your typical project timeline?',
    a: 'Our standard production sprint is strictly 2 weeks (14 calendar days) from discovery kick-off to final production launch. Complex custom applications take 3 to 4 weeks.',
  },
  {
    q: 'Do you work under an NDA?',
    a: 'Absolutely. We sign mutual non-disclosure agreements before any sensitive brand or product strategy discussions take place.',
  },
  {
    q: 'What tech stack do you engineer with?',
    a: 'We specialize in Next.js (App Router), TypeScript, Framer Motion, Vanilla CSS Modules, and headless CMS or Supabase integrations.',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ─── HERO HEADER ─── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className="container">
          <span className="section-label animate-fade-up">Start a Project</span>
          <h1 className={`t-h1 ${styles.heroTitle} animate-fade-up animate-fade-up-delay-1`}>
            Let's build something <br />
            <em className={styles.heroItalic}>worth remembering.</em>
          </h1>
          <p className={`t-body-lg ${styles.heroSub} animate-fade-up animate-fade-up-delay-2`}>
            Tell us about your venture, your commercial targets, and what you want to achieve.
            We'll outline a clear architectural sprint plan to get you there.
          </p>
        </div>
      </section>

      {/* ─── CONTACT SECTION (DARK EDITORIAL CANVAS) ─── */}
      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactLayout}>
            {/* Left: Form */}
            <div className={styles.formColumn}>
              <ContactForm />
            </div>

            {/* Right: Studio Sidebar Details */}
            <aside className={styles.sideColumn}>
              {/* Studio Info Card */}
              <div className={styles.sideCard}>
                <h3 className={styles.sideCardTitle}>Studio Contact</h3>
                <div className={styles.contactInfoList}>
                  {studioContacts.map((contact) => (
                    <div key={contact.label} className={styles.contactInfoItem}>
                      <span className={styles.contactLabel}>{contact.label}</span>
                      {contact.href !== '#' ? (
                        <a href={contact.href} className={styles.contactLink}>
                          {contact.value}
                        </a>
                      ) : (
                        <span className={styles.contactVal}>{contact.value}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* What Happens Next */}
              <div className={styles.sideCard}>
                <h3 className={styles.sideCardTitle}>What Happens Next?</h3>
                <div className={styles.timelineSteps}>
                  <div className={styles.timelineStep}>
                    <span className={styles.stepBadge}>01</span>
                    <div>
                      <h4 className={styles.stepTitle}>Review & Assessment</h4>
                      <p className={styles.stepDesc}>We evaluate your business goals and current digital presence within 24h.</p>
                    </div>
                  </div>

                  <div className={styles.timelineStep}>
                    <span className={styles.stepBadge}>02</span>
                    <div>
                      <h4 className={styles.stepTitle}>Discovery Call</h4>
                      <p className={styles.stepDesc}>A focused 30-minute working session to align on milestones and scope.</p>
                    </div>
                  </div>

                  <div className={styles.timelineStep}>
                    <span className={styles.stepBadge}>03</span>
                    <div>
                      <h4 className={styles.stepTitle}>Tailored Sprint Spec</h4>
                      <p className={styles.stepDesc}>You receive a fixed-scope sprint contract, roadmap, and delivery dates.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div className={styles.sideCard}>
                <h3 className={styles.sideCardTitle}>Frequently Asked</h3>
                <div className={styles.faqList}>
                  {processFaqs.map((faq) => (
                    <div key={faq.q} className={styles.faqItem}>
                      <p className={styles.faqQ}>{faq.q}</p>
                      <p className={styles.faqA}>{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
