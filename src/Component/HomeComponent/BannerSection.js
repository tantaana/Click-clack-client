import React from "react";
import "./BannerSection.css";
import bannerimg from '../../assets/images/bannerimg.png'

const BannerSection = () => {
  return (
    <div className="container mx-auto pt-12 lg:pt-0 ">
      <div className="flex flex-col lg:flex-row items-center justify-center">
        {/* Men Section  */}
        <div>
        <p className="text-xl font-bold mb-4">Find The Best</p>
          <h2 className="text-5xl font-bold">Exculsive Collection <br/> For Everyone</h2>
          
          <div className="mt-10">
            <button className="font-bold shopnowBtn  hover:text-gray-900">SHOP NOW</button>
          </div>
        </div>
        <div>
          <img className="w-[550px] bannerimg cursor-pointer" src={bannerimg} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
