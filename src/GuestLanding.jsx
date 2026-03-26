import { useState, useEffect, useRef } from "react";
import { GlobeInteractive } from "../components/ui/cobe-globe-interactive";

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

/* ── Animated counter ── */
function AnimatedCounter({ end, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [ref, visible] = useReveal(0.3);
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else { setCount(Math.floor(start)); }
    }, 16);
    return () => clearInterval(timer);
  }, [visible, end, duration]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
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

  /* ── Marquee ticker ── */
  .marquee-strip {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 120;
    height: 38px;
    display: flex;
    align-items: center;
    overflow: hidden;
    background: rgba(248,248,248,0.97);
    border-bottom: 1px solid rgba(25,23,18,0.06);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  .marquee-track {
    display: flex;
    animation: marqueeScroll 35s linear infinite;
    white-space: nowrap;
  }

  .marquee-item {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 0 28px;
    font-size: 12px;
    font-weight: 700;
    color: ${BRAND.textPrimary};
    letter-spacing: 0.3px;
    flex-shrink: 0;
  }

  .marquee-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${BRAND.green};
    box-shadow: 0 0 6px rgba(39,201,39,0.4);
    flex-shrink: 0;
  }

  @keyframes marqueeScroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  /* ── Navigation ── */
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
    background: rgba(255,255,255,0.92);
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
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

  .nav-links {
    display: flex;
    align-items: center;
    gap: 32px;
  }

  .nav-link {
    font-size: 13px;
    font-weight: 500;
    color: ${BRAND.textMuted};
    text-decoration: none;
    transition: color 0.2s ease;
    letter-spacing: 0.01em;
  }

  .nav-link:hover {
    color: ${BRAND.textPrimary};
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

  .hero-line { display: block; }
  .hero-line.top { white-space: nowrap; }
  .hero-line.middle {
    color: ${BRAND.green};
    white-space: nowrap;
  }
  .hero-line.bottom { white-space: nowrap; }

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

  .hero-vsl .vsl-card { max-width: 340px; }

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
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.26), 0 10px 22px rgba(39,201,39,0.16);
    }
    50% {
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.3), 0 14px 28px rgba(39,201,39,0.2);
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

  .btn-arrow svg { width: 100%; height: 100%; display: block; }
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

  /* ── Stats strip (light) ── */
  .stats-strip {
    position: relative;
    z-index: 5;
    padding: 48px 24px;
    border-top: 1px solid ${BRAND.border};
    border-bottom: 1px solid ${BRAND.border};
    background: rgba(250,250,248,0.6);
  }

  .stats-strip-inner {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }

  .stat-item {
    text-align: center;
    padding: 0 16px;
    position: relative;
  }

  .stat-item:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 15%;
    height: 70%;
    width: 1px;
    background: ${BRAND.border};
  }

  .stat-number {
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: clamp(32px, 4vw, 48px);
    letter-spacing: -2px;
    color: ${BRAND.green};
    margin-bottom: 6px;
    display: block;
  }

  .stat-label {
    font-size: 13px;
    color: ${BRAND.textMuted};
    font-weight: 500;
  }

  /* ── Section common ── */
  .section-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 12px;
    font-weight: 700;
    color: ${BRAND.green};
    letter-spacing: 2.5px;
    text-transform: uppercase;
    margin-bottom: 18px;
  }

  .eyebrow-line {
    width: 24px;
    height: 2px;
    background: ${BRAND.green};
    border-radius: 2px;
    opacity: 0.35;
  }

  .section-heading {
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: clamp(34px, 5vw, 60px);
    letter-spacing: -1.8px;
    color: ${BRAND.textPrimary};
    line-height: 1.05;
    margin-bottom: 20px;
  }

  .section-desc {
    font-size: 17px;
    color: ${BRAND.textSecondary};
    line-height: 1.7;
    max-width: 520px;
  }

  /* ── Features / Product Showcase ── */
  .features {
    position: relative;
    z-index: 5;
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 48px 40px;
  }

  .features-header {
    text-align: center;
    margin-bottom: 64px;
  }

  .features-header .section-desc { margin: 0 auto; }

  /* ── Product row ── */
  .product-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: center;
    padding: 60px 0;
    border-top: 1px solid ${BRAND.border};
  }

  .product-row:last-child {
    border-bottom: 1px solid ${BRAND.border};
  }

  .product-row.reverse .product-info { order: 2; }
  .product-row.reverse .product-mockup { order: 1; }

  .product-info {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .product-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 14px;
    border-radius: 999px;
    background: rgba(39,201,39,0.08);
    border: 1px solid rgba(39,201,39,0.15);
    font-size: 11px;
    font-weight: 700;
    color: ${BRAND.green};
    letter-spacing: 1.5px;
    text-transform: uppercase;
    width: fit-content;
  }

  .product-name {
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: clamp(28px, 3vw, 38px);
    letter-spacing: -1.2px;
    color: ${BRAND.textPrimary};
    line-height: 1.1;
  }

  .product-desc {
    font-size: 16px;
    line-height: 1.7;
    color: ${BRAND.textSecondary};
    max-width: 420px;
  }

  .product-features-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 4px;
  }

  .product-cta-row {
    margin-top: 22px;
  }

  .product-cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    min-height: 56px;
    min-width: 0;
    padding: 0 22px;
    border-radius: 18px;
    font-size: 15px;
    font-weight: 800;
    color: #000;
    text-decoration: none;
    flex: none;
    animation: none;
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,0.22),
      0 10px 20px rgba(39,201,39,0.12);
  }

  .product-feature-item {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    color: ${BRAND.textSecondary};
    font-weight: 500;
  }

  .product-feature-check {
    width: 20px;
    height: 20px;
    border-radius: 6px;
    background: rgba(39,201,39,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: ${BRAND.green};
    font-size: 11px;
  }

  .product-cta:hover { gap: 12px; color: #000; }

  /* ── Mockup window ── */
  .product-mockup {
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid ${BRAND.border};
    box-shadow: 0 20px 60px rgba(15,23,42,0.08), 0 0 0 1px rgba(0,0,0,0.03);
    transition: all 0.5s cubic-bezier(0.16,1,0.3,1);
  }

  .product-mockup:hover {
    transform: translateY(-6px);
    box-shadow: 0 30px 80px rgba(15,23,42,0.12), 0 0 0 1px rgba(39,201,39,0.08);
  }

  .mockup-bar {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 10px 14px;
    background: #f8f8f8;
    border-bottom: 1px solid rgba(0,0,0,0.06);
  }

  .mockup-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ddd;
  }

  .mockup-dot.red { background: #ff5f57; }
  .mockup-dot.yellow { background: #febc2e; }
  .mockup-dot.green { background: #28c840; }

  .mockup-url {
    flex: 1;
    text-align: center;
    font-size: 10px;
    color: #999;
    font-weight: 500;
    margin-right: 30px;
  }

  /* ── BRAIN mockup (dark dashboard) ── */
  .mock-brain {
    background: #1a1530;
    padding: 20px;
    min-height: 340px;
  }

  .mock-brain-header {
    text-align: center;
    margin-bottom: 16px;
  }

  .mock-brain-title {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 4px;
  }

  .mock-brain-sub {
    font-size: 10px;
    color: rgba(255,255,255,0.45);
  }

  .mock-brain-tabs {
    display: flex;
    gap: 6px;
    margin-bottom: 16px;
    flex-wrap: wrap;
  }

  .mock-brain-tab {
    padding: 5px 12px;
    border-radius: 999px;
    font-size: 10px;
    font-weight: 600;
    background: rgba(255,255,255,0.06);
    color: rgba(255,255,255,0.5);
    border: 1px solid rgba(255,255,255,0.06);
  }

  .mock-brain-tab.active {
    background: rgba(255,255,255,0.12);
    color: #fff;
    border-color: rgba(255,255,255,0.15);
  }

  .mock-brain-search {
    width: 100%;
    padding: 10px 14px;
    border-radius: 10px;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.08);
    font-size: 11px;
    color: rgba(255,255,255,0.3);
    margin-bottom: 16px;
  }

  .mock-brain-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
  }

  .mock-brain-card {
    padding: 14px 10px;
    border-radius: 12px;
    text-align: center;
    min-height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
  }

  .mock-brain-card-title {
    font-size: 10px;
    font-weight: 700;
    color: #fff;
    line-height: 1.2;
  }

  .mock-brain-card-sub {
    font-size: 8px;
    color: rgba(255,255,255,0.5);
    line-height: 1.3;
  }

  .mock-brain-card-cat {
    font-size: 7px;
    font-weight: 700;
    color: rgba(255,255,255,0.35);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-top: 2px;
  }

  /* ── CHAT mockup ── */
  .mock-chat {
    background: #f8fafc;
    padding: 24px;
    min-height: 340px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .mock-chat-greeting {
    font-size: 18px;
    font-weight: 800;
    color: #1e293b;
    margin-bottom: 4px;
    text-align: center;
  }

  .mock-chat-sub {
    font-size: 11px;
    color: #64748b;
    margin-bottom: 20px;
    text-align: center;
  }

  .mock-chat-input {
    width: 100%;
    max-width: 380px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    border-radius: 999px;
    background: #fff;
    border: 1px solid #e2e8f0;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    margin-bottom: 20px;
  }

  .mock-chat-input span {
    font-size: 11px;
    color: #94a3b8;
    flex: 1;
  }

  .mock-chat-send {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: ${BRAND.green};
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 12px;
    flex-shrink: 0;
  }

  .mock-chat-suggestions {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    width: 100%;
    max-width: 380px;
  }

  .mock-chat-suggestion {
    padding: 10px;
    border-radius: 10px;
    background: #fff;
    border: 1px solid #e2e8f0;
    font-size: 9px;
    color: #475569;
    line-height: 1.4;
  }

  .mock-chat-suggestion strong {
    display: block;
    font-size: 10px;
    color: #1e293b;
    margin-bottom: 3px;
  }

  /* ── BOOST mockup ── */
  .mock-boost {
    background: #fff;
    padding: 20px;
    min-height: 340px;
  }

  .mock-boost-section-title {
    font-size: 13px;
    font-weight: 700;
    color: ${BRAND.textPrimary};
    margin-bottom: 10px;
  }

  .mock-boost-categories {
    display: flex;
    gap: 6px;
    margin-bottom: 14px;
    flex-wrap: wrap;
  }

  .mock-boost-cat {
    width: 64px;
    height: 52px;
    border-radius: 8px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 5px 3px;
    font-size: 7px;
    font-weight: 700;
    color: #fff;
    text-shadow: 0 1px 4px rgba(0,0,0,0.5);
    background-size: cover;
    background-position: center;
    position: relative;
    overflow: hidden;
  }

  .mock-boost-cat::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.45));
    border-radius: 8px;
  }

  .mock-boost-cat span {
    position: relative;
    z-index: 1;
  }

  .mock-boost-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 6px;
    margin-bottom: 14px;
  }

  .mock-boost-card {
    aspect-ratio: 3 / 4;
    border-radius: 8px;
    padding: 6px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    overflow: hidden;
    background-size: cover;
    background-position: center;
  }

  .mock-boost-card::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.55));
    border-radius: 8px;
  }

  .mock-boost-card-title {
    font-size: 7px;
    font-weight: 800;
    color: #fff;
    line-height: 1.2;
    position: relative;
    z-index: 1;
    text-transform: uppercase;
  }

  .mock-boost-card-plus {
    position: absolute;
    top: 4px;
    right: 4px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: rgba(255,255,255,0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    color: #333;
    z-index: 2;
    line-height: 1;
  }

  /* ── LABS mockup ── */
  .mock-labs {
    background: #fff;
    padding: 20px;
    min-height: 340px;
  }

  .mock-labs-header {
    text-align: center;
    margin-bottom: 16px;
  }

  .mock-labs-title {
    font-size: 16px;
    font-weight: 800;
    color: ${BRAND.textPrimary};
    margin-bottom: 4px;
  }

  .mock-labs-sub {
    font-size: 9px;
    color: ${BRAND.textMuted};
  }

  .mock-labs-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }

  .mock-labs-card {
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid #e2e8f0;
  }

  .mock-labs-card-img {
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .mock-labs-card-img::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 20%, rgba(0,0,0,0.45));
  }

  .mock-labs-badge {
    position: absolute;
    top: 6px;
    left: 6px;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 7px;
    font-weight: 700;
    z-index: 2;
    text-transform: uppercase;
  }

  .mock-labs-card-body {
    padding: 8px;
  }

  .mock-labs-card-title {
    font-size: 8px;
    font-weight: 600;
    color: ${BRAND.textPrimary};
    margin-bottom: 4px;
    line-height: 1.3;
  }

  .mock-labs-card-meta {
    font-size: 7px;
    color: ${BRAND.textMuted};
    line-height: 1.5;
  }

  /* ── TALKS mockup (video grid) ── */
  .mock-talks {
    background: #fff;
    padding: 20px;
    min-height: 340px;
  }

  .mock-talks-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;
  }

  .mock-talks-logo {
    font-size: 15px;
    font-weight: 800;
    color: ${BRAND.textPrimary};
  }

  .mock-talks-logo span { color: ${BRAND.green}; }

  .mock-talks-sort {
    font-size: 9px;
    color: ${BRAND.textMuted};
    padding: 4px 10px;
    border-radius: 999px;
    border: 1px solid #e5e5e5;
  }

  .mock-talks-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }

  .mock-talks-card {
    border-radius: 10px;
    overflow: hidden;
  }

  .mock-talks-thumb {
    position: relative;
    aspect-ratio: 16 / 10;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mock-talks-thumb-title {
    font-size: 9px;
    font-weight: 800;
    color: #fff;
    text-align: center;
    text-shadow: 0 1px 6px rgba(0,0,0,0.5);
    z-index: 1;
    line-height: 1.2;
    padding: 0 6px;
  }

  .mock-talks-thumb-num {
    position: absolute;
    top: 4px;
    left: 4px;
    background: rgba(39,201,39,0.9);
    color: #000;
    font-size: 7px;
    font-weight: 800;
    padding: 2px 6px;
    border-radius: 4px;
    z-index: 2;
  }

  .mock-talks-thumb-dur {
    position: absolute;
    bottom: 4px;
    right: 4px;
    background: rgba(0,0,0,0.7);
    color: #fff;
    font-size: 7px;
    font-weight: 600;
    padding: 1px 5px;
    border-radius: 3px;
    z-index: 2;
  }

  .mock-talks-card-meta {
    padding: 6px 2px;
  }

  .mock-talks-card-title {
    font-size: 8px;
    font-weight: 600;
    color: ${BRAND.textPrimary};
    line-height: 1.3;
    margin-bottom: 2px;
  }

  .mock-talks-card-date {
    font-size: 7px;
    color: ${BRAND.textMuted};
  }

  /* ── Promo offer (light) ── */
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
    padding: 48px;
    border-radius: 28px;
    background:
      linear-gradient(180deg, rgba(255,255,255,0.99), rgba(251,252,249,0.97));
    border: 1px solid rgba(25,23,18,0.06);
    overflow: hidden;
    position: relative;
    box-shadow: 0 24px 60px rgba(15,23,42,0.04);
  }

  .promo-offer-shell::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(39,201,39,0.4), transparent);
  }

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
    box-shadow: 0 0 8px rgba(39,201,39,0.4);
    animation: livePulse 2s infinite;
  }

  @keyframes livePulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.85); }
  }

  .promo-title {
    font-family: 'Inter', sans-serif;
    font-size: clamp(34px, 5vw, 54px);
    font-weight: 800;
    line-height: 1.03;
    letter-spacing: -1.4px;
    margin-bottom: 18px;
  }

  .promo-title span { color: ${BRAND.textPrimary}; }
  .promo-title .green-text { color: ${BRAND.green}; }

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
    border-radius: 14px;
    background: rgba(255,255,255,0.88);
    border: 1px solid rgba(15,23,42,0.06);
    transition: all 0.3s ease;
  }

  .promo-point:hover {
    background: rgba(255,255,255,0.95);
    border-color: rgba(39,201,39,0.15);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(39,201,39,0.06);
  }

  .promo-point-icon {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background: rgba(39,201,39,0.08);
    border: 1px solid rgba(39,201,39,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${BRAND.greenDim};
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
      linear-gradient(180deg, rgba(255,255,255,0.99), rgba(250,251,248,0.97)),
      ${BRAND.bgAlt};
    border: 1px solid rgba(25,23,18,0.06);
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.7), 0 20px 50px rgba(15,23,42,0.05);
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

  .short-inline.float-left { display: flex; justify-content: flex-start; }
  .short-inline.float-right { display: flex; justify-content: flex-end; }

  .short-embed {
    width: 100%;
    max-width: 280px;
    aspect-ratio: 9 / 16;
    border-radius: 24px;
    overflow: hidden;
    background: #000;
    border: 1px solid rgba(39,201,39,0.12);
    box-shadow: 0 20px 44px rgba(15,23,42,0.12), 0 0 0 1px rgba(39,201,39,0.08);
  }

  .short-embed iframe {
    width: 100%;
    height: 100%;
    border: 0;
    display: block;
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

  .vsl-frame {
    position: relative;
    aspect-ratio: 9 / 16;
    border-radius: 18px;
    overflow: hidden;
    background: #dfe8d8;
    border: 1px solid rgba(39,201,39,0.18);
    box-shadow: 0 14px 34px rgba(15,23,42,0.1), 0 0 0 1px rgba(39,201,39,0.08);
    transition: all 0.4s ease;
  }

  .vsl-card:hover .vsl-frame {
    box-shadow: 0 20px 50px rgba(15,23,42,0.16), 0 0 0 2px rgba(39,201,39,0.2);
    transform: translateY(-4px);
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
    z-index: 2;
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
    z-index: 2;
    transition: all 0.3s ease;
  }

  .vsl-card:hover .vsl-center-play {
    background: ${BRAND.green};
    color: #000;
    box-shadow: 0 10px 30px rgba(39,201,39,0.2);
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
    transition: all 0.3s ease;
  }

  .vsl-card:hover .vsl-center-icon {
    background: #000;
    color: ${BRAND.green};
  }

  /* ── How it works ── */
  .howto {
    position: relative;
    z-index: 5;
    max-width: 1100px;
    margin: 0 auto;
    padding: 48px 48px 120px;
  }

  .howto-header {
    text-align: center;
    margin-bottom: 64px;
  }

  .howto-header .section-desc { margin: 0 auto; }

  .steps {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
    position: relative;
  }

  .steps::before {
    content: '';
    position: absolute;
    top: 42px;
    left: 15%;
    right: 15%;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(39,201,39,0.2), rgba(39,201,39,0.2), transparent);
    z-index: 0;
  }

  .step-card {
    text-align: left;
    position: relative;
    z-index: 1;
    background: ${BRAND.bg};
    border: 1px solid rgba(25,23,18,0.08);
    border-radius: 20px;
    padding: 32px;
    transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
  }

  .step-card:hover {
    border-color: rgba(39,201,39,0.2);
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(39,201,39,0.06);
  }

  .step-num {
    width: 64px;
    height: 64px;
    margin: 0 0 20px;
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: 22px;
    color: ${BRAND.green};
    background: rgba(39,201,39,0.06);
    border: 1px solid rgba(39,201,39,0.12);
    transition: all 0.3s ease;
  }

  .step-card:hover .step-num {
    background: ${BRAND.green};
    color: #000;
    border-color: ${BRAND.green};
    box-shadow: 0 0 30px rgba(39,201,39,0.2);
    transform: scale(1.05);
  }

  .step-title {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
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

  .testimonials-header .section-desc { margin: 0 auto; }

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
    transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
    position: relative;
    overflow: hidden;
  }

  .t-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${BRAND.green}, transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .t-card:hover {
    border-color: rgba(39,201,39,0.2);
    background: rgba(255,255,255,0.98);
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(39,201,39,0.06);
  }

  .t-card:hover::before { opacity: 1; }

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
    width: 42px;
    height: 42px;
    border-radius: 12px;
    background: linear-gradient(135deg, rgba(39,201,39,0.2), rgba(82,223,82,0.12));
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

  /* ── CTA section (light) ── */
  .final-cta {
    position: relative;
    z-index: 5;
    margin: 0 48px 80px;
    border-radius: 28px;
    padding: 80px 48px;
    text-align: center;
    overflow: hidden;
    background: linear-gradient(180deg, rgba(39,201,39,0.06), rgba(255,255,255,0.98));
    border: 1px solid rgba(25,23,18,0.08);
  }

  .final-cta::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(39,201,39,0.4), transparent);
  }

  .final-cta::after {
    content: '';
    position: absolute;
    top: -100px;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    height: 300px;
    background: radial-gradient(ellipse, rgba(39,201,39,0.1), transparent 70%);
    pointer-events: none;
  }

  .final-cta-title {
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: clamp(32px, 5vw, 52px);
    letter-spacing: -1.8px;
    color: ${BRAND.textPrimary};
    margin-bottom: 16px;
    position: relative;
    line-height: 1.05;
  }

  .final-cta-title .green-text { color: ${BRAND.green}; }

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

  .btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    font-weight: 500;
    color: ${BRAND.textSecondary};
    text-decoration: none;
    padding: 16px 24px;
    border-radius: 14px;
    border: 1px solid ${BRAND.border};
    transition: all 0.3s ease;
    background: transparent;
  }

  .btn-secondary:hover {
    color: ${BRAND.textPrimary};
    border-color: rgba(39,201,39,0.2);
    background: rgba(39,201,39,0.04);
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

  .footer-links a:hover { color: ${BRAND.green}; }

  /* ── Objections ── */
  .objections {
    position: relative;
    z-index: 5;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 48px 100px;
  }

  .objections-header {
    text-align: center;
    margin-bottom: 56px;
  }

  .obj-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .obj-card {
    background: rgba(255,255,255,0.88);
    border: 1px solid ${BRAND.border};
    border-radius: 20px;
    padding: 28px;
    transition: all 0.3s ease;
  }

  .obj-card:hover {
    border-color: rgba(39,201,39,0.15);
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(39,201,39,0.06);
  }

  .obj-question {
    font-size: 16px;
    font-weight: 700;
    color: ${BRAND.textPrimary};
    margin-bottom: 8px;
  }

  .obj-answer {
    font-size: 14px;
    color: ${BRAND.textSecondary};
    line-height: 1.65;
  }

  /* ── Responsive ── */
  @media (max-width: 768px) {
    .marquee-strip { height: 34px; }
    .marquee-item { padding: 0 18px; font-size: 11px; }
    .nav { padding: 14px 20px; }
    .nav-links { display: none; }
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
    .hero-offer-card { min-height: 64px; padding: 0 18px; border-radius: 20px; flex-basis: 100%; }
    .hero-offer-title { gap: 6px; letter-spacing: -0.8px; white-space: normal; }
    .hero-offer-title strong { font-size: clamp(22px, 7vw, 30px); }
    .hero-offer-title span { font-size: clamp(22px, 7vw, 30px); }
    .btn-primary { min-height: 64px; min-width: 0; width: 100%; padding: 0 22px; border-radius: 20px; font-size: clamp(20px, 6vw, 28px); flex-basis: 100%; }
    .btn-arrow { width: 28px; height: 28px; font-size: 15px; }
    .hero-line.top, .hero-line.middle, .hero-line.bottom { white-space: normal; }
    .stats-strip-inner { grid-template-columns: repeat(2, 1fr); gap: 24px; }
    .stat-item:nth-child(2)::after { display: none; }
    .features { padding: 60px 20px 20px; }
    .product-row { grid-template-columns: 1fr; gap: 32px; padding: 40px 0; }
    .product-row.reverse .product-info { order: 1; }
    .product-row.reverse .product-mockup { order: 2; }
    .mock-brain-cards { grid-template-columns: repeat(2, 1fr); }
    .mock-chat-suggestions { grid-template-columns: 1fr; }
    .mock-boost-grid { grid-template-columns: repeat(3, 1fr); }
    .mock-labs-grid { grid-template-columns: 1fr; }
    .promo-offer { padding: 24px 20px 80px; }
    .promo-offer-shell { grid-template-columns: 1fr; padding: 22px; }
    .promo-points { grid-template-columns: 1fr; }
    .signal-panel { min-height: 320px; }
    .howto { padding: 40px 20px 80px; }
    .steps { grid-template-columns: 1fr; gap: 16px; }
    .steps::before { display: none; }
    .short-inline { padding: 0 20px 36px; }
    .short-inline.float-left, .short-inline.float-right { justify-content: center; }
    .short-inline-asset, .vsl-card { max-width: 220px; }
    .testimonials { padding: 0 20px 80px; }
    .objections { padding: 0 20px 80px; }
    .obj-grid { grid-template-columns: 1fr; }
    .t-grid { grid-template-columns: 1fr; }
    .final-cta { margin: 0 20px 60px; padding: 48px 24px; }
    .footer { flex-direction: column; gap: 16px; padding: 24px 20px; text-align: center; }
  }

  @media (max-width: 480px) {
    .hero-cta-row { flex-direction: column; width: 100%; }
    .btn-primary { width: 100%; justify-content: center; }
    .hero-trust { flex-direction: column; gap: 8px; }
    .stats-strip-inner { grid-template-columns: 1fr; gap: 20px; }
    .stat-item::after { display: none !important; }
  }
`;

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
    quote: "Mi contador me cobra por lo que Profit120 me da en segundos. El análisis de flujo de caja me ahorró miles de pesos.",
    name: "Roberto S.",
    role: "Director de agencia",
    initials: "RS",
  },
  {
    stars: 5,
    quote: "Activé los 60 días sin costo pensando que no iba a usar todo. A la semana ya tenía a mi equipo completo dentro de la plataforma.",
    name: "Laura G.",
    role: "COO de startup",
    initials: "LG",
  },
  {
    stars: 5,
    quote: "Profit CHAT me resolvió en 5 minutos lo que mi consultor no pudo en 3 semanas. Literal le mandé screenshot.",
    name: "Diego R.",
    role: "Dueño de franquicia",
    initials: "DR",
  },
  {
    stars: 5,
    quote: "Los Profit LABS cambiaron la forma en que mi equipo piensa. Salimos con una estrategia real, no con teoría de libro.",
    name: "Patricia V.",
    role: "Directora de operaciones",
    initials: "PV",
  },
];

const marqueeItems = [
  "60 días sin costo",
  "Acceso ilimitado para ti y toda tu empresa",
  "5 módulos estratégicos desbloqueados",
  "Sin tarjeta de crédito requerida",
  "Cero riesgo. Cero compromiso.",
  "IA aplicada a tu negocio",
  "Todo tu equipo incluido",
  "Promoción por tiempo limitado — actívala hoy",
];

const shorts = [
  {
    title: "Short 1: Que es Profit120",
    thumbUrl: "https://i.ytimg.com/vi/HswRHEFk6oA/hqdefault.jpg",
    watchUrl: "https://www.youtube.com/shorts/HswRHEFk6oA",
  },
  {
    title: "Short 2: Promoción 60 días sin costo",
    thumbUrl: "https://i.ytimg.com/vi/cb7jEJX1i9A/hqdefault.jpg",
    watchUrl: "https://www.youtube.com/shorts/cb7jEJX1i9A",
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
        {/* Marquee ticker */}
        <div className="marquee-strip">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span className="marquee-item" key={i}>
                <span className="marquee-dot" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Nav */}
        <nav className={`nav${scrolled ? " scrolled" : ""}`}>
          <div className="nav-logo">
            <img src="/assets/Negro-Verde.png" alt="Profit120" />
          </div>
          <div className="nav-links">
            <a href="#productos" className="nav-link">Productos</a>
            <a href="#como-funciona" className="nav-link">Cómo funciona</a>
            <a href="#testimonios" className="nav-link">Testimonios</a>
          </div>
          <a
            href="https://plataforma.profit120.com/app/chatbot"
            className="nav-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ingresa ahora <span>→</span>
          </a>
        </nav>

        {/* Hero (original layout restored) */}
        <section className="hero">
          <div className="hero-globe">
            <GlobeInteractive speed={0.0026} />
          </div>

          <Reveal delay={0}>
            <div className="hero-copy">
              <p className="hero-sub">
                Oferta limitada: acceso completo para ti y todo tu equipo. 60 días. $0. Sin tarjeta.
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
                    href="https://plataforma.profit120.com/app/chatbot"
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
                  <div className="trust-item"><CheckIcon /> 60 días sin costo</div>
                  <div className="trust-item"><CheckIcon /> Sin tarjeta de crédito</div>
                  <div className="trust-item"><CheckIcon /> Todo tu equipo incluido</div>
                  <div className="trust-item"><CheckIcon /> Cancela cuando quieras</div>
                </div>
              </Reveal>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="hero-media">
              <div className="hero-vsl">
                <div className="hero-vsl-embed">
                  <iframe
                    src="https://www.youtube.com/embed/HswRHEFk6oA?rel=0&modestbranding=1&playsinline=1"
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

        {/* Stats strip */}
        <section className="stats-strip">
          <div className="stats-strip-inner">
            <div className="stat-item">
              <span className="stat-number"><AnimatedCounter end={5} /></span>
              <span className="stat-label">Módulos incluidos en tu prueba</span>
            </div>
            <div className="stat-item">
              <span className="stat-number"><AnimatedCounter end={60} suffix=" días" /></span>
              <span className="stat-label">Sin costo — para todo tu equipo</span>
            </div>
            <div className="stat-item">
              <span className="stat-number"><AnimatedCounter end={24} suffix="/7" /></span>
              <span className="stat-label">Consultor IA disponible</span>
            </div>
            <div className="stat-item">
              <span className="stat-number"><AnimatedCounter end={20} suffix=" min" /></span>
              <span className="stat-label">Para resolver problemas reales</span>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="howto" id="como-funciona">
          <div className="howto-header">
            <Reveal delay={0.1}>
              <h2 className="section-heading">
                Empieza en 2 minutos.<br />Sin tarjeta. Sin compromiso.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="section-desc">
                Activa tu prueba de 60 días sin costo y desbloquea los 5 módulos para todo tu equipo.
              </p>
            </Reveal>
          </div>
          <div className="steps">
            <Reveal delay={0}>
              <div className="step-card">
                <div className="step-num">1</div>
                <h3 className="step-title">Crea tu cuenta sin costo</h3>
                <p className="step-desc">Regístrate con tu correo. No necesitas tarjeta de crédito ni aprobación de nadie.</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="step-card">
                <div className="step-num">2</div>
                <h3 className="step-title">Invita a tu equipo</h3>
                <p className="step-desc">Agrega a todos los que necesites. Sin límite de usuarios durante tus 60 días sin costo.</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="step-card">
                <div className="step-num">3</div>
                <h3 className="step-title">Resuelve problemas reales</h3>
                <p className="step-desc">Usa los 5 módulos para tomar mejores decisiones desde el primer día. 60 días completos para probarlo todo.</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Products */}
        <section className="features" id="productos">
          <div className="features-header">
            <Reveal delay={0.1}>
              <h2 className="section-heading">
                5 módulos. Un solo objetivo:<br />hacer crecer tu empresa.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="section-desc">
                Cada módulo resuelve un problema real de tu negocio. Con tus 60 días sin costo, desbloqueas los 5 desde el primer minuto.
              </p>
            </Reveal>
          </div>

          {/* ── Profit BRAIN ── */}
          <Reveal>
            <div className="product-row">
              <div className="product-info">
                <div className="product-badge">IA</div>
                <h3 className="product-name">Profit BRAIN</h3>
                <p className="product-desc">
                  Tu centro de mando inteligente. Más de 200 herramientas de IA que analizan, proyectan y aceleran las decisiones de tu empresa.
                </p>
                <div className="product-features-list">
                  <div className="product-feature-item"><span className="product-feature-check">✓</span> +200 herramientas por categoría</div>
                  <div className="product-feature-item"><span className="product-feature-check">✓</span> Favoritos y recomendaciones personalizadas</div>
                  <div className="product-feature-item"><span className="product-feature-check">✓</span> Finanzas, Marketing, Ventas, RRHH y más</div>
                </div>
                <div className="product-cta-row">
                  <a href="https://plataforma.profit120.com/app/tools" className="btn-primary product-cta" target="_blank" rel="noopener noreferrer">
                    Accede sin costo
                    <span className="btn-arrow"><ArrowCornerIcon /></span>
                  </a>
                </div>
              </div>
              <div className="product-mockup">
                <div className="mockup-bar">
                  <span className="mockup-dot red" /><span className="mockup-dot yellow" /><span className="mockup-dot green" />
                  <span className="mockup-url">app.profit120.com</span>
                </div>
                <div className="mock-brain">
                  <div className="mock-brain-header">
                    <div className="mock-brain-title">Tu propio PROFIT BRAIN</div>
                    <div className="mock-brain-sub">Selecciona la categoría con la que te gustaría comenzar</div>
                  </div>
                  <div className="mock-brain-tabs">
                    <span className="mock-brain-tab active">Inicio 202</span>
                    <span className="mock-brain-tab">Finanzas 3</span>
                    <span className="mock-brain-tab">Marketing 42</span>
                    <span className="mock-brain-tab">Operaciones 64</span>
                    <span className="mock-brain-tab">Ventas 29</span>
                    <span className="mock-brain-tab">RRHH 37</span>
                  </div>
                  <div className="mock-brain-search">Escribe tu pregunta o necesidad...</div>
                  <div className="mock-brain-cards">
                    <div className="mock-brain-card" style={{ background: "linear-gradient(135deg, #22c55e, #16a34a)" }}>
                      <div className="mock-brain-card-title">Flujo de Caja Inteligente</div>
                      <div className="mock-brain-card-sub">Registro semanal de flujo de efectivo</div>
                      <div className="mock-brain-card-cat">FINANZAS</div>
                    </div>
                    <div className="mock-brain-card" style={{ background: "linear-gradient(135deg, #3b82f6, #2563eb)" }}>
                      <div className="mock-brain-card-title">Centro de Costos</div>
                      <div className="mock-brain-card-sub">Agrupa gastos por área</div>
                      <div className="mock-brain-card-cat">FINANZAS</div>
                    </div>
                    <div className="mock-brain-card" style={{ background: "linear-gradient(135deg, #a855f7, #7c3aed)" }}>
                      <div className="mock-brain-card-title">Generador de Anuncios con IA</div>
                      <div className="mock-brain-card-sub">Copy e imágenes para redes</div>
                      <div className="mock-brain-card-cat">MARKETING</div>
                    </div>
                    <div className="mock-brain-card" style={{ background: "linear-gradient(135deg, #f43f5e, #e11d48)" }}>
                      <div className="mock-brain-card-title">Análisis de Compensación</div>
                      <div className="mock-brain-card-sub">Benchmarks internos y de mercado</div>
                      <div className="mock-brain-card-cat">RRHH</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ── Profit CHAT ── */}
          <Reveal>
            <div className="product-row reverse">
              <div className="product-info">
                <div className="product-badge">24/7</div>
                <h3 className="product-name">Profit CHAT</h3>
                <p className="product-desc">
                  Tu consultor 24/7 con IA. Pregunta lo que necesites sobre tu negocio y recibe respuestas estratégicas al instante.
                </p>
                <div className="product-features-list">
                  <div className="product-feature-item"><span className="product-feature-check">✓</span> Chat especializado en PYMES</div>
                  <div className="product-feature-item"><span className="product-feature-check">✓</span> Adjunta archivos para análisis</div>
                  <div className="product-feature-item"><span className="product-feature-check">✓</span> Respuestas con contexto empresarial</div>
                </div>
                <div className="product-cta-row">
                  <a href="https://plataforma.profit120.com/app/chatbot" className="btn-primary product-cta" target="_blank" rel="noopener noreferrer">
                    Accede sin costo
                    <span className="btn-arrow"><ArrowCornerIcon /></span>
                  </a>
                </div>
              </div>
              <div className="product-mockup">
                <div className="mockup-bar">
                  <span className="mockup-dot red" /><span className="mockup-dot yellow" /><span className="mockup-dot green" />
                  <span className="mockup-url">app.profit120.com/chat</span>
                </div>
                <div className="mock-chat">
                  <div className="mock-chat-greeting">¡Hola! 👋</div>
                  <div className="mock-chat-sub">Soy el primer chat especializado para PYMES, ¿qué solución necesitas hoy?</div>
                  <div className="mock-chat-input">
                    <span>Escribe tu pregunta o adjunta archivos para analizar</span>
                    <div className="mock-chat-send">↑</div>
                  </div>
                  <div className="mock-chat-suggestions">
                    <div className="mock-chat-suggestion">
                      <strong>Actualmente tengo este problema en mi empresa...</strong>
                      ¡Sin miedo! Estoy aquí para ayudarte a resolver los problemas que enfrenta tu empresa.
                    </div>
                    <div className="mock-chat-suggestion">
                      <strong>Necesito saber más acerca de...</strong>
                      Nadie nace sabiéndolo todo... ¿Qué información estás buscando?
                    </div>
                    <div className="mock-chat-suggestion">
                      <strong>Explícame más de Profit120</strong>
                      ¡No escondemos nada! Pregúntanos lo que quieras para ayudarte mejor.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ── Profit BOOST ── */}
          <Reveal>
            <div className="product-row">
              <div className="product-info">
                <div className="product-badge">20 MIN</div>
                <h3 className="product-name">Profit BOOST</h3>
                <p className="product-desc">
                  Soluciones en 20 minutos. Un problema real con una solución accionable. Frameworks, plantillas y herramientas para ejecutar hoy.
                </p>
                <div className="product-features-list">
                  <div className="product-feature-item"><span className="product-feature-check">✓</span> Top 10 en tendencias diarias</div>
                  <div className="product-feature-item"><span className="product-feature-check">✓</span> Explorar por categoría</div>
                  <div className="product-feature-item"><span className="product-feature-check">✓</span> Frameworks listos para aplicar</div>
                </div>
                <div className="product-cta-row">
                  <a href="https://plataforma.profit120.com/app/courses" className="btn-primary product-cta" target="_blank" rel="noopener noreferrer">
                    Accede sin costo
                    <span className="btn-arrow"><ArrowCornerIcon /></span>
                  </a>
                </div>
              </div>
              <div className="product-mockup">
                <div className="mockup-bar">
                  <span className="mockup-dot red" /><span className="mockup-dot yellow" /><span className="mockup-dot green" />
                  <span className="mockup-url">app.profit120.com/boost</span>
                </div>
                <div className="mock-boost">
                  <div className="mock-boost-section-title">Top 10 en Tendencias Hoy</div>
                  <div className="mock-boost-grid">
                    {[
                      { title: "La Necesidad de Contratar", bg: "linear-gradient(135deg, #e8f5e9, #c8e6c9)", color: "#2e7d32" },
                      { title: "Balance General", bg: "linear-gradient(135deg, #e3f2fd, #bbdefb)", color: "#1565c0" },
                      { title: "Margen de Contribución", bg: "linear-gradient(135deg, #1a237e, #283593)", color: "#fff" },
                      { title: "La Deuda Financiera", bg: "linear-gradient(135deg, #3e2723, #5d4037)", color: "#fff" },
                      { title: "Capital de Trabajo", bg: "linear-gradient(135deg, #e8f5e9, #a5d6a7)", color: "#1b5e20" },
                    ].map((card, i) => (
                      <div className="mock-boost-card" key={i} style={{ background: card.bg }}>
                        <span className="mock-boost-card-plus">+</span>
                        <div className="mock-boost-card-title" style={{ color: card.color }}>{card.title}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mock-boost-section-title">Explorar por Categoría</div>
                  <div className="mock-boost-categories">
                    {[
                      { name: "Finanzas", bg: "linear-gradient(135deg, #1e3a5f, #2d5986)" },
                      { name: "Operaciones", bg: "linear-gradient(135deg, #374151, #4b5563)" },
                      { name: "RRHH", bg: "linear-gradient(135deg, #7c2d12, #9a3412)" },
                      { name: "Startups", bg: "linear-gradient(135deg, #065f46, #047857)" },
                      { name: "Marketing", bg: "linear-gradient(135deg, #581c87, #7c3aed)" },
                      { name: "Ventas", bg: "linear-gradient(135deg, #0c4a6e, #0369a1)" },
                      { name: "Liderazgo", bg: "linear-gradient(135deg, #78350f, #a16207)" },
                    ].map((cat) => (
                      <div key={cat.name} className="mock-boost-cat" style={{ background: cat.bg }}>
                        <span>{cat.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ── Profit TALKS ── */}
          <Reveal>
            <div className="product-row reverse">
              <div className="product-info">
                <div className="product-badge">NEWS</div>
                <h3 className="product-name">Profit TALKS</h3>
                <p className="product-desc">
                  El newsletter que forma criterio. Cada semana recibes análisis, tendencias, casos reales y marcos de decisión que se aplican de inmediato.
                </p>
                <div className="product-features-list">
                  <div className="product-feature-item"><span className="product-feature-check">✓</span> Contenido semanal curado</div>
                  <div className="product-feature-item"><span className="product-feature-check">✓</span> Casos reales de empresas LATAM</div>
                  <div className="product-feature-item"><span className="product-feature-check">✓</span> Marcos de decisión aplicables</div>
                </div>
                <div className="product-cta-row">
                  <a href="https://plataforma.profit120.com/app/library" className="btn-primary product-cta" target="_blank" rel="noopener noreferrer">
                    Accede sin costo
                    <span className="btn-arrow"><ArrowCornerIcon /></span>
                  </a>
                </div>
              </div>
              <div className="product-mockup">
                <div className="mockup-bar">
                  <span className="mockup-dot red" /><span className="mockup-dot yellow" /><span className="mockup-dot green" />
                  <span className="mockup-url">app.profit120.com/talks</span>
                </div>
                <div className="mock-talks">
                  <div className="mock-talks-header">
                    <div className="mock-talks-logo">Profit <span>TALKS</span></div>
                    <div className="mock-talks-sort">Ordenar: Más recientes</div>
                  </div>
                  <div className="mock-talks-grid">
                    {[
                      { num: "#55", title: "Narcos Inc. 3", bg: "linear-gradient(135deg, #1a1a2e, #3d3d5c)", dur: "10:32", date: "17 Mar 2026", sub: "Narcos Inc. 3" },
                      { num: "#54", title: "Narcos Inc. 2", bg: "linear-gradient(135deg, #2d2d3f, #4a4a6a)", dur: "11:52", date: "08 Mar 2026", sub: "Narcos Inc. 2" },
                      { num: "#53", title: "Narcos Inc.", bg: "linear-gradient(135deg, #1e293b, #475569)", dur: "13:26", date: "03 Mar 2026", sub: "Narcos Inc. 1" },
                      { num: "#52", title: "Los Sesgos Conductuales", bg: "linear-gradient(135deg, #0f172a, #1e3a5f)", dur: "12:43", date: "03 Mar 2026", sub: "Riesgo Empresarial 4" },
                      { num: "#51", title: "Skin In The Game", bg: "linear-gradient(135deg, #78350f, #92400e)", dur: "12:00", date: "02 Mar 2026", sub: "Riesgo Empresarial 3" },
                      { num: "#50", title: "Cisnes Negros vs Blancos", bg: "linear-gradient(135deg, #374151, #6b7280)", dur: "13:15", date: "20 Feb 2026", sub: "Riesgo Empresarial 2" },
                    ].map((ep, i) => (
                      <div className="mock-talks-card" key={i}>
                        <div className="mock-talks-thumb" style={{ background: ep.bg }}>
                          <span className="mock-talks-thumb-num">{ep.num}</span>
                          <span className="mock-talks-thumb-title">{ep.title}</span>
                          <span className="mock-talks-thumb-dur">{ep.dur}</span>
                        </div>
                        <div className="mock-talks-card-meta">
                          <div className="mock-talks-card-title">{ep.sub}</div>
                          <div className="mock-talks-card-date">{ep.date}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ── Profit LABS ── */}
          <Reveal>
            <div className="product-row">
              <div className="product-info">
                <div className="product-badge">LIVE</div>
                <h3 className="product-name">Profit LABS</h3>
                <p className="product-desc">
                  Estrategia colaborativa en vivo. Tú y tu equipo, trabajando codo a codo para rediseñar decisiones con datos reales, IA y estructura accionable.
                </p>
                <div className="product-features-list">
                  <div className="product-feature-item"><span className="product-feature-check">✓</span> Sesiones en vivo con expertos</div>
                  <div className="product-feature-item"><span className="product-feature-check">✓</span> Cupo limitado por sesión</div>
                  <div className="product-feature-item"><span className="product-feature-check">✓</span> Estrategias aplicables inmediatas</div>
                </div>
                <div className="product-cta-row">
                  <a href="https://plataforma.profit120.com/app/labs" className="btn-primary product-cta" target="_blank" rel="noopener noreferrer">
                    Accede sin costo
                    <span className="btn-arrow"><ArrowCornerIcon /></span>
                  </a>
                </div>
              </div>
              <div className="product-mockup">
                <div className="mockup-bar">
                  <span className="mockup-dot red" /><span className="mockup-dot yellow" /><span className="mockup-dot green" />
                  <span className="mockup-url">app.profit120.com/labs</span>
                </div>
                <div className="mock-labs">
                  <div className="mock-labs-header">
                    <div className="mock-labs-title">Profit LABS</div>
                    <div className="mock-labs-sub">Programa colaborativo donde el empresario y su equipo construyen estrategias de puesta en práctica inmediata.</div>
                  </div>
                  <div className="mock-labs-grid">
                    {[
                      { title: "Marketing Inteligente", bg: "#1e293b", badge: "CUPO LLENO", badgeBg: "#ef4444", desc: "Ventas con IA", meta: "4 sesiones · 10/10" },
                      { title: "La Rentabilidad Empresarial", bg: "#92400e", badge: "CUPO LLENO", badgeBg: "#ef4444", desc: "Ingresos y costos", meta: "4 sesiones · 15/15" },
                      { title: "Roles y Responsabilidades", bg: "#1e3a5f", badge: "DISPONIBLE", badgeBg: BRAND.green, badgeColor: "#000", desc: "Define roles con tu equipo", meta: "5 sesiones · 4/15" },
                      { title: "Flujo de Caja", bg: "#065f46", badge: "DISPONIBLE", badgeBg: BRAND.green, badgeColor: "#000", desc: "Controla tu efectivo", meta: "4 sesiones · 6/15" },
                      { title: "Estrategia de Ventas", bg: "#581c87", badge: "PRÓXIMO", badgeBg: "#f59e0b", badgeColor: "#000", desc: "Pipeline y conversión", meta: "5 sesiones · 2/15" },
                      { title: "Liderazgo Efectivo", bg: "#0c4a6e", badge: "PRÓXIMO", badgeBg: "#f59e0b", badgeColor: "#000", desc: "Gestión de equipos", meta: "4 sesiones · 0/15" },
                    ].map((lab, i) => (
                      <div className="mock-labs-card" key={i}>
                        <div className="mock-labs-card-img" style={{ background: `linear-gradient(135deg, ${lab.bg}, ${lab.bg}dd)` }}>
                          <span className="mock-labs-badge" style={{ background: lab.badgeBg, color: lab.badgeColor || "#fff" }}>{lab.badge}</span>
                          <span style={{ color: "#fff", fontWeight: 700, fontSize: 9, zIndex: 2, textAlign: "center", lineHeight: 1.3 }}>{lab.title}</span>
                        </div>
                        <div className="mock-labs-card-body">
                          <div className="mock-labs-card-title">{lab.desc}</div>
                          <div className="mock-labs-card-meta">{lab.meta}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Mid-page CTA */}
        <section className="promo-offer">
          <div className="promo-offer-shell">
            <div className="promo-copy">
              <Reveal>
                <div className="promo-kicker">
                  <span className="promo-kicker-dot" />
                  Oferta activa
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="promo-title">
                  <span>Todo esto es tuyo.</span><br />
                  <span className="green-text">60 días. $0.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="promo-desc">
                  No es una demo limitada. Es la plataforma completa — los 5 módulos,
                  para ti y todo tu equipo, durante 60 días sin costo.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="promo-points">
                  <div className="promo-point">
                    <div className="promo-point-icon"><CheckIcon /></div>
                    <div><strong>Acceso completo</strong><span>Los 5 módulos desbloqueados desde el día 1</span></div>
                  </div>
                  <div className="promo-point">
                    <div className="promo-point-icon"><CheckIcon /></div>
                    <div><strong>Todo tu equipo</strong><span>Sin límite de usuarios durante la prueba</span></div>
                  </div>
                  <div className="promo-point">
                    <div className="promo-point-icon"><CheckIcon /></div>
                    <div><strong>Sin tarjeta</strong><span>No pedimos datos de pago para empezar</span></div>
                  </div>
                  <div className="promo-point">
                    <div className="promo-point-icon"><CheckIcon /></div>
                    <div><strong>60 días completos</strong><span>No 7. No 14. Sesenta días para probarlo todo.</span></div>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.25}>
                <a href="https://plataforma.profit120.com/app/chatbot" className="btn-primary" style={{ minHeight: 56, minWidth: 200, fontSize: 16, flex: "none" }} target="_blank" rel="noopener noreferrer">
                  Empieza tus 60 días sin costo
                  <span className="btn-arrow"><ArrowCornerIcon /></span>
                </a>
              </Reveal>
            </div>
            <Reveal delay={0.12} direction="left" className="promo-visual">
              <div className="signal-panel">
                <div className="signal-top">
                  <span className="signal-label">Impacto en empresas</span>
                  <span className="signal-live"><span className="promo-kicker-dot" /> En vivo</span>
                </div>
                <div className="signal-bars" aria-hidden="true">
                  <div className="signal-bar" style={{ height: "55%" }} />
                  <div className="signal-bar" style={{ height: "78%" }} />
                  <div className="signal-bar" style={{ height: "62%" }} />
                  <div className="signal-bar" style={{ height: "88%" }} />
                  <div className="signal-bar" style={{ height: "100%" }} />
                </div>
                <div className="signal-cards">
                  <div className="signal-card"><strong>+200</strong><span>Herramientas IA incluidas</span></div>
                  <div className="signal-card"><strong>24/7</strong><span>Consultor IA disponible</span></div>
                  <div className="signal-card"><strong>60 días</strong><span>Sin costo para tu equipo</span></div>
                  <div className="signal-card"><strong>$0</strong><span>Sin tarjeta requerida</span></div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials" id="testimonios">
          <div className="testimonials-header">
            <Reveal delay={0.1}>
              <h2 className="section-heading">
                Empezaron con 60 días sin costo.<br />Se quedaron por los resultados.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="section-desc">
                Activaron su prueba sin costo, probaron los módulos y decidieron quedarse.
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

        {/* Objections */}
        <section className="objections">
          <div className="objections-header">
            <Reveal delay={0.1}>
              <h2 className="section-heading">
                Las preguntas que<br />todos se hacen.
              </h2>
            </Reveal>
          </div>
          <div className="obj-grid">
            {[
              { q: "¿Necesito tarjeta de crédito?", a: "No. Cero datos de pago. Entras, activas tus 60 días sin costo y listo." },
              { q: "¿Cuántos usuarios puedo agregar?", a: "Todos los que necesites. La prueba de 60 días es para ti y todo tu equipo, sin límite." },
              { q: "¿Qué pasa después de los 60 días?", a: "Tú decides si continuar. Sin renovación automática. Sin sorpresas. Sin compromisos." },
              { q: "¿Y si no me gusta?", a: "Cancela cuando quieras. No hay penalidad, no hay letra chica. Tienes 60 días completos para decidir." },
              { q: "¿Es para mi tipo de empresa?", a: "Sí. +200 herramientas cubren Finanzas, Marketing, Ventas, RRHH, Operaciones y más. Desde startups hasta empresas consolidadas." },
              { q: "¿Cuánto tiempo toma empezar?", a: "2 minutos. Solo necesitas un correo. Entras directo a la plataforma con los 5 módulos desbloqueados por 60 días." },
            ].map((obj, i) => (
              <Reveal key={i} delay={0.06 * i}>
                <div className="obj-card">
                  <div className="obj-question">{obj.q}</div>
                  <div className="obj-answer">{obj.a}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <Reveal>
          <div className="final-cta">
            <h2 className="final-cta-title">
              Tu empresa merece<br /><span className="green-text">60 días sin costo.</span>
            </h2>
            <p className="final-cta-sub">
              5 módulos de IA. Todo tu equipo. Sin tarjeta de crédito. Empieza hoy.
            </p>
            <div className="cta-benefits">
              {["60 días sin costo", "Sin tarjeta de crédito", "Usuarios ilimitados", "5 módulos completos", "Cancela cuando quieras"].map((b, i) => (
                <div className="benefit-chip" key={i}>
                  <span className="benefit-dot" />
                  {b}
                </div>
              ))}
            </div>
            <a
              href="https://plataforma.profit120.com/app/chatbot"
              className="btn-primary"
              style={{ fontSize: 18, padding: "20px 48px", minHeight: "auto", flex: "none", animation: "heroCtaPulse 2.2s ease-in-out infinite" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Empieza Sin Costo — 60 Días
              <span className="btn-arrow"><ArrowCornerIcon /></span>
            </a>
          </div>
        </Reveal>

        {/* Footer */}
        <footer className="footer">
          <span>© {new Date().getFullYear()} Profit120. Todos los derechos reservados.</span>
          <div className="footer-links">
            <a href="https://plataforma.profit120.com/app/chatbot" target="_blank" rel="noopener noreferrer">Activa tus 60 días sin costo</a>
          </div>
        </footer>
      </div>
    </>
  );
}
