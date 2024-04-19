/* eslint-disable no-unused-vars */
import React from "react";

const Navbar = () => {
  return (
    <header className="w-screen flex justify-center items-center">
      <div className="w-10/12 text-6xl font-bold flex flex-col justify-center items-center">
        <div className=" w-full flex justify-start items-center text-start">
          <img
            src="https://res.cloudinary.com/dbyioi2qq/q_auto/v1678986391/static/framesvg_1678986390_65036.svg"
            className="w-20 hover:animate-spin cursor-pointer"
            alt="logo"
          />
          <div className="ms-8">
             HealHive
          </div>
        </div>
        <nav className="w-full flex justify-start items-center text-2xl list-none py-4 font-medium">
              <li className="me-8 ms-[120px]">
                <a href="#symptoms">Check Symptoms</a>
              </li>
              <li className="me-8">
                <a href="#about">About</a>
              </li>
              <li className="">
                <a href="#contact">Contact</a>
              </li>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
