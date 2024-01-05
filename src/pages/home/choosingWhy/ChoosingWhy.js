import React from "react";
import { Link } from "react-router-dom";
import "./choosingWhy.css";

const ChoosingWhy = () => {
  return (
    <section className="choosingWhy">
      <h1>Why <br />Choosing Us</h1>

      <div className="choosing-container grid">
        <div className="content">
          <h3>Luxury facilities</h3>
          <p>
            The advantage of hiring a workspace with us is that givees you
            comfortable service and all-around facilities.
          </p>
          <Link className="more-info__btn">
            More Info <i class="fa-solid fa-arrow-right"></i>
          </Link>
        </div>

        <div className="content">
          <h3>Affordable Price</h3>
          <p>
            You can get a workspace of the highst quality at an affordable price
            and still enjoy the facilities that are oly here.
          </p>
          <Link className="more-info__btn">
            More Info <i class="fa-solid fa-arrow-right"></i>
          </Link>
        </div>

        <div className="content">
          <h3>Many Choices</h3>
          <p>
            We provide many unique work space choices so that you can choose the
            workspace to your liking.
          </p>
          <Link className="more-info__btn">
            More Info <i class="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ChoosingWhy;
