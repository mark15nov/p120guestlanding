import { useState, useEffect, useRef, useCallback } from "react";

const BRAND = {
  bg: "#0a0a0b",
  bgAlt: "#111113",
  surface: "rgba(255,255,255,0.03)",
  surfaceHover: "rgba(255,255,255,0.06)",
  green: "#71b248",
  greenLight: "#8cd45e",
  greenDim: "#5a9038",
  greenGlow: "rgba(113,178,72,0.12)",
  greenGlow2: "rgba(113,178,72,0.06)",
  gradientStart: "#71b248",
  gradientEnd: "#4ecdc4",
  textPrimary: "#fafafa",
  textSecondary: "#a1a1aa",
  textMuted: "#52525b",
  border: "rgba(255,255,255,0.08)",
  borderHover: "rgba(113,178,72,0.3)",
};

/* ── Scroll-reveal hook ── */
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ── Animated counter ── */
function AnimatedNum({ value, suffix = "", prefix = "" }) {
  const [ref, visible] = useReveal(0.3);
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!visible) return;
    const num = parseInt(value, 10) || 0;
    if (num === 0) { setDisplay(0); return; }
    let start = 0;
    const duration = 1800;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setDisplay(Math.round(eased * num));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [visible, value]);
  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}

/* ── Reveal wrapper ── */
function Reveal({ children, delay = 0, direction = "up", className = "" }) {
  const [ref, visible] = useReveal(0.1);
  const transforms = {
    up: "translateY(40px)",
    down: "translateY(-40px)",
    left: "translateX(40px)",
    right: "translateX(-40px)",
    none: "none",
  };
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : transforms[direction],
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }

  html { scroll-behavior: smooth; }

  body {
    background: ${BRAND.bg};
    color: ${BRAND.textPrimary};
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  ::selection {
    background: rgba(113,178,72,0.3);
    color: #fff;
  }

  .page {
    min-height: 100vh;
    position: relative;
  }

  /* ── Aurora background ── */
  .aurora {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    overflow: hidden;
  }

  .aurora-blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(120px);
    opacity: 0.4;
    animation: auroraFloat 20s ease-in-out infinite alternate;
  }

  .aurora-blob:nth-child(1) {
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(113,178,72,0.15), transparent 70%);
    top: -200px; left: 10%;
    animation-duration: 25s;
  }

  .aurora-blob:nth-child(2) {
    width: 500px; height: 500px;
    background: radial-gradient(circle, rgba(78,205,196,0.1), transparent 70%);
    top: 30%; right: -100px;
    animation-duration: 30s;
    animation-delay: -5s;
  }

  .aurora-blob:nth-child(3) {
    width: 700px; height: 700px;
    background: radial-gradient(circle, rgba(113,178,72,0.08), transparent 70%);
    bottom: -200px; left: 30%;
    animation-duration: 35s;
    animation-delay: -10s;
  }

  @keyframes auroraFloat {
    0% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 30px) scale(0.95); }
    100% { transform: translate(10px, -20px) scale(1.05); }
  }

  /* ── Grid overlay ── */
  .grid-overlay {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
    background-size: 60px 60px;
    mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%);
    -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%);
  }

  /* ── Navigation ── */
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 48px;
    transition: all 0.3s ease;
  }

  .nav.scrolled {
    background: rgba(10,10,11,0.8);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    border-bottom: 1px solid ${BRAND.border};
  }

  .nav-logo {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    font-size: 24px;
    color: ${BRAND.textPrimary};
    letter-spacing: -0.5px;
    display: flex;
    align-items: center;
    gap: 2px;
  }

  .nav-logo span {
    background: linear-gradient(135deg, ${BRAND.gradientStart}, ${BRAND.gradientEnd});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .nav-cta {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    font-weight: 500;
    color: ${BRAND.bg};
    background: ${BRAND.green};
    padding: 10px 24px;
    border-radius: 100px;
    border: none;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease;
  }

  .nav-cta:hover {
    background: ${BRAND.greenLight};
    transform: translateY(-1px);
    box-shadow: 0 8px 30px rgba(113,178,72,0.3);
  }

  /* ── Hero ── */
  .hero {
    position: relative;
    z-index: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 160px 24px 100px;
    max-width: 920px;
    margin: 0 auto;
  }

  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    font-weight: 500;
    color: ${BRAND.green};
    background: rgba(113,178,72,0.08);
    border: 1px solid rgba(113,178,72,0.15);
    padding: 8px 18px;
    border-radius: 100px;
    margin-bottom: 32px;
    backdrop-filter: blur(10px);
  }

  .badge-dot {
    width: 6px;
    height: 6px;
    background: ${BRAND.green};
    border-radius: 50%;
    animation: livePulse 2s infinite;
    box-shadow: 0 0 8px rgba(113,178,72,0.6);
  }

  @keyframes livePulse {
    0%, 100% { opacity: 1; box-shadow: 0 0 8px rgba(113,178,72,0.6); }
    50% { opacity: 0.6; box-shadow: 0 0 20px rgba(113,178,72,0.3); }
  }

  .hero-headline {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    font-size: clamp(44px, 7.5vw, 82px);
    line-height: 1.0;
    letter-spacing: -3px;
    color: ${BRAND.textPrimary};
    margin-bottom: 28px;
  }

  .hero-headline .gradient-text {
    background: linear-gradient(135deg, ${BRAND.gradientStart}, ${BRAND.gradientEnd});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-sub {
    font-size: clamp(17px, 2.2vw, 20px);
    font-weight: 400;
    color: ${BRAND.textSecondary};
    line-height: 1.7;
    max-width: 580px;
    margin-bottom: 48px;
  }

  .hero-cta-row {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: linear-gradient(135deg, ${BRAND.gradientStart}, ${BRAND.greenLight});
    color: #000;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 600;
    padding: 16px 36px;
    border-radius: 100px;
    border: none;
    cursor: pointer;
    text-decoration: none;
    white-space: nowrap;
    transition: all 0.25s cubic-bezier(0.16,1,0.3,1);
    position: relative;
    overflow: hidden;
  }

  .btn-primary::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, transparent, rgba(255,255,255,0.2));
    opacity: 0;
    transition: opacity 0.25s ease;
  }

  .btn-primary:hover::before { opacity: 1; }

  .btn-primary:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 16px 48px rgba(113,178,72,0.4), 0 0 0 1px rgba(113,178,72,0.2);
  }

  .btn-primary:active { transform: scale(0.98); }

  .btn-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background: rgba(0,0,0,0.15);
    border-radius: 50%;
    font-size: 14px;
    transition: transform 0.2s ease;
  }

  .btn-primary:hover .btn-arrow { transform: translateX(3px); }

  .btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 15px;
    font-weight: 500;
    color: ${BRAND.textSecondary};
    text-decoration: none;
    padding: 16px 28px;
    border-radius: 100px;
    border: 1px solid ${BRAND.border};
    background: transparent;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .btn-secondary:hover {
    color: ${BRAND.textPrimary};
    border-color: ${BRAND.borderHover};
    background: rgba(255,255,255,0.03);
  }

  .hero-trust {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 40px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .trust-item {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    color: ${BRAND.textMuted};
  }

  .trust-check {
    width: 16px;
    height: 16px;
    color: ${BRAND.green};
    flex-shrink: 0;
  }

  /* ── Stats ── */
  .stats {
    position: relative;
    z-index: 5;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 48px;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1px;
    background: ${BRAND.border};
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid ${BRAND.border};
  }

  .stat-item {
    background: ${BRAND.bgAlt};
    padding: 36px 24px;
    text-align: center;
    transition: background 0.3s ease;
  }

  .stat-item:hover {
    background: rgba(255,255,255,0.04);
  }

  .stat-num {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    font-size: 36px;
    background: linear-gradient(135deg, ${BRAND.gradientStart}, ${BRAND.gradientEnd});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 6px;
  }

  .stat-label {
    font-size: 13px;
    color: ${BRAND.textMuted};
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  /* ── Section common ── */
  .section-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    font-weight: 600;
    color: ${BRAND.green};
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  .eyebrow-line {
    width: 24px;
    height: 1px;
    background: ${BRAND.green};
  }

  .section-heading {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    font-size: clamp(30px, 4.5vw, 48px);
    letter-spacing: -1.5px;
    color: ${BRAND.textPrimary};
    line-height: 1.1;
    margin-bottom: 20px;
  }

  .section-desc {
    font-size: 17px;
    color: ${BRAND.textSecondary};
    line-height: 1.7;
    max-width: 520px;
  }

  /* ── Features ── */
  .features {
    position: relative;
    z-index: 5;
    max-width: 1200px;
    margin: 0 auto;
    padding: 120px 48px;
  }

  .features-header {
    text-align: center;
    margin-bottom: 64px;
  }

  .features-header .section-desc {
    margin: 0 auto;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  .f-card {
    background: rgba(255,255,255,0.02);
    border: 1px solid ${BRAND.border};
    border-radius: 20px;
    padding: 32px;
    cursor: default;
    transition: all 0.35s cubic-bezier(0.16,1,0.3,1);
    position: relative;
    overflow: hidden;
  }

  .f-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(113,178,72,0.4), transparent);
    opacity: 0;
    transition: opacity 0.35s ease;
  }

  .f-card:hover {
    border-color: rgba(113,178,72,0.2);
    background: rgba(255,255,255,0.04);
    transform: translateY(-4px);
    box-shadow: 0 20px 60px rgba(0,0,0,0.3), 0 0 40px rgba(113,178,72,0.05);
  }

  .f-card:hover::before { opacity: 1; }

  .f-icon {
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, rgba(113,178,72,0.12), rgba(78,205,196,0.08));
    border: 1px solid rgba(113,178,72,0.15);
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    font-size: 22px;
    transition: transform 0.3s ease;
  }

  .f-card:hover .f-icon { transform: scale(1.1) rotate(-3deg); }

  .f-title {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 600;
    font-size: 18px;
    color: ${BRAND.textPrimary};
    margin-bottom: 10px;
  }

  .f-desc {
    font-size: 14px;
    color: ${BRAND.textSecondary};
    line-height: 1.7;
  }

  /* ── How it works ── */
  .howto {
    position: relative;
    z-index: 5;
    max-width: 900px;
    margin: 0 auto;
    padding: 40px 48px 120px;
  }

  .howto-header {
    text-align: center;
    margin-bottom: 64px;
  }

  .howto-header .section-desc {
    margin: 0 auto;
  }

  .steps {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    position: relative;
  }

  .steps::before {
    content: '';
    position: absolute;
    top: 36px;
    left: 15%;
    right: 15%;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${BRAND.border}, ${BRAND.border}, transparent);
    z-index: 0;
  }

  .step-card {
    text-align: center;
    position: relative;
    z-index: 1;
  }

  .step-num {
    width: 72px;
    height: 72px;
    margin: 0 auto 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    font-size: 24px;
    color: ${BRAND.green};
    background: ${BRAND.bgAlt};
    border: 2px solid rgba(113,178,72,0.2);
    transition: all 0.3s ease;
    position: relative;
  }

  .step-num::after {
    content: '';
    position: absolute;
    inset: -6px;
    border-radius: 50%;
    border: 1px solid rgba(113,178,72,0.08);
  }

  .step-card:hover .step-num {
    border-color: ${BRAND.green};
    background: rgba(113,178,72,0.1);
    box-shadow: 0 0 30px rgba(113,178,72,0.15);
    transform: scale(1.05);
  }

  .step-title {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 600;
    font-size: 18px;
    color: ${BRAND.textPrimary};
    margin-bottom: 8px;
  }

  .step-desc {
    font-size: 14px;
    color: ${BRAND.textSecondary};
    line-height: 1.65;
    max-width: 240px;
    margin: 0 auto;
  }

  /* ── Testimonials ── */
  .testimonials {
    position: relative;
    z-index: 5;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 48px 120px;
  }

  .testimonials-header {
    text-align: center;
    margin-bottom: 56px;
  }

  .testimonials-header .section-desc {
    margin: 0 auto;
  }

  .t-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  .t-card {
    background: rgba(255,255,255,0.02);
    border: 1px solid ${BRAND.border};
    border-radius: 20px;
    padding: 32px;
    transition: all 0.3s ease;
  }

  .t-card:hover {
    border-color: rgba(113,178,72,0.15);
    background: rgba(255,255,255,0.04);
  }

  .t-stars {
    color: #fbbf24;
    font-size: 14px;
    letter-spacing: 2px;
    margin-bottom: 16px;
  }

  .t-quote {
    font-size: 15px;
    color: ${BRAND.textSecondary};
    line-height: 1.7;
    margin-bottom: 20px;
    font-style: italic;
  }

  .t-author {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .t-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(113,178,72,0.2), rgba(78,205,196,0.15));
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 14px;
    color: ${BRAND.green};
  }

  .t-name {
    font-weight: 600;
    font-size: 14px;
    color: ${BRAND.textPrimary};
  }

  .t-role {
    font-size: 12px;
    color: ${BRAND.textMuted};
  }

  /* ── CTA section ── */
  .final-cta {
    position: relative;
    z-index: 5;
    margin: 0 48px 80px;
    border-radius: 28px;
    padding: 80px 48px;
    text-align: center;
    overflow: hidden;
    background: linear-gradient(135deg, rgba(113,178,72,0.08), rgba(78,205,196,0.04));
    border: 1px solid rgba(113,178,72,0.15);
  }

  .final-cta::before {
    content: '';
    position: absolute;
    top: -100px;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    height: 300px;
    background: radial-gradient(ellipse, rgba(113,178,72,0.15), transparent 70%);
    pointer-events: none;
  }

  .final-cta::after {
    content: '';
    position: absolute;
    bottom: -80px;
    left: 50%;
    transform: translateX(-50%);
    width: 500px;
    height: 250px;
    background: radial-gradient(ellipse, rgba(78,205,196,0.08), transparent 70%);
    pointer-events: none;
  }

  .final-cta-title {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    font-size: clamp(32px, 5vw, 52px);
    letter-spacing: -2px;
    color: ${BRAND.textPrimary};
    margin-bottom: 16px;
    position: relative;
  }

  .final-cta-sub {
    font-size: 18px;
    color: ${BRAND.textSecondary};
    margin-bottom: 40px;
    position: relative;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
  }

  .cta-benefits {
    display: flex;
    gap: 12px;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 40px;
    position: relative;
  }

  .benefit-chip {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: ${BRAND.textSecondary};
    background: rgba(255,255,255,0.04);
    backdrop-filter: blur(10px);
    border: 1px solid ${BRAND.border};
    padding: 10px 20px;
    border-radius: 100px;
    transition: all 0.2s ease;
  }

  .benefit-chip:hover {
    border-color: rgba(113,178,72,0.2);
    background: rgba(255,255,255,0.06);
  }

  .benefit-dot {
    width: 6px;
    height: 6px;
    background: ${BRAND.green};
    border-radius: 50%;
    flex-shrink: 0;
  }

  /* ── Footer ── */
  .footer {
    position: relative;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 32px 48px;
    border-top: 1px solid ${BRAND.border};
    font-size: 13px;
    color: ${BRAND.textMuted};
  }

  .footer-links {
    display: flex;
    gap: 24px;
  }

  .footer-links a {
    color: ${BRAND.textMuted};
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .footer-links a:hover {
    color: ${BRAND.textSecondary};
  }

  /* ── Responsive ── */
  @media (max-width: 768px) {
    .nav { padding: 14px 20px; }
    .nav-cta span { display: none; }
    .hero { padding: 120px 20px 60px; }
    .hero-headline { letter-spacing: -1.5px; }
    .stats { padding: 0 20px; }
    .stats-grid { grid-template-columns: repeat(2, 1fr); }
    .features { padding: 80px 20px; }
    .features-grid { grid-template-columns: 1fr; gap: 12px; }
    .howto { padding: 40px 20px 80px; }
    .steps { grid-template-columns: 1fr; gap: 32px; }
    .steps::before { display: none; }
    .testimonials { padding: 0 20px 80px; }
    .t-grid { grid-template-columns: 1fr; }
    .final-cta { margin: 0 20px 60px; padding: 48px 24px; }
    .footer { flex-direction: column; gap: 16px; padding: 24px 20px; text-align: center; }
  }

  @media (max-width: 480px) {
    .hero-cta-row { flex-direction: column; width: 100%; }
    .btn-primary, .btn-secondary { width: 100%; justify-content: center; }
    .hero-trust { flex-direction: column; gap: 8px; }
  }
`;

const features = [
  {
    icon: "⚡",
    title: "IA lista para usar",
    desc: "Sin configuración. Sin curva de aprendizaje. Entras y ya tienes un copiloto de negocios activo.",
  },
  {
    icon: "📊",
    title: "Análisis financiero al instante",
    desc: "Sube tus números o escríbelos. La plataforma te dice qué está pasando y qué hacer al respecto.",
  },
  {
    icon: "🎯",
    title: "Estrategia y decisiones",
    desc: "Desde precios hasta roles de tu equipo. Profit120 te da contexto real para tomar mejores decisiones.",
  },
  {
    icon: "🗂️",
    title: "Módulos por área del negocio",
    desc: "Marketing, operaciones, finanzas, ventas. Todo estructurado para que no se te escape nada.",
  },
  {
    icon: "🔒",
    title: "Privado y seguro",
    desc: "Tu información es tuya. Sin compartir datos con terceros. El modo invitado es 100% gratuito.",
  },
  {
    icon: "🧠",
    title: "Entrenada en negocios reales",
    desc: "No es un chatbot genérico. Profit120 fue diseñada específicamente para emprendedores y PYMEs.",
  },
];

const steps = [
  {
    num: "1",
    title: "Entra como invitado",
    desc: "Un clic. Sin formularios, sin contraseñas, sin verificación de correo.",
  },
  {
    num: "2",
    title: "Elige tu módulo",
    desc: "Finanzas, marketing, equipo, estrategia — lo que más te urge resolver hoy.",
  },
  {
    num: "3",
    title: "Obtén resultados",
    desc: "Hazle preguntas, sube datos, pídele análisis. Como tener un socio experto 24/7.",
  },
];

const testimonials = [
  {
    stars: 5,
    quote: "Nunca pensé que una herramienta de IA realmente entendiera mi negocio. Profit120 me ayudó a reestructurar mis precios en 20 minutos.",
    name: "Carlos M.",
    role: "Dueño de restaurante",
    initials: "CM",
  },
  {
    stars: 5,
    quote: "Lo probé como invitado por curiosidad y terminé comprando el plan completo. La sección de finanzas sola vale oro.",
    name: "Ana L.",
    role: "Fundadora de e-commerce",
    initials: "AL",
  },
  {
    stars: 5,
    quote: "Mi contador me cobra por lo que Profit120 me da en segundos. La análisis de flujo de caja me ahorró miles de pesos.",
    name: "Roberto S.",
    role: "Director de agencia",
    initials: "RS",
  },
];

const benefits = [
  "Sin registro",
  "Sin tarjeta de crédito",
  "Sin límite de tiempo",
  "100% gratis para probar",
];

const CheckIcon = () => (
  <svg className="trust-check" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" />
    <path d="M5 8.5l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function GuestLanding() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <style>{styles}</style>
      <div className="page">
        {/* Aurora background */}
        <div className="aurora">
          <div className="aurora-blob" />
          <div className="aurora-blob" />
          <div className="aurora-blob" />
        </div>
        <div className="grid-overlay" />

        {/* Nav */}
        <nav className={`nav${scrolled ? " scrolled" : ""}`}>
          <div className="nav-logo">
            Profit<span>120</span>
          </div>
          <a
            href="https://app.profit120.com/guest"
            className="nav-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Probar gratis <span>→</span>
          </a>
        </nav>

        {/* Hero */}
        <section className="hero">
          <Reveal delay={0}>
            <div className="hero-badge">
              <span className="badge-dot" />
              Plataforma de IA para negocios
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="hero-headline">
              Ponle inteligencia<br />
              <span className="gradient-text">a tu negocio.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="hero-sub">
              Profit120 es el copiloto de IA que analiza, diagnostica y te dice
              exactamente qué hacer para crecer. Pruébalo ahora — sin registro,
              sin tarjeta, sin excusas.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="hero-cta-row">
              <a
                href="https://app.profit120.com/guest"
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Entrar como invitado
                <span className="btn-arrow">→</span>
              </a>
              <a href="#como-funciona" className="btn-secondary">
                Ver cómo funciona
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="hero-trust">
              <div className="trust-item">
                <CheckIcon />
                Sin registro
              </div>
              <div className="trust-item">
                <CheckIcon />
                Sin tarjeta
              </div>
              <div className="trust-item">
                <CheckIcon />
                Acceso inmediato
              </div>
            </div>
          </Reveal>
        </section>

        {/* Stats */}
        <Reveal>
          <div className="stats">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-num">
                  <AnimatedNum value="80" prefix="+" />
                </div>
                <div className="stat-label">Negocios acompañados</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">
                  <AnimatedNum value="6" />
                </div>
                <div className="stat-label">Módulos activos</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">$0</div>
                <div className="stat-label">Para empezar</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">
                  <AnimatedNum value="100" suffix="%" />
                </div>
                <div className="stat-label">IA para PYMEs</div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Features */}
        <section className="features">
          <div className="features-header">
            <Reveal>
              <div className="section-eyebrow">
                <span className="eyebrow-line" />
                Lo que te espera adentro
                <span className="eyebrow-line" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="section-heading">
                Una plataforma hecha para<br />emprendedores reales
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="section-desc">
                Herramientas de IA diseñadas para resolver problemas de negocio reales, no demos bonitas.
              </p>
            </Reveal>
          </div>
          <div className="features-grid">
            {features.map((f, i) => (
              <Reveal key={i} delay={0.05 * i}>
                <div className="f-card">
                  <div className="f-icon">{f.icon}</div>
                  <h3 className="f-title">{f.title}</h3>
                  <p className="f-desc">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* How to */}
        <section className="howto" id="como-funciona">
          <div className="howto-header">
            <Reveal>
              <div className="section-eyebrow">
                <span className="eyebrow-line" />
                Así de fácil
                <span className="eyebrow-line" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="section-heading">
                3 pasos para probarlo hoy
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="section-desc">
                No necesitas aprender nada nuevo. Si puedes escribir un mensaje, puedes usar Profit120.
              </p>
            </Reveal>
          </div>
          <div className="steps">
            {steps.map((s, i) => (
              <Reveal key={i} delay={0.1 * i}>
                <div className="step-card">
                  <div className="step-num">{s.num}</div>
                  <h3 className="step-title">{s.title}</h3>
                  <p className="step-desc">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials">
          <div className="testimonials-header">
            <Reveal>
              <div className="section-eyebrow">
                <span className="eyebrow-line" />
                Lo que dicen nuestros usuarios
                <span className="eyebrow-line" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="section-heading">
                Resultados reales de<br />negocios reales
              </h2>
            </Reveal>
          </div>
          <div className="t-grid">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={0.08 * i}>
                <div className="t-card">
                  <div className="t-stars">{"★".repeat(t.stars)}</div>
                  <p className="t-quote">"{t.quote}"</p>
                  <div className="t-author">
                    <div className="t-avatar">{t.initials}</div>
                    <div>
                      <div className="t-name">{t.name}</div>
                      <div className="t-role">{t.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <Reveal>
          <div className="final-cta">
            <h2 className="final-cta-title">
              ¿Listo para tomar<br />mejores decisiones?
            </h2>
            <p className="final-cta-sub">
              Tu competencia ya está usando IA. Entra ahora, gratis, y ponle
              inteligencia a cada decisión de tu negocio.
            </p>
            <div className="cta-benefits">
              {benefits.map((b, i) => (
                <div className="benefit-chip" key={i}>
                  <span className="benefit-dot" />
                  {b}
                </div>
              ))}
            </div>
            <a
              href="https://app.profit120.com/guest"
              className="btn-primary"
              style={{ fontSize: "18px", padding: "20px 48px" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Entrar como invitado — es gratis
              <span className="btn-arrow">→</span>
            </a>
          </div>
        </Reveal>

        {/* Footer */}
        <footer className="footer">
          <span>© {new Date().getFullYear()} Profit120. Todos los derechos reservados.</span>
          <div className="footer-links">
            <a href="https://app.profit120.com/guest">Acceso invitado</a>
          </div>
        </footer>
      </div>
    </>
  );
}
