"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Box2 = ({ active = false }: { active: boolean }) => {
  const descriptionRef = useRef<HTMLDivElement | null>(null);
  const numberRef = useRef<HTMLParagraphElement | null>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (active) {
      gsap.to(descriptionRef.current, {
        keyframes: [
          { x: 0, y: 0, rotate: -100, duration: 0.3, ease: "power1.out" },
          { x: 265, y: 225, rotate: 10, duration: 0.5, ease: "power2.inOut" },
          { x: 265, y: 225, rotate: 0, duration: 0.5, ease: "power2.inOut" },
        ],
      });
      // animate the big number: nudge left, swing right, settle
      gsap.to(numberRef.current, {
        keyframes: [
          { x: 5, duration: 0.3, ease: "power1.out" },
          { x: 30, duration: 0.5, ease: "power2.inOut" },
          { x: 35, duration: 0.5, ease: "power2.inOut" },
        ],
      });
    } else {
      gsap.to(descriptionRef.current, {
        keyframes: [
          { x: 265, y: 210, rotate: 10, duration: 0.3, ease: "power1.out" },
          {
            x: 0,
            y: 0,
            rotate: -100,
            duration: 0.5,
            ease: "power2.inOut",
          },
          {
            x: 0,
            y: 0,
            rotate: -90,
            duration: 0.5,
            ease: "power2.inOut",
          },
        ],
      });
      gsap.to(numberRef.current, {
        keyframes: [
          { x: 20, duration: 0.3, ease: "power1.out" },
          { x: 5, duration: 0.5, ease: "power2.inOut" },
          { x: 0, duration: 0.5, ease: "power2.inOut" },
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
          className={`font-heading absolute top-[283px] left-[26px] text-center text-[150px] font-bold`}
        >
          05
        </p>
        <p className="font-heading absolute top-[275px] left-[227px] text-center text-[64px] font-bold">
          +
        </p>
      </div>

      <div
        ref={descriptionRef}
        className={`- absolute top-[85px] left-[34px] flex -rotate-z-90 ${active ? "w-[278px]" : "w-[218px]"} flex-col gap-3`}
      >
        <p className="w-full text-[32px] font-bold whitespace-nowrap">
          Upcoming{!active && <br />} Courses
        </p>
        <p className={`w-full text-[18px]`}>
          exciting new courses {!active && <br />} waiting to
          {active && <br />} boost your skills.
        </p>
      </div>
    </>
  );
};

export default Box2;
