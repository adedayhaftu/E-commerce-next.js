"use client";
import { FaMobileAlt, FaDesktop, FaCamera, FaHeadphones, FaStopwatch } from "react-icons/fa";
const Category = () => {
  return (
    <div>
      <div className="flex pt-10">
        <div className="w-5 bg-pink-700 rounded h-10 my-10 ml-30"></div>
        <div className="pt-12 pl-2 text-pink-700 font-bold">Categories</div>
      </div>
      <p className="font-bold text-[40px] ml-30">Browse By Category</p>
      <div className="flex justify-evenly py-15 mx-20">
        <div className="outline hover:bg-pink-700 hover:text-white p-6 w-[160px] h-[150px] flex flex-col items-center justify-center rounded-lg transition">
          <FaMobileAlt size={50} />
          <p className="pt-4 text-sm font-medium">Phones</p>
        </div>
        <div className="outline hover:bg-pink-700 hover:text-white p-6 w-[160px] h-[150px] flex flex-col items-center justify-center rounded-lg transition">
          <FaDesktop size={50} />
          <p className="pt-4 text-sm font-medium">Computers</p>
        </div>
        <div className="outline hover:bg-pink-700 hover:text-white p-6 w-[160px] h-[150px] flex flex-col items-center justify-center rounded-lg transition">
          <FaStopwatch size={50} />
          <p className="pt-4 text-sm font-medium">Smartwatch</p>
        </div>
        <div className="outline hover:bg-pink-700 hover:text-white p-6 w-[160px] h-[150px] flex flex-col items-center justify-center rounded-lg transition">
          <FaCamera size={50} />
          <p className="pt-4 text-sm font-medium">Camera</p>
        </div>
        <div className="outline hover:bg-pink-700 hover:text-white p-6 w-[160px] h-[150px] flex flex-col items-center justify-center rounded-lg transition">
          <FaHeadphones size={50} />
          <p className="pt-4 text-sm font-medium">Headphones</p>
        </div>
      </div>
      <div className="w-full mt-8 border-b border-gray-200" />
    </div>
  );
};
export default Category;