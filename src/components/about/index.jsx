import React, { useEffect, useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import mepick from '../img/eu.png';
import phpicon from '../img/php.png';
import reacticon from '../img/react.png';
import jsicon from '../img/javascript.png';
import cssicon from '../img/css.png';
import mysqlicon from '../img/mysql.png';
import './styles.css';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    }else{
        setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ScrollTrigger onEnter={() => console.log('About component is visible!')}>
      <div className={`about-container ${isVisible ? 'visible' : ''}`}>
        <div className="h1_about">
          <h1 className="aboutme">About <span>Me</span></h1>
        </div>

        <div className="containerAbout">
          <div className="content_aboutme">
            <img className="mepick" src={mepick} alt="me" />
          </div>

          <div className="skills">
            <p className="p_about">
              Hello, my name is Gustavo, I'm 22 years old, and I am a web developer and programming teacher. I have expertise in some of the most prevalent programming languages on the internet, such as PHP, HTML, CSS, and JavaScript. Additionally, I have knowledge in frameworks and libs like Laravel, Node.js and React.js, as well as both relational and non-relational databases. Currently, I reside in Paraná, Brazil.
            </p>

            <h1 className="mainskills"><span>MAIN</span> SKILLS</h1>
            <div className="icon_skills">
              <img src={phpicon} alt="phpicon" />
              <img src={reacticon} alt="reacticon" />
              <img src={jsicon} alt="jsicon" />
              <img src={cssicon} alt="cssicon" />
              <img src={mysqlicon} alt="mysqlicon" />
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
}