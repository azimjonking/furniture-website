import React from 'react';
import MainSection from '../../pages/home/mainSection/MainSec';
import ChoosingWhy from '../../pages/home/choosingWhy/ChoosingWhy';
import BestSelling from '../../pages/home/bestSelling/BestSelling';
import Experience from '../../pages/home/experience/Experience';
import Material from '../../pages/home/material/Material';
import Testimonial from '../../pages/home/testimonial/Testimonial';
import "./home.css";

const Home = () => {
  return (
    <div className='home' id='home'>
      <MainSection />
      <ChoosingWhy />
      <BestSelling />
      <Experience />
      <Material />
      <Testimonial />
    </div>
  )
}

export default Home
