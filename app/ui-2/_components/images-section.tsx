"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

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

  useEffect(() => {
    // we got two functions get direction and clicked off from your parent div. if clickedOffFromYourParentDiv is true, we need to get the direction where it was clicked off. Then animate the images to that direction. Similary if the clickedOffFromYourParentDiv is false and active element is your parent div, we need to animate the images to the center. The images should animate to the right if the direction is right, to the left if the direction is left.

    // clicked off from parent div then get the direction and animate images to that direction == animate to the direction
    // !clicked off from your parent div which (means your parent div is the active div) then get the direction of previous element == animate to the center from that direction

    console.log(id);
    // console.log(id, getDirection(activeId, prevIdRef.current));
    console.log("clicked off your parent div:", clickedOffFromYourParentDiv());
    console.log("where to animate to:", whereToAnimateTo());
    console.log("where to animate from:", whereToAnimateFrom());
    prevIdRef.current = activeId;
  }, [activeId, getDirection]);

  return (
    <div
      ref={imgRef}
      className="absolute top-[126px] left-[66px] z-10 flex h-[94px] w-[460px] justify-between gap-[42px]"
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
