import React from "react";

const PageHeader = ({
  subTitle,
  children,
}: {
  subTitle: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="mb-[48px] flex flex-col gap-[24px]">
      <p className="text-[24px] leading-[1] font-medium text-[#414141]">
        {subTitle}
      </p>

      <h1 className="font-heading text-[32px] leading-[1.2] font-bold">
        {children}
      </h1>
    </div>
  );
};

export default PageHeader;
