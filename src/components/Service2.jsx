import React from 'react';
import img from '../assets/Llarge.png';
import bg from '../assets/ubg.png';
import mask2 from '../assets/mask2.png';
import '../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Service2 = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div
      className=" relative text-white bg-[#0b114a] flex justify-between items-center px-24 font-cabinetBold p-24 h-auto
    max-sm:px-4
    "
    >
      <div className="z-[555]">
        <p
          className="text-[64px] mb-24
        xl:max-2xl:text-[55px] 
        lg:max-xl:text-[36px]
        md:max-lg:text-[32px]
        max-sm:text-[30px]
        max-sm:w-[380px]
        "
        >
          <div data-aos="fade-up" data-aos-delay="300" data-aos-anchor-placement="top-bottom" className="text-[34px] bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent
          lg:max-xl:text-[24px]
          md:max-lg:text-[24px]
          max-sm:text-[24px]
          
          "
          >
            We Design Cutting Edge
          </div>
          <div data-aos="fade" data-aos-delay="800" data-aos-anchor-placement="top-bottom">
          🖌️UI/UX DESIGN/🎨GRAPHICS
          </div>
          
        </p>
        <div className=" w-[35vw] flex flex-col gap-20 mb-12">
          <div data-aos="fade" data-aos-delay="900" data-aos-anchor-placement="top-bottom">
            <p
              className="text-[24px] font-cabinetMedium
            lg:max-xl:text-[20px]
            md:max-lg:text-[20px]
            max-sm:text-[18px]
            max-sm:w-[300px]
            "
            >
              We understand that exceptional user experiences are the heart of
              every digital product. Our UI/UX experts work tirelessly to ensure
              your Web3 project is not only functional but a joy to interact
              with
            </p>
          </div>
          <div data-aos="fade" data-aos-delay="500" data-aos-anchor-placement="top-bottom">
            <p
              className="text-[24px] font-cabinetMedium
            lg:max-xl:text-[20px]
            md:max-lg:text-[20px]
            max-sm:text-[18px]
            max-sm:w-[300px]
            "
            >
              Our creative wizards transform ideas into captivating visuals.
              Whether it&apos;s eye-catching NFT art, stunning brand logos, or
              engaging social media graphics, we craft digital art that speaks
              volumes.
            </p>
          </div>

          <button
            className="mt-4 rounded-md w-[300px] border-indigo-500 border-r-2 border-l-2 border-t-2 border-b-8 z-50 py-6 px-4 bg-[#29114A] font-cabinetMedium text-[24px]
          max-sm:text-[20px] max-sm:py-4 max-sm:w-[200px]"
          >
            VIEW PROJECTS
          </button>
        </div>
      </div>
      <div className="z-[200]">
        <img data-aos="fade-up" data-aos-delay="800" data-aos-anchor-placement="top-bottom"
          src={img}
          className="relative w-[620px] z-50 
        lg:max-xl:w-[600px]
        max-sm:hidden
        "
        />
        <img data-aos="zoom-in" data-aos-delay="1000" data-aos-anchor-placement="top-bottom"
          src={bg}
          className="absolute bottom-64 w-[950px]  right-12 top-30
          lg:max-xl:w-[800px]
          "
        />
      </div>
      <img
        src={mask2}
        className="absolute left-0 bottom-0
      
      "
      />
    </div>
  );
};

export default Service2;
