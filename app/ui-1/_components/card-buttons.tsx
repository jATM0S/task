import Image from "next/image";
import React from "react";

const CardButtons = () => {
  return (
    <>
      <button
        className="absolute top-[50%] right-0 z-10 flex h-[62px] w-[62px] -translate-y-[50%] items-center justify-center rounded-full bg-white"
        style={{
          boxShadow: `
      inset 0px 6px 15px -2px #10182814,
      0px 6px 15px -2px #10182814,
      0px 4px 4px 0px #00000040
    `,
        }}
      >
        <Image src="/images/Icon.svg" alt="Icon" width={24} height={24} />
      </button>
      <button
        className="absolute top-[50%] left-0 flex h-[62px] w-[62px] -translate-y-[50%] rotate-y-180 items-center justify-center rounded-full bg-white"
        style={{
          boxShadow: `
      inset 0px 6px 15px -2px #10182814,
      0px 6px 15px -2px #10182814,
      0px 4px 4px 0px #00000040
    `,
        }}
      >
        <Image src="/images/Icon.svg" alt="Icon" width={24} height={24} />
      </button>
    </>
  );
};

export default CardButtons;
