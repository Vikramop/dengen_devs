import React from 'react';
import img from '../assets/eimg.png';
import bg from '../assets/ubg.png';
import mask2 from '../assets/mask2.png';

const Earning = () => {
  return (
    <div className="relative text-white bg-[#0b114a] flex justify-between items-center px-24 font-cabinetBold pt-24 h-[120vh]">
      <div className="z-[555]">
        <p className="text-[64px] mb-24">
          <span className="text-[34px] bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent">
            HOW TO START{' '}
          </span>{' '}
          <br />
          EARNING
        </p>
        <div className="flex gap-20 mb-12">
          <div>
            <p className="text-[64px] leading-none">
              {' '}
              01 <br />{' '}
              <span className="-mb-4 text-[34px] bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent">
                SIGN-UP{' '}
              </span>
            </p>
            <p className="text-[24px] font-cabinetMedium">
              Get your Starting Digital <br /> glasses for free
            </p>
          </div>
          <div>
            <p className="text-[64px] leading-none">
              {' '}
              02 <br />{' '}
              <span className="text-[34px] bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent">
                WATCH THE FEED{' '}
              </span>
            </p>
            <p className="text-[24px] font-cabinetMedium">
              Get the boxes with LEE <br /> coins
            </p>
          </div>
        </div>
        <div>
          <p className="text-[64px] leading-none">
            {' '}
            03 <br />{' '}
            <span className="text-[34px] bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent">
              BUY RARER DIGIAL GLASSES{' '}
            </span>
          </p>
          <p className="z-[500] text-[24px] font-cabinetMedium">
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
        "
        />
        <img
          src={bg}
          className="absolute bottom-64 w-[700px]
        xl:max-2xl:w-[500px] xl:max-2xl:bottom-80
        "
        />
      </div>
      <img src={mask2} className="absolute left-0 bottom-0" />
    </div>
  );
};

export default Earning;
