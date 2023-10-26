import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import Img from "../assets/ubg.png";
import mb1 from "../assets/mb1.png";
import mb2 from "../assets/mb2.png";
import mb3 from "../assets/mb3.png";
import mb4 from "../assets/mb4.png";
import mb5 from "../assets/mb5.png";
import mb6 from "../assets/mb6.png";
import AOS from 'aos';
import 'aos/dist/aos.css';



const Hero = () => {
  const anime = useRef(null);
  const slide = useRef(null);

  useEffect(() => {
    AOS.init();
    let ctx = gsap.context(() => {
      gsap.to(".home", {
        autoAlpha: 0,
        ease: "power1.out",
        scale: 1.9,
        scrollTrigger: {
          trigger: ".home",
          start: "top top",
          end: "+=300px",
          //markers: true,
          pin: true,
          scrub: true,
        },
      });
    }, anime);

    return () => ctx.revert();
  });

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".mobile", {
        ease: "none",
        y: 0,
        x: 100,
        opacity: 1,
        duration: 1,
        xPercent: 50,
        scrollTrigger: {
          trigger: ".mobile",
          start: "center 126%",
          end: "center 100%",
          xPercent: 50,
          y: 50,
          scrub: 0,
          // markers: true,
          // pin: true,
        },
      });
    }, slide);
    // let ctx = gsap.context(() => {
    //   gsap.to('.mobile', {
    //     autoAlpha: 0,
    //     scrollTrigger: {
    //       trigger: '.mobile',
    //       start: '-=9100px',
    //       end: '+=300px',
    //       ease: 'none',
    //       scrub: true,
    //       markers: true,
    //       pin: true,
    //     },
    //   });
    // }, slide);

    return () => ctx.revert();
  });

  return (
    <div data-aos="fade-up" data-aos-delay="600" className="flex flex-col gap-[300px]">
      <div
        ref={anime}
        className=" bg-[#29114A] relative text-white text-center flex flex-col items-center justify-center h-[85vh]
      lg:mb-[200px]
      "
      >
        <div className="home p-[300px]">
          <h1 className="font-cabinetBold text-[64px] z-50 relative">
            Welcome to{" "}
            <span className="font-cabinetBold bg-gradient-to-r from-blue-400 via-purple-700 to-pink-700 bg-clip-text text-transparent">
              {" "}
              DENGEN DEVS{" "}
            </span>{" "}
            - Your <br />
            Gateway to the Web3 World
          </h1>
          <button className="relative mt-4 rounded-md border-indigo-500 border-r-2 border-l-2 border-t-2 border-b-8 z-50 py-6 px-4 bg-[#29114A] font-cabinetMedium text-[24px]">
            VIEW PROJECTS
          </button>
          
        </div>
        <img src={Img} className="absolute top-1/8 border-none" />
      </div>

      {/* <div className="relative top-52 left-[-95rem] bg-red-500" ref={slide}>
        <div className="mobile opacity-1">
          <img
            src={mb1}
            alt="img"
            className="absolute w-[400px] top-[600px] left-[80px] rotate-6"
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
