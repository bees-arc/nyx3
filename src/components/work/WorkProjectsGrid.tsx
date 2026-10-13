'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Project, getProjectImage } from '@/data/projects';
import styles from './WorkProjectsGrid.module.css';

interface WorkProjectsGridProps {
  projects: Project[];
}

const filterCategories = [
  'All',
  'Websites',
  'UI/UX',
  'Brand Systems',
  'Corporate',
];

export default function WorkProjectsGrid({ projects }: WorkProjectsGridProps) {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.tags.includes(activeFilter) || project.services.some((s) => s.includes(activeFilter));
  });

  return (
    <div className={styles.wrapper}>
      {/* ─── FILTER TABS ─── */}
      <div className={styles.filterBar}>
        <div className={styles.filterList}>
          {filterCategories.map((filter) => {
            const isActive = activeFilter === filter;
            const count = filter === 'All'
              ? projects.length
              : projects.filter((p) => p.tags.includes(filter) || p.services.some((s) => s.includes(filter))).length;

            return (
              <button
                key={filter}
                className={`${styles.filterBtn} ${isActive ? styles.filterBtnActive : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                <span>{filter}</span>
                <span className={styles.filterCount}>{count}</span>
                {isActive && (
                  <motion.div
                    className={styles.filterIndicator}
                    layoutId="filterIndicator"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ─── CARDS GRID ─── */}
      <motion.div layout className={styles.grid}>
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => {
            const imageSrc = getProjectImage(project.slug);
            const mainOutcome = project.outcome[0];

            return (
              <motion.article
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className={styles.card}
              >
                <Link href={`/work/${project.slug}`} className={styles.cardLink} aria-label={`View ${project.name} case study`}>
                  {/* Image Canvas with Hover Scale */}
                  <div className={styles.imageContainer}>
                    <Image
                      src={imageSrc}
                      alt={project.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      className={styles.projectImg}
                      priority={index < 4}
                    />
                    <div className={styles.imageOverlay} />

                    {/* Top Chips */}
                    <div className={styles.imageTopChips}>
                      <span className={styles.industryChip}>{project.industry}</span>
                      <span className={styles.yearChip}>{project.year}</span>
                    </div>

                    {/* Bottom Metric Pill */}
                    {mainOutcome && (
                      <div className={styles.outcomePill}>
                        <span className={styles.outcomeDot} />
                        <span className={styles.outcomeText}>{mainOutcome}</span>
                      </div>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className={styles.cardBody}>
                    <div className={styles.clientRow}>
                      <span className={styles.clientName}>{project.client}</span>
                      <span className={styles.arrowIcon}>↗</span>
                    </div>

                    <h2 className={styles.projectName}>{project.name}</h2>
                    <p className={styles.projectTagline}>{project.tagline}</p>

                    {/* Services / Tags Chips */}
                    <div className={styles.servicesList}>
                      {project.services.slice(0, 3).map((service) => (
                        <span key={service} className={styles.serviceTag}>
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
