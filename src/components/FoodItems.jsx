import React from "react";

const FoodItems = ({ title, price, quantity }) => {
  return (
    <div className='flex space-x-4'>
      <div>
        <img
          src='https://source.unsplash.com/collection/190727/1600x900'
          alt='image'
          className='w-60'
        />
      </div>
      <div>
        <h2 className='text-xl font-bold'>{title}</h2>
        <span className='text-red-600'>Price:</span> {price}
        <p className='text-red-600'>
          Quantity: <span className='text-zinc-400'>{quantity}</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default FoodItems;
