import { useCallback, useEffect, useRef } from "react";
import createGlobe from "cobe";

const defaultMarkers = [
];

export function GlobeInteractive({
  markers = defaultMarkers,
  className = "",
  speed = 0.0026,
}) {
  const canvasRef = useRef(null);
  const pointerInteracting = useRef(null);
  const dragOffset = useRef({ phi: 0, theta: 0 });
  const phiOffsetRef = useRef(0);
  const thetaOffsetRef = useRef(0);
  const isPausedRef = useRef(false);

  const handlePointerDown = useCallback((event) => {
    pointerInteracting.current = { x: event.clientX, y: event.clientY };
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
    isPausedRef.current = true;
  }, []);

  const handlePointerUp = useCallback(() => {
    if (pointerInteracting.current !== null) {
      phiOffsetRef.current += dragOffset.current.phi;
      thetaOffsetRef.current += dragOffset.current.theta;
      dragOffset.current = { phi: 0, theta: 0 };
    }
    pointerInteracting.current = null;
    if (canvasRef.current) canvasRef.current.style.cursor = "grab";
    isPausedRef.current = false;
  }, []);

  useEffect(() => {
    const handlePointerMove = (event) => {
      if (pointerInteracting.current !== null) {
        dragOffset.current = {
          phi: (event.clientX - pointerInteracting.current.x) / 320,
          theta: (event.clientY - pointerInteracting.current.y) / 1200,
        };
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [handlePointerUp]);

  useEffect(() => {
    if (!canvasRef.current) return undefined;

    const canvas = canvasRef.current;
    let globe = null;
    let animationId = 0;
    let phi = 0;
    let resizeObserver;

    const init = () => {
      const width = canvas.offsetWidth;
      if (!width || globe) return;

      globe = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width,
        height: width,
        phi: 0,
        theta: 0.18,
        dark: 0,
        diffuse: 1.2,
        mapSamples: 12000,
        mapBrightness: 7,
        baseColor: [0.96, 0.96, 0.95],
        markerColor: [0.15, 0.62, 0.21],
        glowColor: [1, 1, 1],
        opacity: 0.95,
        markerElevation: 0.02,
        markers: markers.map((marker) => ({
          location: marker.location,
          size: 0.07,
        })),
        arcs: [],
      });

      const animate = () => {
        if (!isPausedRef.current) phi += speed;

        globe.update({
          phi: phi + phiOffsetRef.current + dragOffset.current.phi,
          theta: 0.18 + thetaOffsetRef.current + dragOffset.current.theta,
        });

        animationId = window.requestAnimationFrame(animate);
      };

      animate();
      window.setTimeout(() => {
        if (canvas) canvas.style.opacity = "1";
      }, 40);
    };

    if (canvas.offsetWidth > 0) {
      init();
    } else {
      resizeObserver = new ResizeObserver((entries) => {
        if (entries[0] && entries[0].contentRect.width > 0) {
          resizeObserver.disconnect();
          init();
        }
      });
      resizeObserver.observe(canvas);
    }

    return () => {
      if (resizeObserver) resizeObserver.disconnect();
      if (animationId) window.cancelAnimationFrame(animationId);
      if (globe) globe.destroy();
    };
  }, [markers, speed, handlePointerUp]);

  return (
    <div className={className} style={{ position: "relative", aspectRatio: "1 / 1" }}>
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        style={{
          width: "100%",
          height: "100%",
          opacity: 0,
          cursor: "grab",
          transition: "opacity 1s ease",
          touchAction: "none",
        }}
      />
    </div>
  );
}
