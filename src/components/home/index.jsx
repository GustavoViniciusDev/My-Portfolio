import React from "react";
import image1 from "../img/image1.svg";

import "./styles.css";

export default function Home() {
  return (
    <div className="container">
      <div className="content">
        <h2 className="Hello">Hello</h2>
        <h1>I AM GUSTAVO</h1>
        <h1>Web Developer</h1>
      </div>

      <img src={image1} alt="image1" />
    </div>
  );
}
