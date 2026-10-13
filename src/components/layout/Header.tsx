'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

const navLinks = [
  // { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/process', label: 'Process' },
  { href: '/about', label: 'About' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isDarkTheme = (pathname === '/' && !scrolled);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${isDarkTheme ? styles.darkTheme : styles.lightTheme}`}>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo} aria-label="NYX-SaaS – Home">
            <Image
              src="/images/logo-dark.png"
              alt="NYX-SaaS"
              width={116}
              height={47}
              className={`${styles.logoImg} ${styles.logoDark}`}
              priority
            />
            <Image
              src="/images/logo-light.png"
              alt="NYX-SaaS"
              width={116}
              height={47}
              className={`${styles.logoImg} ${styles.logoLight}`}
              priority
            />
          </Link>

          <nav className={styles.nav} aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${pathname === link.href || pathname.startsWith(link.href + '/') ? styles.active : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={styles.actions}>

            <button
              className={`${styles.menuToggle} ${menuOpen ? styles.menuOpen : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`} aria-hidden={!menuOpen}>
        <nav className={styles.mobileNav}>
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.mobileNavLink}
              style={{ transitionDelay: menuOpen ? `${i * 0.07}s` : '0s' }}
            >
              {link.label}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          ))}
          <Link
            href="/contact"
            className={`${styles.mobileNavLink} ${styles.mobileNavCta}`}
            style={{ transitionDelay: menuOpen ? `${navLinks.length * 0.07}s` : '0s' }}
          >
            Start a Project →
          </Link>
        </nav>

        <div className={styles.mobileMenuFooter}>
          <p className="t-small text-muted">hello@nyx-saas.com</p>
        </div>
      </div>

      {menuOpen && (
        <div className={styles.overlay} onClick={() => setMenuOpen(false)} aria-hidden="true" />
      )}
    </>
  );
}
