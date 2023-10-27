import React from 'react';
import MenuIcon from '../assets/menuicon.png';
import Globe from '../assets/globe.png';
import Glass from '../assets/glass.png';
import Chille from '../assets/chille.png';
import Getapp from '../assets/getapp.png';

const Header = () => {
  return (
    <div
      className="w-[100%] h-[15vh] bg-[#20174C] flex justify-between text-white items-center px-12
    lg:max-xl:h-[12vh]
    md:max-lg:h-[10vh]
    "
    >
      <div className="flex gap-[90px]">
        <div
          className="flex gap-[20px]
        lg:max-xl:gap-[16px]
        "
        >
          <img
            src={MenuIcon}
            alt=""
            className="w-12 h-12 cursor-pointer
          lg:max-xl:w-8 lg:max-xl:h-8 
          md:max-lg:w-6 md:max-lg:h-6 md:max-lg:mt-[4px]
          "
          />
          <h1
            className="text-[32px] font-semibold font-cabinetBold
          lg:max-xl:text-[28px] 
          md:max-lg:text-[20px] md:max-lg:mt-[4px]
          "
          >
            Menu
          </h1>
        </div>
        <h1
          className="text-[32px] font-semibold font-cabinetBold bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent
        lg:max-xl:text-[26px] lg:max-xl:mt-[4px]
        md:max-lg:text-[18px]
        "
        >
          DEGEN DEVS
        </h1>
      </div>

      <div className="flex gap-[40px] items-center">
        <div className="flex gap-[4px]">
          <img
            src={Globe}
            className="w-10 h-10
          md:max-lg:h-6 md:max-lg:w-6
          "
          />
          <p
            className="text-[24px]
          md:max-lg:text-[18px]
          "
          >
            EN
          </p>
        </div>
        <div className="flex gap-[4px]">
          <img
            src={Glass}
            className="w-10 h-10
          md:max-lg:h-6 md:max-lg:w-6
          "
          />
          <p
            className="text-[24px]
          md:max-lg:text-[18px]
          "
          >
            $9.3
          </p>
        </div>
        <div className="flex gap-[4px]">
          <img
            src={Chille}
            className="w-10 h-10
          md:max-lg:h-6 md:max-lg:w-6
          "
          />
          <p
            className="text-[24px]
          md:max-lg:text-[18px]
          "
          >
            $9.3
          </p>
        </div>
        <img
          src={Getapp}
          className="h-16 cursor-pointer
        lg:max-xl:h-12
        md:max-lg:h-8
        "
        />
      </div>
    </div>
  );
};

export default Header;
