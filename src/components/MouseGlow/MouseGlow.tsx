import { useEffect, useState } from "react";
import "./MouseGlow.css";

export default function MouseGlow() {
  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  });

  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    const elements = document.querySelectorAll(
      "a, button, .project-card, .about-card, .skill-card"
    );

    elements.forEach((el) => {
      el.addEventListener("mouseenter", () => setHover(true));
      el.addEventListener("mouseleave", () => setHover(false));
    });

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      <div
        className="cursor-glow"
        style={{
          left: position.x,
          top: position.y,
        }}
      />

      <div
        className={`cursor-dot ${hover ? "hover" : ""}`}
        style={{
          left: position.x,
          top: position.y,
        }}
      />
    </>
  );
}