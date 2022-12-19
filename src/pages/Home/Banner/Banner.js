import React from 'react';

import './Banner.css'
import { Carousel } from 'flowbite-react';

const Banner = () => {

  return (
    <div className='mt-5' >
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <h1 className='text-3xl absolute top-[45%] left-1/ 2 text-white'>Bus Ticket</h1>
        <Carousel slideInterval={5000}>
          <div className="flex h-full items-center justify-center relative">
            <div className='banner-1'>
              <img src='https://i.ibb.co/Pczch5H/bus3.jpg' alt='' />
            </div>
            <div className='text absolute top-[45%]  left-1/ 2 text-white'>
              <h1 className='text-xl md:text-3xl lg:text-4xl font-extrabold uppercase'>Easy Travel BD</h1>
            </div>

          </div>
          <div className="flex h-full items-center justify-center relative">
            <div className='banner-1'>
              <img src='https://i.ibb.co/SX2ZVNt/bus6.jpg' alt='' />
            </div>
            <div className='text absolute top-[45%] letf-1/2 text-white'>
              <h1 className='text-sm md:text-3xl lg:text-4xl font-extrabold text-center uppercase'>Best & Most  Professional Travel <br/> Option In Bangladesh</h1>
            </div>
          </div>
          <div className="flex h-full items-center justify-center relative">
            <div className='banner-1 '>
              <img src='https://i.ibb.co/Ws5wQ2R/bus7.jpg' alt='' />
            </div>
            <div className='text absolute top-[45%] left-1/ 2 text-white'>
              <h1 className='text-sm md:text-3xl lg:text-4xl font-extrabold text-center uppercase'>We have the widest range of <br/> luxury inter-city bus.</h1>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;