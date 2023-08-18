import './MenuItem.css';
import React from 'react'

const MenuItem = ({title, price, tags}) => {
  return (
    <div className='w-full my-[1rem] flex flex-col'>
      <div className='flex justify-between items-center'>
        <div className='flex-1'>
          <p className='text-[#DCCA87] p__comorant'> {title} </p>
        </div>

        <div className='app__menuitem-dash'/>

        <div>
          <p className='text-[#DCCA87] flex items-center justify-end'> {price} </p>
        </div>
      </div>

      <div className='text-[#AAA] p__opensans'>
        <p> {tags} </p>
      </div>
    </div>
  )
}

export default MenuItem

