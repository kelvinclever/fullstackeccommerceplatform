import React from 'react';
import Carousel from './Carousel';
import Lottie from 'lottie-react'
import animationData from '../lottieanime/62024-estrategia-marketing-online-digitaldot.json'
import hsl1 from '../images/hsl1.jpg';
import hss2 from '../images/hss2.jpg';
import './home.css';
import Products from './Products';

const Home = () => {
  const cards = [
    <img src={hsl1} alt="." className='home_image'/>,
    <img src={hss2} alt="." className='home_image'/>
  ];

  return (
    <div className='home'>
      <div className='homecontainer'>
        <div className='homeleft'>
        <Lottie animationData={animationData} id='myLottieAnimation' />
          <p className="rotate-z-axis">
            <span>Q</span>
            <span>*</span>
            <span>C</span>
            <span>*</span>
            <span>S</span>
            
          </p>
        </div>
        <div className='homeright'>
          <div className='carousel-wrapper'>
            <Carousel cards={cards} />
          </div>
        </div>
      </div>
      <div>
        <Products/>
      </div>
    </div>
  );
};

export default Home;
