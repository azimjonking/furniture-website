import React from "react";
import { Link } from "react-router-dom";
import "./material.css";

import materialImg1 from "./img/material-img1.png";
import materialImg2 from "./img/material-img2.png";
import materialImg3 from "./img/material-img3.png";

const Material = () => {
  return (
    <section className="material grid" id="material">
      <div className="material-info">
        <h3 className="subtitle">Materials</h3>
        <h1 className="title">Very serious materials for making furniture</h1>
        <p className="description">
          Because panto was very serious about designing furniture for our
          environment, using a very expensive and famous capital but at a
          relatively low price
        </p>
        <Link className="more-info__btn">
          More Info <i class="fa-solid fa-arrow-right"></i>
        </Link>
      </div>

      <div className="material-images grid">
        <div className="material-image image-1">
          <div className="img">
            <img src={materialImg1} alt="material-img.png" loading="lazy" />
          </div>
        </div>
        <div className="material-image image-2">
          <div className="img">
            <img src={materialImg2} alt="material-img.png" loading="lazy" />
          </div>
        </div>
        <div className="material-image image-3">
          <div className="img">
            <img src={materialImg3} alt="material-img.png" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Material;
