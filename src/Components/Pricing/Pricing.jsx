import React, { use } from "react";
import SectionHeader from "../ReusedCompo/SectionHeader";
import { FaCheck } from "react-icons/fa";

const Pricing = ({ pricingDataPromise }) => {
  const allPriceData = use(pricingDataPromise);
  return (
    <div className="bg-[#F9FAFC] w-full">
      <div className="max-w-[1300px] mx-auto  px-8 py-5">
        <SectionHeader
          title={"Simple, Transparent Pricing"}
          subtitle={
            "Choose the plan that fits your needs. Upgrade or downgrade anytime."
          }
        ></SectionHeader>

        <div className="gird grid-cols-1 md:grid md:grid-cols-3 gap-4">
          {allPriceData.map((priceData) => (
            <div
              className={`card  shadow-sm ${priceData.highlight ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : "bg-base-100"} `}
            >
              <span
                className={`${priceData.highlight ? "absolute -top-2 left-1/2 -translate-x-1/2 bg-orange-200 text-orange-600 text-xs px-3 py-1 rounded-full" : ""} `}
              >
                {priceData.tag}
              </span>

              <div className="card-body">
                <div className="">
                  <h2
                    className={`text-[24px] font-bold ${priceData.highlight ? "text-white" : "text-black"}`}
                  >
                    {priceData.name}
                  </h2>
                  <p
                    className={`text-[16px]  ${priceData.highlight ? "text-white/50" : "text-black"}`}
                  >
                    {priceData.description}
                  </p>

                  <p
                    className={`text-[24px] font-bold ${priceData.highlight ? "text-white" : "text-black"}`}
                  >
                    ${priceData.price}
                    <span className="text-[16px] font-normal">/Month</span>{" "}
                  </p>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                  {priceData.features.map((feature, idx) => (
                    <li key={idx}>
                      <span
                        className={`flex items-center gap-2 ${priceData.highlight ? "text-white" : "text-black"}`}
                      >
                        <FaCheck
                          className={` ${priceData.highlight ? "text-white" : "text-green-500"}`}
                        />
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <button
                    className={`btn  btn-block rounded-full ${priceData.highlight ? "text-[#811FF9]" : "btn-primary"}`}
                  >
                    {priceData.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
