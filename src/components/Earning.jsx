import React from 'react';
import img from '../assets/eimg.png';
import bg from '../assets/ubg.png';
import mask2 from '../assets/mask2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Earning = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div
      className="relative text-white bg-[#0b114a] flex justify-between items-center font-cabinetBold py-20 px-2 md:px-20 h-[120vh] 
    "

    >
      <div className="z-[55] w-[100%]">
        <p
          className="text-[64px] mb-24
        lg:max-xl:text-[52px]
        md:max-lg:text-[40px]
        max-sm:text-[36px]
        text-center
        md:text-left
        w-[100%]
        "
        >
          <div data-aos="fade-up" data-aos-once="true"
            className="text-[34px] bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent
          max-sm:text-[28px]
          "
          >
            HOW TO START
          </div>
          <div data-aos="fade" data-aos-once="true" data-aos-duration="200"  data-aos-delay="300">EARNING</div>
          
        </p>
        <div className='flex flex-wrap justify-between lg:w-[40rem]'>
           <div className='mb-5 pr-5'>
          <div
            className="text-[64px] leading-none
          lg:max-xl:text-[52px]
          md:max-lg:text-[40px]
          max-sm:text-[30px]
          "
          >
           
           <div data-aos="fade-up" data-aos-delay="2300" data-aos-once="true" data-aos-anchor-placement="top-bottom">01</div>  
            <div
            data-aos-anchor-placement="top-bottom" data-aos-once="true"
            data-aos="fade-up" data-aos-delay="2700"
              className="text-[34px] bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent
            lg:max-xl:text-[30px]
            md:max-lg:text-[24px]
            max-sm:text-[22px]
            max-sm:leading-none
            "
            >
              SIGN-UP
            </div>
          </div>
          <div
          data-aos="fade" data-aos-delay="3000" data-aos-once="true"
          data-aos-anchor-placement="top-bottom"
            className="z-[500] text-[24px] font-cabinetMedium
          lg:max-xl:text-[20px]
          md:max-lg:text-[16px]
          max-sm:text-[14px]
          "
          >
            Get your Starting Digital <br/> glasses for free
          </div>
        </div>
         
           <div className='mb-5'>
          <div
            className="text-[64px] leading-none
          lg:max-xl:text-[52px]
          md:max-lg:text-[40px]
          max-sm:text-[30px]
          "
          >
           
           <div data-aos="fade-up" data-aos-delay="2300" data-aos-once="true" data-aos-anchor-placement="top-bottom">02</div>  
            <div
            data-aos-anchor-placement="top-bottom" data-aos-once="true"
            data-aos="fade-up" data-aos-delay="2700"
              className="text-[34px] bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent
            lg:max-xl:text-[30px]
            md:max-lg:text-[24px]
            max-sm:text-[22px]
            max-sm:leading-none
            "
            >
              WATCH THE FEED
            </div>
          </div>
          <div
          data-aos="fade" data-aos-delay="3000" data-aos-once="true"
          data-aos-anchor-placement="top-bottom"
            className="z-[500] text-[24px] font-cabinetMedium
          lg:max-xl:text-[20px]
          md:max-lg:text-[16px]
          max-sm:text-[14px]

          "
          >
            Get the boxes with LEE <br/> coins
          </div>
        </div>
        <div className='mb-5'>
          <div
            className="text-[64px] leading-none
          lg:max-xl:text-[52px]
          md:max-lg:text-[40px]
          max-sm:text-[30px]
          "
          >
           
           <div data-aos="fade-up" data-aos-delay="2300" data-aos-once="true" data-aos-anchor-placement="top-bottom">03</div>  
            <div
            data-aos-anchor-placement="top-bottom" data-aos-once="true"
            data-aos="fade-up" data-aos-delay="2700"
              className="text-[34px] bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent
            lg:max-xl:text-[30px]
            md:max-lg:text-[24px]
            max-sm:text-[22px]
            max-sm:leading-none
            "
            >
              BUY RARER DIGIAL GLASSES
            </div>
          </div>
          <div
          data-aos="fade" data-aos-delay="3000" data-aos-once="true"
          data-aos-anchor-placement="top-bottom"
            className="z-[500] text-[24px] font-cabinetMedium
          lg:max-xl:text-[20px]
          md:max-lg:text-[16px]
          max-sm:text-[14px]
          "
          >
            Get LEE coins directly for watching <br/>
            videos in your feed
          </div>
        </div>
        </div>
      </div>
      <div>
        <img 
          src={img} data-aos="fade-left" data-aos-delay="300"
          className="w-[680px] z-[100] relative
        xl:max-2xl:w-[500px]
        md:max-lg:w-[400px]
        
        max-md:hidden
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
