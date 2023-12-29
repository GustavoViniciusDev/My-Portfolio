import React, { useState, useEffect } from "react";
import ScrollTrigger from "react-scroll-trigger";

import "./style.css";

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 1300) {
      setIsVisible(true);
    }else{
        setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <ScrollTrigger onEnter={() => console.log("Home component is visible!")}>
      <div className={`home-container ${isVisible ? "visible" : ""}`}>
        <div className="h1_services">
          <h1 className="myservices">
            My <span> Services</span>
          </h1>
        </div>

        <div className="containerServices">
          <div className="contentServices">
            <p>
              Here are some <span>projects</span> I want to show you
            </p>
          </div>

          <div className="under_development"></div>
        </div>
      </div>
    </ScrollTrigger>
  );
}
