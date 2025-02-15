import { useState, useEffect } from "react";

export function CursorGradient() {
  const [position, setPosition] = useState<null | { x: number; y: number }>(
    null,
  );

  type gradientOption = { name: string; colors: string[] };

  const oceanDepths: gradientOption = {
    name: "Ocean Depths",
    colors: [
      "rgba(0, 120, 212, 0.15)",
      "rgba(64, 224, 208, 0.15)",
      "rgba(0, 206, 209, 0.15)",
      "rgba(31, 31, 31, 0.8)", // Near-background
      "rgba(31, 31, 31, 1)", // Background color
    ],
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { once: true });

    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [position]);
  return position ? (
    <div
      style={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: `${position.x - 250}px`,
          top: `${position.y - 250}px`,
          width: "500px",
          height: "500px",
          opacity: 0.15,
          background: `radial-gradient(circle,${oceanDepths.colors.join()}`,
          borderRadius: "50%",
          willChange: "transform",
          filter: "blur(25px)",
        }}
      />
    </div>
  ) : null;
}
