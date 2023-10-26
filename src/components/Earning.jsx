import React, { useEffect } from 'react';
import img from '../assets/eimg.png';
import bg from '../assets/ubg.png';
import mask2 from '../assets/mask2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Earning = () => {

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <div className="relative text-white bg-[#0b114a] flex justify-between items-center px-24 font-cabinetBold pt-24 h-[120vh]">
      <div className="z-[555]">
        <p className="text-[64px] mb-24">
          <div data-aos="fade-up" className="text-[34px] bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent">
            HOW TO START{' '}
          </div>{' '}
          <div data-aos="fade-up">
          EARNING
          </div>
        </p>
        <div className="flex gap-20 mb-12">
          <div>
            <p className="text-[64px] leading-none">
              <div data-aos="fade-up" data-aos-delay="100">
              01 
              </div>
              <span data-aos="fade-up" data-aos-delay="300" className="-mb-4 text-[34px] bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent">
                SIGN-UP
              </span>
            </p>
            <p data-aos="fade" data-aos-delay="600" className="text-[24px] font-cabinetMedium">
              Get your Starting Digital <br /> glasses for free
            </p>
          </div>
          <div>
            <p className="text-[64px] leading-none">
              <div data-aos="fade-up" data-aos-delay="1000">
              02 
              </div>
              <span data-aos="fade-up" data-aos-delay="1300" className="text-[34px] bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent">
                WATCH THE FEED{' '}
              </span>
            </p>
            <p data-aos="fade" data-aos-delay="1600" className="text-[24px] font-cabinetMedium">
              Get the boxes with LEE <br /> coins
            </p>
          </div>
        </div>
        <div>
          <p className="text-[64px] leading-none">
            <div data-aos-anchor-placement="top-bottom" data-aos="fade-up" data-aos-delay="2000">
            03 
            </div>
            <span data-aos-anchor-placement="top-bottom" data-aos="fade-up" data-aos-delay="2300" className="text-[34px] bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent">
              BUY RARER DIGIAL GLASSES{' '}
            </span>
          </p>
          <p data-aos-anchor-placement="top-bottom" data-aos="fade" data-aos-delay="2600" className="z-[500] text-[24px] font-cabinetMedium">
            Get LEE coins directly for watching <br />
            videos in your feed
          </p>
        </div>
      </div>
      <div>
        <img 
        data-aos="zoom-in" data-aos-delay="300"
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
