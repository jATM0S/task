import React from "react";
import Card from "./_components/card";
import Card1 from "./_components/card1";

const Ui1Task = () => {
  return (
    <>
      <p className="font-note mt-[53px] mb-[22px] pl-[167px] text-[32px] font-medium text-[#333333]">
        Note: Hover the component to view the animation & Click the arrow icon
      </p>
      <div className="px-[113.5px]">
        <div className="mb-[48px] flex flex-col gap-[24px]">
          <p className="text-[24px] leading-[1] font-medium text-[#414141]">
            Your SkillShikshya Journey
          </p>

          <h1 className="font-heading text-[32px] leading-[1.2] font-bold">
            <span className="text-[#1DA077]">Step</span> In.{" "}
            <span className="text-[#1DA077]">Skill</span> Up.{" "}
            <span className="text-[#1DA077]">Stand</span> Out. 🚀
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-10">
          <Card1 />
          <Card
            textAlign="left"
            textWidth={351}
            bgColor="#5492A0"
            title="Learn by Doing"
            subTitle="Practical skills, real projects."
            description="
                Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery."
            image={{
              src: "/images/card2.svg",
              alt: "Descriptive alt text",
              width: 180.35,
              height: 367,
              position: {
                top: 14,
                left: 380,
              },
            }}
          />
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
