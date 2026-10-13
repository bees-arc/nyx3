'use client';

import { useState } from 'react';
import styles from './ContactForm.module.css';

const serviceOptions = [
  'Website Design',
  'Next.js Development',
  'UI/UX Design',
  'Design System',
  'Speed & SEO Audit',
  'Full Redesign',
];

const budgetRanges = [
  '< $5,000',
  '$5k — $10k',
  '$10k — $25k',
  '$25k — $50k',
  '$50k+',
];

const timelineOptions = [
  'Immediately',
  'Within 2 weeks (Standard Sprint)',
  '1-2 months',
  'Exploring options',
];

export default function ContactForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>(['Website Design']);
  const [selectedBudget, setSelectedBudget] = useState<string>('$10k — $25k');
  const [selectedTimeline, setSelectedTimeline] = useState<string>('Within 2 weeks (Standard Sprint)');
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    details: '',
  });

  const toggleService = (srv: string) => {
    setSelectedServices((prev) =>
      prev.includes(srv) ? (prev.length > 1 ? prev.filter((s) => s !== srv) : prev) : [...prev, srv]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || 'd010993d-e2c1-49e2-b456-f6031f4b70f3';
    if (!accessKey) {
      setFormStatus('error');
      setErrorMessage(
        'Web3Forms Access Key is missing. Please add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to your .env.local file to receive messages.'
      );
      return;
    }

    setFormStatus('submitting');

    try {
      const payload = {
        access_key: accessKey,
        subject: `New Project Inquiry from ${formData.name || 'Website'} ${formData.company ? `(${formData.company})` : ''}`,
        from_name: formData.name || 'NYX-SaaS Studio Inquiry',
        name: formData.name,
        email: formData.email,
        company: formData.company || 'Not provided',
        website: formData.website || 'Not provided',
        services: selectedServices.join(', '),
        budget: selectedBudget,
        timeline: selectedTimeline,
        message: formData.details,
        botcheck: '',
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setFormStatus('success');
      } else {
        setFormStatus('error');
        setErrorMessage(
          result.message || 'Unable to transmit inquiry to Web3Forms. Please verify your Access Key and try again.'
        );
      }
    } catch {
      setFormStatus('error');
      setErrorMessage('Network connection error. Please check your network and try again.');
    }
  };

  if (formStatus === 'success') {
    return (
      <div className={styles.successBox}>
        <div className={styles.successIcon}>✓</div>
        <h3 className={styles.successTitle}>Inquiry Transmitted</h3>
        <p className={styles.successDesc}>
          Thank you, {formData.name || 'there'}. We have received your project details via Web3Forms.
          Our team will analyze your requirements and get back to you within 24 business hours.
        </p>
        <button
          type="button"
          className="btn btn--outline"
          onClick={() => {
            setFormStatus('idle');
            setErrorMessage('');
            setFormData({ name: '', email: '', company: '', website: '', details: '' });
          }}
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {/* ─── 01. SERVICES SELECTION ─── */}
      <div className={styles.fieldGroup}>
        <label className={styles.groupLabel}>
          <span className={styles.stepNum}>01</span>
          <span>What do you need help with?</span>
        </label>
        <div className={styles.pillsGrid}>
          {serviceOptions.map((service) => {
            const isSelected = selectedServices.includes(service);
            return (
              <button
                type="button"
                key={service}
                className={`${styles.pillBtn} ${isSelected ? styles.pillBtnActive : ''}`}
                onClick={() => toggleService(service)}
              >
                <span className={styles.pillCheck}>{isSelected ? '✓' : '+'}</span>
                <span>{service}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ─── 02. BUDGET ESTIMATE ─── */}
      <div className={styles.fieldGroup}>
        <label className={styles.groupLabel}>
          <span className={styles.stepNum}>02</span>
          <span>Estimated project investment</span>
        </label>
        <div className={styles.pillsGrid}>
          {budgetRanges.map((range) => {
            const isSelected = selectedBudget === range;
            return (
              <button
                type="button"
                key={range}
                className={`${styles.pillBtn} ${isSelected ? styles.pillBtnActive : ''}`}
                onClick={() => setSelectedBudget(range)}
              >
                <span>{range}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ─── 03. TIMELINE ─── */}
      <div className={styles.fieldGroup}>
        <label className={styles.groupLabel}>
          <span className={styles.stepNum}>03</span>
          <span>Target launch window</span>
        </label>
        <div className={styles.pillsGrid}>
          {timelineOptions.map((opt) => {
            const isSelected = selectedTimeline === opt;
            return (
              <button
                type="button"
                key={opt}
                className={`${styles.pillBtn} ${isSelected ? styles.pillBtnActive : ''}`}
                onClick={() => setSelectedTimeline(opt)}
              >
                <span>{opt}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ─── 04. PERSONAL & PROJECT DETAILS ─── */}
      <div className={styles.fieldGroup}>
        <label className={styles.groupLabel}>
          <span className={styles.stepNum}>04</span>
          <span>About you & your venture</span>
        </label>

        <div className={styles.inputsRow}>
          <div className={styles.inputField}>
            <label htmlFor="name" className={styles.inputLabel}>Your Name *</label>
            <input
              id="name"
              required
              type="text"
              placeholder="e.g. Nathan Vance"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={styles.textInput}
            />
          </div>

          <div className={styles.inputField}>
            <label htmlFor="email" className={styles.inputLabel}>Work Email *</label>
            <input
              id="email"
              required
              type="email"
              placeholder="e.g. nathan@venture.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={styles.textInput}
            />
          </div>
        </div>

        <div className={styles.inputsRow}>
          <div className={styles.inputField}>
            <label htmlFor="company" className={styles.inputLabel}>Company / Project Name</label>
            <input
              id="company"
              type="text"
              placeholder="e.g. Acme Corp"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className={styles.textInput}
            />
          </div>

          <div className={styles.inputField}>
            <label htmlFor="website" className={styles.inputLabel}>Current Website (if applicable)</label>
            <input
              id="website"
              type="url"
              placeholder="https://"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              className={styles.textInput}
            />
          </div>
        </div>

        <div className={styles.inputField} style={{ marginTop: '1.25rem' }}>
          <label htmlFor="details" className={styles.inputLabel}>Project Overview & Objectives *</label>
          <textarea
            id="details"
            required
            rows={4}
            placeholder="Tell us what you're building, what challenges you're facing, and what success looks like."
            value={formData.details}
            onChange={(e) => setFormData({ ...formData, details: e.target.value })}
            className={styles.textArea}
          />
        </div>
      </div>

      {/* Honeypot Spam Protection for Web3Forms */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      {/* ─── SUBMISSION ─── */}
      <div className={styles.submitRow}>
        {formStatus === 'error' && (
          <div className={styles.errorBox} role="alert">
            <span className={styles.errorIcon}>!</span>
            <span className={styles.errorText}>{errorMessage}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={formStatus === 'submitting'}
          className="btn btn--primary btn--lg"
        >
          {formStatus === 'submitting' ? (
            <>
              <span className={styles.spinner} />
              <span>Transmitting Brief...</span>
            </>
          ) : (
            'Submit Project Brief →'
          )}
        </button>

        <div className={styles.submitGuarantees}>
          <div className={styles.guaranteeItem}>
            <span className={styles.guaranteeDot} />
            <span>NDA protected</span>
          </div>
          <div className={styles.guaranteeItem}>
            <span className={styles.guaranteeDot} />
            <span>24h guaranteed response</span>
          </div>
          <div className={styles.guaranteeItem}>
            <span className={styles.guaranteeDot} />
            <span>Zero obligation consultation</span>
          </div>
        </div>
      </div>
    </form>
  );
}
