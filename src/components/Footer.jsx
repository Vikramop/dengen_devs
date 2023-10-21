import React from 'react';
import tele from '../assets/telegram.png';
import twitter from '../assets/twitter.png';

const Footer = () => {
  return (
    <div className=" relative font-cabinetBold bg-[#0b114a] text-white">
      <div className="flex justify-center gap-[60%] px-32">
        <div className="relative z-[100] text-[100px] bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent">
          <h1>
            DEGAN <br /> DEVS
          </h1>
        </div>
        <div className="flex gap-12 pt-8">
          <img src={tele} alt="" className="w-[200px] h-[80px]" />
          <img src={twitter} alt="" className="w-[190px] h-[80px]" />
        </div>
      </div>
      <p className="font-cabinetMedium text-[34px] text-[#ffffff5e] mt-40 pl-32">
        {' '}
        All rights reserved 2023
      </p>
      <div className="flex gap-[84px] font-cabinetMedium text-[34px] py-12 pl-32">
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
