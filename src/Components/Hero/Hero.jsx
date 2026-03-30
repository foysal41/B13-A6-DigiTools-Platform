import React from "react";
import { GoDotFill } from "react-icons/go";
import { CiPlay1 } from "react-icons/ci";
import banner from "../../assets/banner.png";

const Hero = () => {
  return (
    <div className="w-full ">
      <div className=" max-w-[1300px] mx-auto py-20 px-4">
        <div className="flex flex-col md:flex-col lg:flex-row justify-between items-center gap-4">
          {/* Left side of hero */}
          <div>
            <span className="bg-[#E1E7FF] p-2 inline-flex items-center rounded rounded-full">
              <GoDotFill className="text-[#622FF7]" />{" "}
              <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                New: AI-Powered Tools Available
              </span>
            </span>

            <h1 className="text-[30px] md:text-[60px] font-bold ">
              Supercharge Your <br /> Digital Workflow
            </h1>

            <p className="text-[#627382] text-[18px] max-w-[600px]">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today. Explore Products
            </p>

            {/* duel button */}
            <div className="flex flex-col  lg:flex-row gap-4 mt-[32px]">
              <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-[16px] text-[#ffffff] rounded rounded-full">
                Explore Products
              </button>
              <button className="btn btn-outline btn-primary rounded rounded-full">
                <CiPlay1 /> Watch Demo
              </button>
            </div>
          </div>
          {/* Right Side of hero */}
          <div>
            <img
              className="w-full max-w-[400px] md:max-w-[500px] h-auto object-contain "
              src={banner}
              alt="banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
