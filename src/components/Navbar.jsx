import React from "react";
import { logo, lock } from "../assets";

const Navbar = () => {
  return (
    <div className="w-full h-[80px] bg-white border-b">
      <div className="max-w-[1480px] m-auto w-full h-full flex justify-between items-center">
        <img src={logo} alt="logo" className="h-[25px]" />

        <div className="hidden md:flex items-center ">
          <ul className="flex gap-4">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platform</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div className="hidden md:flex">
          <button className="flex items-center justify-between bg-transparent px-6 gap-2">
            <img src={lock} />
            Login
          </button>
          <button className="px-8 py-3 rounded-md bg-[#20B486] text-white font-bold">
            Sign Up For Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
