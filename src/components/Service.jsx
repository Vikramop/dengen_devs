import React from 'react';
import img from '../assets/mlarge.png';
import bg from '../assets/ubg.png';
import mask from '../assets/mask2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const services = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div
      className="relative flex flex-col justify-center items-center text-white bg-[#0b114a] h-auto pt-20
    md:max-lg:h-auto md:max-lg:pb-[30px]
    max-sm:pt-32 max-sm:h-auto
    "
    >
      <p data-aos="fade-right" data-aos-anchor-placement="top-bottom" className="text-center font-cabinetBold text-[40px] bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent">
        our services
      </p>
      <p data-aos="fade-left" data-aos-dely="500" data-aos-anchor-placement="top-bottom"
        className="relative z-50 text-center font-cabinetBold text-[34px] mx-20 mb-[150px]
      lg:max-xl:text-[26px]
      max-sm:text-[20px] max-sm:w-[80%] max-sm:mb-[50px]
      "
      >
        We&apos;re here to craft exceptional user experiences, breathtaking
        graphics, responsive websites, and immersive mobile app designs that
        align seamlessly with the emerging Web3 ecosystem.
      </p>

      <img data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top-bottom"
        src={img}
        alt="img"
        className="w-[450px] h-[950px] z-[500] mx-auto 
        lg:max-xl:w-[300px] lg:max-xl:h-[650px]
        max-sm:w-[70%] max-sm:h-[80%]
        "
      />

      <img data-aos="fade-down" data-aos-duration="1000" data-aos-anchor-placement="top-bottom"
        src={bg}
        alt="img"
        className="absolute top-24 w-[1000px]
      md:max-lg:w-[600px]
      "
      />

      <img src={mask} alt="img" className="absolute bottom-0 " />
    </div>
  );
};

export default services;
