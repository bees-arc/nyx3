import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const footerNav = [
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/process', label: 'Process' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const footerServices = [
  { href: '/services#design', label: 'Web Design' },
  { href: '/services#development', label: 'Web Development' },
  { href: '/services#uiux', label: 'UI/UX Design' },
];

const socialLinks = [
  {
    href: 'https://linkedin.com',
    label: 'LinkedIn',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    href: 'https://instagram.com',
    label: 'Instagram',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    href: 'https://facebook.com',
    label: 'Facebook',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <Image
                src="/images/logo-dark.png"
                alt="NYX-SaaS"
                width={120}
                height={49}
                className={styles.logoImg}
              />
            </Link>
            <p className={styles.tagline}>
              Digital experiences built to perform.
            </p>
            <div className={styles.social}>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={styles.socialLink}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className={styles.navGroup}>
            <p className={styles.navGroupLabel}>Navigation</p>
            <ul className={styles.navList}>
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.navLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={styles.navGroup}>
            <p className={styles.navGroupLabel}>Services</p>
            <ul className={styles.navList}>
              {footerServices.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.navLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.navGroup}>
            <p className={styles.navGroupLabel}>Get in Touch</p>
            <ul className={styles.navList}>
              <li>
                <a href="mailto:hello@nyx-saas.com" className={styles.navLink}>
                  hello@nyx-saas.com
                </a>
              </li>
              <li className={styles.ctaWrap}>
                <Link href="/contact" className="btn btn--primary" style={{ marginTop: '1rem', display: 'inline-flex' }}>
                  Start a Project →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {year} NYX-SaaS. All rights reserved.
          </p>
          <div className={styles.legal}>
            <Link href="/privacy" className={styles.legalLink}>Privacy Policy</Link>
            <Link href="/terms" className={styles.legalLink}>Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
