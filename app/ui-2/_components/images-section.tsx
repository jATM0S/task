"use client";

import { useEffect, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

const images = [
  { src: "/images/react.svg", alt: "React", height: 75, width: 75 },
  { src: "/images/likes.svg", alt: "Likes", height: 75, width: 75 },
  { src: "/images/vue.svg", alt: "Vue", height: 75, width: 75 },
  {
    src: "/images/penpencil.svg",
    alt: "Pen and Pencil",
    height: 75,
    width: 75,
  },
];

const ImagesSection = ({
  activeId,
  ids,
  id,
}: {
  activeId: string;
  ids: string[];
  id: string;
}) => {
  const isFirstRender = useRef(true);
  const imgRef = useRef<HTMLDivElement | null>(null);
  const prevIdRef = useRef<string>(id);

  const whereToAnimateTo = () => {
    return getDirection(prevIdRef.current, activeId);
  };

  const whereToAnimateFrom = () => {
    return getDirection(activeId, prevIdRef.current);
  };

  const getDirection = (from: string, to: string) => {
    const fromIndex = ids.indexOf(from);
    const toIndex = ids.indexOf(to);

    if (toIndex > fromIndex) return "right";
    if (toIndex < fromIndex) return "left";
    return "same";
  };
  const clickedOffFromYourParentDiv = () => {
    return prevIdRef.current == id;
  };
  useLayoutEffect(() => {
    // on first render, just set visibility based on whether this box is active
    if (prevIdRef.current === activeId) {
      gsap.set(imgRef.current, { x: 0, opacity: 1 });
      return;
    } else {
      gsap.set(imgRef.current, { x: -300, opacity: 0 });
      return;
    }
  }, []);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      prevIdRef.current = activeId;
      return; // skip animation on mount, let the first useEffect handle it and but set the ref to not have issues when clicking other boxes
    }
    // we got two functions get direction and clicked off from your parent div. if clickedOffFromYourParentDiv is true, we need to get the direction where it was clicked off. Then animate the images to that direction. Similary if the clickedOffFromYourParentDiv is false and active element is your parent div, we need to animate the images to the center. The images should animate to the right if the direction is right, to the left if the direction is left.

    // clicked off from parent div then get the direction and animate images to that direction == animate to the direction
    // !clicked off from your parent div which (means your parent div is the active div) then get the direction of previous element == animate to the center from that direction

    console.log(id);
    // console.log(id, getDirection(activeId, prevIdRef.current));
    console.log("clicked off your parent div:", clickedOffFromYourParentDiv());
    console.log("where to animate to:", whereToAnimateTo());
    console.log("where to animate from:", whereToAnimateFrom());

    if (!imgRef.current) return;

    if (clickedOffFromYourParentDiv()) {
      //   // this box was active: now lost focus and animate out
      const direction = whereToAnimateTo();
      const xTarget =
        direction === "right" ? 700 : direction === "left" ? -700 : 0;
      const xOpposite = direction === "right" ? -20 : 20; // slight pull to opposite side
      const xOvershoot = direction === "right" ? 740 : -740; // overshoot past target

      gsap.to(imgRef.current, {
        keyframes: [
          { x: xOpposite, duration: 0.3, ease: "power1.out" }, // pull back
          { x: xOvershoot, duration: 0.5, ease: "power2.inOut" }, // overshoot
          { x: xTarget, duration: 0.5, ease: "power1.inOut" }, // settle
        ],
      });
    } else if (activeId === id) {
      //   // this box just became active: animate in from opposite direction
      const direction = whereToAnimateFrom();
      const xFrom =
        direction === "right" ? 700 : direction === "left" ? -700 : 0;
      const xOpposite = direction === "right" ? -20 : 20; // overshoot past center
      const xOvershoot = direction === "right" ? 740 : -740; // coming from far side

      gsap.fromTo(
        imgRef.current,
        { x: xFrom, opacity: 1 },
        {
          keyframes: [
            { x: xOvershoot, duration: 0.2, ease: "power1.out" }, // enter fast
            { x: xOpposite, duration: 0.4, ease: "power2.inOut" }, // overshoot center
            { x: 0, duration: 0.5, ease: "power1.inOut" }, // settle at center
          ],
        }
      );
    }
    prevIdRef.current = activeId;
  }, [activeId, getDirection]);

  return (
    <div
      ref={imgRef}
      style={{ opacity: 0 }} // start invisible to prevent images to flash, GSAP will set it correctly before paint
      className="pointer-events-none absolute top-[126px] left-[66px] z-10 flex h-[94px] w-[460px] justify-between gap-[42px]"
    >
      {images.map((src, index) => (
        <Image
          key={index}
          src={src.src}
          alt={src.alt}
          height={src.height}
          width={src.width}
        />
      ))}
    </div>
  );
};

export default ImagesSection;
