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
          <div data-aos="fade-up" data-aos-once="true"
            className="text-[34px] bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent
          max-sm:text-[28px]
          "
          >
            HOW TO START
          </div>
          <div data-aos="fade" data-aos-once="true" data-aos-duration="200"  data-aos-delay="300">EARNING</div>
          
        </p>
        <div
          className="flex gap-20 mb-12 
            max-sm:w-[280px] 
            max-sm:-ml-4"
        >
          <div>
            <div
              className="text-[64px] leading-none
            lg:max-xl:text-[52px]
            md:max-lg:text-[40px]
            max-sm:text-[30px]
            "
            >
              <div data-aos="fade-up" data-aos-once="true" data-aos-delay="400" data-aos-anchor-placement="top-bottom">01</div> 
              <div
              data-aos-anchor-placement="top-bottom"
              data-aos="fade-up" data-aos-delay="700" data-aos-once="true"
                className="-mb-4 text-[34px] bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent leading-normal
              lg:max-xl:text-[30px]
              md:max-lg:text-[24px]
              max-sm:text-[22px]
              "
              >
                SIGN-UP{' '}
              </div>
            </div>
            <div
            data-aos="fade" data-aos-delay="1000" 
            data-aos-anchor-placement="top-bottom" data-aos-once="true"
              className="text-[24px] font-cabinetMedium
            lg:max-xl:text-[20px]
            md:max-lg:text-[16px] md:max-lg:pt-4
            max-sm:text-[14px]
            "
            >
              Get your Starting Digital <br /> glasses for free
            </div>
          </div>
          <div>
            <div
              className="text-[64px] leading-none
            lg:max-xl:text-[52px]
            md:max-lg:text-[40px]
            max-sm:text-[30px]
            "
            >
              
              <div data-aos="fade-up" data-aos-delay="1400" data-aos-once="true" data-aos-anchor-placement="top-bottom">02</div> 
              <div
              data-aos-anchor-placement="top-bottom" data-aos-once="true"
              data-aos="fade-up" data-aos-delay="1700"
                className="text-[34px] bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent
              lg:max-xl:text-[30px]
              md:max-lg:text-[24px]
              max-sm:text-[22px]
              "
              >
                WATCH THE FEED{' '}
              </div>
            </div>
            <div
            data-aos="fade" data-aos-delay="2000" 
            data-aos-anchor-placement="top-bottom"
              className="text-[24px] font-cabinetMedium
            lg:max-xl:text-[20px]
            md:max-lg:text-[16px] md:max-lg:pt-4
            max-sm:text-[14px]
            "
            >
              Get the boxes with LEE <br /> coins
            </div>
          </div>
        </div>
        <div>
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
          md:max-lg:text-[16px] md:max-lg:pt-4
          max-sm:text-[14px]
          "
          >
            Get LEE coins directly for watching <br />
            videos in your feed
          </div>
        </div>
      </div>
      <div>
        <img 
          src={img} data-aos="fade-left" data-aos-delay="300"
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
