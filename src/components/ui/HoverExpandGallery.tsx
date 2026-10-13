'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './HoverExpandGallery.module.css';

interface GalleryItem {
  id: number;
  label: string;
  year: string;
  image: string;
}

const defaultItems: GalleryItem[] = [
  { id: 1,  label: "Aurora Wellness Sanctuary",  year: "2024", image: "/images/projects/aurora-spa.jpg" },
  { id: 2,  label: "The Grand Haven Hotel",       year: "2024", image: "/images/projects/hotel-haven.jpg" },
  { id: 3,  label: "Nexus Medical Center",        year: "2024", image: "/images/projects/nexus-medical.jpg" },
  { id: 4,  label: "Kuro Fine Dining & Lounge",   year: "2024", image: "/images/projects/kuro-dining.jpg" },
  { id: 5,  label: "PureSpark Eco Cleaning Co",   year: "2024", image: "/images/projects/pure-clean.jpg" },
  { id: 6,  label: "Vanguard Athletic Club",      year: "2024", image: "/images/projects/gym-fitness.jpg" },
  { id: 7,  label: "Elysian Luxury Estates",      year: "2024", image: "/images/projects/real-estate.jpg" },
  { id: 8,  label: "Velvet Roast Coffee & Bakery",year: "2024", image: "/images/projects/cafe-roast.jpg" },
  { id: 9,  label: "Radiance Dental Studio",      year: "2024", image: "/images/projects/dental-clinic.jpg" },
  { id: 10, label: "Apex Wealth Terminal",        year: "2024", image: "/images/projects/apex-fintech.jpg" },
  { id: 11, label: "Aura Neural AI Platform",     year: "2024", image: "/images/projects/aura-neural-ai.jpg" },
];


interface HoverExpandGalleryProps {
  projects?: unknown;
}

export default function HoverExpandGallery({ projects }: HoverExpandGalleryProps = {}) {
  const [activeIdx, setActiveIdx] = useState<number>(0); // Aurora Wellness Sanctuary default
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)');
    setIsMobile(media.matches);
    const handler = () => setIsMobile(media.matches);
    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, []);

  return (
    <section className={styles.skiperSection}>
      <div className={styles.skiperContainer}>
        <motion.div className={styles.skiperRow}>
          {defaultItems.map((item, index) => {
            const isActive = activeIdx === index;

            return (
              <motion.div
                key={item.id}
                className={styles.panel}
                onClick={isMobile ? () => setActiveIdx(index) : undefined}
                onMouseEnter={isMobile ? undefined : () => setActiveIdx(index)}
                initial={
                  isMobile
                    ? { height: '4.5rem', width: '100%' }
                    : { width: '4.5rem', height: '100%' }
                }
                animate={
                  isMobile
                    ? { height: isActive ? '500px' : '4.5rem', width: '100%' }
                    : { width: isActive ? '32rem' : '4.5rem' }
                }
                transition={{ stiffness: 200, damping: 25, type: 'spring' }}
              >
                {/* Vertical Label & Year (Exact Skiper35 implementation) */}
                <motion.div
                  className={styles.labelRow}
                  animate={{
                    color: isActive ? '#F1F1F1' : 'rgba(241, 241, 241, 0.3)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <p className={styles.itemLabel}>{item.label}</p>
                  <AnimatePresence>
                    {isActive && (
                      <motion.p
                        className={styles.itemYear}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.year}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Expanded Image Container */}
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{ opacity: Number(isActive) }}
                  className={styles.imageContainer}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <motion.img
                    src={item.image}
                    alt={item.label}
                    className={styles.panelImg}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    onError={(e) => {
                      // Fallback if image still loading
                      const target = e.currentTarget as HTMLImageElement;
                      if (!target.src.includes('aurora-spa.jpg')) {
                        target.src = '/images/projects/aurora-spa.jpg';
                      }
                    }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
