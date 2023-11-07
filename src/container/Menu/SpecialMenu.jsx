import React from "react";
import { GiWingedEmblem } from "react-icons/gi";
import { MenuItem, SubHeading } from "../../components";
import { images, data } from "../../constants";

const SpecialMenu = () => {
  return (
    <div className='mx-20 mt-36'>
      <div className=''>
        <div className='headFont text-center text-white'>
          <h3 className='text-2xl '>Menu That Fits Your Palatte</h3>
          <img
            className='relative left-[20.7rem] w-14 lg:left-[51.5rem]'
            src={images.spoon}
            alt=''
          />
          <h1 className='headFont mt-10 text-7xl text-[#dcca87]'>Today's Special</h1>
        </div>

        <div className='my-[2rem] flex w-full flex-col items-start justify-center lg:flex-row'>
          <div className='specialMenu-wine flex__center w-full flex-1 flex-col'>
            <p className='headFont pb-10 text-4xl leading-[58.5px] text-white '>Wine & Beer</p>
            <div className='headFont my-2 flex w-full flex-col text-2xl text-[#dcca87] '>
              {data.wines.map((wine, index) => (
                <MenuItem
                  key={wine.title + index}
                  title={wine.title}
                  id={wine.id}
                  price={wine.price}
                  tags={wine.tags}
                />
              ))}
            </div>
          </div>

          <div className=' '>
            <img className='lg:h-[659px] lg:w-[444px]' src={images.menu} alt='menu-img' />
          </div>

          <div className='specialMenu-wine headFont mt-24 leading-[3rem]'>
            <p className='pb-10 text-4xl text-white'>Wine & Beer</p>
            <div className='headFont text-2xl text-[#dcca87] '>
              {data.cocktails.map((cocktails, index) => (
                <MenuItem
                  key={cocktails.title + index}
                  id={cocktails.id}
                  title={cocktails.title}
                  price={cocktails.price}
                  tags={cocktails.tags}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <button className='headFont my-10 w-44 bg-[#f5efdb] p-3 px-6 capitalize text-black'>
          View More
        </button>
      </div>
    </div>
  );
};

export default SpecialMenu;

/* 
      <div className='flex flex-col items-center mt-14 lg:flex-row lg:items-start  lg:justify-evenly'>
       <div className='specialMenu-wine items-center  headFont mt-24 leading-[3rem]'>
          <p className='text-white text-4xl pb-10 lg:justify-self-center'>Wine & Beer</p>
          <div className='headFont text-2xl text-[#dcca87] '>
            {data.wines.map((wine, index) => (
             <MenuItem key={wine.title  + index} title={wine.title} price={wine.price} tags={wine.tags} />
            ))}
          </div>
        </div>
         */
