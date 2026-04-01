import React from "react";

const CTA = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] mt-25">
      <div className="max-w-[1300px] py-15 mx-auto px-8">
        <h2 className="text-center text-white text-[20px] md:text-[40px] font-bold">
          Ready to Transform Your Workflow?
        </h2>
        <p className="text-center text-white/50 text-[16px]">
          Join thousands of professionals who are already using Digitools to
          work smarter.Start your free trial today.
        </p>

        {/* duel button */}
        <div className="flex flex-col  lg:flex-row justify-center gap-4 mt-8">
          <button className="btn bg-white text-[16px] text-[#4F39F6] rounded-full">
            Explore Products
          </button>
          <button className="btn btn-outline text-white  text-[16px] rounded-full">
            View Pricing
          </button>
        </div>

        <p className="text-center text-white/50 text-[16px]">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default CTA;
