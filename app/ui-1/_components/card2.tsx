"use client";
import { useEffect, useState } from "react";
import Card2default from "./card2default";
import CircularSubstraction from "./circular-substraction";
import CardButtons from "./card-buttons";
import Image from "next/image";

const Card2 = () => {
  const [secondCard, setSecondCard] = useState(false);
  useEffect(() => {
    console.log(secondCard);
  }, [secondCard]);
  return (
    <div className="group relative h-[341px]">
      {secondCard ? (
        <div className="absolute inset-0 flex overflow-hidden rounded-[32px] bg-[#5492A0]">
          <CircularSubstraction backgroundColor="#5492A0" />
          <CardButtons onPrevClick={() => setSecondCard(false)} />
          <p className="font-heading z-10 mx-auto mt-[41px] text-center text-[20px] leading-[1.2] font-bold text-white">
            Laptops, lessons, and a whole lot of <br /> growth!
          </p>
          <Image
            src="/images/group.png"
            alt="Descriptive alt text"
            width={572}
            height={329}
            className="absolute top-[24px] left-[10px]"
          />
        </div>
      ) : (
        <Card2default onNextClick={() => setSecondCard(true)} />
      )}
    </div>
  );
};

export default Card2;
