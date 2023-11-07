import { useDispatch } from "react-redux";
import "./MenuItem.css";
import React from "react";
import {
  addToCart,
  decrementFoodCount,
  incrementFoodCount,
} from "../../redux/slices/FoodItemSlice";

const MenuItem = ({ id, title, price, tags }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(incrementFoodCount({ foodDetails: title, price, id }));
  };
  return (
    <div className='my-[1rem] flex w-full flex-col'>
      <div className='flex items-center justify-between'>
        <div className='flex-1'>
          <p className='p__comorant text-[#DCCA87]'> {title} </p>
        </div>

        <div className='app__menuitem-dash' />

        <div>
          <p className='flex items-center justify-end text-[#DCCA87]'> {price} </p>
        </div>
        <div className='ml-1 space-x-2 rounded-lg bg-zinc-800 px-2 py-1'>
          <button
            onClick={() => dispatch(incrementFoodCount({ title, price, id }))}
            className='rounded-lg p-1 transition-all duration-150 ease-in-out hover:bg-zinc-700 active:scale-95'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-5 w-5'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
            </svg>
          </button>
          <button
            onClick={() => dispatch(decrementFoodCount({ id }))}
            className='rounded-lg p-1 transition-all duration-150 ease-in-out hover:bg-zinc-600 active:scale-95'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-5 w-5'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 12h-15' />
            </svg>
          </button>
        </div>
      </div>

      <div className='p__opensans text-[#AAA]'>
        <p> {tags} </p>
      </div>
    </div>
  );
};

export default MenuItem;
