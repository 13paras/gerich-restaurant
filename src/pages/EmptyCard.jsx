import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const EmptyCard = () => {
  const foodCount = useSelector(state => foodCount.foodCount);
  return (
    <div className='container mx-auto w-full max-w-sm p-4 sm:w-1/2'>
      <div className='card flex flex-col justify-center rounded-lg bg-white p-10 shadow-2xl'>
        <p className='text-xl font-semibold text-violet-400'>
          Cart Is empty please continue to add food
        </p>
        <button>
          <Link to={"/"}>Add food items</Link>
        </button>
      </div>
    </div>
  );
};

export default EmptyCard;
