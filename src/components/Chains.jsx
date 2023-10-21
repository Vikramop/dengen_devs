import React from 'react';
import bg from '../assets/ubg.png';
import img from '../assets/evmChains.png';

const Chains = () => {
  return (
    <div className=" relative font-cabinetBold bg-[#29114A] text-white flex items-center justify-center gap-[30%] h-[100vh] px-24">
      <div>
        <img src={bg} alt="" className="absolute left-32 top-80" />
        <h1 className="text-[64px] -top-12 relative leading-none">
          <span className="text-[34px] bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent">
            OUR CONNECTED <br />
          </span>
          EVM CHAINS
        </h1>
        <img src={img} alt="" className="w-[400px] relative z-50" />
      </div>
      <div className="flex flex-col gap-[70px]">
        <div>
          <p className="text-[64px] leading-none">
            01 <br />{' '}
            <span className="-mb-4 text-[34px] bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent">
              Binance Smart Chain
            </span>
          </p>
          <p className="text-[28px] font-cabinetMedium">
            BNB Smart Chain&apos;s EVM compatibility <br />
            makes it easy for developers to deploy <br />
            their Ethereum dApps on the chain
          </p>
        </div>
        <div>
          <p className="text-[64px] leading-none">
            02 <br />{' '}
            <span className="-mb-4 text-[34px] bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent">
              Solana
            </span>
          </p>
          <p className="text-[28px] font-cabinetMedium">
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
