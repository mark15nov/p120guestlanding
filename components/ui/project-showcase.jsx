import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const defaultProjects = [
  {
    title: "Profit BRAIN",
    description: "Herramientas de IA que analizan, proyectan y aceleran las decisiones de tu empresa.",
    year: "IA",
    link: "#",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    kicker: "Tu centro de mando inteligente",
  },
  {
    title: "Profit CHAT",
    description: "Pregunta lo que necesites sobre tu negocio y recibe respuestas estratégicas al instante.",
    year: "24/7",
    link: "#",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1200&auto=format&fit=crop",
    kicker: "Tu consultor 24/7 con IA",
  },
  {
    title: "Profit TALKS",
    description: "Cada semana recibes el análisis que los directivos necesitan: tendencias, casos reales y marcos de decisión.",
    year: "NEWS",
    link: "#",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
    kicker: "El newsletter que forma criterio",
  },
  {
    title: "Profit LABS",
    description: "Tú y tu equipo, trabajando codo a codo para rediseñar decisiones con datos reales e IA.",
    year: "LIVE",
    link: "#",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    kicker: "Estrategia colaborativa en vivo",
  },
  {
    title: "Profit BOOST",
    description: "Un problema real con una solución accionable. Frameworks y herramientas para ejecutar hoy.",
    year: "20M",
    link: "#",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    kicker: "Soluciones en 20 minutos",
  },
];

export function ProjectShowcase({ projects = defaultProjects, className = "" }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const lerp = (start, end, factor) => start + (end - start) * factor;

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.14),
        y: lerp(prev.y, mousePosition.y, 0.14),
      }));
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [mousePosition]);

  const handleMouseMove = (event) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={className}
      style={{ position: "relative", width: "100%", maxWidth: "960px", margin: "0 auto" }}
    >
      <style>{`
        .product-showcase-list { border-top: 1px solid rgba(25,23,18,0.12); }
        .product-showcase-item {
          position: relative;
          display: block;
          text-decoration: none;
          color: inherit;
        }
        .product-showcase-row {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(0, 2.15fr) auto;
          gap: 20px;
          align-items: center;
          min-height: 120px;
          padding: 24px 0;
          border-bottom: 1px solid rgba(25,23,18,0.12);
          transition: transform 220ms ease, color 220ms ease;
        }
        .product-showcase-item:hover .product-showcase-row {
          transform: translateX(4px);
        }
        .product-showcase-title {
          font-size: clamp(18px, 2vw, 26px);
          line-height: 1;
          letter-spacing: -0.05em;
          font-weight: 700;
          color: #191712;
        }
        .product-showcase-desc {
          font-size: 15px;
          line-height: 1.55;
          color: #5f5a52;
          max-width: 520px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .product-showcase-arrow {
          width: 20px;
          height: 20px;
          color: rgba(25,23,18,0.58);
          transition: transform 220ms ease, color 220ms ease, opacity 220ms ease;
          opacity: 0.7;
        }
        .product-showcase-item:hover .product-showcase-arrow {
          transform: translate(2px, -2px);
          color: #191712;
          opacity: 1;
        }
        .product-showcase-preview {
          pointer-events: none;
          position: fixed;
          z-index: 60;
          width: 320px;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          border-radius: 22px;
          opacity: 0;
          scale: 0.92;
          transition: opacity 240ms ease, scale 240ms ease;
          box-shadow: 0 30px 70px rgba(25,23,18,0.16);
          border: 1px solid rgba(255,255,255,0.76);
          background: #f4f4f1;
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }
        .product-showcase-preview.is-visible {
          opacity: 1;
          scale: 1;
        }
        .product-showcase-preview img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 420ms ease, transform 420ms ease, filter 420ms ease;
        }
        .product-showcase-preview::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(25,23,18,0.08));
        }
        @media (max-width: 900px) {
          .product-showcase-row {
            grid-template-columns: 1fr;
            gap: 10px;
            min-height: 0;
            padding: 20px 0;
          }
          .product-showcase-preview {
            display: none;
          }
        }
      `}</style>

      <div
        className={`product-showcase-preview${isVisible ? " is-visible" : ""}`}
        style={{
          left: containerRef.current?.getBoundingClientRect().left ?? 0,
          top: containerRef.current?.getBoundingClientRect().top ?? 0,
          transform: `translate3d(${smoothPosition.x + 30}px, ${smoothPosition.y - 120}px, 0)`,
        }}
      >
        {projects.map((project, index) => (
          <img
            key={project.title}
            src={project.image}
            alt={project.title}
            style={{
              opacity: hoveredIndex === index ? 1 : 0,
              transform: hoveredIndex === index ? "scale(1)" : "scale(1.06)",
              filter: hoveredIndex === index ? "none" : "blur(12px)",
            }}
          />
        ))}
      </div>

      <div className="product-showcase-list">
        {projects.map((project, index) => (
          <a
            key={project.title}
            href={project.link}
            className="product-showcase-item"
            onMouseEnter={() => {
              setHoveredIndex(index);
              setIsVisible(true);
            }}
            onMouseLeave={() => {
              setHoveredIndex(null);
              setIsVisible(false);
            }}
          >
            <div className="product-showcase-row">
              <div>
                <h3 className="product-showcase-title">{project.title}</h3>
              </div>
              <p className="product-showcase-desc">{project.description}</p>
              <ArrowUpRight className="product-showcase-arrow" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
