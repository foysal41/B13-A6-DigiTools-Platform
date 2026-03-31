import React from "react";

const ReusedHeader = ({ title, subtitle }) => {
  return (
    <div className="w-full">
      <div className="max-w-[1300px] mx-auto px-4">
        <h2 className="text-[#101727] md:text-[48px] font-bold text-center">
          {title}
        </h2>
        <p className="text-[#627382] text-[16px] text-center  max-w-[600px] mx-auto ">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default ReusedHeader;
