import React from 'react';
import Img from '../assets/ubg.png';

const Hero = () => {
  return (
    <div className="bg-[#29114A] relative text-white text-center flex flex-col items-center justify-center h-[85vh]">
      <h1 className="font-cabinetBold text-[64px] z-50">
        Welcome to{' '}
        <span className="font-cabinetBold bg-gradient-to-r from-blue-400 via-purple-700 to-pink-700 bg-clip-text text-transparent">
          {' '}
          DENGEN DEVS{' '}
        </span>{' '}
        - Your <br />
        Gateway to the Web3 World
      </h1>
      <button className="mt-4 rounded-md border-indigo-500 border-r-2 border-l-2 border-t-2 border-b-8 z-50 py-6 px-4 bg-[#29114A] font-cabinetMedium text-[24px]">
        VIEW PROJECTS
      </button>
      <img src={Img} className="absolute top-1/4 border-none" />
    </div>
  );
};

export default Hero;
