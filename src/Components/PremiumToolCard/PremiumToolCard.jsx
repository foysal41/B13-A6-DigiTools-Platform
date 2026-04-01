import React, { use, useState } from "react";
import SectionHeader from "../ReusedCompo/SectionHeader";
import { FaCheck } from "react-icons/fa";

const PremiumToolCard = ({ productDataPromise, cart, setCart }) => {
  const [activeTab, setActiveTab] = useState("products");

  const productData = use(productDataPromise);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleDelete = (itemToDelete) => {
    const filteredCart = cart.filter((item) => item.id !== itemToDelete.id);

    setCart(filteredCart);
  };

  const handleCheckout = () => {
    setCart([]);
  };

  return (
    <div className="w-full">
      <div className="max-w-[1300px] mx-auto px-8py-20">
        <SectionHeader
          title={"Premium Digital Tools"}
          subtitle={
            "Choose from our curated collection of premium digital products designed to boost your productivity and creativity. "
          }
        ></SectionHeader>
        {/* Product and cart toggle btn */}
        <div className="bg-gray-100 p-2  rounded-full flex  w-fit mx-auto gap-2 my-4">
          <button
            onClick={() => setActiveTab("products")}
            className={`${activeTab === "products" ? "px-6 py-2  rounded-full  text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] cursor-pointer " : "px-6 py-2  rounded-full  text-gray-700 cursor-pointer"}`}
          >
            Products
          </button>

          <button
            onClick={() => setActiveTab("cart")}
            className={`${activeTab === "cart" ? "px-6 py-2  rounded-full  text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] cursor-pointer " : "px-6 py-2  rounded-full  text-gray-700 cursor-pointer"}`}
          >
            Cart ({cart.length})
          </button>
        </div>
        {/* Product card */}

        {activeTab === "products" && (
          <div className=" grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3  px-8  gap-4">
            {productData.map((product) => (
              <div key={product.id} className="card  bg-base-100 shadow-sm">
                <div className="card-body">
                  <div className="flex justify-end">
                    <span
                      className={`badge flex ${product.tag === "Popular" ? "bg-[#F3E8FF] text-[#9710F8] " : product.tag === "New" ? "bg-[#F3E8FF] text-[#00A53E]" : "bg-[#FFEDD4] text-[#F24800]"}`}
                    >
                      {product.tag}
                    </span>
                  </div>

                  <img className="h-8 w-8" src={product.icon} alt="" />
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
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="btn btn-primary btn-block rounded-full"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "cart" && (
          <div className=" border border-[#F2F2F2] p-8 rounded-lg px-8">
            <h3 className="text-2xl font-bold">Your Cart</h3>

            {cart.length === 0 ? (
              <p className="text-center">No Cart Here</p>
            ) : (
              <div>
                {cart.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between align-items-center bg-[#F9FAFC] p-6 rounded-lg mb-4"
                  >
                    <div className="flex gap-4">
                      <div>
                        <img src={item.icon} alt={item.name} />
                      </div>
                      <div>
                        <h4>{item.name} </h4>
                        <p>${item.price}</p>
                      </div>
                    </div>
                    <div
                      onClick={() => handleDelete(item)}
                      className="text-red-500"
                    >
                      Delete
                    </div>
                  </div>
                ))}

                <div className="flex justify-between p-8 ">
                  <h4>Total</h4>
                  <h4 className="font-bold">
                    ${cart.reduce((total, item) => total + item.price, 0)}
                  </h4>
                </div>

                <button
                  onClick={handleCheckout}
                  className="btn btn-primary btn-block rounded-full"
                >
                  process to checkout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PremiumToolCard;
