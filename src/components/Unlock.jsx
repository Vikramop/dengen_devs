import React, { useEffect } from 'react';
import bg from '../assets/ubg.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Unlock = () => {

  useEffect(() => {
    AOS.init();
  })

  return (
    <div className="bg-[#29114A] text-white flex items-center justify-between h-[60vh] px-24">
      <div >
        <img data-aos="zoom-in" src={bg} alt="" />
      </div>
      <div>
        <p data-aos="fade-left" className="text-[24px] font-cabinetBold bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent">
          Den gan Dev
        </p>
        <h1 data-aos="fade-left" data-aos-delay="200" className="text-[48px] font-cabinetBold">
          Unlocking the Power of <br />
          Design in the Decentralized <br />
          Universe
        </h1>
      </div>
    </div>
  );
};

export default Unlock;
