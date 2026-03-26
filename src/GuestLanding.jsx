import { useState, useEffect, useRef } from "react";
import { InfiniteGridBackground } from "../components/ui/the-infinite-grid";

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
  const [count, setCount] = useState(end);
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
  html { scroll-behavior: smooth; overflow-x: hidden; }

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
    overflow-x: hidden;
    max-width: 100vw;
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

  .nav-login {
    display: inline-flex;
    align-items: center;
    font-size: 13px;
    font-weight: 500;
    color: ${BRAND.textPrimary};
    text-decoration: none;
    padding: 10px 18px;
    border-radius: 999px;
    border: 1px solid ${BRAND.border};
    background: transparent;
    transition: all 0.2s ease;
    white-space: nowrap;
  }
  .nav-login:hover {
    border-color: rgba(25,23,18,0.25);
    background: rgba(25,23,18,0.03);
  }

  .nav-actions {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .nav-cta-mobile { display: none; }
  .nav-cta-desktop { display: inline; }

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
  .hero-line.middle {
    color: ${BRAND.green};
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
    box-shadow: none;
    transition: all 0.5s cubic-bezier(0.16,1,0.3,1);
  }

  .product-mockup:hover {
    transform: translateY(-6px);
    box-shadow: none;
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

  /* ── B2B upsell ── */
  .b2b-upsell {
    background: #0f0f1a;
    padding: 72px 24px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    position: relative;
    overflow: hidden;
  }

  .b2b-upsell::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 60% 50% at 50% 50%, rgba(34,197,94,0.07) 0%, transparent 70%);
    pointer-events: none;
  }

  .b2b-badge {
    display: inline-flex;
    align-items: center;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1.2px;
    color: #22c55e;
    background: rgba(34,197,94,0.08);
    border: 1px solid rgba(34,197,94,0.2);
    padding: 6px 14px;
    border-radius: 999px;
    text-transform: uppercase;
  }

  .b2b-headline {
    font-size: clamp(22px, 2.8vw, 36px);
    font-weight: 800;
    color: #ffffff;
    letter-spacing: -1px;
    line-height: 1.15;
    max-width: 640px;
    margin: 0;
  }

  .b2b-desc {
    font-size: 15px;
    color: #a1a1aa;
    line-height: 1.65;
    max-width: 520px;
    margin: 0;
  }

  .b2b-tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin-top: 4px;
  }

  .b2b-tag {
    font-size: 12px;
    font-weight: 600;
    color: rgba(255,255,255,0.75);
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    padding: 7px 14px;
    border-radius: 999px;
    white-space: nowrap;
  }

  .b2b-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 700;
    color: #ffffff;
    background: transparent;
    border: 1.5px solid rgba(255,255,255,0.25);
    padding: 12px 28px;
    border-radius: 12px;
    text-decoration: none;
    letter-spacing: 0.2px;
    transition: border-color 0.2s, background 0.2s, color 0.2s;
  }

  .b2b-btn:hover {
    border-color: #22c55e;
    color: #22c55e;
    background: rgba(34,197,94,0.06);
  }

  @media (max-width: 768px) {
    .b2b-upsell { padding: 56px 20px; gap: 16px; }
    .b2b-headline { font-size: clamp(24px, 6vw, 36px); }
    .b2b-desc { font-size: 15px; padding: 0 8px; }
    .b2b-tags { flex-direction: column; align-items: center; }
    .b2b-tag { white-space: normal; text-align: center; font-size: 13px; }
    .b2b-btn { font-size: 13px; padding: 10px 24px; }
  }

  /* ── Video section ── */
  .video-section {
    padding: 80px 48px;
    border-top: 1px solid ${BRAND.border};
    border-bottom: 1px solid ${BRAND.border};
  }

  .video-section-grid {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 56px;
    align-items: center;
  }

  .video-section-embed {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    aspect-ratio: 16 / 9;
    background: #000;
    box-shadow: 0 24px 64px rgba(0,0,0,0.1), 0 0 0 1px ${BRAND.border};
  }

  @media (max-width: 768px) {
    .video-section { padding: 60px 20px; }
    .video-section-grid { grid-template-columns: 1fr; gap: 32px; }
    .video-section-embed { border-radius: 16px; }
  }

  @media (max-width: 480px) {
    .video-section { padding: 48px 16px; }
    .video-section-grid { gap: 24px; }
    .video-section-embed { border-radius: 14px; }
  }

  /* ── CTA section (light) ── */
  .final-cta {
    position: relative;
    z-index: 5;
    padding: 80px 48px;
    text-align: center;
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
    align-items: stretch;
  }

  .obj-grid > div { display: flex; flex-direction: column; }

  .obj-card {
    background: rgba(255,255,255,0.88);
    border: 1px solid ${BRAND.border};
    border-radius: 20px;
    padding: 28px;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    height: 100%;
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

  /* ── Responsive: All sections clamped ── */
  section, .features, .promo-offer, .howto, .testimonials, .objections,
  .for-whom, .value-stack, .comparison-section, .problem-section,
  .b2b-upsell, .final-cta, .footer-full, .video-section, .diff-section {
    max-width: 100%;
    overflow-x: hidden;
  }

  .product-mockup, .mock-brain, .mock-chat, .mock-boost, .mock-talks, .mock-labs {
    max-width: 100%;
    overflow: hidden;
  }

  /* ── Responsive: Tablet ── */
  @media (max-width: 1024px) {
    .nav { padding: 16px 28px; }
    .nav-cta { font-size: 13px; padding: 10px 16px; }
    .promo-offer-shell { grid-template-columns: 1fr; }
    .promo-points { grid-template-columns: 1fr; }
    .comparison-row { grid-template-columns: 1.2fr 1fr 0.6fr; padding: 14px 20px; }
    .product-row { gap: 32px; }
  }

  /* ── Responsive: Mobile ── */
  @media (max-width: 768px) {
    /* Global mobile overflow fix */
    .marquee-strip { height: 34px; }
    .marquee-item { padding: 0 18px; font-size: 11px; }

    /* Nav */
    .nav { padding: 14px 20px; }
    .nav-links { display: none; }
    /* Nav mobile */
    .nav-logo img { height: 22px; }
    .nav-login { font-size: 10px; padding: 6px 10px; white-space: normal; text-align: center; line-height: 1.3; max-width: 80px; color: ${BRAND.textMuted}; }
    .nav-cta { font-size: 11px; font-weight: 700; padding: 8px 14px; gap: 4px; color: #fff; background: ${BRAND.green}; border-color: rgba(17,55,17,0.08); box-shadow: 0 4px 12px rgba(39,201,39,0.2); }
    .nav-cta:hover { background: ${BRAND.greenDim}; }
    .nav-cta span:last-child { display: none; }
    .nav-cta-desktop { display: none; }
    .nav-cta-mobile { display: inline; }
    .nav-actions { gap: 10px; }

    /* Hero */
    .hero { grid-template-columns: 1fr; row-gap: 8px; column-gap: 0; padding: 142px 20px 60px; }
    .hero-headline { letter-spacing: -1.3px; font-size: clamp(34px, 8vw, 52px); margin-bottom: 0; }
    .hero-copy { margin-bottom: -14px; }
    .hero-media { min-height: 0; justify-content: center; }
    .hero-globe { width: min(156vw, 860px); opacity: 0.1; inset: 67% auto auto 50%; }
    .hero-sub { padding: 12px 16px; border-radius: 999px; margin: 0 0 20px; transform: translateY(-20px); }
    .hero-cta-row { gap: 10px; margin-top: 18px; flex-wrap: wrap; }
    .hero-vsl { max-width: 260px; justify-self: center; }
    .hero-offer-card { min-height: 64px; padding: 0 18px; border-radius: 20px; flex-basis: 100%; }
    .hero-offer-title { gap: 6px; letter-spacing: -0.8px; white-space: normal; }
    .hero-offer-title strong { font-size: clamp(22px, 7vw, 30px); }
    .hero-offer-title span { font-size: clamp(22px, 7vw, 30px); }
    .btn-primary { min-height: 64px; min-width: 0; width: 100%; padding: 0 22px; border-radius: 20px; font-size: clamp(16px, 5vw, 22px); flex-basis: 100%; }
    .btn-arrow { width: 28px; height: 28px; font-size: 15px; }
    .hero-line.top, .hero-line.middle, .hero-line.bottom { white-space: normal; }

    /* Stats */
    .stats-strip-inner { grid-template-columns: repeat(2, 1fr); gap: 24px; }
    .stat-item:nth-child(2)::after { display: none; }

    /* Products */
    .features { padding: 60px 20px 20px; }
    .product-row { grid-template-columns: 1fr; gap: 24px; padding: 40px 0; }
    .product-info { order: 1; }
    .product-mockup { order: 2; }
    .product-name { font-size: clamp(24px, 6vw, 32px); }
    .product-desc { font-size: 15px; max-width: 100%; }
    .product-badge { font-size: 10px; padding: 5px 12px; }
    .product-feature-item { font-size: 13px; }
    .mock-brain-cards { grid-template-columns: repeat(2, 1fr); }
    .mock-chat-suggestions { grid-template-columns: 1fr; }
    .mock-boost-grid { grid-template-columns: repeat(2, 1fr); }
    .mock-boost-categories { flex-wrap: wrap; }
    .mock-labs-grid { grid-template-columns: 1fr; }
    .mock-talks-grid { grid-template-columns: repeat(2, 1fr); }

    /* Promo offer */
    .promo-offer { padding: 24px 20px 80px; }
    .promo-offer-shell { grid-template-columns: 1fr; padding: 22px; }
    .promo-points { grid-template-columns: 1fr; }
    .promo-title { font-size: clamp(28px, 7vw, 40px); }
    .promo-desc { font-size: 15px; }
    .signal-panel { min-height: 280px; }

    /* How it works */
    .howto { padding: 40px 20px 80px; }
    .steps { grid-template-columns: 1fr; gap: 16px; }
    .steps::before { display: none; }

    /* Shorts */
    .short-inline { padding: 0 20px 36px; }
    .short-inline.float-left, .short-inline.float-right { justify-content: center; }
    .short-inline-asset, .vsl-card { max-width: 220px; }

    /* Testimonials */
    .testimonials { padding: 0 20px 80px; }
    .t-grid { grid-template-columns: 1fr; }

    /* Objections */
    .objections { padding: 0 20px 80px; }
    .obj-grid { grid-template-columns: 1fr; }

    /* Value stack / Pricing */
    .value-stack { padding: 0 20px 80px; }
    .value-item { padding: 14px 16px; flex-wrap: wrap; }
    .value-item-name { font-size: 13px; gap: 6px; }
    .value-item-badge { font-size: 8px; padding: 2px 6px; }
    .value-item-price { font-size: 12px; }
    .value-total { flex-direction: column; align-items: center; gap: 12px; text-align: center; padding: 20px 16px; }
    .value-total-now { font-size: 26px; }
    .value-total-was { font-size: 14px; }

    /* Comparison */
    .comparison-section { padding: 60px 20px; }
    .comparison-row { grid-template-columns: 1fr; gap: 6px; padding: 14px 16px; }
    .comparison-row.comp-header { display: none; }
    .comp-tool { font-size: 14px; font-weight: 700; }
    .comp-price { font-size: 13px; }
    .comp-learns { text-align: left; font-size: 12px; }

    /* CTA */
    .final-cta { margin: 0 20px 60px; padding: 48px 24px; }
    .final-cta-title { font-size: clamp(26px, 7vw, 40px); letter-spacing: -1.2px; }
    .final-cta-sub { font-size: 15px; }
    .cta-benefits { gap: 8px; }
    .benefit-chip { font-size: 12px; padding: 8px 14px; }

    /* Footer */
    .footer { flex-direction: column; gap: 16px; padding: 24px 20px; text-align: center; }

    /* Section headings */
    .section-heading { font-size: clamp(26px, 7vw, 38px); letter-spacing: -1px; }
    .section-desc { font-size: 15px; padding: 0 4px; }
  }

  @media (max-width: 480px) {
    .hero-cta-row { flex-direction: column; width: 100%; }
    .btn-primary { width: 100%; justify-content: center; font-size: 16px; min-height: 58px; }
    .btn-hero { min-width: 0; width: 100%; font-size: 16px; min-height: 58px; padding: 0 24px; }
    .hero-trust { flex-direction: column; gap: 8px; }
    .hero-anchor-proof { flex-direction: column; text-align: center; gap: 6px; }
    .stats-strip-inner { grid-template-columns: 1fr; gap: 20px; }
    .stat-item::after { display: none !important; }
    .mock-brain-cards { grid-template-columns: 1fr; }
    .mock-boost-grid { grid-template-columns: 1fr; }
    .mock-boost-categories { gap: 6px; }
    .mock-talks-grid { grid-template-columns: 1fr; }
    .product-row { gap: 20px; padding: 28px 0; }
    .promo-offer-shell { padding: 16px; }
    .promo-point { padding: 12px; }
    .promo-point strong { font-size: 14px; }
    .promo-point span { font-size: 12px; }
    .signal-panel { min-height: 240px; padding: 16px; }
    .value-item-name { font-size: 12px; }
    .comparison-row { padding: 12px 14px; }
    .b2b-upsell { padding: 48px 16px; }
    .b2b-headline { font-size: clamp(22px, 6vw, 32px); }
    .for-whom-card { padding: 20px; }
    .for-whom-title { font-size: 15px; }
    .for-whom-desc { font-size: 13px; }
    .obj-card { padding: 20px; }
    .obj-question { font-size: 15px; }
    .obj-answer { font-size: 13px; }
    .pain-card { padding: 20px; flex-direction: column; }
  }

  /* ── Problem / Pain section ── */
  .problem-section {
    position: relative;
    z-index: 5;
    background: #f9f9f7;
    border-top: 1px solid ${BRAND.border};
    border-bottom: 1px solid ${BRAND.border};
    padding: 80px 48px;
  }
  .problem-inner { max-width: 1100px; margin: 0 auto; }
  .problem-header { text-align: center; margin-bottom: 56px; }
  .pain-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
  .pain-card {
    background: #fff;
    border: 1px solid ${BRAND.border};
    border-radius: 20px;
    padding: 28px 32px;
    display: flex;
    gap: 16px;
    align-items: flex-start;
    transition: all 0.3s ease;
  }
  .pain-card:hover { border-color: rgba(239,68,68,0.15); transform: translateY(-2px); box-shadow: 0 12px 30px rgba(239,68,68,0.04); }
  .pain-icon { width: 44px; height: 44px; border-radius: 12px; background: rgba(239,68,68,0.06); display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0; }
  .pain-title { font-weight: 700; font-size: 16px; color: ${BRAND.textPrimary}; margin-bottom: 6px; }
  .pain-desc { font-size: 14px; color: ${BRAND.textSecondary}; line-height: 1.65; }

  /* ── "¿Para quién es?" ── */
  .for-whom { position: relative; z-index: 5; max-width: 1100px; margin: 0 auto; padding: 80px 48px 100px; }
  .for-whom-header { text-align: center; margin-bottom: 56px; }
  .for-whom-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-bottom: 16px; }
  .for-whom-card {
    background: rgba(255,255,255,0.88);
    border: 1px solid ${BRAND.border};
    border-radius: 20px;
    padding: 28px 32px;
    display: flex;
    align-items: flex-start;
    gap: 16px;
    transition: all 0.3s ease;
  }
  .for-whom-card:hover { border-color: rgba(39,201,39,0.2); transform: translateY(-2px); box-shadow: 0 12px 30px rgba(39,201,39,0.06); }
  .for-whom-check { width: 28px; height: 28px; border-radius: 8px; background: rgba(39,201,39,0.1); display: flex; align-items: center; justify-content: center; color: ${BRAND.green}; font-size: 13px; font-weight: 700; flex-shrink: 0; margin-top: 2px; }
  .for-whom-title { font-size: 16px; font-weight: 700; color: ${BRAND.textPrimary}; margin-bottom: 4px; }
  .for-whom-desc { font-size: 14px; color: ${BRAND.textSecondary}; line-height: 1.6; }
  .not-for-whom { background: rgba(249,249,247,0.8); border: 1px solid ${BRAND.border}; border-radius: 20px; padding: 24px 32px; text-align: center; }
  .not-for-whom-title { font-size: 12px; font-weight: 700; color: ${BRAND.textMuted}; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 1px; }
  .not-for-list { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
  .not-for-item { font-size: 13px; color: ${BRAND.textMuted}; background: rgba(239,68,68,0.05); border: 1px solid rgba(239,68,68,0.1); padding: 6px 14px; border-radius: 999px; }

  /* ── Value stack ── */
  .value-stack { position: relative; z-index: 5; max-width: 780px; margin: 0 auto; padding: 0 48px 100px; text-align: center; }
  .value-stack-header { margin-bottom: 40px; }
  .value-items { display: flex; flex-direction: column; border: 1px solid ${BRAND.border}; border-radius: 20px; overflow: hidden; margin-bottom: 16px; }
  .value-item { display: flex; align-items: center; justify-content: space-between; padding: 16px 24px; background: rgba(255,255,255,0.9); border-bottom: 1px solid ${BRAND.border}; gap: 12px; }
  .value-item:last-child { border-bottom: none; }
  .value-item-name { display: flex; align-items: center; gap: 10px; font-size: 14px; font-weight: 600; color: ${BRAND.textPrimary}; flex: 1; flex-wrap: wrap; }
  .value-item-badge { font-size: 9px; font-weight: 700; color: ${BRAND.green}; background: rgba(39,201,39,0.1); border: 1px solid rgba(39,201,39,0.15); padding: 3px 8px; border-radius: 999px; text-transform: uppercase; letter-spacing: 0.5px; white-space: nowrap; }
  .value-item-price { font-size: 13px; font-weight: 700; color: ${BRAND.textMuted}; text-decoration: line-through; white-space: nowrap; }
  .value-total { background: rgba(39,201,39,0.05); border: 1px solid rgba(39,201,39,0.15); border-radius: 16px; padding: 20px 24px; display: flex; align-items: center; justify-content: space-between; margin-bottom: 32px; }
  .value-total-label { font-size: 16px; font-weight: 700; color: ${BRAND.textPrimary}; }
  .value-total-price { display: flex; align-items: baseline; gap: 10px; }
  .value-total-was { font-size: 15px; font-weight: 600; color: ${BRAND.textMuted}; text-decoration: line-through; }
  .value-total-now { font-size: 30px; font-weight: 800; color: ${BRAND.green}; letter-spacing: -1px; }
  .value-total-period { font-size: 12px; color: ${BRAND.textMuted}; }

  /* ── Compact modules mini grid ── */
  .modules-grid-section { padding: 0 0 20px; }
  .modules-mini-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 16px; }
  .module-mini-card { background: rgba(255,255,255,0.88); border: 1px solid ${BRAND.border}; border-radius: 20px; padding: 28px; transition: all 0.3s ease; display: flex; flex-direction: column; gap: 12px; }
  .module-mini-card:hover { border-color: rgba(39,201,39,0.2); transform: translateY(-4px); box-shadow: 0 20px 40px rgba(39,201,39,0.06); }
  .module-mini-badge { display: inline-flex; align-items: center; gap: 6px; padding: 4px 12px; border-radius: 999px; background: rgba(39,201,39,0.08); border: 1px solid rgba(39,201,39,0.15); font-size: 10px; font-weight: 700; color: ${BRAND.green}; letter-spacing: 1.5px; text-transform: uppercase; width: fit-content; }
  .module-mini-name { font-weight: 800; font-size: 20px; color: ${BRAND.textPrimary}; letter-spacing: -0.5px; }
  .module-mini-desc { font-size: 14px; color: ${BRAND.textSecondary}; line-height: 1.6; }
  .module-mini-link { display: inline-flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 700; color: ${BRAND.green}; text-decoration: none; margin-top: auto; }
  .module-mini-link:hover { opacity: 0.75; }

  /* ── Testimonial improvements ── */
  .t-avatar-img { width: 42px; height: 42px; border-radius: 12px; object-fit: cover; flex-shrink: 0; }
  .t-company { font-size: 11px; color: ${BRAND.textMuted}; margin-top: 1px; }
  .t-result { display: inline-flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 700; color: ${BRAND.green}; background: rgba(39,201,39,0.08); border: 1px solid rgba(39,201,39,0.15); padding: 5px 12px; border-radius: 999px; margin-bottom: 14px; }

  /* ── Full footer ── */
  .footer-full { position: relative; z-index: 5; border-top: 1px solid ${BRAND.border}; padding: 48px 48px 32px; }
  .footer-top { display: grid; grid-template-columns: 1.2fr 1fr 1fr; gap: 40px; padding-bottom: 40px; border-bottom: 1px solid ${BRAND.border}; margin-bottom: 28px; }
  .footer-brand p { font-size: 13px; color: ${BRAND.textMuted}; line-height: 1.6; margin-top: 12px; max-width: 240px; }
  .footer-brand img { height: 28px; width: auto; }
  .footer-col-title { font-size: 11px; font-weight: 700; color: ${BRAND.textPrimary}; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 16px; }
  .footer-col-links { display: flex; flex-direction: column; gap: 10px; }
  .footer-col-links a { font-size: 13px; color: ${BRAND.textMuted}; text-decoration: none; transition: color 0.2s ease; }
  .footer-col-links a:hover { color: ${BRAND.green}; }
  .footer-social { display: flex; gap: 8px; margin-top: 16px; }
  .footer-social a { width: 34px; height: 34px; border-radius: 10px; background: rgba(25,23,18,0.05); border: 1px solid ${BRAND.border}; display: flex; align-items: center; justify-content: center; color: ${BRAND.textMuted}; text-decoration: none; transition: all 0.2s ease; }
  .footer-social a:hover { background: rgba(39,201,39,0.08); border-color: rgba(39,201,39,0.2); color: ${BRAND.green}; }
  .footer-bottom { display: flex; align-items: center; justify-content: space-between; font-size: 12px; color: ${BRAND.textMuted}; }
  .footer-legal { display: flex; gap: 20px; }
  .footer-legal a { color: ${BRAND.textMuted}; text-decoration: none; transition: color 0.2s ease; }
  .footer-legal a:hover { color: ${BRAND.green}; }

  @media (max-width: 768px) {
    .pain-grid { grid-template-columns: 1fr; }
    .for-whom { padding: 60px 20px 80px; }
    .for-whom-grid { grid-template-columns: 1fr; }
    .modules-mini-grid { grid-template-columns: 1fr; }
    .value-stack { padding: 0 20px 80px; }
    .problem-section { padding: 60px 20px; }
    .footer-full { padding: 40px 20px 24px; }
    .footer-top { grid-template-columns: 1fr; gap: 28px; }
    .footer-bottom { flex-direction: column; gap: 12px; text-align: center; }
    .footer-legal { justify-content: center; }
    .not-for-whom { padding: 20px; }
    .not-for-list { flex-direction: column; gap: 8px; }
  }

  /* ════════════════════════════════
     MODULES 2×2 GRID
     ════════════════════════════════ */
  .modules-2x2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    margin-top: 48px;
  }

  .module-card-2x2 {
    background: #fff;
    border: 1px solid ${BRAND.border};
    border-radius: 20px;
    overflow: hidden;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
  }

  .module-card-2x2:hover {
    box-shadow: 0 20px 48px rgba(0,0,0,0.07);
    transform: translateY(-3px);
  }

  .module-card-2x2 .product-mockup {
    border-radius: 0;
    border: none;
    box-shadow: none;
  }

  .module-card-2x2-info {
    padding: 24px;
  }

  @media (max-width: 768px) {
    .modules-2x2 { grid-template-columns: 1fr; }
  }

  /* ════════════════════════════════
     HERO REDESIGN — centered single-column
     ════════════════════════════════ */
  .hero {
    display: flex !important;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 260px 16px 130px;
    max-width: 980px;
    grid-template-columns: unset !important;
  }

  .hero-anchor-proof {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    font-weight: 500;
    color: ${BRAND.textMuted};
    margin-bottom: 36px;
    letter-spacing: 0;
  }

  .hero-anchor-proof strong {
    color: ${BRAND.textPrimary};
    font-weight: 700;
  }

  .hero-anchor-avatars {
    display: flex;
    align-items: center;
  }

  .hero-anchor-avatar {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 2px solid #fff;
    background: linear-gradient(135deg, rgba(39,201,39,0.25), rgba(82,223,82,0.35));
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 9px;
    font-weight: 700;
    color: ${BRAND.greenDim};
    margin-left: -8px;
    flex-shrink: 0;
  }

  .hero-anchor-avatar:first-child { margin-left: 0; }

  .hero-headline {
    font-size: clamp(44px, 6vw, 80px) !important;
    text-align: center !important;
    letter-spacing: -3px !important;
    line-height: 0.97 !important;
    margin-bottom: 32px;
  }

  .hero-line.middle { white-space: nowrap; }

  .hero-line.top, .hero-line.bottom { color: ${BRAND.textPrimary} !important; }
  .hero-line.middle { color: ${BRAND.green} !important; }

  .hero-subtext {
    font-size: clamp(16px, 1.4vw, 18px);
    color: ${BRAND.textSecondary};
    line-height: 1.7;
    max-width: 560px;
    margin: 0 auto 48px;
  }

  .hero-cta-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin-bottom: 36px;
  }

  .btn-hero {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: ${BRAND.green};
    color: #000;
    font-family: 'Inter', sans-serif;
    font-size: clamp(16px, 1.4vw, 19px);
    font-weight: 800;
    letter-spacing: -0.4px;
    padding: 0 36px;
    min-height: 68px;
    min-width: 320px;
    border-radius: 22px;
    border: 1px solid rgba(17,55,17,0.08);
    cursor: pointer;
    text-decoration: none;
    transition: all 0.25s cubic-bezier(0.16,1,0.3,1);
    position: relative;
    overflow: hidden;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.26), 0 12px 28px rgba(39,201,39,0.22);
    animation: heroCtaPulse 2.2s ease-in-out infinite;
  }

  .btn-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(120deg, transparent 10%, rgba(255,255,255,0.26) 38%, rgba(255,255,255,0.08) 52%, transparent 72%);
    transform: translateX(-100%);
    animation: heroCtaSweep 2.8s ease-in-out infinite;
  }

  .btn-hero:hover { transform: translateY(-2px); background: ${BRAND.greenDim}; }
  .btn-hero:active { transform: scale(0.98); }
  .btn-hero:hover .btn-arrow { transform: translateX(3px); }

  .hero-video-trigger {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    font-weight: 500;
    color: ${BRAND.textMuted};
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    transition: color 0.2s ease;
  }

  .hero-video-trigger:hover { color: ${BRAND.textPrimary}; }

  .hero-play-circle {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: rgba(39,201,39,0.1);
    border: 1px solid rgba(39,201,39,0.2);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .hero-trust {
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: center !important;
    flex-wrap: wrap;
    max-width: none !important;
    justify-self: unset !important;
  }

  .hero-globe {
    inset: 70% auto auto 50% !important;
    width: min(120vw, 1200px) !important;
    opacity: 0.12 !important;
  }

  /* ── Video modal ── */
  .hero-video-modal {
    position: fixed;
    inset: 0;
    z-index: 1000;
    background: rgba(10,10,10,0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);
    animation: fadeIn 0.25s ease;
  }

  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

  .hero-video-modal-inner {
    position: relative;
    width: min(340px, 88vw);
    aspect-ratio: 9 / 16;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 40px 80px rgba(0,0,0,0.5);
  }

  .hero-video-modal-inner iframe {
    width: 100%;
    height: 100%;
    border: 0;
    display: block;
  }

  .hero-video-modal-close {
    position: absolute;
    top: -44px;
    right: 0;
    background: rgba(255,255,255,0.12);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 50%;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.2s ease;
  }

  .hero-video-modal-close:hover { background: rgba(255,255,255,0.22); }

  @media (max-width: 768px) {
    .hero { padding: 155px 20px 72px; }
    .hero-headline { font-size: clamp(32px, 8.5vw, 50px) !important; letter-spacing: -1.8px !important; }
    .hero-subtext { font-size: 15px; margin-bottom: 32px !important; padding: 0 8px; }
    .btn-hero { min-width: 0; width: 100%; font-size: 16px; min-height: 58px; padding: 0 24px; }
    .hero-trust { gap: 10px; }
    .hero-cta-block { gap: 12px; margin-bottom: 28px; }
    .hero-sponsors { gap: 6px 14px; margin-top: 28px; }
    .hero-sponsor-name { font-size: 11px; padding: 3px 10px; }
    .hero-sponsors-label { font-size: 10px; }
    .shorts-grid { grid-template-columns: 1fr !important; max-width: 320px !important; }
  }

  @media (max-width: 480px) {
    .hero { padding: 140px 16px 60px; }
    .hero-headline { font-size: clamp(28px, 8vw, 42px) !important; letter-spacing: -1.5px !important; line-height: 1.02 !important; }
    .hero-subtext { font-size: 14px; margin-bottom: 28px !important; }
    .hero-video-trigger { font-size: 13px; }
  }

  /* ════════════════════════════════
     ANIMATIONS & SUBTLE EFFECTS
     ════════════════════════════════ */

  @keyframes float {
    0%,100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  @keyframes scan-h {
    0% { transform: translateX(-200%); opacity: 0; }
    20% { opacity: 0.8; }
    80% { opacity: 0.8; }
    100% { transform: translateX(600%); opacity: 0; }
  }
  @keyframes gradient-x {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  /* ── Hero bg ───────────────────────── */

  /* ── Hero bg (particles) ──────────── */
  .hero-bg {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: 0;
  }
  .hero-glow-orb {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
  }
  .hero-glow-orb-1 {
    width: 700px; height: 700px;
    top: -250px; left: -120px;
    background: radial-gradient(circle, rgba(39,201,39,0.04) 0%, transparent 65%);
  }
  .hero-glow-orb-2 {
    width: 400px; height: 400px;
    bottom: -80px; right: -80px;
    background: radial-gradient(circle, rgba(39,201,39,0.03) 0%, transparent 65%);
  }
  .hero-particle {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    background: rgba(39,201,39,0.4);
    box-shadow: 0 0 6px rgba(39,201,39,0.5);
  }
  .hero-particle:nth-child(1) { width:3px;height:3px;top:18%;left:7%; animation:float 5s ease-in-out infinite; }
  .hero-particle:nth-child(2) { width:4px;height:4px;top:55%;left:88%; animation:float 7s ease-in-out infinite 1s; }
  .hero-particle:nth-child(3) { width:2px;height:2px;top:32%;right:14%; animation:float 6.5s ease-in-out infinite 2s; }
  .hero-particle:nth-child(4) { width:5px;height:5px;top:75%;left:38%; animation:float 4s ease-in-out infinite 0.5s; }
  .hero-particle:nth-child(5) { width:3px;height:3px;top:12%;right:26%; animation:float 8s ease-in-out infinite 3s; }
  .hero-particle:nth-child(6) { width:4px;height:4px;top:68%;right:22%; animation:float 5.5s ease-in-out infinite 1.5s; }
  .hero-particle:nth-child(7) { width:2px;height:2px;top:42%;left:18%; animation:float 6s ease-in-out infinite 0.8s; }
  .hero-particle:nth-child(8) { width:3px;height:3px;top:85%;right:38%; animation:float 7.5s ease-in-out infinite 2.5s; }

  /* hero headline gradient */
  .hero-headline .hero-line.middle {
    background: linear-gradient(100deg, #1a9c1a 0%, #27c927 50%, #1a9c1a 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gradient-x 4s linear infinite;
  }

  /* ── Scan line on mockup bars ──────── */
  .mockup-bar { position: relative; overflow: hidden; }
  .mockup-bar::after {
    content: '';
    position: absolute;
    top: 0; bottom: 0;
    width: 50px;
    background: linear-gradient(90deg, transparent, rgba(39,201,39,0.18), transparent);
    animation: scan-h 4s ease-in-out infinite;
  }

  /* ── Comparison table ──────────────── */
  .comparison-section {
    padding: 80px 48px;
    max-width: 900px;
    margin: 0 auto;
  }
  .comparison-table {
    margin-top: 40px;
    border: 1px solid ${BRAND.border};
    border-radius: 20px;
    overflow: hidden;
    background: #fff;
  }
  .comparison-row {
    display: grid;
    grid-template-columns: 1.4fr 1fr 1fr;
    align-items: center;
    padding: 16px 28px;
    border-bottom: 1px solid ${BRAND.border};
    gap: 16px;
    transition: background 0.2s ease;
  }
  .comparison-row:last-child { border-bottom: none; }
  .comparison-row.comp-header {
    background: rgba(25,23,18,0.02);
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: ${BRAND.textMuted};
    padding: 12px 28px;
  }
  .comparison-row.comp-highlight {
    background: rgba(39,201,39,0.04);
    border-top: 1px solid rgba(39,201,39,0.12);
    border-bottom: 1px solid rgba(39,201,39,0.12);
  }
  .comp-tool { font-size: 14px; font-weight: 600; color: ${BRAND.textPrimary}; }
  .comparison-row.comp-highlight .comp-tool { color: ${BRAND.green}; font-weight: 700; }
  .comp-price { font-size: 13px; color: ${BRAND.textSecondary}; }
  .comparison-row.comp-highlight .comp-price { font-size: 14px; font-weight: 700; color: ${BRAND.green}; }
  .comp-learns { font-size: 14px; color: rgba(25,23,18,0.18); text-align: center; }
  .comparison-row.comp-highlight .comp-learns { color: ${BRAND.green}; font-weight: 700; font-size: 17px; }
  @media (max-width: 640px) {
    .comparison-section { padding: 60px 16px; }
    .comparison-row { grid-template-columns: 1fr; gap: 4px; padding: 12px 14px; }
    .comparison-row.comp-header { display: none; }
    .comp-learns { text-align: left; font-size: 12px; }
  }

  /* ════════════════════════════════
     HERO SPONSORS
     ════════════════════════════════ */
  .hero-sponsors {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 8px 20px;
    margin-top: 40px;
  }

  .hero-sponsors-label {
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${BRAND.textMuted};
    width: 100%;
    text-align: center;
    margin-bottom: 4px;
  }

  .hero-sponsor-name {
    font-size: 12px;
    font-weight: 600;
    color: ${BRAND.textMuted};
    opacity: 0.55;
    letter-spacing: 0.5px;
    padding: 4px 12px;
    border: 1px solid ${BRAND.border};
    border-radius: 6px;
    transition: opacity 0.2s ease;
  }

  .hero-sponsor-name:hover { opacity: 0.85; }

  /* ════════════════════════════════
     DIFFERENTIATOR TIMELINE
     ════════════════════════════════ */
  .diff-section {
    padding: 100px 48px;
    background: ${BRAND.dark};
    border-top: 1px solid rgba(255,255,255,0.06);
  }

  .diff-inner {
    max-width: 960px;
    margin: 0 auto;
  }

  .diff-timeline {
    display: flex;
    align-items: flex-start;
    gap: 0;
    margin-top: 64px;
    position: relative;
  }

  .diff-step {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
  }

  .diff-step-label {
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: ${BRAND.green};
    margin-bottom: 12px;
  }

  .diff-card {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 16px;
    padding: 24px 20px;
    width: 100%;
  }

  .diff-step-title {
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 8px;
    line-height: 1.3;
  }

  .diff-step-desc {
    font-size: 13px;
    color: rgba(255,255,255,0.5);
    line-height: 1.6;
  }

  .diff-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 8px;
    margin-top: 72px;
    color: ${BRAND.green};
    font-size: 20px;
    flex-shrink: 0;
  }

  .diff-conclusion {
    margin-top: 48px;
    text-align: center;
    padding: 32px;
    background: rgba(39,201,39,0.06);
    border: 1px solid rgba(39,201,39,0.2);
    border-radius: 16px;
  }

  .diff-conclusion p {
    font-size: 17px;
    color: rgba(255,255,255,0.85);
    line-height: 1.65;
    margin: 0;
  }

  .diff-conclusion strong {
    color: ${BRAND.green};
  }

  @media (max-width: 768px) {
    .diff-section { padding: 60px 20px; }
    .diff-timeline { flex-direction: column; gap: 16px; }
    .diff-arrow { transform: rotate(90deg); margin: 0 auto; padding: 4px 0; }
    .diff-step { width: 100%; }
    .diff-card { padding: 20px 16px; }
    .diff-step-title { font-size: 15px; }
    .diff-step-desc { font-size: 12px; }
    .diff-conclusion { padding: 24px 16px; }
    .diff-conclusion p { font-size: 15px; }
  }

  /* ════════════════════════════════
     BRAIN IN-ACTION BLOCK
     ════════════════════════════════ */
  .brain-in-action {
    margin-top: 28px;
    padding: 20px 24px;
    background: rgba(39,201,39,0.06);
    border: 1px solid rgba(39,201,39,0.18);
    border-radius: 14px;
  }

  .brain-in-action-label {
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: ${BRAND.green};
    margin-bottom: 8px;
  }

  .brain-in-action-text {
    font-size: 14px;
    color: rgba(255,255,255,0.65);
    line-height: 1.65;
  }

  /* ════════════════════════════════
     PRODUCT ROW BRAIN (wider variant)
     ════════════════════════════════ */
  .product-row-brain .product-row-content {
    max-width: 600px;
  }

  .product-row-brain .product-row-visual {
    min-height: 420px;
  }
`;

const testimonials = [
  {
    stars: 5,
    quote: "Llevaba meses tomando decisiones de compra sin datos reales. Con la herramienta de proyección de flujo de caja de BRAIN identifiqué que estaba sobrecomprando inventario un 34%. Ajusté el mes siguiente y recuperé liquidez que no sabía que tenía.",
    name: "Dueño de restaurante",
    role: "Giro: Alimentos y Bebidas",
    company: "CDMX · 18 empleados",
    result: "Liquidez recuperada en 30 días",
    initials: "DR",
  },
  {
    stars: 5,
    quote: "Usé el módulo de estructura de equipo para redefinir roles antes de una expansión. Detectamos duplicidad de funciones entre 3 personas — algo que llevaba 2 años sin resolverse. En una semana teníamos el organigrama nuevo funcionando.",
    name: "Directora de operaciones",
    role: "Giro: E-commerce",
    company: "Monterrey · 24 empleados",
    result: "Organigrama redefinido en 1 semana",
    initials: "DO",
  },
  {
    stars: 5,
    quote: "Corrí la herramienta de análisis de rentabilidad por cliente y descubrí que el 20% de mis clientes generaba el 80% del margen. Dejé de perseguir proyectos pequeños y en 45 días subí mi margen neto de 12% a 21%.",
    name: "Director de agencia",
    role: "Giro: Servicios de Marketing",
    company: "Guadalajara · 11 empleados",
    result: "Margen neto de 12% a 21%",
    initials: "DA",
  },
  {
    stars: 5,
    quote: "Lancé mi negocio hace 8 meses y no tenía presupuesto para contratar un CFO ni un consultor. Con BRAIN armé mi modelo de precios, calculé mi punto de equilibrio y proyecté 6 meses de flujo de caja. Tomé decisiones desde el mes 1 que normalmente toman años en aprender.",
    name: "Emprendedor en etapa temprana",
    role: "Giro: SaaS B2B",
    company: "Monterrey · 3 personas",
    result: "Modelo financiero armado desde cero",
    initials: "EE",
  },
  {
    stars: 5,
    quote: "Soy gerente de ventas en una empresa mediana y usé las herramientas de análisis de pipeline y forecasting para mi presentación trimestral. Mi director me preguntó qué consultor había contratado. Le dije que era Profit120 y se quedó callado.",
    name: "Gerente de ventas",
    role: "Área: Comercial",
    company: "Empresa industrial · Monterrey",
    result: "Forecast trimestral en 2 horas",
    initials: "GV",
  },
];

const marqueeItems = [
  "Tu empresa entrena su propio cerebro de IA",
  "60 días sin costo",
  "Sin tarjeta de crédito",
  "Todo tu equipo incluido",
  "+200 herramientas empresariales",
  "Promoción por tiempo limitado",
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
  const [activeVideoId, setActiveVideoId] = useState(null);

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
          <div className="nav-actions">
            <a
              href="https://www.plataforma.profit120.com/app/chatbot"
              className="nav-login"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ya tengo cuenta
            </a>
            <a
              href="https://www.plataforma.profit120.com/app/chatbot"
              className="nav-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="nav-cta-desktop">Activa tu cerebro de IA</span><span className="nav-cta-mobile">Acceso gratis</span> <span>→</span>
            </a>
          </div>
        </nav>

        {/* Hero — centered single-column */}
        <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
        <InfiniteGridBackground />
        <section className="hero">
          {/* 2. Headline */}
          <Reveal delay={0.05}>
            <h1 className="hero-headline">
              <span className="hero-line top">Tu empresa merece</span>
              <span className="hero-line middle">su propio cerebro de IA.</span>
            </h1>
          </Reveal>

          {/* 3. Sub-headline */}
          <Reveal delay={0.1}>
            <p className="hero-subtext">
              Profit120 te da tu propio cerebro de IA, único para tu empresa. Cada uso lo hace más inteligente sobre tu negocio. Finanzas, ventas, marketing, operaciones y RRHH — todo en un solo lugar, para ti y todo tu equipo.
            </p>
          </Reveal>

          {/* 4. CTA */}
          <Reveal delay={0.15}>
            <div className="hero-cta-block">
              <a
                href="https://www.plataforma.profit120.com/app/chatbot"
                className="btn-hero"
                target="_blank"
                rel="noopener noreferrer"
              >
                Accede al cerebro de tu empresa - 60 días sin costo
                <span className="btn-arrow"><ArrowCornerIcon /></span>
              </a>
            </div>
          </Reveal>

          {/* 5. Trust bullets */}
          <Reveal delay={0.2}>
            <div className="hero-trust">
              <div className="trust-item"><CheckIcon /> 60 días sin costo — sin tarjeta de crédito</div>
              <div className="trust-item"><CheckIcon /> Todo tu equipo incluido desde el primer día</div>
              <div className="trust-item"><CheckIcon /> Sin necesidad de registrarte</div>
            </div>
          </Reveal>
        </section>
        </div>

        {/* Video modal */}
        {activeVideoId && (
          <div className="hero-video-modal" onClick={() => setActiveVideoId(null)}>
            <div className="hero-video-modal-inner" onClick={e => e.stopPropagation()}>
              <button className="hero-video-modal-close" onClick={() => setActiveVideoId(null)}>✕</button>
              <iframe
                src={`https://www.youtube.com/embed/${activeVideoId}?rel=0&modestbranding=1&playsinline=1&autoplay=1`}
                title="Profit120 video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        )}

        {/* Video section */}
        <section className="video-section">
          <div className="video-section-grid">
            {/* Context — info first */}
            <Reveal delay={0} direction="right">
              <div>
                <div className="section-eyebrow" style={{ justifyContent: "flex-start", marginBottom: 20 }}>
                  <span className="eyebrow-line" />Ve en acción
                </div>
                <h2 className="section-heading" style={{ textAlign: "left", marginBottom: 16 }}>
                  3 minutos que<br />lo explican todo.
                </h2>
                <p style={{ fontSize: 16, color: BRAND.textSecondary, lineHeight: 1.7, marginBottom: 28 }}>
                  Ve qué es Profit120, cómo funciona su IA y por qué no es una herramienta más — es el cerebro que tu empresa necesitaba.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {[
                    "Qué son los 5 módulos y para qué sirven",
                    "Cómo la IA aprende de tu empresa con cada uso",
                  ].map((point, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                      <span style={{ width: 22, height: 22, borderRadius: "50%", background: BRAND.greenGlow, border: `1px solid ${BRAND.borderHover}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                        <svg viewBox="0 0 12 12" fill={BRAND.green} width="8" height="8"><path d="M2 6l3 3 5-5" stroke={BRAND.green} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                      <span style={{ fontSize: 15, color: BRAND.textSecondary, lineHeight: 1.5 }}>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Video embed — second */}
            <Reveal delay={0.1} direction="left">
              <div className="video-section-embed">
                <iframe
                  src="https://www.youtube.com/embed/U-vm1CTmgR8?rel=0&modestbranding=1&playsinline=1"
                  title="Profit120 — Ve cómo funciona"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Stats strip */}
        <section className="stats-strip">
          <div className="stats-strip-inner">
            <div className="stat-item">
              <span className="stat-number"><AnimatedCounter end={5} /></span>
              <span className="stat-label">Módulos estratégicos</span>
            </div>
            <div className="stat-item">
              <span className="stat-number"><AnimatedCounter end={60} suffix=" días" /></span>
              <span className="stat-label">Sin costo — para ti y todo tu equipo</span>
            </div>
            <div className="stat-item">
              <span className="stat-number"><AnimatedCounter end={24} suffix="/7" /></span>
              <span className="stat-label">Tu cerebro en acción</span>
            </div>
            <div className="stat-item">
              <span className="stat-number"><AnimatedCounter end={-20} suffix=" min" /></span>
              <span className="stat-label">Para resolver problemas reales</span>
            </div>
          </div>
        </section>

        {/* Problem / Pain section */}
        <section className="problem-section">
          <div className="problem-inner">
            <div className="problem-header">
              <Reveal delay={0.05}>
                <div className="section-eyebrow"><span className="eyebrow-line" />El problema<span className="eyebrow-line" /></div>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="section-heading">
                  ¿Tu empresa opera a ciegas?
                </h2>
              </Reveal>
            </div>
            <div className="pain-grid">
              {[
                { title: "Decides con instinto, no con datos.", desc: "Sin información confiable, cada decisión es una apuesta." },
                { title: "Tu contador llega tarde y cobra caro.", desc: "Para cuando recibes el reporte, el momento ya pasó." },
                { title: "Cada área opera en otro lugar.", desc: "Ventas, finanzas y marketing no se hablan. La empresa no funciona como sistema." },
                { title: "Toddas tus IA´s empiezan desde cero cada vez.", desc: "Eso no es inteligencia, es pérdida de tiempo disfrazada de productividad." },
              ].map((p, i) => (
                <Reveal key={i} delay={0.08 * i}>
                  <div className="pain-card">
                    <div>
                      <div className="pain-title">{p.title}</div>
                      <div className="pain-desc">{p.desc}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.2}>
              <div style={{ textAlign: "center", marginTop: 48 }}>
                <a href="https://www.plataforma.profit120.com/app/chatbot" className="btn-secondary" target="_blank" rel="noopener noreferrer">
                  Conoce una mejor forma →
                </a>
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
                Con tus 60 días sin costo, desbloqueas los 5 desde el primer minuto. Y cada uno alimenta tu cerebro de IA, mientras más usas, más te conoce.
              </p>
            </Reveal>
          </div>

          {/* ── BRAIN ── */}
          <Reveal delay={0}>
            <div className="product-row">
              <div className="product-info">
                <div className="product-badge">IA</div>
                <h3 className="product-name">Profit BRAIN</h3>
                <p className="product-desc">Tu centro de mando inteligente. Más de 200 herramientas de IA que analizan, proyectan y aceleran las decisiones de tu empresa.</p>
                <div className="product-features-list">
                  <div className="product-feature-item"><span className="product-feature-check">✓</span> +200 herramientas organizadas por área</div>
                  <div className="product-feature-item"><span className="product-feature-check">✓</span> Buscador inteligente que te recomienda la herramienta correcta</div>
                  <div className="product-feature-item"><span className="product-feature-check">✓</span> Finanzas, Marketing, Ventas, RRHH, Operaciones, Liderazgo y más</div>
                </div>
                <a href="https://www.plataforma.profit120.com/app/tools" className="module-mini-link" target="_blank" rel="noopener noreferrer">Explorar herramientas →</a>
              </div>
              <div className="product-mockup">
                <div className="mockup-bar">
                  <span className="mockup-dot red" /><span className="mockup-dot yellow" /><span className="mockup-dot green" />
                  <span className="mockup-url">plataforma.profit120.com/app/tools</span>
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
                    <span className="mock-brain-tab">Ventas 29</span>
                  </div>
                  <div className="mock-brain-search">Escribe tu pregunta o necesidad...</div>
                  <div className="mock-brain-cards">
                    <div className="mock-brain-card" style={{ background: "linear-gradient(135deg, #1e3a5f, #2d5986)" }}>
                      <div className="mock-brain-card-title">Calificación de Leads</div>
                      <div className="mock-brain-card-sub">Organiza leads: MQL, SQL, PQL y CQL</div>
                      <div className="mock-brain-card-cat">MARKETING</div>
                    </div>
                    <div className="mock-brain-card" style={{ background: "linear-gradient(135deg, #065f46, #047857)" }}>
                      <div className="mock-brain-card-title">Estrategia de Ventas</div>
                      <div className="mock-brain-card-sub">Plantilla de estrategia de ventas</div>
                      <div className="mock-brain-card-cat">VENTAS</div>
                    </div>
                    <div className="mock-brain-card" style={{ background: "linear-gradient(135deg, #581c87, #7c3aed)" }}>
                      <div className="mock-brain-card-title">Proceso de Reclutamiento</div>
                      <div className="mock-brain-card-sub">Define los 7 pasos del proceso</div>
                      <div className="mock-brain-card-cat">RRHH</div>
                    </div>
                    <div className="mock-brain-card" style={{ background: "linear-gradient(135deg, #78350f, #a16207)" }}>
                      <div className="mock-brain-card-title">Dashboard de KPIs de RRHH</div>
                      <div className="mock-brain-card-sub">Rotación, tiempo de contratación...</div>
                      <div className="mock-brain-card-cat">RRHH</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ── CHAT ── */}
          <Reveal delay={0.05}>
            <div className="product-row">
              <div className="product-info">
                <div className="product-badge">24/7</div>
                <h3 className="product-name">Profit CHAT</h3>
                <p className="product-desc">Tu consultor IA disponible a cualquier hora. Adjunta archivos, pide análisis, resuelve dudas, con contexto de tu empresa.</p>
                <div className="product-features-list">
                  <div className="product-feature-item"><span className="product-feature-check">✓</span> Chat especializado en PYMES</div>
                  <div className="product-feature-item"><span className="product-feature-check">✓</span> Adjunta archivos para análisis instantáneo</div>
                  <div className="product-feature-item"><span className="product-feature-check">✓</span> La IA ya conoce el contexto de tu empresa</div>
                </div>
                <a href="https://www.plataforma.profit120.com/app/chatbot" className="module-mini-link" target="_blank" rel="noopener noreferrer">Accede sin costo →</a>
              </div>
              <div className="product-mockup">
                <div className="mockup-bar">
                  <span className="mockup-dot red" /><span className="mockup-dot yellow" /><span className="mockup-dot green" />
                  <span className="mockup-url">plataforma.profit120.com/app/chatbot</span>
                </div>
                <div className="mock-chat">
                  <div className="mock-chat-greeting">¡Hola!</div>
                  <div className="mock-chat-sub">Soy el primer chat especializado para PYMES, ¿qué solución necesitas hoy?</div>
                  <div className="mock-chat-input">
                    <span>Escribe tu pregunta o adjunta archivos para analizar</span>
                    <div className="mock-chat-send">↑</div>
                  </div>
                  <div className="mock-chat-suggestions">
                    <div className="mock-chat-suggestion"><strong>Actualmente tengo este problema en mi empresa...</strong>¡Sin miedo! Estoy aquí para ayudarte.</div>
                    <div className="mock-chat-suggestion"><strong>Necesito saber más acerca de...</strong>Nadie nace sabiéndolo todo...</div>
                    <div className="mock-chat-suggestion"><strong>Explícame más de Profit120</strong>¡No escondemos nada!</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ── BOOST ── */}
          <Reveal delay={0.05}>
            <div className="product-row">
              <div className="product-info">
                <div className="product-badge">20 MIN</div>
                <h3 className="product-name">Profit BOOST</h3>
                <p className="product-desc">Un problema real. Una solución accionable. Frameworks y plantillas para ejecutar hoy, organizados por categoría.</p>
                <div className="product-features-list">
                  <div className="product-feature-item"><span className="product-feature-check">✓</span> +7 categorías de problemas reales</div>
                  <div className="product-feature-item"><span className="product-feature-check">✓</span> Top 10 en tendencias diarias</div>
                  <div className="product-feature-item"><span className="product-feature-check">✓</span> Frameworks listos para aplicar de inmediato</div>
                </div>
                <a href="https://www.plataforma.profit120.com/app/courses" className="module-mini-link" target="_blank" rel="noopener noreferrer">Accede sin costo →</a>
              </div>
              <div className="product-mockup">
                <div className="mockup-bar">
                  <span className="mockup-dot red" /><span className="mockup-dot yellow" /><span className="mockup-dot green" />
                  <span className="mockup-url">plataforma.profit120.com/app/courses</span>
                </div>
                <div className="mock-boost">
                  <div className="mock-boost-section-title">Categorías populares</div>
                  <div className="mock-boost-categories">
                    {[
                      { label: "Marketing", bg: "linear-gradient(135deg,#1e3a5f,#2d5986)" },
                      { label: "Finanzas", bg: "linear-gradient(135deg,#065f46,#047857)" },
                      { label: "Ventas", bg: "linear-gradient(135deg,#581c87,#7c3aed)" },
                      { label: "Operaciones", bg: "linear-gradient(135deg,#78350f,#a16207)" },
                      { label: "RRHH", bg: "linear-gradient(135deg,#1e1b4b,#3730a3)" },
                    ].map((c, i) => (
                      <div key={i} className="mock-boost-cat" style={{ background: c.bg }}><span>{c.label}</span></div>
                    ))}
                  </div>
                  <div className="mock-boost-section-title">Top de esta semana</div>
                  <div className="mock-boost-grid">
                    {[
                      { title: "Estrategia de Precios", bg: "linear-gradient(160deg,#1e3a5f,#0f172a)" },
                      { title: "Plan de Marketing", bg: "linear-gradient(160deg,#065f46,#022c22)" },
                      { title: "Control de Costos", bg: "linear-gradient(160deg,#581c87,#2e1065)" },
                      { title: "Pipeline de Ventas", bg: "linear-gradient(160deg,#78350f,#2c1300)" },
                      { title: "Onboarding", bg: "linear-gradient(160deg,#1e1b4b,#0d0a2e)" },
                    ].map((card, i) => (
                      <div key={i} className="mock-boost-card" style={{ background: card.bg }}>
                        <div className="mock-boost-card-plus">+</div>
                        <div className="mock-boost-card-title">{card.title}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ── TALKS ── */}
          <Reveal delay={0.05}>
            <div className="product-row">
              <div className="product-info">
                <div className="product-badge">SEMANAL</div>
                <h3 className="product-name">Profit TALKS</h3>
                <p className="product-desc">El newsletter que forma criterio. Análisis, tendencias y casos reales que se aplican de inmediato. +56 ediciones.</p>
                <div className="product-features-list">
                  <div className="product-feature-item"><span className="product-feature-check">✓</span> +55 episodios publicados</div>
                  <div className="product-feature-item"><span className="product-feature-check">✓</span> Casos reales de empresas LATAM</div>
                  <div className="product-feature-item"><span className="product-feature-check">✓</span> Marcos de decisión aplicables</div>
                </div>
                <a href="https://www.plataforma.profit120.com/app/library" className="module-mini-link" target="_blank" rel="noopener noreferrer">Accede sin costo →</a>
              </div>
              <div className="product-mockup">
                <div className="mockup-bar">
                  <span className="mockup-dot red" /><span className="mockup-dot yellow" /><span className="mockup-dot green" />
                  <span className="mockup-url">plataforma.profit120.com/app/library</span>
                </div>
                <div className="mock-talks">
                  <div className="mock-talks-header">
                    <div className="mock-talks-logo">Profit<span>TALKS</span></div>
                    <div className="mock-talks-sort">Recientes ▾</div>
                  </div>
                  <div className="mock-talks-grid">
                    {[
                      { num: "#56", title: "Decisiones con datos", dur: "8 min", bg: "linear-gradient(135deg,#1e3a5f,#0f172a)" },
                      { num: "#55", title: "IA en tu operación", dur: "6 min", bg: "linear-gradient(135deg,#065f46,#022c22)" },
                      { num: "#54", title: "Finanzas sin contador", dur: "7 min", bg: "linear-gradient(135deg,#581c87,#2e1065)" },
                      { num: "#53", title: "Cómo escalar ventas", dur: "9 min", bg: "linear-gradient(135deg,#7c2d12,#c2410c)" },
                      { num: "#52", title: "Equipos de alto impacto", dur: "5 min", bg: "linear-gradient(135deg,#164e63,#0e7490)" },
                      { num: "#51", title: "Precios que sí funcionan", dur: "6 min", bg: "linear-gradient(135deg,#3b0764,#7e22ce)" },
                    ].map((ep, i) => (
                      <div key={i} className="mock-talks-card">
                        <div className="mock-talks-thumb" style={{ background: ep.bg }}>
                          <div className="mock-talks-thumb-num">{ep.num}</div>
                          <div className="mock-talks-thumb-title">{ep.title}</div>
                          <div className="mock-talks-thumb-dur">{ep.dur}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ── LABS ── */}
          <Reveal delay={0.05}>
            <div className="product-row">
              <div className="product-info">
                <div className="product-badge">LIVE</div>
                <h3 className="product-name">Profit LABS</h3>
                <p className="product-desc">Estrategia colaborativa en vivo. Cupo limitado por sesión — cuando se llena, se llena.</p>
                <div className="product-features-list">
                  <div className="product-feature-item"><span className="product-feature-check">✓</span> Sesiones en vivo con expertos</div>
                  <div className="product-feature-item"><span className="product-feature-check">✓</span> Cupo limitado por sesión</div>
                  <div className="product-feature-item"><span className="product-feature-check">✓</span> Marketing, Finanzas, Operaciones y más</div>
                </div>

                <a href="https://www.plataforma.profit120.com/app/labs" className="module-mini-link" target="_blank" rel="noopener noreferrer">Ver sesiones disponibles →</a>
              </div>
              <div className="product-mockup">
                <div className="mockup-bar">
                  <span className="mockup-dot red" /><span className="mockup-dot yellow" /><span className="mockup-dot green" />
                  <span className="mockup-url">plataforma.profit120.com/app/labs</span>
                </div>
                <div className="mock-labs">
                  <div className="mock-labs-header">
                    <div className="mock-labs-title">Sesiones en Vivo</div>
                    <div className="mock-labs-sub">Estrategia colaborativa con expertos</div>
                  </div>
                  <div className="mock-labs-grid">
                    {[
                      { title: "Marketing Inteligente con IA", meta: "10/10 participantes", badge: "LLENO", badgeColor: "#ef4444", bg: "linear-gradient(135deg,#7f1d1d,#b91c1c)" },
                      { title: "Rentabilidad y Control", meta: "15/15 participantes", badge: "LLENO", badgeColor: "#ef4444", bg: "linear-gradient(135deg,#1e3a5f,#1d4ed8)" },
                      { title: "Roles y Responsabilidades", meta: "4/15 participantes", badge: "DISPONIBLE", badgeColor: "#16a34a", bg: "linear-gradient(135deg,#065f46,#15803d)" },
                      { title: "Ventas con IA", meta: "7/15 participantes", badge: "DISPONIBLE", badgeColor: "#16a34a", bg: "linear-gradient(135deg,#78350f,#d97706)" },
                      { title: "Operaciones sin caos", meta: "12/15 participantes", badge: "DISPONIBLE", badgeColor: "#16a34a", bg: "linear-gradient(135deg,#1e1b4b,#4338ca)" },
                      { title: "Liderazgo y Cultura", meta: "15/15 participantes", badge: "LLENO", badgeColor: "#ef4444", bg: "linear-gradient(135deg,#4a044e,#86198f)" },
                    ].map((session, i) => (
                      <div key={i} className="mock-labs-card">
                        <div className="mock-labs-card-img" style={{ background: session.bg }}>
                          <div className="mock-labs-badge" style={{ background: session.badgeColor, color: "#fff" }}>{session.badge}</div>
                        </div>
                        <div className="mock-labs-card-body">
                          <div className="mock-labs-card-title">{session.title}</div>
                          <div className="mock-labs-card-meta">{session.meta}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* How it works */}
        <section className="howto" id="como-funciona">
          <div className="howto-header">
            <Reveal delay={0.1}>
              <h2 className="section-heading">
                Activa el cerebro de tu empresa<br />en 3 pasos.
              </h2>
            </Reveal>
          </div>
          <div className="steps">
            <Reveal delay={0}>
              <div className="step-card">
                <div className="step-num">1</div>
                <h3 className="step-title">Crea tu cuenta sin costo</h3>
                <p className="step-desc">Regístrate con tu correo. No necesitas tarjeta de crédito ni aprobación de nadie. En segundos estás adentro.</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="step-card">
                <div className="step-num">2</div>
                <h3 className="step-title">Invita a todo tu equipo</h3>
                <p className="step-desc">Agrega a todos los que necesites. Que todos empiecen a usar la plataforma desde el primer día, eso entrena la IA más rápido.</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="step-card">
                <div className="step-num">3</div>
                <h3 className="step-title">Usa, pregunta, decide, la IA aprende</h3>
                <p className="step-desc">Cada herramienta que usas, cada pregunta que haces, cada análisis que corres... tu cerebro de IA se vuelve más inteligente sobre tu empresa. En 60 días vas a tener un activo que ningún consultor te puede dar.</p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.25}>
            <div style={{ textAlign: "center", marginTop: 48 }}>
              <a href="https://www.plataforma.profit120.com/app/chatbot" className="btn-primary product-cta" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex" }}>
                Empieza ahora — es gratis
                <span className="btn-arrow"><ArrowCornerIcon /></span>
              </a>
            </div>
          </Reveal>
        </section>

        {/* ¿Para quién es? */}
        <section className="for-whom">
          <div className="for-whom-header">
            <Reveal delay={0.05}>
              <div className="section-eyebrow"><span className="eyebrow-line" />Para quién es<span className="eyebrow-line" /></div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="section-heading">
                Diseñado para quienes<br />toman decisiones reales.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="section-desc" style={{ margin: "0 auto" }}>
                Profit120 no es para todos — y eso está bien. Si te identificas con alguno de estos perfiles, es para ti.
              </p>
            </Reveal>
          </div>
          <div className="for-whom-grid">
            {[
              { title: "Dueños de PYME (5–200 empleados)", desc: "Decisiones estratégicas sin consultores caros." },
              { title: "Directores y gerentes de área", desc: "Datos e IA para Finanzas, Marketing, Ventas y Operaciones — sin analistas." },
              { title: "Startups en crecimiento", desc: "Haz más con menos. IA especializada, sin setup ni entrenamiento." },
              { title: "Empresas que escalan sin contratar más", desc: "Automatiza antes de agregar headcount." },
              { title: "Emprendedores en etapa temprana", desc: "Sin presupuesto para consultores, pero con las mismas decisiones complejas. Profit120 te da el criterio que normalmente toma años construir." },
              { title: "Colaboradores que quieren hacer más", desc: "Gerentes, coordinadores y analistas que necesitan mejores herramientas para tomar decisiones y mostrar resultados sin depender de otros." },
            ].map((item, i) => (
              <Reveal key={i} delay={0.08 * i}>
                <div className="for-whom-card">
                  <div className="for-whom-check">✓</div>
                  <div>
                    <div className="for-whom-title">{item.title}</div>
                    <div className="for-whom-desc">{item.desc}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <div className="not-for-whom">
              <div className="not-for-whom-title">No es para ti si...</div>
              <div className="not-for-list">
                {["Buscas solución mágica sin implementar nada"].map((item, i) => (
                  <span key={i} className="not-for-item">✕ {item}</span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div style={{ textAlign: "center", marginTop: 36 }}>
              <a
                href="https://www.plataforma.profit120.com/app/chatbot"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero"
              >
                Activa tu acceso gratis — 60 días
                <span className="btn-arrow"><ArrowCornerIcon /></span>
              </a>
            </div>
          </Reveal>
        </section>

        {/* Comparison table */}
        <section className="comparison-section">
          <Reveal delay={0.05}>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <div className="section-eyebrow" style={{ justifyContent: "center" }}><span className="eyebrow-line" />¿Por qué Profit120?<span className="eyebrow-line" /></div>
              <h2 className="section-heading" style={{ marginBottom: 12 }}>
                Compara antes de decidir.
              </h2>
              <p className="section-desc" style={{ margin: "0 auto" }}>
                No somos otra herramienta genérica. Somos el cerebro que aprende de tu empresa.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="comparison-table">
              <div className="comparison-row comp-header">
                <div className="comp-tool">Herramienta</div>
                <div className="comp-price">Precio</div>
                <div className="comp-learns">¿Aprende de tu empresa?</div>
              </div>
              {[
                { tool: "ChatGPT Pro", price: "$200/mes", learns: "No" },
                { tool: "Gemini Ultra", price: "$250/mes", learns: "No" },
                { tool: "MasterClass", price: "$240/año", learns: "No" },
                { tool: "Udemy Business", price: "$30/mes por persona", learns: "No" },
                { tool: "HubSpot", price: "$40/mes por usuario", learns: "No" },
                { tool: "Monday.com", price: "$12/mes por usuario", learns: "No" },
              ].map((row, i) => (
                <div className="comparison-row" key={i}>
                  <div className="comp-tool">{row.tool}</div>
                  <div className="comp-price">{row.price}</div>
                  <div className="comp-learns" style={{ color: BRAND.textMuted }}>✕ {row.learns}</div>
                </div>
              ))}
              <div className="comparison-row comp-highlight">
                <div className="comp-tool"><img src="/assets/Negro-Verde.png" alt="Profit120" style={{ height: 22, width: "auto", display: "block" }} /></div>
                <div className="comp-price">$0 por 60 días</div>
                <div className="comp-learns">✓ +200 herramientas que aprenden de TU empresa</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div style={{ textAlign: "center", marginTop: 36 }}>
              <a
                href="https://www.plataforma.profit120.com/app/chatbot"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero"
              >
                Pruébalo gratis — 60 días sin costo
                <span className="btn-arrow"><ArrowCornerIcon /></span>
              </a>
            </div>
          </Reveal>
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
                  {t.result && <div className="t-result">{t.result}</div>}
                  <p className="t-quote">"{t.quote}"</p>
                  <div className="t-author">
                    {t.img
                      ? <img src={t.img} alt={t.name} className="t-avatar-img" />
                      : <div className="t-avatar">{t.initials}</div>
                    }
                    <div>
                      <div className="t-name">{t.name}</div>
                      <div className="t-role">{t.role}</div>
                      {t.company && <div className="t-company">{t.company}</div>}
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
              { q: "¿Mis datos están seguros?", a: "Sí. Usamos encriptación de extremo a extremo. Tus datos nunca se usan para entrenar modelos externos. Tu información es tuya y solo tuya." },
              { q: "¿En qué se diferencia de usar ChatGPT o alguna otra IA?", a: "ChatGPT es una IA genérica. Profit120 es un cerebro especializado en negocios: +200 herramientas preconstruidas por expertos, organizadas por área, para que no empieces de cero cada vez." },
              { q: "¿Qué pasa después de los 60 días?", a: "Tú decides si continuar. Sin renovación automática. Sin sorpresas. Sin compromisos. Pero tu cerebro de IA ya va a conocer tu empresa... y eso no lo vas a querer soltar." },
              { q: "¿Necesito tarjeta de crédito?", a: "No. Cero datos de pago. Solo tu correo. Entras, activas tus 60 días sin costo y listo." },
            ].map((obj, i) => (
              <Reveal key={i} delay={0.06 * i}>
                <div className="obj-card">
                  <div className="obj-question">{obj.q}</div>
                  <div className="obj-answer">{obj.a}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}>
            <div style={{ textAlign: "center", marginTop: 36 }}>
              <a
                href="https://www.plataforma.profit120.com/app/chatbot"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero"
              >
                Empieza sin costo — sin tarjeta de crédito
                <span className="btn-arrow"><ArrowCornerIcon /></span>
              </a>
            </div>
          </Reveal>
        </section>

        {/* B2B upsell */}
        <section className="b2b-upsell">
          <Reveal delay={0.05}>
            <div className="b2b-badge">PARA EMPRESAS QUE NECESITAN MÁS</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="b2b-headline">¿Tu empresa necesita IA operativa a la medida?</h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="b2b-desc">Conectamos tus sistemas, construimos agentes de IA que ejecutan por ti y automatizamos tu operación. Todo personalizado para tu empresa.</p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="b2b-tags">
              <span className="b2b-tag">CORTEX120 — Datos centralizados</span>
              <span className="b2b-tag">Agentes de IA — Ventas, soporte, RRHH, finanzas</span>
              <span className="b2b-tag">Automatizaciones — Procesos que se ejecutan solos</span>
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <a href="https://b2b.profit120.com" className="b2b-btn" target="_blank" rel="noopener noreferrer">
              Conocer Profit120 B2B →
            </a>
          </Reveal>
        </section>

        {/* Final CTA */}
        <Reveal>
          <div className="final-cta">
            <h2 className="final-cta-title">
              Tu empresa merece un cerebro<br /><span className="green-text">que la entienda.</span>
            </h2>
            <p className="final-cta-sub">
              5 módulos de IA. Todo tu equipo. Sin tarjeta de crédito. 60 días para comprobarlo.
            </p>
            <div className="cta-benefits">
              {["60 días sin costo", "Sin tarjeta de crédito", "Todo tu equipo incluido", "5 módulos completos", "Cancela cuando quieras"].map((b, i) => (
                <div className="benefit-chip" key={i}>
                  <span className="benefit-dot" />
                  {b}
                </div>
              ))}
            </div>
            <a
              href="https://www.plataforma.profit120.com/app/chatbot"
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
        <footer className="footer-full">
          <div className="footer-top">
            <div className="footer-brand">
              <img src="/assets/Negro-Verde.png" alt="Profit120" />
              <p>La plataforma de IA para dueños de empresa que quieren decidir y crecer más rápido. 5 módulos. Un solo objetivo.</p>
              <div className="footer-social">
                <a href="https://instagram.com/profit_120" target="_blank" rel="noopener noreferrer" title="Instagram">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://linkedin.com/company/profit-120" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://www.youtube.com/@Profit120" target="_blank" rel="noopener noreferrer" title="YouTube">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>
            <div>
              <div className="footer-col-title">Plataforma</div>
              <div className="footer-col-links">
                <a href="https://www.plataforma.profit120.com/app/tools" target="_blank" rel="noopener noreferrer">Profit BRAIN</a>
                <a href="https://www.plataforma.profit120.com/app/chatbot" target="_blank" rel="noopener noreferrer">Profit CHAT</a>
                <a href="https://www.plataforma.profit120.com/app/courses" target="_blank" rel="noopener noreferrer">Profit BOOST</a>
                <a href="https://www.plataforma.profit120.com/app/library" target="_blank" rel="noopener noreferrer">Profit TALKS</a>
                <a href="https://www.plataforma.profit120.com/app/labs" target="_blank" rel="noopener noreferrer">Profit LABS</a>
              </div>
            </div>
            <div>
              <div className="footer-col-title">Legal & Contacto</div>
              <div className="footer-col-links">
                <a href="https://plataforma.profit120.com/privacidad" target="_blank" rel="noopener noreferrer">Política de Privacidad</a>
                <a href="https://plataforma.profit120.com/terminos" target="_blank" rel="noopener noreferrer">Términos de Uso</a>
                <a href="mailto:hola@profit120.com">info@profit120.com</a>
                <a href="https://www.plataforma.profit120.com/app/chatbot" target="_blank" rel="noopener noreferrer">Activar 60 días sin costo →</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Profit120. Todos los derechos reservados.</span>
            <div className="footer-legal">
              <a href="https://plataforma.profit120.com/privacidad" target="_blank" rel="noopener noreferrer">Privacidad</a>
              <a href="https://plataforma.profit120.com/terminos" target="_blank" rel="noopener noreferrer">Términos</a>
              <a href="mailto:hola@profit120.com">Contacto</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
