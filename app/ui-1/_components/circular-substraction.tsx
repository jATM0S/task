const CircularSubstraction = ({
  backgroundColor,
}: {
  backgroundColor: string;
}) => {
  return (
    <>
      {/* right side circular substraction */}
      <div
        className="absolute right-0 flex translate-x-[29px] translate-y-[-50%] items-center justify-center rounded-l-full bg-white"
        style={{
          width: "106px",
          height: "106px",
          top: "50%",
        }}
      >
        <div className="absolute top-[-22px] right-[28.6px] h-[22px] w-[28px] bg-[#ffffff]">
          <div
            className={`absolute inset-0 rounded-br-full bg-[${backgroundColor}]`}
          />
        </div>
        <div className="absolute right-[28.6px] bottom-[-22px] flex h-[22px] w-[28px] items-center justify-center bg-[#ffffff]">
          <div
            className={`absolute inset-0 rounded-tr-full bg-[${backgroundColor}]`}
          />
        </div>
      </div>

      {/* left side circular substraction */}
      <div
        className="absolute left-0 flex translate-x-[-29px] translate-y-[-50%] items-center justify-center rounded-r-full bg-white"
        style={{
          width: "106px",
          height: "106px",
          top: "50%",
        }}
      >
        <div
          className={`absolute top-[-22px] left-[29px] h-[22px] w-[28px] bg-[#ffffff]`}
        >
          <div
            className={`absolute inset-0 rounded-bl-full bg-[${backgroundColor}] `}
          />
        </div>
        <div
          className={`absolute bottom-[-22px] left-[29px] flex h-[22px] w-[28px] items-center justify-center bg-[#ffffff]`}
        >
          <div
            className={`absolute inset-0 rounded-tl-full bg-[${backgroundColor}]`}
          />
        </div>
      </div>
    </>
  );
};

export default CircularSubstraction;
