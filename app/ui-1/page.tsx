import React from "react";
import Card from "./_components/card";
import Card1 from "./_components/card1";
import Card2 from "./_components/card2";
import PageHeader from "@/components/page-header";

const Ui1Task = () => {
  return (
    <>
      <p className="font-note mt-[53px] mb-[22px] pl-[167px] text-[32px] font-medium text-[#333333]">
        Note: Hover the component to view the animation & Click the arrow icon
      </p>
      <div className="px-[113.5px]">
        <PageHeader subTitle="Your SkillShikshya Journey">
          <span className="text-[#1DA077]">Step</span> In.{" "}
          <span className="text-[#1DA077]">Skill</span> Up.{" "}
          <span className="text-[#1DA077]">Stand</span> Out. 🚀
        </PageHeader>
        <div className="grid grid-cols-2 gap-x-8 gap-y-10">
          <Card1 />
          <Card2 />
          <Card
            textAlign="right"
            textWidth={311}
            bgColor="#6C64A8"
            title="Get Mentored & Supported"
            subTitle="Step into a better learning path."
            description="
                Stuck or need feedback? SkillShikshya’s community of mentors and learners has your back with live support, interactive discussions, and expert insights. You’re never on your own."
            image={{
              src: "/images/card3.svg",
              alt: "Descriptive alt text",
              width: 307,
              height: 259,
              position: {
                top: 106,
                left: -49,
              },
            }}
          />
          <Card
            textAlign="left"
            textWidth={337}
            bgColor="#A88964"
            title="Achieve & Showcase"
            subTitle="Build your portfolio, get job-ready."
            description="
               Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture."
            image={{
              src: "/images/card4.svg",
              alt: "Descriptive alt text",
              width: 307,
              height: 259,
              position: {
                top: 53.56,
                left: 317.66,
                rotate: -4,
              },
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Ui1Task;
