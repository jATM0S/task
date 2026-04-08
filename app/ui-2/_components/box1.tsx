"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Box1 = ({ active }: { active: boolean }) => {
  const isFirstRender = useRef(true);
  const descriptionRef = useRef<HTMLDivElement | null>(null);
  const numberRef = useRef<HTMLParagraphElement | null>(null);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (active) {
      gsap.to(descriptionRef.current, {
        keyframes: [
          { x: -265, y: -210, rotate: -100, duration: 0.3, ease: "power1.out" },
          { x: 0, y: 0, rotate: 10, duration: 0.5, ease: "power2.inOut" },
          { x: 0, y: 0, rotate: 0, duration: 0.5, ease: "power2.inOut" },
        ],
      });
      // animate the big number: nudge left, swing right, settle
      gsap.to(numberRef.current, {
        keyframes: [
          { x: -40, duration: 0.25, ease: "power1.out" },
          { x: 20, duration: 0.5, ease: "power2.inOut" },
          { x: 0, duration: 0.5, ease: "power2.inOut" },
        ],
      });
    } else {
      gsap.to(descriptionRef.current, {
        keyframes: [
          { x: 0, y: 0, rotate: 10, duration: 0.3, ease: "power1.out" },
          {
            x: -265,
            y: -210,
            rotate: -100,
            duration: 0.5,
            ease: "power2.inOut",
          },
          {
            x: -265,
            y: -200,
            rotate: -90,
            duration: 0.5,
            ease: "power2.inOut",
          },
        ],
      });
      gsap.to(numberRef.current, {
        keyframes: [
          { x: 40, duration: 0.3, ease: "power1.out" },
          { x: -40, duration: 0.5, ease: "power2.inOut" },
          { x: -35, duration: 0.5, ease: "power2.inOut" },
        ],
      });
    }
    gsap.to([numberRef.current, descriptionRef.current], {
      color: active ? "#f9ebec" : "#c33241",
      duration: 0.6,
    });
  }, [active]);
  return (
    <>
      <div
        className={`absolute ${active ? "opacity-100" : "opacity-0"} top-[40px] left-[393px] flex gap-2 transition-opacity duration-[1s] ease-[cubic-bezier(.19,.13,.1,.26)]`}
      >
        <p className="text-[18px] font-semibold whitespace-nowrap">
          View all Courses
        </p>
        <Image
          src="/images/arrow-sm-right.svg"
          alt="Arrow"
          height={20}
          width={20}
        />
      </div>

      <div ref={numberRef}>
        <p
          className={`font-heading absolute top-[283px] left-[75px] text-center text-[150px] font-bold`}
        >
          23
        </p>
        <p className="font-heading absolute top-[275px] left-[262px] text-center text-[64px] font-bold">
          +
        </p>
      </div>

      <div
        ref={descriptionRef}
        className="absolute top-[303px] left-[299px] flex w-[218px] flex-col gap-3"
      >
        <p className="w-full text-[32px] font-bold whitespace-nowrap">
          All Courses
        </p>
        <p className={`w-full text-[18px]`}>
          courses you&apos;re powering <br />
          through right now.
        </p>
      </div>
    </>
  );
};

export default Box1;
