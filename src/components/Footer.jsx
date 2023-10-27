import React from 'react';
import tele from '../assets/telegram.png';
import twitter from '../assets/twitter.png';

const Footer = () => {
  return (
    <div className=" relative font-cabinetBold bg-[#0b114a] text-white">
      <div
        className="flex justify-center gap-[50%] px-32
      xl:max-2xl:gap-[30%]
      lg:max-xl:gap-[25%] lg:max-xl:pt-[30px]
      md:max-lg:px-12 md:max-lg:gap-[15%]
      
      "
      >
        <div
          className="relative z-[100] text-[100px] bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent
        lg:max-xl:text-[70px]
        md:max-lg:text-[52px] md:max-lg:pt-[20px]
        "
        >
          <h1>
            DEGAN <br /> DEVS
          </h1>
        </div>
        <div
          className="flex gap-12 pt-8
        lg:max-xl:gap-8
        "
        >
          <img
            src={tele}
            alt=""
            className="w-[200px] h-[60px] cursor-pointer
            lg:max-xl:w-[150px] lg:max-xl:h-[30px]
            md:max-lg:w-[120px] md:max-lg:h-[35px]
            "
          />
          <img
            src={twitter}
            alt=""
            className="w-[190px] h-[60px] cursor-pointer
            lg:max-xl:w-[150px] lg:max-xl:h-[30px]
            md:max-lg:w-[120px] md:max-lg:h-[35px]
            "
          />
        </div>
      </div>
      <p
        className="font-cabinetMedium text-[34px] text-[#ffffff5e] mt-40 pl-32
      lg:max-xl:text-[30px]
      md:max-lg:pl-12
      "
      >
        {' '}
        All rights reserved 2023
      </p>
      <div
        className="flex gap-[84px] font-cabinetMedium text-[34px] py-12 pl-32
      lg:max-xl:text-[24px] lg:max-xl:gap-[64px]
      md:max-lg:text-[13px]
      md:max-lg:pl-12
      "
      >
        <p>Support</p>
        <p>Agreement</p>
        <p>Terms of use</p>
        <p>Security</p>
        <p>Details</p>
      </div>
    </div>
  );
};

export default Footer;
