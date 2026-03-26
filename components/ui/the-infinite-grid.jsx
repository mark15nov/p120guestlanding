import { useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useAnimationFrame,
} from "framer-motion";

export const InfiniteGridBackground = () => {
  const containerRef = useRef(null);

  const mouseX = useMotionValue(-9999);
  const mouseY = useMotionValue(-9999);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const gridOffsetX = useMotionValue(0);
  const gridOffsetY = useMotionValue(0);

  useAnimationFrame(() => {
    gridOffsetX.set((gridOffsetX.get() + 0.4) % 40);
    gridOffsetY.set((gridOffsetY.get() + 0.4) % 40);
  });

  const maskImage = useMotionTemplate`radial-gradient(380px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {/* Base subtle grid */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.06 }}>
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} color="#191712" id="grid-base" />
      </div>

      {/* Mouse-revealed green grid */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.45,
          maskImage,
          WebkitMaskImage: maskImage,
        }}
      >
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} color="#27c927" id="grid-reveal" />
      </motion.div>

      {/* Green glow — top right */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: "45%",
          height: "70%",
          borderRadius: "50%",
          background: "rgba(39,201,39,0.10)",
          filter: "blur(130px)",
        }}
      />
      {/* Secondary soft glow */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          right: "18%",
          width: "18%",
          height: "30%",
          borderRadius: "50%",
          background: "rgba(39,201,39,0.05)",
          filter: "blur(90px)",
        }}
      />
    </div>
  );
};

const GridPattern = ({ offsetX, offsetY, color, id }) => (
  <svg style={{ width: "100%", height: "100%" }}>
    <defs>
      <motion.pattern
        id={id}
        width="40"
        height="40"
        patternUnits="userSpaceOnUse"
        x={offsetX}
        y={offsetY}
      >
        <path
          d="M 40 0 L 0 0 0 40"
          fill="none"
          stroke={color}
          strokeWidth="1"
        />
      </motion.pattern>
    </defs>
    <rect width="100%" height="100%" fill={`url(#${id})`} />
  </svg>
);
