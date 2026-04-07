import React from "react";
import Card from "./card";
import CircularSubstraction from "./circular-substraction";

const Card1 = () => {
  return (
    <div className="group relative h-[341px]">
      {/* <div className="absolute inset-0 rounded-[30px] bg-[#F45B5B] opacity-0 transition-all duration-700 group-hover:opacity-100">
        
        adsfads
      </div>

      <div className="z-10 transition-all duration-700 group-hover:-translate-x-full group-hover:opacity-0">
        <Card
          textAlign="right"
          textWidth={351}
          bgColor="#F45B5B"
          title="Start with Clarity"
          subTitle="Step into a better learning path."
          description="Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth."
          image={{
            src: "/images/card1.svg",
            alt: "Descriptive alt text",
            width: 257.38,
            height: 338.59,
            position: { top: 22, left: -49 },
          }}
        />
      </div> */}
      <div
        className="absolute inset-0 flex justify-end rounded-[32px] bg-[#F45B5B]"
        // style={{
        //   clipPath:
        //     "path(0 0, 100% 0, 100% 33%, 86% 50%, 100% 66%, 100% 100%, 0% 100%, 0% 66%, 14% 50%, 0% 33%)",
        // }}
      >
        <CircularSubstraction />

        <div className="z-10 mt-[56px] mr-[25px]">
          <p className="font-heading max-w-[241px] text-[20px] font-bold text-white">
            Clarity unlocked—stickers, sips, and skills all in one go!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card1;
