import React, { useEffect } from 'react';
import glass from '../assets/vrg.png';
import bg from '../assets/gbg.png';
import mask from '../assets/mask.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Need = () => {

  useEffect(() => {
    AOS.init();
  })

  return (
    <div className="relative bg-[#0b114a] flex flex-col items-center justify-center h-[100vh]">
      <h1 className="text-[64px] font-cabinetBold text-white z-[400]">
        {' '}
        <div data-aos="fade-left">
        ALL YOU NEED IS 
        </div>
        <div data-aos="fade-right" className="bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent">
          DIGITAL GLASSES
        </div>
      </h1>
      <img data-aos="fade-up" data-aos-delay="200" src={glass} className="w-[700px]  z-50" />
      <div data-aos="fade" data-aos-duration="500" data-aos-delay="200" className="absolute top-32 w-[900px]">
      <img src={bg}  />
      </div>
      <img src={mask} className="absolute top-0 " />
    </div>
  );
};

export default Need;
