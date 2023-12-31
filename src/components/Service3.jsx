import React from 'react';
import bg from '../assets/ubg.png';
import img from '../assets/circuit.png';
import mask2 from '../assets/mask2.png';

const Service3 = () => {
  return (
    <div
      className="relative bg-[#0b114a] text-white flex items-center justify-between h-[70vh] px-24 
    xl:max-2xl:px-16
    md:max-lg:h-[60vh]
    max-sm:px-8
    "
    >
      <div>
        <img
          src={bg}
          alt="img"
          className="absolute top-40 z-50
           lg:max-xl:w-[700px]
           md:max-lg:w-[600px]
           max-md:
           max-sm:w-[300px]
           "
        />
        <img
          src={img}
          className="relative w-[550px] z-[100]
        xl:max-2xl:w-[400px]
        lg:max-xl:w-[300px]
        md:max-lg:w-[250px]
        max-sm:hidden
        "
        />
      </div>
      <div className="z-[100]">
        <p
          className="text-[24px] font-cabinetBold bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent
        max-sm:text-[20px]
        "
        >
          We Help in Carrying Out
        </p>
        <h1
          className="text-[64px] font-cabinetBold leading-none mb-12
        xl:max-2xl:text-[50px]
        lg:max-xl:text-[36px]
        md:max-lg:text-[32px]
        max-sm:text-[30px]
        "
        >
          Technical <br />
          Consultancy
        </h1>
        <p
          className="text-[24px] font-cabinetMedium w-[689px]
        xl:max-2xl:text-[20px] xl:max-2xl:w-[500px]
        lg:max-xl:text-[16px] lg:max-xl:w-[350px]
        md:max-lg:text-[14px] md:max-lg:w-[250px]
        max-sm:text-[14px] max-sm:w-[300px]
        "
        >
          At Degan dev, we specialize in providing top-tier technical consulting
          services to businesses of all sizes and industries. With a team of
          experienced experts and a proven track record of success, we&apos;re
          your trusted partner for solving complex technical challenges and
          unlocking new opportunities.
        </p>
      </div>
      <img src={mask2} className="absolute left-0 bottom-0" />
    </div>
  );
};

export default Service3;
