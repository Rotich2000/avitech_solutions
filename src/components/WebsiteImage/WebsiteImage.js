import React from "react";

import "./websiteImage.css";
import fiber from "../../images/services.jpeg";
const WebsiteImage = () => {
  return (
    <div className="app__website-image">
      <h1>Our Packages</h1>
      <h3>Installation fee: 2.500</h3>
      <div className="app__website-content">
        <img src={fiber} alt="product" />
      </div>
    </div>
  );
};

export default WebsiteImage;
