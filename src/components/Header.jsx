import React, { useEffect, useRef } from 'react';
import MenuIcon from '../assets/menuicon.png';
import Globe from '../assets/globe.png';
import Glass from '../assets/glass.png';
import Chille from '../assets/chille.png';
import Getapp from '../assets/getapp.png';
import gsap from 'gsap';
import { Power3 } from 'gsap';



const Header = () => {

  const animationItem = useRef(null);

  useEffect(() => {
    // Refs allow you to access DOM nodes
    // then we can animate them like so...
    gsap.to(animationItem.current, 
    {
      duration: 1,
      opacity: 1,
      delay: 0.5,
      // y: 20,
      ease: Power3.easeOut
    },
    )
    // gsap.to(animationItem.current, {
    //    opacity: 1,
    // });
  });
  



  return (
    <div ref={animationItem} className="body opacity-0 w-[100%] h-[15vh] bg-[#20174C] flex justify-between text-white items-center px-12">
      <div className="flex gap-[90px]">
        <div className="flex gap-[20px]">
          <img src={MenuIcon} alt="" className="w-12 h-12 cursor-pointer" />
          <h1 className="text-[32px] font-semibold font-cabinetBold">Menu</h1>
        </div>
        <h1 className="text-[32px] font-semibold font-cabinetBold bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent">
          DEGEN DEVS
        </h1>
      </div>

      <div className="flex gap-[40px] items-center">
        <div className="flex gap-[4px]">
          <img src={Globe} className="w-10 h-10" />
          <p className="text-[24px]">EN</p>
        </div>
        <div className="flex gap-[4px]">
          <img src={Glass} className="w-10 h-10" />
          <p className="text-[24px]">$9.3</p>
        </div>
        <div className="flex gap-[4px]">
          <img src={Chille} className="w-10 h-10" />
          <p className="text-[24px]">$9.3</p>
        </div>
        <img src={Getapp} className="h-16 cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
