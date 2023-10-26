import React from 'react';
import img from '../assets/mlarge.png';
import bg from '../assets/ubg.png';
import mask2 from '../assets/mask2.png';

const Service1 = () => {
  return (
    <div className="relative text-white bg-[#0b114a] flex justify-between items-center px-24 font-cabinetBold pt-24 h-[120vh]">
      <div className="z-[555]">
        <p
          className="text-[64px] mb-24
        lg:max-xl:text-[52px]
        "
        >
          <span className="text-[34px] bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent">
            Build MInd Blowing
          </span>
          <br />
          🌐WEBSITES
        </p>
        <div className="flex gap-20 mb-12">
          <div>
            <p
              className="text-[64px] leading-none
            lg:max-xl:text-[52px]
            "
            >
              01 <br />{' '}
              <span className="-mb-4 text-[34px] bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent">
                WEB3 Sites
              </span>
            </p>
            <p
              className="text-[24px] font-cabinetMedium
            xl:max-2xl:text-[20px]
            lg:max-xl:text-[16px]
            "
            >
              A website is your digital home <br />
              in the Web3 world. We design <br />
              websites that are visually <br />
              stunning, highly functional, <br />
              and optimized for blockchain <br />
              integration.
            </p>
          </div>
          <div>
            <p
              className="text-[64px] leading-none
            lg:max-xl:text-[52px]
            "
            >
              {' '}
              02 <br />{' '}
              <span className="text-[34px] bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent">
                TELEGRAM Bots
              </span>
            </p>
            <p
              className="text-[24px] font-cabinetMedium
            xl:max-2xl:text-[20px]
            lg:max-xl:text-[16px]
            "
            >
              Simplify your crypto experience <br />
              with our user-friendly Telegram <br />
              Bot. Get real-time updates, <br />
              market insights, and trading <br />
              signals at your fingertips.
            </p>
          </div>
        </div>
        <div>
          <p
            className="text-[64px] leading-none 
          lg:max-xl:text-[52px]
          "
          >
            {' '}
            03 <br />{' '}
            <span className="text-[34px] bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent">
              Staking dApps
            </span>
          </p>
          <p
            className="z-[500] text-[24px] font-cabinetMedium
          xl:max-2xl:text-[20px]
          lg:max-xl:text-[16px]
          "
          >
            Harness the power of decentralized finance <br />
            (DeFi) with our Staking DApps. We design and <br />
            develop secure, user-friendly platforms that <br />
            allow your customers to stake their assets, <br />
            earn rewards, and participate in the thriving <br />
            world of blockchain staking.
          </p>
        </div>
      </div>
      <div className="z-[200]">
        <img
          src={img}
          className="relative w-[480px] z-[100]
        xl:max-2xl:w-[400px]
        lg:max-xl:w-[250px]
        "
        />
        <img src={bg} className="absolute top-64 w-[750px] right-20  " />
      </div>
      <img src={mask2} className="absolute left-0 bottom-0" />
    </div>
  );
};

export default Service1;
