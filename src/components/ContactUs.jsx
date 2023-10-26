import React from 'react';
import bg from '../assets/ubg.png';
import mask2 from '../assets/mask2.png';

const ContactUs = () => {
  return (
    <div
      className=" relative font-cabinetBold bg-[#0b114a] text-white flex justify-center gap-[20%] items-center py-32 h-[100vh]
    xl:max-2xl:gap-[10%]
    lg:max-xl:h-[90vh] lg:max-xl:gap-[9%]
    "
    >
      <img src={bg} alt="img" className="absolute left-40 w-[700px] z-[10]" />
      <img src={mask2} alt="" className="absolute bottom-0" />
      <div
        className="relative z-[100] text-[100px] bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent
      xl:max-2xl:text-[80px]
      lg:max-xl:text-[68px]
      "
      >
        DEGEN <br /> DEVS
      </div>
      <div className="relative z-50 flex flex-col gap-[65px]">
        <h1
          className="text-[64px]
        xl:max-2xl:text-[55px]
        lg:max-xl:text-[40px]
        "
        >
          {' '}
          MORE ABOUT <br /> DENGEN DEV
        </h1>
        <p
          className="relative z-50 uppercase text-[28px] font-cabinetMedium
        xl:max-2xl:text-[24px]
        lg:max-xl:text-[20px]
        "
        >
          we are on a mission to reshape the future of the <br />
          digital landscape. We believe in the transformative <br />
          power of Web3 technologies and the profound <br />
          impact they can have on individuals, businesses, <br />
          and communities worldwide.
        </p>
        <button className="mt-4 rounded-md w-[300px] border-indigo-500 border-r-2 border-l-2 border-t-2 border-b-8 z-50 py-6 px-4 bg-[#29114A] font-cabinetMedium text-[24px]">
          CONTACT US
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
