import Image from "next/image";
type cardProps = {
  textAlign: "left" | "right";
  textWidth: number;
  bgColor: string;
  title: string;
  subTitle: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    position: {
      top: number;
      left: number;
      rotate?: number;
    };
  };
};
const Card = ({
  textAlign,
  textWidth,
  bgColor,
  title,
  subTitle,
  description,
  image,
}: cardProps) => {
  const left = textAlign === "left";
  return (
    <div
      className={`relative flex h-[341px] w-full ${left ? "justify-start" : "justify-end"} rounded-[32px] px-[35px] text-[#FAFAFA]`}
      style={{ backgroundColor: bgColor }}
    >
      <div className={`my-[58px] ${left ? "text-left" : "text-right"}`}>
        <div className="mb-[32px] flex flex-col gap-[10px]">
          <p className="font-heading text-[32px] leading-[1.2] font-bold">
            {title}
          </p>
          <p className={`text-[24px] leading-none font-medium`}>{subTitle}</p>
        </div>
        <div
          className={`flex w-full ${left ? "justify-start" : "justify-end"}`}
        >
          <p
            className={`text-[18px] leading-[1.4]`}
            style={{
              maxWidth: `${textWidth}px`,
            }}
          >
            {description}
          </p>
        </div>
      </div>
      <Image
        className={`float-animation absolute z-10`}
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading="eager"
        style={{
          position: "absolute",
          top: `${image.position.top}px`,
          left: `${image.position.left}px`,
          rotate: `${image.position.rotate}deg`,
          height: "auto",
        }}
      />
    </div>
  );
};

export default Card;
