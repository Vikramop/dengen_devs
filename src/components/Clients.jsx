import React from 'react';
import c1 from '../assets/client1.png';
import c2 from '../assets/client2.png';
import c3 from '../assets/client3.png';
import c4 from '../assets/client4.png';

const Clients = () => {
  return (
    <div className="text-white bg-[#0b114a] pb-12 max-sm:h-auto">
      <h1
        className=" pl-12 py-12 font-cabinetBold text-[64px] bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent
      max-sm:text-[40px]
      "
      >
        OUR CLIENTS
      </h1>
      <div
        className="flex justify-between px-12
      md:max-lg:flex-col md:max-lg:items-center md:max-lg:gap-[20px]
      max-sm:flex max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-[50px]
      max-sm:gap-[20px] 
      "
      >
        <img
          src={c1}
          alt="img"
          className="w-[400px] h-[150px]
        xl:max-2xl:w-[300px] xl:max-2xl:h-[100px]
        lg:max-xl:w-[250px] lg:max-xl:h-[70px]
        max-sm:w-[250px] max-sm:h-[90px]
        "
        />
        <img
          src={c2}
          alt="img"
          className="w-[450px] h-[180px]
        xl:max-2xl:w-[300px] xl:max-2xl:h-[120px]
        lg:max-xl:w-[250px] lg:max-xl:h-[90px]
        max-sm:w-[250px] max-sm:h-[90px]
        "
        />
        <img
          src={c3}
          alt="img"
          className="w-[150px] h-[150px]
        xl:max-2xl:w-[100px] xl:max-2xl:h-[100px]
        lg:max-xl:w-[80px]  lg:max-xl:h-[80px]
        max-sm:w-[100px] max-sm:h-[110px]
        "
        />
        <img
          src={c4}
          alt="img"
          className="w-[350px] h-[150px]
        xl:max-2xl:w-[250px] xl:max-2xl:h-[100px]
        lg:max-xl:w-[200px] lg:max-xl:h-[80px]
        max-sm:w-[250px] max-sm:h-[120px]
        "
        />
      </div>
    </div>
  );
};

export default Clients;
