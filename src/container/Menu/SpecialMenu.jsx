import React from 'react';
import { GiWingedEmblem } from 'react-icons/gi';
import { MenuItem, SubHeading } from '../../components';
import { images, data} from '../../constants'

const SpecialMenu = () => {
  return (
    <div className='mx-20 mt-36'>

      <div className=''>
      <div className='text-white headFont text-center'>
        <h3 className='text-2xl '>Menu That Fits Your Palatte</h3>
        <img 
        className='relative lg:left-[51.5rem] left-[20.7rem] w-14'
        src={images.spoon} 
        alt="" />
        <h1 className='headFont text-[#dcca87] text-7xl mt-10'>Today's Special</h1>
      </div>

      <div className='w-full my-[2rem] flex justify-center items-start flex-col lg:flex-row'>
       <div className='specialMenu-wine flex-1 w-full flex-col flex__center'>
          <p className='text-white headFont leading-[58.5px] text-4xl pb-10 '>Wine & Beer</p>
          <div className='headFont flex flex-col my-2 w-full text-2xl text-[#dcca87] '>
            {data.wines.map((wine, index) => (
             <MenuItem key={wine.title  + index} title={wine.title} price={wine.price} tags={wine.tags} />
            ))}
          </div>
        </div>
        
        <div className=' '>
            <img 
            className='lg:w-[444px] lg:h-[659px]'
            src={images.menu} 
            alt="menu-img" />
        </div>

        <div className='specialMenu-wine headFont mt-24 leading-[3rem]'>
          <p className='text-white text-4xl pb-10'>Wine & Beer</p>
          <div className='headFont text-2xl text-[#dcca87] '>
            {data.cocktails.map((cocktails, index) => (
               <MenuItem key={cocktails.title  + index} title={cocktails.title} price={cocktails.price} tags={cocktails.tags} />
            ))}
          </div>
        </div>
      </div>
      </div>

        <div>
          <button className='bg-[#f5efdb] capitalize p-3 text-black px-6 my-10 w-44 headFont'>View More</button>
        </div>
    </div>
  )
}

export default SpecialMenu

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