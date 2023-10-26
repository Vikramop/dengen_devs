import React from 'react';
import bg from '../assets/ubg.png';

const Unlock = () => {
  return (
    <div className="bg-[#29114A] text-white flex items-center justify-between h-[60vh] px-24">
      <div>
        <img
          src={bg}
          alt=""
          className="
        lg:max-xl:w-[500px]
        "
        />
      </div>
      <div>
        <p className="text-[24px] font-cabinetBold bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent">
          Den gan Dev
        </p>
        <h1
          className="text-[48px] font-cabinetBold
        lg:max-xl:text-[30px]
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
