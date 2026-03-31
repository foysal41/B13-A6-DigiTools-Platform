import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#101727] max-w-full">
      <div className="max-w-325 py-15 mx-auto px-4">
     
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 ">
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-[25px] text-white">DigiTools</h3>
            <p className="text-white text-[16px] max-w-xs">
              {" "}
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div className="text-white ">
            <h4 className="text-[20px] text-white">Product</h4>
            <p className="text-gray-400 font-400">
              <a href="#">Feature</a>
            </p>
            <p className="text-gray-400 font-400">
              <a href="#">Pricing</a>
            </p>
            <p className="text-gray-400 font-400">
              <a href="#">Templates</a>
            </p>
            <p className="text-gray-400 font-400">
              <a href="#">Integrations</a>
            </p>
          </div>

          <div className="text-white">
            <h4 className="text-[20px] text-white">Company</h4>
            <p className="text-gray-400 font-400">
              <a href="#">About</a>
            </p>
            <p className="text-gray-400 font-400">
              <a href="#">Blog</a>
            </p>
            <p className="text-gray-400 font-400">
              <a href="#">Careers</a>
            </p>
            <p className="text-gray-400 font-400">
              <a href="#">Press</a>
            </p>
          </div>

          <div className="text-white">
            <h4 className="text-[20px] text-white">Resources</h4>
            <p className="text-gray-400 font-400">
              <a href="#">Documentation</a>
            </p>
            <p className="text-gray-400 font-400">
              <a href="#">Help Center</a>
            </p>
            <p className="text-gray-400 font-400">
              <a href="#">Community</a>
            </p>
            <p className="text-gray-400 font-400">
              <a href="#">Contact</a>
            </p>
          </div>

          <div className="text-white">
            <h4 className="text-[20px] text-white">Social Links</h4>
            <div className="flex gap-2 ">
              <div className="bg-white p-3 rounded-full flex items-center justify-center">
                <FaInstagram className="text-black " />
              </div>

              <div className="bg-white p-3 rounded-full flex items-center justify-center">
                <FaFacebookF className="text-black " />
              </div>

              <div className="bg-white p-3 rounded-full flex items-center justify-center">
                <FaXTwitter className="text-black " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
