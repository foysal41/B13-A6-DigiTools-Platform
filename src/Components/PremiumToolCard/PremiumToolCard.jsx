import React, { use } from "react";
import SectionHeader from "../ReusedCompo/SectionHeader";
import { FaCheck } from "react-icons/fa";

const PremiumToolCard = ({ productDataPromise }) => {
  const productData = use(productDataPromise);

  return (
    <div className="w-full">
      <div className="max-w-[1300px] mx-auto px-4 py-20">
        <SectionHeader
          title={"Premium Digital Tools"}
          subtitle={
            "Choose from our curated collection of premium digital products designed to boost your productivity and creativity. "
          }
        ></SectionHeader>
        {/* Product and cart toggle btn */}
        <div className="bg-gray-100 p-2  rounded-full flex  w-fit mx-auto gap-2 my-4">
          <button className="px-6 py-2  rounded-full  text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] cursor-pointer">
            Products
          </button>

          <button className="px-6 py-2  rounded-full  text-gray-700 cursor-pointer">
            Cart (2)
          </button>
        </div>
        {/* Product card */}

        <div className=" grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3   gap-4">
          {productData.map((product) => (
            <div className="card  bg-base-100 shadow-sm">
              <div className="card-body">
                <div className="flex justify-end">
                  <span
                    className={`badge flex ${product.tag === "Popular" ? "bg-[#F3E8FF] text-[#9710F8] " : product.tag === "New" ? "bg-[#F3E8FF] text-[#00A53E]" : "bg-[#FFEDD4] text-[#F24800]"}`}
                  >
                    {product.tag}
                  </span>
                </div>

                <div className="flex justify-between">
                  <h2 className="text-2xl font-bold">{product.name}</h2>
                  <span className="text-xl">${product.price}/mo</span>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                  {product.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="flex items-center gap-2">
                        <FaCheck className="text-green-500" />
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <button className="btn btn-primary btn-block rounded-full">
                    Buy Now
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

export default PremiumToolCard;
