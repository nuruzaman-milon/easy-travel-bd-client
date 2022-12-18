import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import bus3 from "../../../assets/banner/bus3.jpg"
import bus4 from "../../../assets/banner/bus6.jpg"
import './Banner.css'
import { Carousel } from 'flowbite-react';

const Banner = () => {

  return (
    <div className=''>
      {/* <h2> Single Item</h2>
        <Slider {...settings}>
          <div className='banner-1'>
            <h1 className='flex items-center justify-center'>Hello</h1>
          </div>
          <div>
          <img className= 'w-full object-cover h-[80vh]' src={bus4} alt='' />
          </div>
        </Slider> */}

      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <h1 className='text-3xl absolute top-1/2 left-1/ 2 text-white'>Bus Ticket</h1>
        <Carousel slideInterval={5000}>
          <div className="flex h-full items-center justify-center relative">
            <div className='banner-1'>
              <img src='https://i.ibb.co/Pczch5H/bus3.jpg' alt='' />
            </div>
            <div className='text absolute top-1/2 left-1/ 2 text-white'>
              <h1 className='text-3xl'>Bus Ticket</h1>
            </div>

          </div>
          <div className="flex h-full items-center justify-center relative">
            <div className='banner-1'>
              <img src='https://i.ibb.co/SX2ZVNt/bus6.jpg' alt='' />
            </div>
            <div className='text absolute top-1/2 left-1/ 2 text-white'>
              <h1 className='text-3xl'>Bus Ticket</h1>
            </div>
          </div>
          <div className="flex h-full items-center justify-center relative">
            <div className='banner-1 '>
              <img src='https://i.ibb.co/SX2ZVNt/bus6.jpg' alt='' />
            </div>
            <div className='text absolute top-1/2 left-1/ 2 text-white'>
              <h1 className='text-3xl'>Bus Ticket</h1>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;