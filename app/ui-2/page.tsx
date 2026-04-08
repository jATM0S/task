"use client";
import PageHeader from "@/components/page-header";
import { useState, useRef } from "react";
import gsap from "gsap";
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
const Ui2Task = () => {
  const [activeId, setActiveId] = useState<string>("one");
  const boxRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const animating = useRef(false);

  const handleClick = (id: string) => {
    if (id === activeId || animating.current) return;

    const prevId = activeId;
    animating.current = true;
    setActiveId(id);

    gsap.to(boxRefs.current[prevId], {
      keyframes: [
        { width: 620, duration: 0.3, ease: "power1.out" },
        { width: 260, duration: 0.5, ease: "power2.inOut" },
        { width: 280, duration: 0.5, ease: "power2.inOut" },
      ],
    });

    gsap.to(boxRefs.current[id], {
      keyframes: [
        { width: 260, duration: 0.3, ease: "power1.out" },
        { width: 612, duration: 0.5, ease: "power2.inOut" },
        { width: 592, duration: 0.5, ease: "power2.inOut" },
      ],
      onComplete: () => {
        animating.current = false;
      },
    });
  };

  const ids = ["one", "two", "three"];

  return (
    <>
      <p className="mt-[53px] mb-[22px] text-center text-[32px] font-medium text-[#333333]">
        Note: Click the cards to view the animation{" "}
      </p>
      <div className="px-[112px]">
        <PageHeader subTitle="Explore our classes and master trending skills!">
          Dive Into
          <span className="text-[#1DA077]"> What’s Hot Right Now! 🔥</span>
        </PageHeader>

        <div className="flex h-[461px] items-start gap-8 bg-black">
          {ids.map((id) => (
            <div
              key={id}
              ref={(el) => {
                boxRefs.current[id] = el;
              }}
              onClick={() => handleClick(id)}
              style={{ width: id === "one" ? 592 : 280 }}
              className={`text-secondary bg-primary relative h-full cursor-pointer rounded-[32px] px-6`}
            >
              <div className="absolute top-[40px] left-[393px] flex gap-2">
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
              <div className="absolute top-[126px] left-[66px] flex h-[94px] w-[460px] justify-between gap-[42px]">
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

              <p className="font-heading absolute top-[283px] left-[75px] text-center text-[150px] font-bold">
                23
              </p>
              <p className="font-heading absolute top-[275px] left-[262px] text-center text-[64px] font-bold">
                +
              </p>
              <div className="absolute top-[303px] left-[299px] flex flex-col gap-3">
                <p className="text-[32px] font-bold">All Courses</p>
                <p className="max-w-[218px] text-[18px]">
                  courses you&apos;re powering through right now.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Ui2Task;
