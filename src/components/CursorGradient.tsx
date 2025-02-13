import { useState, useEffect } from "react";

export function CursorGradient() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
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
          left: `${position.x - 125}px`,
          top: `${position.y - 125}px`,
          width: "250px",
          height: "250px",
          background:
            "radial-gradient(circle at center, rgba(147, 51, 234, 0.3) 0%, rgba(236, 72, 153, 0.3) 35%, rgba(239, 68, 68, 0) 70%)",
          borderRadius: "50%",
          willChange: "transform",
          filter: "blur(10px)",
        }}
      />
    </div>
  );
}
