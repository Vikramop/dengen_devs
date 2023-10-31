import React from 'react';
import bg from '../assets/ubg.png';
import mask2 from '../assets/mask2.png';

const ContactUs = () => {
  return (
    <div
      className=" relative font-cabinetBold bg-[#0b114a] text-white flex justify-center gap-[20%] items-center py-32 h-[100vh]
    xl:max-2xl:gap-[10%]
    lg:max-xl:h-[90vh] lg:max-xl:gap-[9%]
    md:max-lg:h-auto md:max-lg:gap-[10%]
    max-sm:flex max-sm:flex-col max-sm:h-auto
    max-sm:px-4
    "
    >
      <img
        src={bg}
        alt="img"
        className="absolute left-40 w-[700px] z-[10]
      md:max-lg:w-[400px]
      max-sm:left-0 max-sm:w-[350px]
      "
      />
      <img src={mask2} alt="" className="absolute bottom-0" />
      <div
        className="relative z-[100] text-[100px] bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent
      xl:max-2xl:text-[80px]
      lg:max-xl:text-[68px]
      md:max-lg:text-[60px]
      max-sm:hidden
      "
      >
        DEGEN <br /> DEVS
      </div>
      <div className="relative z-50 flex flex-col gap-[65px]">
        <h1
          className="text-[64px]
        xl:max-2xl:text-[55px]
        lg:max-xl:text-[40px]
        md:max-lg:text-[32px]
        max-sm:text-[30px]
        "
        >
          {' '}
          MORE ABOUT <br /> DENGEN DEV
        </h1>
        <p
          className="relative z-50 uppercase text-[28px] font-cabinetMedium
        xl:max-2xl:text-[24px]
        lg:max-xl:text-[20px]
        md:max-lg:text-[16px] md:max-lg:w-[250px]
        max-sm:text-[14px] max-sm:w-[220px]
        "
        >
          we are on a mission to reshape the future of the <br />
          digital landscape. We believe in the transformative <br />
          power of Web3 technologies and the profound <br />
          impact they can have on individuals, businesses, <br />
          and communities worldwide.
        </p>
        <button
          className="mt-4 rounded-md w-[300px] border-indigo-500 border-r-2 border-l-2 border-t-2 border-b-8 z-50 py-6 px-4 bg-[#29114A] font-cabinetMedium text-[24px]
        md:max-lg:text-[18px] md:max-lg:w-[180px]
        max-sm:w-[200px] max-sm:text-[20px]

        "
        >
          CONTACT US
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
