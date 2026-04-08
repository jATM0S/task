"use client";
import Image from "next/image";

type CardButtonsProps = {
  onNextClick?: () => void;
  onPrevClick?: () => void;
};

const CardButtons = ({ onNextClick, onPrevClick }: CardButtonsProps) => {
  return (
    <>
      <button
        className="absolute top-[50%] right-[2px] z-10 flex h-[62px] w-[62px] -translate-y-[50%] items-center justify-center rounded-full bg-white"
        style={{
          boxShadow: `
      inset 0px 6px 15px -2px #10182814,
      0px 6px 15px -2px #10182814,
      0px 4px 4px 0px #00000040
    `,
        }}
        type="button"
        onClick={() => {
          onNextClick?.();
        }}
      >
        <Image src="/images/Icon.svg" alt="Icon" width={24} height={24} />
      </button>
      <button
        className="absolute top-[50%] left-[2px] z-10 flex h-[62px] w-[62px] -translate-y-[50%] rotate-y-180 items-center justify-center rounded-full bg-white"
        style={{
          boxShadow: `
      inset 0px 6px 15px -2px #10182814,
      0px 6px 15px -2px #10182814,
      0px 4px 4px 0px #00000040
    `,
        }}
        type="button"
        onClick={() => {
          onPrevClick?.();
        }}
      >
        <Image src="/images/Icon.svg" alt="Icon" width={24} height={24} />
      </button>
    </>
  );
};

export default CardButtons;
