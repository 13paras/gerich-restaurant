import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div>
      <nav className="flex justify-between text-white items-center py-8">
        <div className="bg-black">
          <img src={images.gericht} alt="app logo" className="w-[10rem]" />
        </div>
        <ul className=" hidden lg:flex text-white ">
          <li className="text-xl px-3 capitalize hover:text-gray-400 cursor-pointer">
           <a href="#home">Home</a>
          </li>
          <li className="text-xl px-3 capitalize hover:text-gray-400 cursor-pointer">
            <a href="#about">About</a>
          </li>
          <li className="text-xl px-3 capitalize hover:text-gray-400 cursor-pointer">
            menu
          </li>
          <li className="text-xl px-3 capitalize hover:text-gray-400 cursor-pointer">
            <a href="#awards">Awards</a>
          </li>
          <li className="text-xl px-3 capitalize hover:text-gray-400 cursor-pointer">
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
        <div className="text-xl">
          <a
            href="/"
            className="border-r-[1px] pr-7 py-2 hover:text-gray-400 link hover:underline underline-offset-8"
          >
            Log In / Registration
          </a>
          <a
            alt="/"
            className="pl-5 hover:text-gray-400 hover:underline underline-offset-8"
          >
            {" "}
            Book Table
          </a>
        </div>
        {/* Hamburger */}
        <div className="lg:hidden">
          <GiHamburgerMenu size={35} onClick={() => setToggleMenu(true)} />

          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom   ">
              <MdOutlineRestaurantMenu
                onClick={() => setToggleMenu(false)}
                size={35}
                className="overlay__close"
              />
              <ul className="app__navbar-smallscreen_links">
                <li className="text-2xl px-3 py-5  capitalize hover:text-white cursor-pointer text-[#DCCA87]">
                 <a href="#home" onClick={() => setToggleMenu(false)}>Home</a>
                </li>
                <li className="text-2xl px-3 py-5 capitalize hover:text-white cursor-pointer text-[#DCCA87]">
                  <a href="#about" onClick={() => setToggleMenu(false)}>About</a>
                </li>
                <li className="text-2xl px-3 py-5  capitalize hover:text-white cursor-pointer text-[#DCCA87]">
                  <a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a>
                </li>
                <li className="text-2xl px-3 py-5 capitalize hover:text-white cursor-pointer text-[#DCCA87]">
                  <a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a>
                </li>
                <li className="text-2xl px-3 py-5 capitalize hover:text-white cursor-pointer text-[#DCCA87]">
                  <a href="#contacts" onClick={() => setToggleMenu(false)}>Contacts</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
