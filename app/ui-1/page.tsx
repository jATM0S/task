import React from "react";

const Ui1Task = () => {
  return (
    <>
      <p className="font-note mt-[53px] mb-[22px] pl-[167px] text-[32px] font-medium text-[#333333]">
        Note: Hover the component to view the animation & Click the arrow icon
      </p>
      <div className="px-[113.5px]">
        <div className="mb-[48px] flex flex-col gap-[24px]">
          <p className="text-[24px] font-medium text-[#414141]">
            Your SkillShikshya Journey
          </p>

          <h1 className="font-heading text-[32px] leading-[1.2] font-bold">
            <span className="text-[#1DA077]">Step</span> In.{" "}
            <span className="text-[#1DA077]">Skill</span> Up.{" "}
            <span className="text-[#1DA077]">Stand</span> Out. 🚀
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-8"></div>
      </div>
    </>
  );
};

export default Ui1Task;
