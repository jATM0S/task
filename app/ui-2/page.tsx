"use client";
import PageHeader from "@/components/page-header";
import { useState, useRef } from "react";
import gsap from "gsap";

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

        <div className="flex h-[461px] items-start gap-8 bg-red-400">
          {ids.map((id) => (
            <div
              key={id}
              ref={(el) => {
                boxRefs.current[id] = el;
              }}
              onClick={() => handleClick(id)}
              style={{ width: id === "one" ? 592 : 280 }}
              className={`h-full cursor-pointer rounded-[32px] bg-red-100 p-6`}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Ui2Task;
