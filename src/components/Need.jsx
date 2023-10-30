import React from 'react';
import glass from '../assets/vrg.png';
import bg from '../assets/gbg.png';
import mask from '../assets/mask.png';

const Need = () => {
  return (
    <div
      className="relative bg-[#0b114a] flex flex-col items-center justify-center h-[100vh]
    md:max-lg:h-[60vh]
    max-sm:h-[70vh]
    "
    >
      <h1
        className="text-[64px] font-cabinetBold text-white z-[400]
      max-sm:text-[32px]
      "
      >
        {' '}
        ALL YOU NEED IS <br />
        <span className="bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent">
          DIGITAL GLASSES
        </span>
      </h1>
      <img src={glass} className="w-[900px]  z-50" />
      <img src={bg} className="absolute top-32 w-[900px]" />
      <img src={mask} className="absolute top-0 " />
    </div>
  );
};

export default Need;
