import CircularSubstraction from "./circular-substraction";
import Image from "next/image";
import Card from "./card";
import CardButtons from "./card-buttons";

type Card2defaultProps = {
  onNextClick: () => void;
};

const Card2default = ({ onNextClick }: Card2defaultProps) => {
  return (
    <>
      {" "}
      <div className="absolute inset-0 rounded-[30px] bg-[#F45B5B] opacity-0 transition-all duration-700 group-hover:opacity-100">
        {/* <div className="absolute inset-0 rounded-[30px]"> */}
        <div className="absolute inset-0 flex overflow-hidden rounded-[32px] bg-[#5492A0]">
          <CircularSubstraction backgroundColor="#5492A0" />
          {/* button was extracted due to stacking context issue the image would be on top of the button */}
          <CardButtons onNextClick={onNextClick} />

          <p className="font-heading z-10 mt-[36px] ml-[80px] max-w-[241px] text-[20px] leading-[1.2] font-bold text-white">
            Focused faces—learning mode: ON!{" "}
          </p>
          <Image
            src="/images/focused.png"
            alt="Descriptive alt text"
            fill
            className="object-cover object-bottom"
            style={{ position: "absolute", top: 34, left: 44, zIndex: 0 }}
          />
        </div>
      </div>
      <div className="pointer-events-none transition-all duration-700 group-hover:-translate-x-full group-hover:opacity-0">
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
      </div>
    </>
  );
};

export default Card2default;
