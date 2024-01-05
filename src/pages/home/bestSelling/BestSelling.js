import React from "react";
import "./bestSelling.css";
import chairImg1 from "./img/chair-1.png";
import chairImg2 from "./img/chair-2.png";
import chairImg3 from "./img/chair-3.png";
import chairImg4 from "./img/chair-4.png";

const BestSelling = () => {
  return (
    <section className="bestSelling" id="bestSelling">
      <h1 className="title">Best Selling Product</h1>

      {/* filter tabs start */}

      <div className="filter-tabs">
        <div className="filter-tab active">
          <button>Chair</button>
        </div>
        <div className="filter-tab">
          <button>Beds</button>
        </div>
        <div className="filter-tab">
          <button>Sofa</button>
        </div>
        <div className="filter-tab">
          <button>Lamp</button>
        </div>
      </div>

      {/* filter tabs end */}

      {/* filter container start */}

      <div className="filter-container grid">


      <button className="prev-btn">
          <i class="fa-solid fa-arrow-left"></i>
        </button>
        <button className="next-btn">
          <i class="fa-solid fa-arrow-right"></i>
        </button>


        {/* filter content 1 start */}

        <div className="filter-content">
          <div className="img">
            <img src={chairImg1} alt="Sakarias Armchair" />
          </div>
          <span className="item-type">Chair</span>
          <h3 className="item-name">Sakarias Armchair</h3>
          <div className="item-assess">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <div className="item-cost">
            <span className="valute">$</span>
            <span className="price">392</span>
          </div>

          <div className="add-btn">+</div>
        </div>

        {/* filter content 1 end */}

        {/* filter content 2 start */}
        
        <div className="filter-content">
          <div className="img">
            <img src={chairImg2} alt="Baltsar Chair" />
          </div>
          <span className="item-type">Chair</span>
          <h3 className="item-name">Baltsar Chair</h3>
          <div className="item-assess">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <div className="item-cost">
            <span className="valute">$</span>
            <span className="price">299</span>
          </div>

          <div className="add-btn">+</div>
        </div>

        {/* filter content 2 end */}

        {/* filter content 3 start */}
        
        <div className="filter-content">
          <div className="img">
            <img src={chairImg3} alt="Anjay Chair" />
          </div>
          <span className="item-type">Chair</span>
          <h3 className="item-name">Anjay Chair</h3>
          <div className="item-assess">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <div className="item-cost">
            <span className="valute">$</span>
            <span className="price">519</span>
          </div>

          <div className="add-btn">+</div>
        </div>

        {/* filter content 3 end */}

        {/* filter content 4 start */}
        
        <div className="filter-content">
          <div className="img">
            <img src={chairImg4} alt="Nyantuy Chair" />
          </div>
          <span className="item-type">Chair</span>
          <h3 className="item-name">Nyantuy Chair</h3>
          <div className="item-assess">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <div className="item-cost">
            <span className="valute">$</span>
            <span className="price">921</span>
          </div>

          <div className="add-btn">+</div>
        </div>

        {/* filter content 4 end */}


      </div>

      {/* filter container end */}
    </section>
  );
};

export default BestSelling;
