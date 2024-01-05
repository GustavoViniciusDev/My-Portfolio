import React, { useEffect, useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import linkedinIcon from "../img/linkedin.png";
import whatsappIcon from "../img/whatsapp.png";
import instagramIcon from "../img/instagram.png";
// import emailIcon from "../img/email.png";
import githubIcon from "../img/github-sign.png";
import "./styles.css";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 2000) {
      setIsVisible(true);
    } else {
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
        <div className="h1_about">
          <h1 className="aboutme">
            <span>Contact</span> Me
          </h1>
        </div>

        <div className="containerContact">
          <div className="icon_contacts">
           <a href="https://www.linkedin.com/in/gustavo-linhares-907b67181/" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="linkedinIcon"/></a> 
           <a href="https://api.whatsapp.com/send?phone=5541997959684&text=Ol%C3%A1,%20vi%20seu%20portf%C3%B3lio%20e%20tenho%20interesse%20em%20seus%20servi%C3%A7os%0A" target="_blank" rel="noopener noreferrer"><img  src={whatsappIcon} alt="whatsappIcon" /></a> 
           <a href="https://www.instagram.com/GustavoViniciusDev/" target="_blank" rel="noopener noreferrer" ><img  src={instagramIcon} alt="instagramIcon" /></a> 
           {/* <a href="" target="_blank" rel="noopener noreferrer"> <img  src={emailIcon} alt="emailIcon" /></a>  */}
           <a href="https://github.com/GustavoViniciusDev" target="_blank" rel="noopener noreferrer"><img  src={githubIcon} alt="githubIcon" /></a> 
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
}



