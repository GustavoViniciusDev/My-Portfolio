import React from 'react';

import linkedinIcon from '../img/linkedin.png';
import whatsappIcon from '../img/whatsapp.png';
import instagramIcon from '../img/instagram.png';
import emailIcon from '../img/email.png';
import githubIcon from '../img/github-sign.png';
import './styles.css';

export default function Contact(){
    return(
        <div>  

            <div className="h1_about">
                <h1 className="aboutme"><span>Contact</span> Me</h1>
            </div>


            <div className="containerContact">
                

                <div className="icon_contacts">
                    <img src={linkedinIcon} alt="linkedinIcon" />
                    <img src={whatsappIcon} alt="whatsappIcon" />
                    <img src={instagramIcon} alt="instagramIcon" />
                    <img src={emailIcon} alt="emailIcon" />
                    <img src={githubIcon} alt="githubIcon" />
                </div>
            </div>
            

            
                
        </div>
    );
}