import React from 'react';
import img from '../assets/eimg.png';
import bg from '../assets/ubg.png';
import mask2 from '../assets/mask2.png';

const Earning = () => {
  return (
    <div
      className="relative text-white bg-[#0b114a] flex justify-between items-center px-24 font-cabinetBold pt-24 h-[120vh] 
    
    max-sm:pt-0
    max-sm:px-12
    max-sm:h-[80vh]
    "
    >
      <div className="z-[55]">
        <p
          className="text-[64px] mb-24
        lg:max-xl:text-[52px]
        md:max-lg:text-[40px]
        max-sm:text-[36px]
        "
        >
          <span
            className="text-[34px] bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent
          max-sm:text-[28px]
          "
          >
            HOW TO START{' '}
          </span>{' '}
          <br />
          EARNING
        </p>
        <div
          className="flex gap-20 mb-12 
            max-sm:w-[280px] 
            max-sm:-ml-4"
        >
          <div>
            <p
              className="text-[64px] leading-none
            lg:max-xl:text-[52px]
            md:max-lg:text-[40px]
            max-sm:text-[30px]
            "
            >
              01 <br />
              <span
                className="-mb-4 text-[34px] bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent leading-normal
              lg:max-xl:text-[30px]
              md:max-lg:text-[24px]
              max-sm:text-[22px]
              "
              >
                SIGN-UP{' '}
              </span>
            </p>
            <p
              className="text-[24px] font-cabinetMedium
            lg:max-xl:text-[20px]
            md:max-lg:text-[16px] md:max-lg:pt-4
            max-sm:text-[14px]
            "
            >
              Get your Starting Digital <br /> glasses for free
            </p>
          </div>
          <div>
            <p
              className="text-[64px] leading-none
            lg:max-xl:text-[52px]
            md:max-lg:text-[40px]
            max-sm:text-[30px]
            "
            >
              {' '}
              02 <br />{' '}
              <span
                className="text-[34px] bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent
              lg:max-xl:text-[30px]
              md:max-lg:text-[24px]
              max-sm:text-[22px]
              "
              >
                WATCH THE FEED{' '}
              </span>
            </p>
            <p
              className="text-[24px] font-cabinetMedium
            lg:max-xl:text-[20px]
            md:max-lg:text-[16px] md:max-lg:pt-4
            max-sm:text-[14px]
            "
            >
              Get the boxes with LEE <br /> coins
            </p>
          </div>
        </div>
        <div>
          <p
            className="text-[64px] leading-none
          lg:max-xl:text-[52px]
          md:max-lg:text-[40px]
          max-sm:text-[30px]
          "
          >
            {' '}
            03 <br />{' '}
            <span
              className="text-[34px] bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent
            lg:max-xl:text-[30px]
            md:max-lg:text-[24px]
            max-sm:text-[22px]
            max-sm:leading-none
            
            "
            >
              BUY RARER DIGIAL GLASSES{' '}
            </span>
          </p>
          <p
            className="z-[500] text-[24px] font-cabinetMedium
          lg:max-xl:text-[20px]
          md:max-lg:text-[16px] md:max-lg:pt-4
          max-sm:text-[14px]
          "
          >
            Get LEE coins directly for watching <br />
            videos in your feed
          </p>
        </div>
      </div>
      <div>
        <img
          src={img}
          className="w-[680px] z-[100] relative
        xl:max-2xl:w-[500px]
        md:max-lg:w-[400px]
        
        max-sm:hidden
        "
        />
        <img
          src={bg}
          className="absolute bottom-64 w-[700px]
        xl:max-2xl:w-[500px] xl:max-2xl:bottom-80
        lg:max-xl:w-[500px]
        md:max-lg:w-[320px] md:max-lg:bottom-[520px]
        max-sm:w-[300px] 
        max-sm:left-12
        "
        />
      </div>
      <img src={mask2} className="absolute left-0 bottom-0" />
    </div>
  );
};

export default Earning;
