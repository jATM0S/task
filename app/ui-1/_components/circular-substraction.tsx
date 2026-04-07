import React from "react";

const CircularSubstraction = () => {
  return (
    <>
      <div
        className="absolute left-0 rounded-l-full bg-white"
        style={{
          width: "106px",
          height: "106px",
          top: "50%",
          translate: "-25% -50%",
          rotate: "180deg",
        }}
      >
        <div className="absolute -top-[25px] right-[26px] h-[25px] w-[25px] bg-[#ffffff]">
          <div className="absolute inset-0 rounded-br-full bg-[#F45B5B]" />
        </div>
        <div className="absolute right-[26px] -bottom-[25px] h-[25px] w-[25px] bg-[#ffffff]">
          <div className="absolute inset-0 rounded-tr-full bg-[#F45B5B]" />
        </div>
      </div>
      <div
        className="absolute right-0 rounded-l-full bg-white"
        style={{
          width: "106px",
          height: "106px",
          top: "50%",
          translate: "25% -50%",
        }}
      >
        <div className="absolute -top-[25px] right-[26px] h-[25px] w-[25px] bg-[#ffffff]">
          <div className="absolute inset-0 rounded-br-full bg-[#F45B5B]" />
        </div>
        <div className="absolute right-[26px] -bottom-[25px] h-[25px] w-[25px] bg-[#ffffff]">
          <div className="absolute inset-0 rounded-tr-full bg-[#F45B5B]" />
        </div>
      </div>
    </>
  );
};

export default CircularSubstraction;
