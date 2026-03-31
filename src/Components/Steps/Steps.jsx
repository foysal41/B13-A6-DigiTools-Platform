import React from "react";
import userIcon from "../../assets/user.png";
import rocket from "../../assets/rocket.png";
import box from "../../assets/box.png";
import SectionHeader from "../ReusedCompo/SectionHeader";

const Steps = () => {
  return (
    <div className="bg-[#F9FAFC] w-full">
      <div className="max-w-[1300px] mx-auto  px-4 py-5">
        <SectionHeader
          title={"Get Started in 3 Steps"}
          subtitle={"Start using premium digital tools in minutes, not hours. "}
        ></SectionHeader>

        <div className="flex flex-col lg:flex-row gap-6 ">
          <div className="card bg-base-100  shadow-sm p-4">
            <div className="flex justify-end">
              <span className="bg-linear-to-r from-[#622FF7] to-[#9116FA] h-8 w-8 rounded-full p-1 text-center text-white">
                01
              </span>
            </div>
            <figure className="px-10 pt-10 bg-[#]">
              <img src={userIcon} alt="user" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title"> Create Account </h2>
              <p>
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>

          <div className="card bg-base-100  shadow-sm p-4">
            <div className="flex justify-end">
              <span className="bg-linear-to-r from-[#622FF7] to-[#9116FA] h-8 w-8 rounded-full p-1 text-center text-white">
                02
              </span>
            </div>
            <figure className="px-10 pt-10 bg-[#]">
              <img src={box} alt="conainer" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title"> Choose Products </h2>
              <p>
                Browse our catalog and select the tools that fit your needs.
              </p>
            </div>
          </div>

          <div className="card bg-base-100    shadow-sm p-4">
            <div className="flex justify-end">
              <span className="bg-linear-to-r from-[#622FF7] to-[#9116FA] h-8 w-8 rounded-full p-1 text-center text-white">
                03
              </span>
            </div>
            <figure className="px-10 pt-10 bg-[#]">
              <img src={rocket} alt="rocket" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title"> Start Creating </h2>
              <p>Download and start using your premium tools immediately.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
