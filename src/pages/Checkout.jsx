import React from "react";
import { useSelector } from "react-redux";
import FoodItems from "../components/FoodItems";

const Checkout = () => {
  const foodDetails = useSelector(state => state.foodCount.foodDetails);
  const totalItems = useSelector(state => state.foodCount.foodCount);
  console.log(foodDetails);

  const subTotal = foodDetails?.reduce((total, item) => {
    const price = Number(item?.price?.replace("$", ""));
    return total + price * item?.quantity;
  }, 0);
  console.log(subTotal);
  return (
    <div className='container mx-auto p-12'>
      <div className='mx-auto flex w-full flex-col px-0 md:flex-row'>
        <div className='flex flex-col md:w-full'>
          <h2 className='text-heading mb-4 font-bold md:text-xl '>Shipping Address</h2>
          <form className='mx-auto w-full justify-center' method='post' action>
            <div className=''>
              <div className='space-x-0 lg:flex lg:space-x-4'>
                <div className='w-full lg:w-1/2'>
                  <label for='firstName' className='mb-3 block text-sm font-semibold text-gray-500'>
                    First Name
                  </label>
                  <input
                    name='firstName'
                    type='text'
                    placeholder='First Name'
                    className='w-full rounded bg-zinc-800 px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-600 lg:text-sm'
                  />
                </div>
                <div className='w-full lg:w-1/2 '>
                  <label for='firstName' className='mb-3 block text-sm font-semibold text-gray-500'>
                    Last Name
                  </label>
                  <input
                    name='Last Name'
                    type='text'
                    placeholder='Last Name'
                    className='w-full rounded bg-zinc-800 px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-600 lg:text-sm'
                  />
                </div>
              </div>
              <div className='mt-4'>
                <div className='w-full'>
                  <label for='Email' className='mb-3 block text-sm font-semibold text-gray-500'>
                    Email
                  </label>
                  <input
                    name='Last Name'
                    type='text'
                    placeholder='Email'
                    className='w-full rounded bg-zinc-800 px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-600 lg:text-sm'
                  />
                </div>
              </div>
              <div className='mt-4'>
                <div className='w-full'>
                  <label for='Address' className='mb-3 block text-sm font-semibold text-gray-500'>
                    Address
                  </label>
                  <textarea
                    className='w-full rounded bg-zinc-800 px-4 py-3 text-xs text-white focus:outline-none focus:ring-1 focus:ring-blue-600 lg:text-sm'
                    name='Address'
                    cols='20'
                    rows='4'
                    placeholder='Address'
                  ></textarea>
                </div>
              </div>
              <div className='space-x-0 lg:flex lg:space-x-4'>
                <div className='w-full lg:w-1/2'>
                  <label for='city' className='mb-3 block text-sm font-semibold text-gray-500'>
                    City
                  </label>
                  <input
                    name='city'
                    type='text'
                    placeholder='City'
                    className='w-full rounded bg-zinc-800  px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-600 lg:text-sm'
                  />
                </div>
                <div className='w-full lg:w-1/2 '>
                  <label for='postcode' className='mb-3 block text-sm font-semibold text-gray-500'>
                    Postcode
                  </label>
                  <input
                    name='postcode'
                    type='text'
                    placeholder='Post Code'
                    className='w-full rounded bg-zinc-800  px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-600 lg:text-sm'
                  />
                </div>
              </div>
              <div className='mt-4 flex items-center'>
                <label className='text-heading group flex items-center text-sm'>
                  <input
                    type='checkbox'
                    className='h-5 w-5 rounded bg-zinc-800  text-white focus:outline-none focus:ring-1'
                  />
                  <span className='ml-2'>Save this information for next time</span>
                </label>
              </div>
              <div className='relative pt-3 xl:pt-6'>
                <label for='note' className='mb-3 block text-sm font-semibold text-gray-500'>
                  {" "}
                  Notes (Optional)
                </label>
                <textarea
                  name='note'
                  className='flex w-full items-center rounded bg-zinc-800  px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-600'
                  rows='4'
                  placeholder='Notes for delivery'
                ></textarea>
              </div>
              <div className='mt-4'>
                <button className='w-full bg-blue-600 px-6 py-2 text-blue-200 hover:bg-blue-900'>
                  Process
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className='ml-0 flex w-full flex-col text-zinc-400 lg:ml-12 lg:w-2/5'>
          <div className='pt-12 md:pt-0 2xl:ps-4'>
            <h2 className='text-xl font-bold'>Order Summary</h2>
            <div className='mt-8'>
              <div className='flex flex-col space-y-4'>
                {foodDetails &&
                  foodDetails?.map(foodDetail => (
                    <FoodItems
                      quantity={foodDetail?.quantity}
                      title={foodDetail?.title}
                      price={foodDetail?.price}
                    />
                  ))}
              </div>
            </div>
            <div className='mt-4 flex p-4'>
              <h2 className='text-xl font-bold'>ITEMS {totalItems}</h2>
            </div>
            <div className='text-heading flex w-full items-center border-b border-gray-300 py-4 text-sm font-semibold last:border-b-0 last:pb-0 last:text-base lg:px-3 lg:py-5'>
              Subtotal
              <span className='ml-2'>{subTotal}</span>
            </div>
            <div className='text-heading flex w-full items-center border-b border-gray-300 py-4 text-sm font-semibold last:border-b-0 last:pb-0 last:text-base lg:px-3 lg:py-5'>
              Shipping Tax<span className='ml-2'>$10</span>
            </div>
            <div className='text-heading flex w-full items-center border-b border-gray-300 py-4 text-sm font-semibold last:border-b-0 last:pb-0 last:text-base lg:px-3 lg:py-5'>
              Total<span className='ml-2'>${subTotal + 10}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
