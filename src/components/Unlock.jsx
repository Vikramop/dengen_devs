import React, { useEffect } from 'react';
import bg from '../assets/ubg.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Unlock = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="bg-[#29114A] text-white flex items-center justify-between h-auto py-20 px-1 md:px-20 ">
      <div data-aos="fade-right" data-aos-delay="200" className=''>
        <img
          src={bg}
          alt=""
          className="
        lg:max-xl:w-[500px]
        max-sm:w-[300px]
        "
        />
      </div>
      <div data-aos="fade-left" data-aos-delay="400" className=''>
        <p className="text-[24px] font-cabinetBold bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent">
          Dengan Dev
        </p>
        <h1
          className="text-[48px] font-cabinetBold
        lg:max-xl:text-[30px]
        md:max-lg:text-[30px] 
        max-sm:text-[18px]  max-sm:w-[250px]
        "
        >
          Unlocking the Power of <br />
          Design in the Decentralized <br />
          Universe
        </h1>
      </div>
    </div>
  );
};

export default Unlock;
