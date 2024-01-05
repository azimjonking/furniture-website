import React from "react";
import "./testimonial.css";
import testimonialImg1 from "./img/testimonial-img1.png";
import testimonialImg2 from "./img/testimonial-img2.png";
import testimonialImg3 from "./img/testimonial-img3.png";

import client1 from "./img/client1.png";
import client2 from "./img/client2.png";
import client3 from "./img/client3.png";

const Testimonial = () => {
  return (
    <section className="testimonial" id="testimonial">
      <h3 className="subtitle">Testimonials</h3>
      <h1 className="title">Our Client Reviews</h1>

      <div className="testimonial-container grid">
        <button className="prev-btn">
          <i class="fa-solid fa-arrow-left"></i>
        </button>
        <button className="next-btn">
          <i class="fa-solid fa-arrow-right"></i>
        </button>

        {/* testimonial content 1 start*/}

        <div className="testimonial-content">
          <div className="img">
            <img src={testimonialImg1} alt="testimonialImg1" />
          </div>

          <div className="content-1 content">
            <div className="client-img">
              <img src={client1} alt="client-1" />
            </div>

            <h3 className="client-name">Bang Upin</h3>
            <p className="client-job">Pedagang Asongan</p>

            <p className="client-feedback">
              “Terimakasih banyak, kini ruanganku menjadi lebih mewah dan
              terlihat mahal“
            </p>

            <div className="client-assess">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
          </div>
        </div>

        {/* testimonial content 1 end*/}

        {/* testimonial content 2 start*/}

        <div className="testimonial-content">
          <div className="img">
            <img src={testimonialImg2} alt="testimonialImg2" />
          </div>

          <div className="content-2 content">
            <div className="client-img">
              <img src={client2} alt="client-2" />
            </div>

            <h3 className="client-name">Ibuk Sukijan</h3>
            <p className="client-job">Ibu Rumah Tangga</p>

            <p className="client-feedback">
              “Makasih Panto, aku sekarang berasa tinggal di apartment karena
              barang-barang yang terlihat mewah“
            </p>

            <div className="client-assess">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
          </div>
        </div>

        {/* testimonial content 2 end*/}

        {/* testimonial content 3 start*/}

        <div className="testimonial-content">
          <div className="img">
            <img src={testimonialImg3} alt="testimonialImg3" />
          </div>

          <div className="content-3 content">
            <div className="client-img">
              <img src={client3} alt="client-3" />
            </div>

            <h3 className="client-name">Mpok Ina</h3>
            <p className="client-job">Karyawan Swasta</p>

            <p className="client-feedback">
              “Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“
            </p>

            <div className="client-assess">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
          </div>
        </div>

        {/* testimonial content 3 end*/}
      </div>
    </section>
  );
};

export default Testimonial;
