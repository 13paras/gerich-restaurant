import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);
  const foodCount = useSelector(state => state.foodCount.foodCount);

  return (
    <div>
      <nav className='flex items-center justify-between py-8 text-white'>
        <div className='bg-black'>
          <img src={images.gericht} alt='app logo' className='w-[10rem]' />
        </div>
        <ul className=' hidden text-white lg:flex '>
          <li className='cursor-pointer px-3 text-xl capitalize hover:text-gray-400'>
            <a onClick={() => navigate("/")} href=''>
              Home
            </a>
          </li>
          <li className='cursor-pointer px-3 text-xl capitalize hover:text-gray-400'>
            <a href='#about'>About</a>
          </li>
          <li className='cursor-pointer px-3 text-xl capitalize hover:text-gray-400'>menu</li>
          <li className='cursor-pointer px-3 text-xl capitalize hover:text-gray-400'>
            <a href='#awards'>Awards</a>
          </li>
          <li className='cursor-pointer px-3 text-xl capitalize hover:text-gray-400'>
            <a href='#contacts'>Contacts</a>
          </li>
          <li
            onClick={() => {
              navigate("/checkout");
            }}
            className='active: relative ml-5 flex scale-90 cursor-pointer items-center rounded-lg bg-zinc-700 px-3 py-1 transition-all duration-150 ease-in-out'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
              />
            </svg>
            <span className='ml-2 text-red-600'> {foodCount} </span>
          </li>
        </ul>
        <div className='text-xl'>
          <a
            href='/'
            className='link border-r-[1px] py-2 pr-7 underline-offset-8 hover:text-gray-400 hover:underline'
          >
            Log In / Registration
          </a>
          <a alt='/' className='pl-5 underline-offset-8 hover:text-gray-400 hover:underline'>
            {" "}
            Book Table
          </a>
        </div>
        {/* Hamburger */}
        <div className='lg:hidden'>
          <GiHamburgerMenu size={35} onClick={() => setToggleMenu(true)} />

          {toggleMenu && (
            <div className='app__navbar-smallscreen_overlay flex__center slide-bottom   '>
              <MdOutlineRestaurantMenu
                onClick={() => setToggleMenu(false)}
                size={35}
                className='overlay__close'
              />
              <ul className='app__navbar-smallscreen_links'>
                <li className='cursor-pointer px-3 py-5  text-2xl capitalize text-[#DCCA87] hover:text-white'>
                  <a href='#home' onClick={() => setToggleMenu(false)}>
                    Home
                  </a>
                </li>
                <li className='cursor-pointer px-3 py-5 text-2xl capitalize text-[#DCCA87] hover:text-white'>
                  <a href='#about' onClick={() => setToggleMenu(false)}>
                    About
                  </a>
                </li>
                <li className='cursor-pointer px-3 py-5  text-2xl capitalize text-[#DCCA87] hover:text-white'>
                  <a href='#menu' onClick={() => setToggleMenu(false)}>
                    Menu
                  </a>
                </li>
                <li className='cursor-pointer px-3 py-5 text-2xl capitalize text-[#DCCA87] hover:text-white'>
                  <a href='#awards' onClick={() => setToggleMenu(false)}>
                    Awards
                  </a>
                </li>
                <li className='cursor-pointer px-3 py-5 text-2xl capitalize text-[#DCCA87] hover:text-white'>
                  <a href='#contacts' onClick={() => setToggleMenu(false)}>
                    Contacts
                  </a>
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
