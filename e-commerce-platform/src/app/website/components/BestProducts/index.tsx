'use client'
import { FaStar } from "react-icons/fa6";
import Image from "next/image";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import Button from "@/app/sharedComponent/Button";
const BestProducts = () => {
    return (
        <div className="py-10">
            <div className="flex pt-10">
                <div className="w-5 bg-pink-700 rounded h-10 my-10 ml-30"> </div>
                <div className="pt-12 pl-2 text-pink-700 font-bold">
                    This Month
                </div>
            </div>
            <h1 className="font-bold text-[40px] ml-30">Best Selling Products</h1>
            <div className="flex gap-20 w-[100%] px-20 py-25">
                <div>
                    <div className="flex">
                        <div>
                            <Image
                                src={'/672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1.png'}
                                alt=""
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-40 ml-25" />
                        </div>
                        <div className="pt-5 ">
                            <AiOutlineHeart className="size-5" />
                            <AiOutlineEye className="size-5 mt-3" />
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div>
                        <Image
                            src={'/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.png'}
                            alt=""
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-50 ml-25" />
                    </div>
                    <div className="pt-5 gap-5">
                        <AiOutlineHeart className="size-5" />
                        <AiOutlineEye className="size-5 mt-3" />
                    </div>
                </div>
                <div className="flex">
                    <div>
                        <Image
                            src={'/gammaxx-l240-argb-1-500x500 1.png'}
                            alt=""
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-66 ml-25" />
                    </div>
                    <div className="pt-5 gap-5">
                        <AiOutlineHeart className="size-5" />
                        <AiOutlineEye className="size-5 mt-3" />
                    </div>
                </div>
                <div className="flex">
                    <div>
                        <Image
                            src={'/sam-moghadam-khamseh-L_7MQsHl_aU-unsplash 1.png'}
                            alt=""
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-30 ml-25 mr-3" />
                    </div>
                    <div className="pt-5 gap-5">
                        <AiOutlineHeart className="size-5" />
                        <AiOutlineEye className="size-5 mt-3" />
                    </div>
                </div>
            </div>
            <div className="flex gap-65 pl-50 mt-[-80px]">
                <div>
                    <p className="" >The north coat</p>
                    <span className="text-pink-700"> $260</span> <span className="text-gray line-through">$360</span>
                    <div className="flex gap-1">
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <p className="text-gray-500 text-[15px]"> (65)</p>
                    </div>
                </div>
                <div>
                    <p className="" >Gucci duffle bag</p>
                    <span className="text-pink-700"> $960</span> <span className="text-gray line-through">$1160</span>
                    <div className="flex gap-1">
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-gray-500" />
                        <p className="text-gray-500 text-[15px]"> (65)</p>
                    </div>
                </div>
                <div>
                    <p className="" >RGB liquid CPU Cooler</p>
                    <span className="text-pink-700"> $160</span> <span className="text-gray line-through">$170</span>
                    <div className="flex gap-1">
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <p className="text-gray-500 text-[15px]"> (65)</p>
                    </div>
                </div>
                <div>
                    <p className="" >Small BookSelf </p>
                    <span className="text-pink-700"> $375</span> <span className="text-gray line-through">$400</span>
                    <div className="flex gap-1">
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <p className="text-gray-500 text-[15px]"> (65)</p>
                    </div>
                </div>
            </div>
            <div className="bg-black p-10 my-30 ml-30 flex mr-30 ">
                <div>
                    <p className="text-green-300 ">Categories</p>
                    <p className="text-[50px] w-100 text-white text-bold">Enhance Your Music Experience</p>
                    <div className="flex mt-10 gap-5">
                        <div className="bg-white h-23 p-6  font-bold  rounded-full"><p className="ml-3">23</p><p>Hours</p></div>
                        <div className="bg-white h-23 p-7  font-bold  rounded-full"><p className="ml-2 ">05</p><p>Days</p></div>
                        <div className="bg-white h-23 p-4 font-bold  rounded-full"><p className="ml-5 mt-2">59</p><p>Minutes</p></div>
                        <div className="bg-white h-23 p-3  font-bold  rounded-full"><p className="ml-5 mt-3">35</p><p>Seconds</p></div>
                    </div>
                    <div className="w-44 bg-green-500 rounded my-10 h-13 pt-2">
                        <Button
                            buttonText="Buy Now!"
                            variant=""
                            onclickHandler={() => alert('')} />
                    </div>
                </div>
                <Image
                    src={'/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png'}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100w"
                    className="w-170 ml-50" />
            </div>
        </div>
    )
}
export default BestProducts;