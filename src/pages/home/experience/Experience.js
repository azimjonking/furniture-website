import React from "react";
import "./experience.css";
import { Link } from "react-router-dom";

import experineceImg from "./experience.png";

const Experience = () => {
  return (
    <section className="experience grid" id="experience">
      <div className="experience-img">
        <div className="img">
          <img src={experineceImg} alt="experience" loading="lazy" />
        </div>
      </div>
      <div className="experience-info">
        <h3 className="subtitle">experiences</h3>
        <h1 className="title">we provide you the best experience</h1>
        <p className="description">
          You don't have to worry about the result because all of these
          interiors are made by people who are professionals in their fields
          with an elegant and lucurious style and with premium quality materials
        </p>
        <Link  className="more-info__btn">
          More Info <i class="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
    </section>
  );
};

export default Experience;
