import React from "react";

import image1 from "../img/image1.svg";

import "./styles.css";

export default function Home() {
 

  return (

      <div >
        <div className="container_home">
          <div className="content_home">
            <h2>Hello</h2>
            <h1>I AM GUSTAVO</h1>
            <h1>Web Developer</h1>
          </div>

          <div className="image_home">
            <img src={image1} alt="image1" />
          </div>
        </div>
      </div>
  
  );
}
