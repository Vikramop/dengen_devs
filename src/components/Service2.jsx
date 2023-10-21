import React from 'react';
import img from '../assets/Llarge.png';
import bg from '../assets/ubg.png';
import mask2 from '../assets/mask2.png';

const Service2 = () => {
  return (
    <div className="relative text-white bg-[#0b114a] flex justify-between items-center px-24 font-cabinetBold pt-24 h-[120vh]">
      <div className="z-[555]">
        <p className="text-[64px] mb-24">
          <span className="text-[34px] bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent">
            We Design Cutting Edge
          </span>
          <br />
          🖌️UI/UX DESIGN/🎨GRAPHICS
        </p>
        <div className=" w-[35vw] flex flex-col gap-20 mb-12">
          <div>
            <p className="text-[24px] font-cabinetMedium">
              We understand that exceptional user experiences are the heart of
              every digital product. Our UI/UX experts work tirelessly to ensure
              your Web3 project is not only functional but a joy to interact
              with
            </p>
          </div>
          <div>
            <p className="text-[24px] font-cabinetMedium">
              Our creative wizards transform ideas into captivating visuals.
              Whether it&apos;s eye-catching NFT art, stunning brand logos, or
              engaging social media graphics, we craft digital art that speaks
              volumes.
            </p>
          </div>

          <button className="mt-4 rounded-md w-[300px] border-indigo-500 border-r-2 border-l-2 border-t-2 border-b-8 z-50 py-6 px-4 bg-[#29114A] font-cabinetMedium text-[24px]">
            VIEW PROJECTS
          </button>
        </div>
      </div>
      <div className="z-[200]">
        <img src={img} className="relative w-[680px] z-50 " />
        <img
          src={bg}
          className="absolute bottom-64 w-[950px]  right-2 top-30"
        />
      </div>
      <img src={mask2} className="absolute left-0 bottom-0" />
    </div>
  );
};

export default Service2;