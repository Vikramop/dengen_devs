import React from 'react';
import glass from '../assets/vrg.png';
import bg from '../assets/gbg.png';
import mask from '../assets/mask.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Need = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div
      className="relative bg-[#0b114a] flex flex-col items-center justify-center h-[100vh]
    md:max-lg:h-[70vh]
    max-sm:h-[70vh]
    "
    >
      <h1
        className="text-[64px] font-cabinetBold text-white z-[400]
      max-sm:text-[32px]
      "
      >
        <div className='text-center'data-aos="fade-up">ALL YOU NEED IS</div>
        <div data-aos-delay="100" data-aos="fade-up" className="bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent">
          DIGITAL GLASSES
        </div>
      </h1>
      <img data-aos-delay="500" data-aos-anchor-placement="top-bottom" data-aos="zoom-in" src={glass} className="w-[900px] z-50" />
      <img src={bg} className="absolute top-32 w-[900px]" />
      <img src={mask} className="absolute top-0" />
    </div>
  );
};

export default Need;
