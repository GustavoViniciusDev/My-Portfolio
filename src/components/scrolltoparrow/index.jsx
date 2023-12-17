import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

import arrow_top from '../img/up-arrow.png';
import "./styles.css";

export default function ScrollToTopArrow() {
  const [isVisible, setIsVisible] = useState("");

  const handleScroll = () => {
    const scrollY = window.scrollY;

    setIsVisible(scrollY > 100);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`scroll-to-top-arrow ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <img className="img_arrow" src={arrow_top} alt="arrow_top" />
    </div>
  );
}
