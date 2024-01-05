import React from "react";
import "./mainSec.css";

const MainSection = () => {
  return (
    <section className="home-main">
      <h1>
        Make your interior more <br />
        Minimalistic & Modern
      </h1>
      <p>
        Turn your room with panto into a lot more minimalist and modern with
        ease and speed
      </p>

      <div className="main-search">
        <input type="text" placeholder="Search furniture"/>
        <button className="search-btn">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </section>
  );
};

export default MainSection;
