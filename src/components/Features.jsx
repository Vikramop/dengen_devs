import React from 'react';
import box1 from '../assets/box1.png';
import box2 from '../assets/box2.png';
import box3 from '../assets/box3.png';
import box4 from '../assets/box4.png';
import mask from '../assets/mask.png';

const Features = () => {
  return (
    <div
      className="relative text-white bg-[#0b114a] flex justify-between items-center px-24 h-[180vh] font-cabinetBold uppercase 
    md:max-lg:flex-col md:max-lg:h-auto md:max-lg:pb-[62px] md:max-lg:px-8
    "
    >
      <div className="z-[100]">
        <p
          className="text-[64px] mb-[110px]
        lg:max-xl:text-[50px]
        "
        >
          <span className="text-[34px] bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent ">
            {' '}
            EARN MORE
          </span>{' '}
          <br />
          WITH RARER <br />
          GLASSES
        </p>
        <div
          className="text-[20px] gap-[50px] flex flex-col mb-[110px] 
        lg:max-xl:text-[16px] lg:max-xl:w-[250px]
        "
        >
          <p>
            Your earnings level depends on the daily Attention <br />
            Cap and Coin cap
          </p>
          <p>
            To achieve maximum performance, you need to <br />
            upgrade your Digital glasses.
          </p>
        </div>
        <div>
          <h3 className="text-[24px] mb-[14px]">ATTENTION</h3>
          <p
            className="text-[16px] font-cabinetLight mb-[40px]
          lg:max-xl:text-[14px] lg:max-xl:w-[200px]
          "
          >
            Resource for receiving coins and boxes. <br />1 Attention equals 5
            minutes of watching the feed <br />
          </p>
          <h3 className="text-[24px] mb-[14px]">ATTENTION CAP</h3>
          <p
            className="text-[16px] font-cabinetLight mb-[40px]
          lg:max-xl:text-[14px] lg:max-xl:w-[230px]
          "
          >
            Attention you can spend per day: <br />
            initial – 1, maximum – 20{' '}
          </p>
          <h3 className="text-[24px] mb-[14px]">COIN CAP</h3>
          <p
            className="text-[16px] font-cabinetLight mb-[40px]
          lg:max-xl:text-[14px] lg:max-xl:w-[270px]"
          >
            The maximum amount of LEE you can <br /> receive daily varies from 5
            to 1200 coins{' '}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[84px] z-[600]">
        <div className="flex gap-[24px]">
          <img
            src={box1}
            className="w-[340px] h-[615px]
          lg:max-xl:w-[250px] lg:max-xl:h-[450px] 
          "
          />
          <img
            src={box2}
            className="w-[340px] h-[615px]
          lg:max-xl:w-[250px] lg:max-xl:h-[450px]"
          />
        </div>
        <div className="flex gap-[24px]">
          <img
            src={box3}
            className="w-[340px] h-[615px]
          lg:max-xl:w-[250px] lg:max-xl:h-[450px]"
          />
          <img
            src={box4}
            className="w-[340px] h-[615px]
          lg:max-xl:w-[250px] lg:max-xl:h-[450px]"
          />
        </div>
      </div>
      <img src={mask} className="absolute left-0 top-0" />
    </div>
  );
};

export default Features;
