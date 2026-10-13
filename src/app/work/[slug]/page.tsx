import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProjectBySlug, projects } from '@/data/projects';
import styles from './page.module.css';

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.name} — Case Study`,
    description: project.description,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      {/* ─── HERO ─── */}
      <section className={styles.hero} style={{ '--bg': project.bgColor, '--accent': project.accentColor } as React.CSSProperties}>
        <div className={styles.heroContent}>
          <div className="container">
            <div className={`${styles.heroBreadcrumb} animate-fade-up`}>
              <Link href="/work" className={styles.breadcrumbBack}>
                ← Work
              </Link>
              <span className={styles.breadcrumbSep}>/</span>
              <span>{project.name}</span>
            </div>

            <div className={styles.heroMeta}>
              <div className={`${styles.heroMetaItem} animate-fade-up animate-fade-up-delay-1`}>
                <span className={styles.metaLabel}>Client</span>
                <span className={styles.metaValue}>{project.client}</span>
              </div>
              <div className={`${styles.heroMetaItem} animate-fade-up animate-fade-up-delay-2`}>
                <span className={styles.metaLabel}>Industry</span>
                <span className={styles.metaValue}>{project.industry}</span>
              </div>
              <div className={`${styles.heroMetaItem} animate-fade-up animate-fade-up-delay-3`}>
                <span className={styles.metaLabel}>Year</span>
                <span className={styles.metaValue}>{project.year}</span>
              </div>
              {!project.isLive && (
                <div className={`${styles.heroMetaItem} animate-fade-up animate-fade-up-delay-4`}>
                  <span className={`${styles.metaValue} ${styles.conceptChip}`}>Concept / Case Study</span>
                </div>
              )}
            </div>

            <h1 className={`t-h1 ${styles.heroTitle} animate-fade-up animate-fade-up-delay-2`}>
              {project.name}
            </h1>
            <p className={`t-body-lg ${styles.heroDesc} animate-fade-up animate-fade-up-delay-3`}>
              {project.description}
            </p>

            <div className={`${styles.heroServices} animate-fade-up animate-fade-up-delay-4`}>
              {project.services.map((s) => (
                <span key={s} className={styles.serviceChip}>{s}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Browser Mockup */}
        <div className={styles.heroBrowserWrap}>
          <div className="container">
            <div className={`${styles.heroBrowser} animate-fade-up animate-fade-up-delay-3`}>
              <div className={styles.browserBar}>
                <div className={styles.browserDots}>
                  <span /><span /><span />
                </div>
                <div className={styles.browserUrl}>{project.client.toLowerCase().replace(/\s+/g, '')}.com</div>
              </div>
              <div className={styles.browserBody} style={{ background: project.bgColor }}>
                <div className={styles.pageMockHero} style={{ background: `${project.accentColor}15` }}>
                  <div className={styles.pageMockNav}>
                    <div className={styles.pageMockLogo} style={{ background: project.accentColor + 'AA' }} />
                    <div className={styles.pageMockNavLinks}>
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className={styles.pageMockNavLink} />
                      ))}
                    </div>
                    <div className={styles.pageMockNavBtn} style={{ background: project.accentColor }} />
                  </div>
                  <div className={styles.pageMockHeroContent}>
                    <div className={styles.pageMockHeroText}>
                      <div className={styles.pgLine} style={{ width: '70%', height: '28px', background: `${project.accentColor}BB` }} />
                      <div className={styles.pgLine} style={{ width: '85%', height: '28px', background: `${project.accentColor}77` }} />
                      <div className={styles.pgLine} style={{ width: '55%', height: '16px', background: `${project.accentColor}44`, marginTop: '0.5rem' }} />
                      <div className={styles.pageMockBtns}>
                        <div className={styles.pgBtn} style={{ background: project.accentColor }} />
                        <div className={styles.pgBtnOut} style={{ borderColor: `${project.accentColor}55` }} />
                      </div>
                    </div>
                    <div className={styles.pageMockHeroImg} style={{ background: `${project.accentColor}25` }} />
                  </div>
                </div>
                <div className={styles.pageMockContent}>
                  <div className={styles.pageMockCards}>
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className={styles.pageMockCard}>
                        <div className={styles.pageMockCardHead} style={{ background: `${project.accentColor}20` }} />
                        <div className={styles.pgLine} style={{ width: '65%', height: '10px' }} />
                        <div className={styles.pgLine} style={{ width: '80%', height: '8px' }} />
                        <div className={styles.pgLine} style={{ width: '70%', height: '8px' }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CHALLENGE / GOAL / APPROACH ─── */}
      <section className="section section--off">
        <div className="container--narrow">
          <div className={styles.caseSection}>
            <div className={`${styles.caseSectionHeader} reveal`}>
              <span className="section-label">The Challenge</span>
              <h2 className="t-h3">{project.challenge.split('.')[0]}.</h2>
            </div>
            <p className={`t-body-lg ${styles.caseSectionText} reveal reveal-delay-1`}>{project.challenge}</p>
          </div>

          <div className={`${styles.caseSectionDivider} reveal`} />

          <div className={styles.caseSection}>
            <div className={`${styles.caseSectionHeader} reveal`}>
              <span className="section-label">The Goal</span>
              <h2 className="t-h3">What needed to change.</h2>
            </div>
            <p className={`t-body-lg ${styles.caseSectionText} reveal reveal-delay-1`}>{project.goal}</p>
          </div>

          <div className={`${styles.caseSectionDivider} reveal`} />

          <div className={styles.caseSection}>
            <div className={`${styles.caseSectionHeader} reveal`}>
              <span className="section-label">Our Approach</span>
              <h2 className="t-h3">How we thought about it.</h2>
            </div>
            <p className={`t-body-lg ${styles.caseSectionText} reveal reveal-delay-1`}>{project.approach}</p>
          </div>
        </div>
      </section>

      {/* ─── DESIGN DIRECTION ─── */}
      <section className="section section--ink">
        <div className="container">
          <div className={styles.designHeader}>
            <span className="section-label section-label--neutral">Design Direction</span>
            <h2 className="t-h2" style={{ maxWidth: '520px' }}>
              The thinking behind every visual decision.
            </h2>
          </div>
          <div className={styles.designGrid}>
            {Object.entries(project.designDirection).map(([key, value], i) => (
              <div key={key} className={`${styles.designCard} reveal reveal-delay-${(i % 3) + 1}`}>
                <p className={styles.designCardLabel}>
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase())}
                </p>
                <p className={`t-body ${styles.designCardText}`}>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DEVELOPMENT ─── */}
      <section className="section section--off">
        <div className="container--narrow">
          <span className="section-label reveal">Development</span>
          <h2 className={`t-h2 reveal reveal-delay-1`} style={{ margin: '0.75rem 0 1.5rem', maxWidth: '560px' }}>
            How it was built.
          </h2>
          <p className={`t-body-lg text-muted reveal reveal-delay-2`}>{project.development}</p>
        </div>
      </section>

      {/* ─── OUTCOME ─── */}
      <section className="section">
        <div className="container">
          <div className={styles.outcomeHeader}>
            <span className="section-label">Outcome</span>
            <h2 className="t-h2" style={{ maxWidth: '520px' }}>
              What changed for the client.
            </h2>
          </div>
          <div className={styles.outcomeGrid}>
            {project.outcome.map((o, i) => (
              <div key={i} className={`${styles.outcomeCard} reveal reveal-delay-${(i % 4) + 1}`}>
                <div className={styles.outcomeCheck}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path d="M3.5 9l4 4 7-8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className={`t-body ${styles.outcomeText}`}>{o}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NEXT / CTA ─── */}
      <section className="section section--dark">
        <div className="container">
          <div className={styles.nextGrid}>
            <div className={styles.nextProject}>
              <p className={styles.nextLabel}>Next Project</p>
              <Link href={`/work/${nextProject.slug}`} className={styles.nextCard}>
                <div className={styles.nextCardVisual} style={{ background: nextProject.bgColor }} />
                <div className={styles.nextCardInfo}>
                  <p className={styles.nextCardIndustry}>{nextProject.industry}</p>
                  <h3 className={`t-h4 ${styles.nextCardTitle}`}>{nextProject.name}</h3>
                  <p className={`t-small ${styles.nextCardDesc}`}>{nextProject.tagline}</p>
                  <span className={styles.nextCardCta}>View Case Study →</span>
                </div>
              </Link>
            </div>

            <div className={styles.startProject}>
              <p className={styles.nextLabel}>Start a Project</p>
              <div className={styles.startCard}>
                <h3 className={`t-h3`} style={{ color: 'var(--white)', maxWidth: '320px' }}>
                  Ready to build something like this?
                </h3>
                <p className="t-body" style={{ color: 'var(--dark-muted-text)', maxWidth: '300px' }}>
                  Tell us about your project and let's see what we can build together.
                </p>
                <Link href="/contact" className="btn btn--primary" style={{ marginTop: '0.5rem' }}>
                  Start a Project →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
