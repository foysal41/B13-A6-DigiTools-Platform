import React from "react";

const Count = () => {
  return (
    <div className=" max-w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
      <div className="max-w-[1300px]  mx-auto  px-8 py-5">
        {/* Count Container */}
        <div className="flex justify-between items-center">
          {/* First Count */}
          <div>
            <h3 className="text-[#ffffff] text-[20px] md:text-[60px] font-bold">
              50K
            </h3>
            <p className="text-[#ffffff] text-center">Active Users</p>
          </div>

          {/* Second Count */}
          <div>
            <h3 className="text-[#ffffff] text-[20px] md:text-[60px]  font-bold">
              200+
            </h3>
            <p className="text-[#ffffff]  text-center">Premium Tools</p>
          </div>

          {/* Third Count */}
          <div>
            <h3 className="text-[#ffffff] text-[20px] md:text-[60px]  font-bold">
              4.9
            </h3>
            <p className="text-[#ffffff]  text-center">Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Count;
