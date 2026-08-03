import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./BackToTop.css";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleButton = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleButton);

    return () => window.removeEventListener("scroll", toggleButton);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`back-to-top ${visible ? "show" : ""}`}
      onClick={scrollTop}
      aria-label="Back to top"
    >
      <FaArrowUp />
    </button>
  );
}