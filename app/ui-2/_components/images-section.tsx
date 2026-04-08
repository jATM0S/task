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

const ImagesSection = ({ id, ids }: { id: string; ids: string[] }) => {
  const imgRef = useRef<HTMLDivElement | null>(null);
  const prevIdRef = useRef<string>(id);

  const getDirection = (from: string, to: string) => {
    const fromIndex = ids.indexOf(from);
    prevIdRef.current = id;
    const toIndex = ids.indexOf(to);

    if (toIndex > fromIndex) return "right";
    if (toIndex < fromIndex) return "left";
    return "same";
  };

  useEffect(() => {
    console.log(getDirection(id, prevIdRef.current));
  }, [id, getDirection]);

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
