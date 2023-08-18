import React from 'react'
import images from '../../constants/images'
import './Header.css'

const Header = () => {
  return (
    <header className='mx-20 grid lg:grid-flow-col '>
      <div className='text-white lg:flex flex-col justify-center lg:mr-5 mt-24 lg:px-10'>
        <h3 className='text-2xl capitalize pb-1 headFont'>Chase the new flavour</h3>
        <img 
        className='w-12'
        src={images.spoon} 
        alt="spoon" />
        <h1 className='text-8xl capitalize text-[#DCCA87] py-7 leading-[140px] font-cormorant headFont'>The key to fine <br /> dining</h1>
        <p className='text-lg'>Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat Morbi Facilisis Quam <br /> Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus</p>
        <button className='bg-[#f5efdb] capitalize p-3 text-black px-6 my-10 w-44 headFont'>explore menu</button>
      </div>

      <div className='mt-24 lg:px-10 lg:ml-5 '>
        <img 
        className='h-[700px]'
        src={images.welcome} 
        alt="" />
      </div>
    </header>
  )
}

export default Header