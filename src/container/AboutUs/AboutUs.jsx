import React from "react";
import images from "../../constants/images";

export default function AboutUs() {
  return (
    <div className="text-white mx-20">
      <img 
      className="-z-10 relative top-[37rem] w-[24rem] left-[10rem] lg:top-[40rem] lg:w-[26rem] lg:left-[39rem]  "
      src={images.G} 
      alt="" />
      <div className="flex items-center ">
        <div className="pr-24">
          <h1 className="text-[64px] text-right text-[#dcca87]  headFont">About Us</h1>
          <img className="relative left-[12rem] lg:left-[38rem] -scale-x-100" src={images.spoon} alt="spoon img" />
          <p className="text-right pt-14 text-gray-400">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis
            Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed
            Odio Nec Aliquet Eu Proin Mauris Et.
          </p>
          <div className="text-right">
          <button className='bg-[#f5efdb] capitalize p-3 text-black px-6 my-10 w-44 headFont '>explore menu</button>

          </div>
        </div>
        <div>
          <img
           className="h-[800px] w-[400px] lg:h-[936px] lg:w-[188px] "
          src={images.knife} 
          alt="" />
        </div>
        <div className="pl-24">
          <h1 className="text-[64px] text-left text-[#dcca87] headFont">Our History</h1>
          <img src={images.spoon} alt="spoon img" />
          <p className="pt-10 text-gray-400">
            Adipiscing Tempus Ullamcorper Lobortis Odio Tellus Arcu Volutpat.
            Risus Placerat Morbi Volutpat Habitasse Interdum Mi Aliquam In Sed
            Odio Nec Aliquet.
          </p>
          <button className='bg-[#f5efdb] capitalize p-3 text-black px-6 my-10 w-44 headFont'>explore menu</button>
        </div>
      </div>
    </div>
  );
}
