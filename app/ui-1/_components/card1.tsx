import Card from "./card";
import CircularSubstraction from "./circular-substraction";
import Image from "next/image";
import CardButtons from "./card-buttons";

const Card1 = () => {
  return (
    <div className="group relative h-[341px]">
      <div className="absolute inset-0 rounded-[30px] opacity-0 transition-all duration-700 group-hover:opacity-100">
        <div className="absolute inset-0 flex justify-end rounded-[32px] bg-[#F45B5B]">
          <CircularSubstraction backgroundColor="#F45B5B" />
          <CardButtons />
          <div className="z-10 mt-[56px] mr-[25px]">
            <p className="font-heading max-w-[241px] text-[20px] leading-[1.2] font-bold text-white">
              Clarity unlocked—stickers, sips, and skills all in one go!
            </p>
          </div>
          <Image
            src="/images/person.png"
            alt="Descriptive alt text"
            width={352}
            height={323}
            style={{ position: "absolute", top: 18, left: 24, zIndex: 1 }}
          />
          <Image
            src="/images/person.png"
            alt="Descriptive alt text"
            width={352}
            height={323}
            style={{
              position: "absolute",
              top: 18,
              left: 35,
              filter: "brightness(0)",
            }}
          />
          <Image
            src="/images/wow.png"
            alt="Descriptive alt text"
            width={88}
            height={88}
            style={{
              position: "absolute",
              top: 24,
              left: 67,
              rotate: "-11.91deg",
            }}
          />
          <Image
            src="/images/wow.png"
            alt="Descriptive alt text"
            width={88}
            height={88}
            style={{
              position: "absolute",
              top: 193,
              left: 385,
              transform: "scaleX(-1)",
            }}
          />
        </div>
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
      </div>
    </div>
  );
};

export default Card1;
