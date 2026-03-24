import { useState, useEffect, useRef } from "react";
import { GlobeInteractive } from "../components/ui/cobe-globe-interactive";
import { ProjectShowcase } from "../components/ui/project-showcase";

const BRAND = {
  bg: "#ffffff",
  bgAlt: "#ffffff",
  surface: "rgba(255,255,255,0.88)",
  surfaceHover: "rgba(255,255,255,0.98)",
  green: "#27c927",
  greenLight: "#52df52",
  greenDim: "#1e9f1e",
  greenGlow: "rgba(39,201,39,0.12)",
  greenGlow2: "rgba(39,201,39,0.06)",
  gradientStart: "#27c927",
  gradientEnd: "#52df52",
  textPrimary: "#191712",
  textSecondary: "#5f5a52",
  textMuted: "#7d766d",
  border: "rgba(25,23,18,0.1)",
  borderHover: "rgba(39,201,39,0.3)",
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
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

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
    background: rgba(39,201,39,0.3);
    color: #052905;
  }

  .page {
    min-height: 100vh;
    position: relative;
  }

  /* ── Background ── */
  .aurora { display: none; }

  /* ── Grid overlay ── */
  .grid-overlay { display: none; }

  /* ── Navigation ── */
  .promo-strip {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 120;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 16px;
    background: rgba(248,248,248,0.96);
    border-bottom: 1px solid rgba(25,23,18,0.08);
    color: ${BRAND.textPrimary};
    font-size: 13px;
    font-weight: 700;
    letter-spacing: -0.01em;
    text-align: center;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  .promo-strip span {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 5px 14px;
    border-radius: 999px;
    background: linear-gradient(180deg, rgba(255,255,255,0.9), rgba(243,243,243,0.92));
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,0.96),
      0 1px 0 rgba(255,255,255,0.86);
  }

  .promo-strip span::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${BRAND.green};
    box-shadow: 0 0 0 4px rgba(39,201,39,0.12);
    flex-shrink: 0;
  }

  .nav {
    position: fixed;
    top: 38px;
    left: 0;
    right: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 22px 48px;
    transition: all 0.3s ease;
  }

  .nav.scrolled {
    background: rgba(255,255,255,0.9);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-bottom: 1px solid ${BRAND.border};
  }

  .nav-logo {
    display: flex;
    align-items: center;
    line-height: 0;
  }

  .nav-logo img {
    display: block;
    height: 34px;
    width: auto;
  }

  .nav-cta {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0;
    text-transform: none;
    color: #052905;
    background: ${BRAND.bgAlt};
    padding: 12px 20px;
    border-radius: 999px;
    border: 1px solid rgba(25,23,18,0.12);
    cursor: pointer;
    text-decoration: none;
    transition: all 0.25s ease;
    box-shadow: none;
    animation: none;
  }

  .nav-cta:hover {
    transform: translateY(-1px);
    border-color: rgba(39,201,39,0.28);
    background: rgba(39,201,39,0.04);
  }

  /* ── Hero ── */
  .hero {
    position: relative;
    z-index: 5;
    display: grid;
    grid-template-columns: minmax(0, 760px) 340px;
    column-gap: 36px;
    row-gap: 4px;
    align-items: center;
    padding: 182px 16px 72px;
    max-width: 1260px;
    margin: 0 auto;
    justify-content: space-between;
  }

  .hero-copy {
    position: relative;
    width: 100%;
    max-width: 760px;
    margin: -8px 0 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
    min-height: 0;
    z-index: 1;
    justify-self: start;
  }

  .hero-media {
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    min-height: 520px;
    z-index: 1;
    justify-self: end;
    width: 340px;
  }

  .hero-globe {
    position: absolute;
    inset: 58% auto auto 50%;
    transform: translate(-50%, -50%);
    width: min(132vw, 1320px);
    opacity: 0.1;
    filter: saturate(0.7);
    pointer-events: auto;
    z-index: 0;
  }

  .hero-headline {
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: clamp(34px, 4.35vw, 64px);
    line-height: 0.98;
    letter-spacing: -2px;
    color: ${BRAND.textPrimary};
    margin-bottom: 0;
    position: relative;
    z-index: 1;
    text-align: left;
  }

  .hero-line {
    display: block;
  }

  .hero-line.top {
    white-space: nowrap;
  }

  .hero-line.middle {
    color: ${BRAND.green};
    white-space: nowrap;
  }

  .hero-line.bottom {
    white-space: nowrap;
  }

  .hero-sub {
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    font-size: clamp(13px, 1.15vw, 14px);
    font-weight: 700;
    color: #083108;
    line-height: 1.3;
    max-width: none;
    margin: 0 0 28px;
    padding: 10px 16px;
    background:
      linear-gradient(135deg, rgba(255,255,255,0.55), rgba(39,201,39,0.2) 38%, rgba(82,223,82,0.42));
    border: 1px solid rgba(255,255,255,0.68);
    border-radius: 999px;
    box-shadow:
      0 14px 34px rgba(39,201,39,0.16),
      0 0 0 1px rgba(39,201,39,0.12),
      inset 0 1px 0 rgba(255,255,255,0.92),
      inset 0 -10px 24px rgba(39,201,39,0.12);
    z-index: 1;
    overflow: hidden;
    letter-spacing: 0;
    text-align: left;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    transform: translateY(-34px);
  }

  .hero-sub::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      linear-gradient(180deg, rgba(255,255,255,0.76), rgba(255,255,255,0.14) 48%, transparent 70%);
    pointer-events: none;
  }

  .hero-sub::after {
    content: '';
    position: absolute;
    inset: auto 14px 7px 14px;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
    opacity: 0.55;
  }

  .hero-cta-row {
    display: flex;
    align-items: stretch;
    gap: 12px;
    flex-wrap: nowrap;
    justify-content: flex-start;
    margin-top: 42px;
    width: 100%;
    max-width: 940px;
  }

  .hero-vsl {
    width: 100%;
    max-width: 340px;
    justify-self: end;
    margin-left: auto;
  }

  .hero-vsl .vsl-card {
    max-width: 340px;
  }

  .hero-vsl .vsl-frame {
    border-radius: 24px;
    box-shadow: 0 20px 44px rgba(15,23,42,0.12), 0 0 0 1px rgba(39,201,39,0.08);
  }

  .hero-vsl-embed {
    position: relative;
    aspect-ratio: 9 / 16;
    border-radius: 24px;
    overflow: hidden;
    background: #000;
    border: 1px solid rgba(39,201,39,0.12);
    box-shadow: 0 20px 44px rgba(15,23,42,0.12), 0 0 0 1px rgba(39,201,39,0.08);
  }

  .hero-vsl-embed iframe {
    width: 100%;
    height: 100%;
    border: 0;
    display: block;
  }

  .hero-offer-card {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 74px;
    flex: 1 1 auto;
    padding: 0 22px;
    border-radius: 22px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,0.92);
    background:
      linear-gradient(180deg, rgba(255,255,255,0.72), rgba(255,255,255,0.26)),
      linear-gradient(135deg, rgba(39,201,39,0.06), rgba(255,255,255,0.16));
    backdrop-filter: blur(22px) saturate(180%);
    -webkit-backdrop-filter: blur(22px) saturate(180%);
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,0.98),
      inset 0 -18px 30px rgba(255,255,255,0.16),
      0 12px 28px rgba(25,23,18,0.06),
      0 1px 0 rgba(255,255,255,0.65);
  }

  .hero-offer-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      linear-gradient(180deg, rgba(255,255,255,0.92), rgba(255,255,255,0.18) 38%, transparent 74%),
      radial-gradient(circle at top left, rgba(39,201,39,0.08), transparent 38%);
    opacity: 1;
    pointer-events: none;
  }

  .hero-offer-card::after {
    content: '';
    position: absolute;
    inset: auto 18px 1px 18px;
    height: 1px;
    border-radius: 999px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.86), transparent);
    pointer-events: none;
  }

  .hero-offer-card .glass-flare {
    position: absolute;
    top: 7px;
    left: 16px;
    width: 34%;
    height: 42%;
    border-radius: 999px;
    background: linear-gradient(180deg, rgba(255,255,255,0.82), rgba(255,255,255,0.14));
    filter: blur(10px);
    opacity: 0.8;
    pointer-events: none;
  }

  .hero-offer-title {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    gap: 8px;
    text-align: center;
    line-height: 1;
    font-weight: 800;
    letter-spacing: -0.9px;
    white-space: nowrap;
  }

  .hero-offer-title strong {
    font-size: clamp(21px, 2.2vw, 29px);
    color: ${BRAND.textPrimary};
  }

  .hero-offer-title span {
    font-size: clamp(21px, 2.2vw, 29px);
    color: ${BRAND.green};
  }

  .btn-primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: ${BRAND.green};
    color: #000;
    font-family: 'Inter', sans-serif;
    font-size: clamp(18px, 1.55vw, 22px);
    font-weight: 800;
    letter-spacing: -0.5px;
    text-transform: none;
    padding: 0 28px;
    min-height: 74px;
    min-width: 250px;
    border-radius: 22px;
    border: 1px solid rgba(17,55,17,0.08);
    cursor: pointer;
    text-decoration: none;
    white-space: nowrap;
    transition: all 0.25s cubic-bezier(0.16,1,0.3,1);
    position: relative;
    overflow: hidden;
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,0.26),
      0 10px 22px rgba(39,201,39,0.16);
    animation: heroCtaPulse 2.2s ease-in-out infinite;
    flex: 0 0 248px;
  }

  .btn-primary::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(120deg, transparent 10%, rgba(255,255,255,0.26) 38%, rgba(255,255,255,0.08) 52%, transparent 72%);
    transform: translateX(-100%);
    animation: heroCtaSweep 2.8s ease-in-out infinite;
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    background: ${BRAND.greenDim};
  }

  .btn-primary:active { transform: scale(0.98); }

  @keyframes heroCtaPulse {
    0%, 100% {
      box-shadow:
        inset 0 1px 0 rgba(255,255,255,0.26),
        0 10px 22px rgba(39,201,39,0.16);
    }
    50% {
      box-shadow:
        inset 0 1px 0 rgba(255,255,255,0.3),
        0 14px 28px rgba(39,201,39,0.2);
    }
  }

  @keyframes heroCtaSweep {
    0%, 25% { transform: translateX(-100%); }
    60%, 100% { transform: translateX(120%); }
  }

  .btn-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    background: transparent;
    border-radius: 0;
    transition: transform 0.2s ease;
    position: relative;
    z-index: 1;
    line-height: 1;
  }

  .btn-arrow svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  .btn-primary:hover .btn-arrow { transform: translateX(3px); }

  .hero-trust {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 40px;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
    max-width: 760px;
    justify-self: start;
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

  /* ── Section common ── */
  .section-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    font-weight: 600;
    color: ${BRAND.textMuted};
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  .eyebrow-line {
    width: 24px;
    height: 1px;
    background: rgba(25,23,18,0.14);
  }

  .section-heading {
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: clamp(34px, 5vw, 60px);
    letter-spacing: -1.8px;
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
    padding: 32px 48px 100px;
  }

  .features-header {
    text-align: center;
    margin-bottom: 40px;
  }

  .features-header .section-desc {
    margin: 0 auto;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 20px;
  }

  .features-grid .f-card:first-child {
    grid-column: auto;
    min-height: 0;
  }

  .features-grid .f-card:nth-child(2) {
    grid-column: auto;
  }

  .features-grid .f-card:nth-child(n+3) {
    grid-column: auto;
  }

  .f-card {
    background: rgba(255,255,255,0.88);
    border: 1px solid ${BRAND.border};
    border-radius: 24px;
    padding: 34px;
    aspect-ratio: 1 / 1;
    min-height: 0;
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
    background: linear-gradient(90deg, transparent, rgba(39,201,39,0.4), transparent);
    opacity: 0;
    transition: opacity 0.35s ease;
  }

  .f-card:hover {
    border-color: rgba(39,201,39,0.2);
    background: rgba(255,255,255,0.98);
    transform: translateY(-3px);
    box-shadow: 0 18px 30px rgba(15,23,42,0.06);
  }

  .f-card:hover::before { opacity: 1; }

  .f-icon {
    width: 56px;
    height: 56px;
    background: rgba(39,201,39,0.08);
    border: 1px solid rgba(39,201,39,0.12);
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 22px;
    font-size: 20px;
    transition: transform 0.3s ease;
  }

  .f-card:hover .f-icon { transform: scale(1.04); }

  .f-kicker {
    display: inline-block;
    margin-bottom: 14px;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    color: ${BRAND.greenDim};
  }

  .f-title {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 22px;
    color: ${BRAND.textPrimary};
    margin-bottom: 12px;
  }

  .f-desc {
    font-size: 16px;
    color: ${BRAND.textSecondary};
    line-height: 1.75;
  }

  .f-card.compact .f-title {
    font-size: 18px;
  }

  .f-card.compact .f-desc {
    font-size: 14px;
    line-height: 1.65;
  }

  /* ── Promo offer ── */
  .promo-offer {
    position: relative;
    z-index: 5;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 48px 100px;
  }

  .promo-offer-shell {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 28px;
    padding: 40px;
    border-radius: 24px;
    background:
      linear-gradient(180deg, rgba(255,253,248,0.98), rgba(247,245,239,0.92));
    border: 1px solid rgba(25,23,18,0.08);
    overflow: hidden;
    position: relative;
  }

  .promo-offer-shell::after { content: none; }

  .promo-copy {
    position: relative;
    z-index: 1;
  }

  .promo-kicker {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 18px;
    padding: 10px 16px;
    border-radius: 999px;
    background: transparent;
    border: 1px solid rgba(25,23,18,0.1);
    color: ${BRAND.textMuted};
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .promo-kicker-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${BRAND.green};
    animation: livePulse 2s infinite;
  }

  .promo-title {
    font-family: 'Inter', sans-serif;
    font-size: clamp(34px, 5vw, 54px);
    line-height: 1.03;
    letter-spacing: -1.4px;
    margin-bottom: 18px;
  }

  .promo-title span {
    color: ${BRAND.textPrimary};
  }

  .promo-desc {
    max-width: 620px;
    font-size: 17px;
    line-height: 1.75;
    color: ${BRAND.textSecondary};
    margin-bottom: 26px;
  }

  .promo-points {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
    margin-bottom: 30px;
  }

  .promo-point {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    padding: 16px;
    border-radius: 12px;
    background: rgba(255,255,255,0.65);
    border: 1px solid rgba(15,23,42,0.06);
  }

  .promo-point-icon {
    width: 34px;
    height: 34px;
    border-radius: 8px;
    background: rgba(39,201,39,0.14);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: ${BRAND.greenLight};
    flex-shrink: 0;
  }

  .promo-point strong {
    display: block;
    font-size: 15px;
    color: ${BRAND.textPrimary};
    margin-bottom: 4px;
  }

  .promo-point span {
    font-size: 13px;
    line-height: 1.6;
    color: ${BRAND.textSecondary};
  }

  .promo-visual {
    position: relative;
    min-height: 100%;
    display: flex;
    align-items: stretch;
  }

  .signal-panel {
    width: 100%;
    min-height: 320px;
    border-radius: 20px;
    padding: 24px;
    background:
      linear-gradient(180deg, rgba(255,255,255,0.96), rgba(245,245,245,0.92)),
      ${BRAND.bgAlt};
    border: 1px solid rgba(25,23,18,0.08);
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.6), 0 20px 50px rgba(15,23,42,0.08);
    position: relative;
    overflow: hidden;
  }

  .signal-panel::before {
    content: '';
    position: absolute;
    inset: auto -40px -70px auto;
    width: 220px;
    height: 220px;
    background: radial-gradient(circle, rgba(39,201,39,0.2), transparent 65%);
    pointer-events: none;
  }

  .signal-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
  }

  .signal-label {
    font-size: 12px;
    color: ${BRAND.textMuted};
    text-transform: uppercase;
    letter-spacing: 1.6px;
  }

  .signal-live {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    border-radius: 999px;
    background: rgba(39,201,39,0.06);
    border: 1px solid rgba(39,201,39,0.1);
    color: ${BRAND.greenDim};
    font-size: 12px;
    font-weight: 600;
  }

  .signal-bars {
    height: 170px;
    display: flex;
    align-items: end;
    gap: 12px;
    margin-bottom: 24px;
  }

  .signal-bar {
    flex: 1;
    border-radius: 8px 8px 4px 4px;
    background: linear-gradient(180deg, ${BRAND.greenLight}, rgba(39,201,39,0.25));
    box-shadow: 0 0 20px rgba(39,201,39,0.16);
    animation: barPulse 3s ease-in-out infinite;
    transform-origin: bottom;
  }

  .signal-bar:nth-child(2) { animation-delay: 0.2s; }
  .signal-bar:nth-child(3) { animation-delay: 0.4s; }
  .signal-bar:nth-child(4) { animation-delay: 0.6s; }
  .signal-bar:nth-child(5) { animation-delay: 0.8s; }

  @keyframes barPulse {
    0%, 100% { transform: scaleY(0.9); opacity: 0.8; }
    50% { transform: scaleY(1.05); opacity: 1; }
  }

  .signal-cards {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }

  .signal-card {
    padding: 14px;
    border-radius: 16px;
    background: rgba(255,255,255,0.82);
    border: 1px solid rgba(15,23,42,0.06);
  }

  .signal-card strong {
    display: block;
    color: ${BRAND.textPrimary};
    font-size: 20px;
    margin-bottom: 4px;
  }

  .signal-card span {
    font-size: 12px;
    color: ${BRAND.textSecondary};
    line-height: 1.5;
  }

  /* ── Inline shorts ── */
  .short-inline {
    position: relative;
    z-index: 5;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 48px 56px;
  }

  .short-inline.float-left {
    display: flex;
    justify-content: flex-start;
  }

  .short-inline.float-right {
    display: flex;
    justify-content: flex-end;
  }

  .short-inline-asset {
    width: 100%;
    max-width: 280px;
  }

  .vsl-card {
    position: relative;
    width: 100%;
    max-width: 280px;
    border-radius: 18px;
    padding: 0;
    background: transparent;
    border: none;
    overflow: hidden;
  }

  .vsl-card::before {
    content: none;
  }

  .vsl-frame {
    position: relative;
    aspect-ratio: 9 / 16;
    border-radius: 18px;
    overflow: hidden;
    background: #dfe8d8;
    border: 1px solid rgba(39,201,39,0.18);
    box-shadow: 0 14px 34px rgba(15,23,42,0.1), 0 0 0 1px rgba(39,201,39,0.08);
  }

  .vsl-frame img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  .vsl-link {
    display: block;
    text-decoration: none;
    color: inherit;
  }

  .vsl-play {
    position: absolute;
    top: 10px;
    left: 10px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    border-radius: 999px;
    background: rgba(255,255,255,0.82);
    border: 1px solid rgba(39,201,39,0.18);
    color: ${BRAND.textPrimary};
    font-size: 11px;
    font-weight: 600;
    backdrop-filter: blur(12px);
  }

  .vsl-center-play {
    position: absolute;
    inset: auto auto 16px 16px;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 12px 16px;
    border-radius: 999px;
    background: rgba(255,255,255,0.88);
    border: 1px solid rgba(39,201,39,0.22);
    color: ${BRAND.textPrimary};
    font-size: 12px;
    font-weight: 700;
    box-shadow: 0 10px 30px rgba(15,23,42,0.1);
  }

  .vsl-center-icon {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${BRAND.green};
    color: #041204;
    font-size: 12px;
    flex-shrink: 0;
  }

  .vsl-meta {
    position: relative;
    z-index: 1;
    padding: 18px 6px 6px;
  }

  .vsl-meta strong {
    display: block;
    font-size: 18px;
    margin-bottom: 8px;
  }

  .vsl-meta p {
    font-size: 14px;
    line-height: 1.7;
    color: ${BRAND.textSecondary};
    margin-bottom: 0;
  }

  .vsl-helper {
    color: ${BRAND.greenLight};
    font-size: 14px;
    font-weight: 600;
  }

  .vsl-helper code {
    color: ${BRAND.textPrimary};
    font-family: 'Inter', sans-serif;
  }

  /* ── How it works ── */
  .howto {
    position: relative;
    z-index: 5;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 48px 120px;
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
    grid-template-columns: repeat(3, minmax(0, 1fr));
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
    text-align: left;
    position: relative;
    z-index: 1;
    background: rgba(255,253,248,0.88);
    border: 1px solid rgba(25,23,18,0.08);
    border-radius: 20px;
    padding: 28px;
  }

  .step-num {
    width: 72px;
    height: 72px;
    margin: 0 0 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 24px;
    color: ${BRAND.green};
    background: ${BRAND.bgAlt};
    border: 2px solid rgba(39,201,39,0.2);
    transition: all 0.3s ease;
    position: relative;
  }

  .step-num::after {
    content: '';
    position: absolute;
    inset: -6px;
    border-radius: 50%;
    border: 1px solid rgba(39,201,39,0.08);
  }

  .step-card:hover .step-num {
    border-color: ${BRAND.green};
    background: rgba(39,201,39,0.1);
    box-shadow: 0 0 30px rgba(39,201,39,0.15);
    transform: scale(1.05);
  }

  .step-title {
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 18px;
    color: ${BRAND.textPrimary};
    margin-bottom: 8px;
  }

  .step-desc {
    font-size: 14px;
    color: ${BRAND.textSecondary};
    line-height: 1.65;
    max-width: none;
    margin: 0;
  }

  /* ── Testimonials ── */
  .testimonials {
    position: relative;
    z-index: 5;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 48px 100px;
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
    background: rgba(255,255,255,0.88);
    border: 1px solid ${BRAND.border};
    border-radius: 20px;
    padding: 32px;
    transition: all 0.3s ease;
  }

  .t-card:hover {
    border-color: rgba(39,201,39,0.15);
    background: rgba(255,255,255,0.98);
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
    background: linear-gradient(135deg, rgba(39,201,39,0.2), rgba(82,223,82,0.15));
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
    border-radius: 24px;
    padding: 80px 48px;
    text-align: center;
    overflow: hidden;
    background: linear-gradient(180deg, rgba(39,201,39,0.08), rgba(255,255,255,0.98));
    border: 1px solid rgba(25,23,18,0.08);
  }

  .final-cta::before {
    content: '';
    position: absolute;
    top: -100px;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    height: 300px;
    background: radial-gradient(ellipse, rgba(39,201,39,0.15), transparent 70%);
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
    background: radial-gradient(ellipse, rgba(82,223,82,0.08), transparent 70%);
    pointer-events: none;
  }

  .final-cta-title {
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: clamp(32px, 5vw, 52px);
    letter-spacing: -1.4px;
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
    background: rgba(255,255,255,0.82);
    backdrop-filter: blur(10px);
    border: 1px solid ${BRAND.border};
    padding: 10px 20px;
    border-radius: 100px;
    transition: all 0.2s ease;
  }

  .benefit-chip:hover {
    border-color: rgba(39,201,39,0.2);
    background: rgba(255,255,255,0.98);
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
    .promo-strip { height: 34px; font-size: 12px; padding: 0 12px; }
    .promo-strip span { padding: 4px 10px; gap: 7px; }
    .nav { padding: 14px 20px; }
    .nav-cta span { display: none; }
    .hero { grid-template-columns: 1fr; row-gap: 8px; column-gap: 0; padding: 142px 20px 60px; }
    .hero-headline { letter-spacing: -1.3px; font-size: clamp(34px, 8vw, 52px); }
    .hero-copy { margin-bottom: -14px; }
    .hero-media { min-height: 0; justify-content: center; }
    .hero-globe { width: min(156vw, 860px); opacity: 0.1; inset: 67% auto auto 50%; }
    .hero-headline { margin-bottom: 0; }
    .hero-sub { padding: 12px 16px; border-radius: 999px; margin: 0 0 20px; transform: translateY(-20px); }
    .hero-cta-row { gap: 10px; margin-top: 18px; flex-wrap: wrap; }
    .hero-vsl { max-width: 260px; justify-self: center; }
    .hero-offer-card { min-height: 0; padding: 0 18px; border-radius: 20px; flex-basis: 100%; min-height: 64px; }
    .hero-offer-title { gap: 6px; letter-spacing: -0.8px; white-space: normal; }
    .hero-offer-title strong { font-size: clamp(22px, 7vw, 30px); }
    .hero-offer-title span { font-size: clamp(22px, 7vw, 30px); }
    .btn-primary { min-height: 64px; min-width: 0; width: 100%; padding: 0 22px; border-radius: 20px; font-size: clamp(20px, 6vw, 28px); flex-basis: 100%; }
    .btn-arrow { width: 28px; height: 28px; font-size: 15px; }
    .hero-line.top,
    .hero-line.middle,
    .hero-line.bottom { white-space: normal; }
    .promo-offer { padding: 24px 20px 80px; }
    .promo-offer-shell { grid-template-columns: 1fr; padding: 22px; }
    .promo-points { grid-template-columns: 1fr; }
    .signal-panel { min-height: 320px; }
    .features { padding: 20px 20px 72px; }
    .features-grid { grid-template-columns: 1fr; gap: 12px; }
    .features-grid .f-card:first-child { grid-column: auto; }
    .features-grid .f-card:nth-child(2),
    .features-grid .f-card:nth-child(n+3) { grid-column: auto; }
    .f-card { aspect-ratio: auto; }
    .howto { padding: 0 20px 80px; }
    .steps { grid-template-columns: 1fr; gap: 32px; }
    .steps::before { display: none; }
    .short-inline { padding: 0 20px 36px; }
    .short-inline.float-left,
    .short-inline.float-right { justify-content: center; }
    .short-inline-asset,
    .vsl-card { max-width: 220px; }
    .testimonials { padding: 0 20px 80px; }
    .t-grid { grid-template-columns: 1fr; }
    .final-cta { margin: 0 20px 60px; padding: 48px 24px; }
    .footer { flex-direction: column; gap: 16px; padding: 24px 20px; text-align: center; }
  }

  @media (max-width: 480px) {
    .hero-cta-row { flex-direction: column; width: 100%; }
    .btn-primary { width: 100%; justify-content: center; }
    .hero-trust { flex-direction: column; gap: 8px; }
  }
`;

const features = [
  {
    icon: "AI",
    kicker: "Tu centro de mando inteligente",
    title: "Profit BRAIN",
    desc: "Herramientas de IA que analizan, proyectan y aceleran las decisiones de tu empresa. Deja de adivinar y empieza a decidir con datos.",
    year: "IA",
    link: "https://app.profit120.com/guest",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: "24/7",
    kicker: "Tu consultor 24/7 con IA",
    title: "Profit CHAT",
    desc: "Pregunta lo que necesites sobre tu negocio y recibe respuestas estratégicas al instante. Como tener un asesor que nunca duerme.",
    year: "24/7",
    link: "https://app.profit120.com/guest",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: "20M",
    kicker: "Soluciones en 20 minutos",
    title: "Profit BOOST",
    desc: "Un problema real con una solución accionable. Frameworks, plantillas y herramientas para ejecutar hoy, no mañana.",
    year: "20M",
    link: "https://app.profit120.com/guest",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: "NEWS",
    kicker: "El newsletter que forma criterio",
    title: "Profit TALKS",
    desc: "Cada semana recibes el análisis que los directivos necesitan: tendencias, casos reales y marcos de decisión que se aplican de inmediato.",
    year: "NEWS",
    link: "https://app.profit120.com/guest",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: "LIVE",
    kicker: "Estrategia colaborativa en vivo",
    title: "Profit LABS",
    desc: "Tú y tu equipo, trabajando codo a codo para rediseñar decisiones con datos reales, IA y estructura accionable.",
    year: "LIVE",
    link: "https://app.profit120.com/guest",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
  },
];

const promoPoints = [
  {
    icon: "↗",
    title: "60 días sin costo",
    desc: "Entra hoy y usa toda la plataforma sin límites durante 60 días sin costo.",
  },
  {
    icon: "▣",
    title: "Acceso ilimitado para toda tu empresa",
    desc: "La promoción no es solo para una persona. El acceso está pensado para ti y todo tu equipo.",
  },
  {
    icon: "∞",
    title: "5 módulos estratégicos",
    desc: "Cada módulo fue diseñado para atacar un problema específico de tu empresa y acelerar resultados.",
  },
  {
    icon: "$",
    title: "Cero riesgo",
    desc: "60 días sin costo, acceso ilimitado y toda la plataforma disponible para validar si Profit120 hace sentido para ustedes.",
  },
];

const steps = [
  {
    num: "1",
    title: "Ingresa ahora",
    desc: "Entra directo a Profit120 y activa tu acceso promocional de 60 días sin costo, sin tarjeta y sin fricción innecesaria.",
  },
  {
    num: "2",
    title: "Conoce el producto de verdad",
    desc: "Explora módulos, haz preguntas y entiende cómo Profit120 puede ayudarte en distintas áreas de tu negocio.",
  },
  {
    num: "3",
    title: "Decide con evidencia",
    desc: "Úsalo durante tu prueba ilimitada y decide con experiencia real si es una herramienta para tu operación.",
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
  "60 días sin costo",
  "Acceso ilimitado",
  "Todo tu equipo",
  "Cero riesgo",
];

const promoTickerItems = [
  "60 días sin costo",
  "Acceso ilimitado para ti y toda tu empresa",
  "5 módulos estratégicos",
  "Toda la plataforma sin límites",
  "Cero riesgo",
];

const shorts = [
  {
    title: "Short 1: Que es Profit120",
    desc: "Usa este VSL para explicar rapidamente el producto, su propuesta de valor y por que vale la pena entrar ahora.",
    thumbUrl: "https://i.ytimg.com/vi/MMIO5xuowgg/hqdefault.jpg",
    watchUrl: "https://www.youtube.com/shorts/MMIO5xuowgg",
    helper: "Short de producto cargado.",
  },
  {
    title: "Short 2: Promoción 60 días sin costo",
    desc: "Usa este VSL para reforzar la promoción, eliminar objeciones y recordar que no se necesita tarjeta para probar.",
    thumbUrl: "https://i.ytimg.com/vi/cb7jEJX1i9A/hqdefault.jpg",
    watchUrl: "https://www.youtube.com/shorts/cb7jEJX1i9A",
    helper: "Short de promoción cargado.",
  },
];

const CheckIcon = () => (
  <svg className="trust-check" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" />
    <path d="M5 8.5l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowCornerIcon = () => (
  <svg viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path d="M3.75 14.25 13.2 4.8" stroke="currentColor" strokeWidth="2.7" strokeLinecap="round" />
    <path d="M7.2 4.8h6v6" stroke="currentColor" strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round" />
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
        <div className="promo-strip">
          <span>60 días sin costo. Acceso ilimitado para ti y toda tu empresa.</span>
        </div>
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
            <img src="/assets/Negro-Verde.png" alt="Profit120" />
          </div>
          <a
            href="https://app.profit120.com/guest"
            className="nav-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ingresa ahora <span>→</span>
          </a>
        </nav>

        {/* Hero */}
        <section className="hero">
          <div className="hero-globe">
            <GlobeInteractive speed={0.0026} />
          </div>

          <Reveal delay={0}>
            <div className="hero-copy">
              <p className="hero-sub">
                Entra hoy y usa toda la plataforma sin límites durante 60 días sin costo.
              </p>
              <h1 className="hero-headline">
                <span className="hero-line top">La plataforma de</span>
                <span className="hero-line middle">Inteligencia Empresarial</span>
                <span className="hero-line bottom">más avanzada de LATAM</span>
              </h1>
              <Reveal delay={0.1}>
                <div className="hero-cta-row">
                  <div className="hero-offer-card">
                    <span className="glass-flare" aria-hidden="true" />
                    <div className="hero-offer-title">
                      <strong>60 días</strong>
                      <span>sin costo</span>
                    </div>
                  </div>
                  <a
                    href="https://app.profit120.com/guest"
                    className="btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Entra Ahora
                    <span className="btn-arrow"><ArrowCornerIcon /></span>
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="hero-trust">
                  <div className="trust-item">
                    <CheckIcon />
                    60 días sin costo
                  </div>
                  <div className="trust-item">
                    <CheckIcon />
                    Todo tu equipo
                  </div>
                  <div className="trust-item">
                    <CheckIcon />
                    Acceso ilimitado
                  </div>
                </div>
              </Reveal>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="hero-media">
              <div className="hero-vsl">
                <div className="hero-vsl-embed">
                  <iframe
                    src="https://www.youtube.com/embed/MMIO5xuowgg?rel=0&modestbranding=1&playsinline=1"
                    title={shorts[0].title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Features */}
        <section className="features">
          <div className="features-header">
            <Reveal>
              <div className="section-eyebrow">
                <span className="eyebrow-line" />
               
                <span className="eyebrow-line" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="section-heading">
                ¿Qué desbloqueo con mi<br />prueba de 60 días?
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="section-desc">
                Al activar tu prueba por 60 días sin costo, desbloqueas todas las herremientas de la plataforma de manera ilimitada.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <ProjectShowcase
              projects={features.map((feature) => ({
                title: feature.title,
                description: feature.desc,
                year: feature.year,
                link: feature.link,
                image: feature.image,
                kicker: feature.kicker,
              }))}
            />
          </Reveal>
        </section>

        {/* Testimonials */}
        <section className="testimonials">
          <div className="testimonials-header">
            <Reveal>
              <div className="section-eyebrow">
              
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="section-heading">
                Cada producto resuelve un<br />problema específico de tu empresa
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="section-desc">
                Juntos, son imparables.
              </p>
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

        <section className="promo-offer">
          <div className="promo-offer-shell">
            <div className="promo-copy">
              <Reveal>
                <div className="promo-kicker">
                  <span className="promo-kicker-dot" />
                  Promoción especial
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="promo-title">
                  60 días sin costo.<br />
                  <span>Todo tu equipo. Cero riesgo.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="promo-desc">
                  Entra hoy y usa toda la plataforma sin límites durante 60 días sin costo.
                  Acceso ilimitado para ti y toda tu empresa.
                </p>
              </Reveal>
              <div className="promo-points">
                {promoPoints.map((point, index) => (
                  <Reveal key={point.title} delay={0.05 * index}>
                    <div className="promo-point">
                      <div className="promo-point-icon">{point.icon}</div>
                      <div>
                        <strong>{point.title}</strong>
                        <span>{point.desc}</span>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={0.22}>
                <div className="hero-cta-row" style={{ justifyContent: "flex-start" }}>
                  <a
                    href="https://app.profit120.com/guest"
                    className="btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pruébalo ahora
                    <span className="btn-arrow"><ArrowCornerIcon /></span>
                  </a>
                  <a href="#como-funciona" className="btn-secondary">
                    Ver cómo funciona
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.12} direction="left" className="promo-visual">
              <div className="signal-panel">
                <div className="signal-top">
                  <span className="signal-label">Resumen de la promoción</span>
                  <span className="signal-live">
                    <span className="promo-kicker-dot" />
                    Activa hoy
                  </span>
                </div>
                <div className="signal-bars" aria-hidden="true">
                  <div className="signal-bar" style={{ height: "46%" }} />
                  <div className="signal-bar" style={{ height: "68%" }} />
                  <div className="signal-bar" style={{ height: "58%" }} />
                  <div className="signal-bar" style={{ height: "82%" }} />
                  <div className="signal-bar" style={{ height: "100%" }} />
                </div>
                <div className="signal-cards">
                  <div className="signal-card">
                    <strong>60 días</strong>
                    <span>Sin costo para usar toda la plataforma durante el período promocional.</span>
                  </div>
                  <div className="signal-card">
                    <strong>Todo tu equipo</strong>
                    <span>Acceso ilimitado para ti y toda tu empresa, no solo para una persona.</span>
                  </div>
                  <div className="signal-card">
                    <strong>5 módulos</strong>
                    <span>Cinco frentes estratégicos para resolver problemas reales de crecimiento.</span>
                  </div>
                  <div className="signal-card">
                    <strong>Cero riesgo</strong>
                    <span>La promo está hecha para usar, validar y decidir con experiencia real.</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="short-inline float-left" id="short-producto">
          <Reveal direction="right" className="short-inline-asset">
            <div className="vsl-card">
              <a
                className="vsl-link"
                href={shorts[0].watchUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="vsl-frame">
                  <div className="vsl-play">Short de producto</div>
                  <img src={shorts[0].thumbUrl} alt={shorts[0].title} loading="lazy" />
                  <div className="vsl-center-play">
                    <span className="vsl-center-icon">▶</span>
                    Ver Short
                  </div>
                </div>
              </a>
            </div>
          </Reveal>
        </section>

        {/* How to */}
        <section className="howto" id="como-funciona">
          <div className="howto-header">
            <Reveal>
              <div className="section-eyebrow">
                <span className="eyebrow-line" />
                Promoción activa
                <span className="eyebrow-line" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="section-heading">
                Entra hoy y usa toda la plataforma<br />sin límites durante 60 días
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="section-desc">
                60 días sin costo. 5 módulos estratégicos. Todo tu equipo. Cero riesgo.
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

        <section className="short-inline float-right" id="short-promocion">
          <Reveal direction="left" className="short-inline-asset">
            <div className="vsl-card">
              <a
                className="vsl-link"
                href={shorts[1].watchUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="vsl-frame">
                  <div className="vsl-play">Short de promoción</div>
                  <img src={shorts[1].thumbUrl} alt={shorts[1].title} loading="lazy" />
                  <div className="vsl-center-play">
                    <span className="vsl-center-icon">▶</span>
                    Ver Short
                  </div>
                </div>
              </a>
            </div>
          </Reveal>
        </section>

        {/* Final CTA */}
        <Reveal>
          <div className="final-cta">
            <h2 className="final-cta-title">
              60 días sin costo.<br />Acceso ilimitado para tu empresa.
            </h2>
            <p className="final-cta-sub">
              Entra hoy y usa toda la plataforma sin límites durante 60 días sin costo.
              5 módulos estratégicos. Todo tu equipo. Cero riesgo.
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
              Pruébalo ahora
              <span className="btn-arrow"><ArrowCornerIcon /></span>
            </a>
          </div>
        </Reveal>

        {/* Footer */}
        <footer className="footer">
          <span>© {new Date().getFullYear()} Profit120. Todos los derechos reservados.</span>
          <div className="footer-links">
            <a href="https://app.profit120.com/guest">Ingresa ahora</a>
          </div>
        </footer>
      </div>
    </>
  );
}
