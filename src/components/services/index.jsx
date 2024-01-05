import React, { useState, useEffect } from "react";
import ScrollTrigger from "react-scroll-trigger";
import project1 from "../img/Screenshot_proTasker.png";

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

          <div className="under_development">

            <div className="project1">
              <a href="https://pro-tasker-prototype.netlify.app/" target="_blank" rel="noopener noreferrer" ><img className="project1_img" src={project1} alt="Project1" /></a>
              
              <div className="text_project1">
                <h1 className="title_project1">
                  Pro Tasker
                </h1>
                <p className="p_project">
                  ProTasker is an agile methodology system known as Kanban,
                  created with the intention of aiding productivity for both
                  individuals and businesses. It is simple and easy to use in daily life.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
}
