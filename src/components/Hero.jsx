import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AOS from 'aos';
import 'aos/dist/aos.css';
gsap.registerPlugin(ScrollTrigger);
import Img from '../assets/ubg.png';
import mb1 from '../assets/mb1.png';
import mb2 from '../assets/mb2.png';
import mb3 from '../assets/mb3.png';
import mb4 from '../assets/mb4.png';
import mb5 from '../assets/mb5.png';
import mb6 from '../assets/mb6.png';

const Hero = () => {
  const anime = useRef(null);
  const slide = useRef(null);

  useEffect(() => {
    AOS.init();
  }, []);

  // useEffect(() => {
  //   let ctx = gsap.context(() => {
  //     gsap.to('.home', {
  //       autoAlpha: 0,
  //       ease: 'power1.out',
  //       scale: 1.2,
  //       scrollTrigger: {
  //         trigger: '.home',
  //         start: 'top top',
  //         end: '+=500px',
  //         //markers: true,
  //         pin: true,
  //         scrub: true,
  //       },
  //     });
  //   }, anime);

  //   return () => ctx.revert();
  // });

  // useEffect(() => {
  //   let ctx = gsap.context(() => {
  //     gsap.to('.mobile', {
  //       duration: 3,
  //       opacity: 1,
  //       ease: 'none',
  //       y: 0,
  //       xPercent: 10,
  //       scrollTrigger: {
  //         trigger: '.mobile',
  //         start: 'center 126%',
  //         end: 'center 70%',
  //         xPercent: 50,
  //         y: 50,
  //         scrub: 0,
  //         // markers: true,
  //         // pin: true,
  //       },
  //     });
  //   }, slide);
  // let ctx = gsap.context(() => {
  //   gsap.to('.mobile', {
  //     autoAlpha: 0,
  //     scrollTrigger: {
  //       trigger: '.mobile',
  //       start: '-=900px',
  //       end: '+=300px',
  //       ease: 'none',
  //       scrub: true,
  //       markers: true,
  //       pin: true,
  //     },
  //   });
  // }, slide);

  //   return () => ctx.revert();
  // });

  return (
    <div className="flex flex-col gap-[300px]">
      <div
        className=" bg-[#29114A] relative text-white text-center flex flex-col items-center justify-center h-[85vh]
      lg:mb-[200px]
      max-sm:h-[60vh]
      "
      >
        <div className="home p-[300px] max-sm:p-0">
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="font-cabinetBold lg:text-[64px] z-50 relative
          md:text-[36px]
          text-[20px]
          lg:w-[50rem]
          md:w-[30rem]
          w-[20rem]
          "
          >
            Welcome to{' '}
            <span className="font-cabinetBold bg-gradient-to-r from-blue-400 via-purple-700 to-pink-700 bg-clip-text text-transparent">
              DENGEN DEVS
            </span>
            <br />
            Your Gateway to the Web3 World
          </h1>
          <button
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="200"
            className="relative mt-4 rounded-md border-indigo-500 border-r-2 border-l-2 border-t-2 border-b-8 z-50 py-6 px-4 bg-[#29114A] font-cabinetMedium text-[24px]
          md:max-lg:text-[20px]
           max-sm:text-[12px] max-sm:py-4
          "
          >
            VIEW PROJECTS
          </button>
          <img
            data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-delay="200"
            src={Img}
            className="absolute top-1/4 
          lg:max-xl:w-[600px]
          md:max-lg:w-[400px] 
          max-md:w-[400px]
          max-sm:w-[250px] max-sm:left-20
          "
          />
        </div>
      </div>

      {/* <div className="relative bg-red-500" ref={slide}>
        <div className="mobile opacity-1  ">
          <img
            src={mb1}
            alt="img"
            className="absolute w-[400px] -top-[600px] left-[80px] rotate-6"
          />
          <img
            src={mb2}
            alt="img"
            className="absolute w-[400px] -top-[680px] left-[420px] rotate-2"
          />
          <img
            src={mb3}
            alt="img"
            className="absolute w-[400px] -top-[280px] left-[200px] rotate-3"
          />
          <img
            src={mb4}
            alt="img"
            className="absolute w-[400px] -top-[300px] left-[500px] rotate-3"
          />
          <img
            src={mb5}
            alt="img"
            className="absolute w-[400px] -top-[600px] left-[950px] rotate-3"
          />
          <img
            src={mb6}
            alt="img"
            className="absolute w-[400px] -top-[300px] left-[1050px] rotate-3"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
