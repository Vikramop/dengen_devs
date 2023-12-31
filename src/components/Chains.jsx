import React from 'react';
import bg from '../assets/ubg.png';
import img from '../assets/evmChains.png';

const Chains = () => {
  return (
    <div
      className=" relative font-cabinetBold bg-[#29114A] text-white flex items-center justify-center gap-[30%] h-[100vh] px-24
      max-md:flex max-md:flex-col max-md:h-auto max-md:pl-12
    max-sm:flex max-sm:flex-col max-sm:h-auto
    max-sm:px-4 max-sm:py-12
    "
    >
      <div>
        <img
          src={bg}
          alt=""
          className="absolute left-32 top-80
        lg:max-xl:w-[580px]
        max-md:w-[500px] max-md:left-8
        max-sm:w-[300px] max-sm:left-8
        "
        />
        <h1
          className="text-[64px] -top-24 relative 
        lg:max-xl:text-[52px]
        max-sm:text-[36px]
        max-md:top-0
        max-sm:top-0
        max-sm:pb-4
        "
        >
          <span
            className="text-[34px] bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent 
          lg:max-xl:leading-none 
          md:max-lg:text-[28px]
          max-sm:text-[30px]
          "
          >
            OUR CONNECTED <br />
          </span>
          EVM CHAINS
        </h1>
        <img
          src={img}
          alt=""
          className="w-[400px] relative z-50
        lg:max-xl:w-[300px]
        max-md:pb-16
        max-sm:w-[300px] max-sm:pb-12
        "
        />
      </div>
      <div className="flex flex-col gap-[70px]">
        <div>
          <p
            className="text-[64px] leading-none pb-12
          lg:max-xl:text-[52px]
          md:max-lg:text-[40px]
          max-sm:text-[36px]
          "
          >
            01 <br />{' '}
            <span
              className="relative -mb-4 text-[34px] bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent
            lg:max-xl:text-[30px]
            md:max-lg:text-[24px]
            max-sm:text-[26px]
            "
            >
              Binance Smart Chain
            </span>
          </p>
          <p
            className=" relative z-10 text-[28px] font-cabinetMedium
          lg:max-xl:text-[14px]
          md:max-lg:text-[16px]
          max-sm:text-[20px]
          "
          >
            BNB Smart Chain&apos;s EVM compatibility <br />
            makes it easy for developers to deploy <br />
            their Ethereum dApps on the chain
          </p>
        </div>
        <div>
          <p
            className="relative z-50 text-[64px] leading-none pb-12
          lg:max-xl:text-[52px]
          md:max-lg:text-[40px]
          max-sm:text-[36px]
          "
          >
            02 <br />{' '}
            <span
              className="relative z-50 -mb-4 text-[34px] bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent
            lg:max-xl:text-[30px]
            md:max-lg:text-[35px]
            max-sm:text-[26px]
            "
            >
              Solana
            </span>
          </p>
          <p
            className="relative text-[28px] font-cabinetMedium
          lg:max-xl:text-[14px]
          
          md:max-lg:text-[16px]
          max-md:pb-12
          max-sm:text-[20px]
          "
          >
            The Neon EVM functions as a smart <br />
            contract on the Solana blockchain, <br /> permitting it to access
            data on Solana <br />
            accounts
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chains;
