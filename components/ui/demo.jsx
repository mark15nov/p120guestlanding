import { GlobeInteractive } from "./cobe-globe-interactive";

export default function GlobeInteractiveDemo() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        minHeight: "100vh",
        background: "#fff",
        padding: "2rem",
        overflow: "hidden",
      }}
    >
      <div style={{ width: "100%", maxWidth: 520 }}>
        <GlobeInteractive />
      </div>
    </div>
  );
}
