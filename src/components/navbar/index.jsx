
import React, { useState } from "react";
import { Link as ScrollLink, animateScroll } from "react-scroll";

import "./styles.css";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const scrollToTop = () => {
    animateScroll.scrollToTop(); 
  };


  return (
    <div className="nav">
      <ul className="nav_menu">
        <li className={`nav_item ${activeTab === "home" ? "active" : ""}`}>
          <ScrollLink to="home" smooth onClick={() => handleTabClick("home")}>
            HOME
          </ScrollLink>
        </li>
        <li className={`nav_item ${activeTab === "about" ? "active" : ""}`}>
          <ScrollLink to="about" smooth onClick={() => handleTabClick("about")}>
            ABOUT
          </ScrollLink>
        </li>
        <li className={`nav_item ${activeTab === "services" ? "active" : ""}`}>
          <ScrollLink to="services" smooth onClick={() => handleTabClick("services")}>
            SERVICES
          </ScrollLink>
        </li>
        <li className={`nav_item ${activeTab === "contact" ? "active" : ""}`}>
          <ScrollLink to="contact" smooth onClick={() => handleTabClick("contact")}>
            CONTACT
          </ScrollLink>
        </li>
        <li className="nav_item" onClick={scrollToTop}> 
        </li>
      </ul>
    </div>
  );
}

