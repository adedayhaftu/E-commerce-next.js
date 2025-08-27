'use client'
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa6";
import Image from "next/image";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import Button from "@/app/sharedComponent/Button";
const Sales = () => {
    return (
        <div>
            <div className="flex pt-10">
                <div className="w-5  bg-pink-700 rounded h-10 my-10 ml-30"> </div>
                <div className="pt-12 pl-2 text-pink-700 font-bold">
                    Today&apos;s
                </div>
            </div>
            <div className="pl-30">
                <div className="flex gap-30 ">
                    <h1 className="font-bold text-[40px]">{'Flash Sales'}</h1>
                    <div className="flex gap-2">
                        <div><p className="text-[10px]">{'Days'}</p><p className="font-bold text-[30px]">{'03'}</p></div>
                        <p className="text-pink-600 mt-7 font-bold">:</p>
                        <div><p className="text-[10px]">{'Hours'}</p><p className="font-bold text-[30px]">{'23'}</p></div>
                        <p className="text-pink-600 mt-7 font-bold">:</p>
                        <div><p className="text-[10px]">{'Minutes'}</p><p className="font-bold text-[30px]">{'19'}</p></div>
                        <p className="text-pink-600 mt-7 font-bold">:</p>
                        <div><p className="text-[10px]">{'Seconds'}</p><p className="font-bold text-[30px]">{'56'}</p></div>
                    </div>
                    <div className="flex gap-10 ml-200"><FaArrowLeft /><FaArrowRight /></div>
                </div>
                <div className="flex gap-20 mt-10 w-[100%]" >
                    <div>
                        <div className="flex">
                            <div>
                                <div className="text-white bg-pink-700 p-1 w-15 mt-6 rounded">{'-40%'}</div>
                                <Image
                                    src={'/g92-2-500x500 1.png'}
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
                            <div className="text-white bg-pink-700 p-1 w-15 mt-6 rounded">{'-35%'}</div>
                            <Image
                                src={'/ak-900-01-500x500 1.png'}
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
                            <div className="text-white bg-pink-700 p-1 w-15 mt-6 rounded">{'-30%'}</div>
                            <Image
                                src={'/tvscreen.jpeg'}
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
                            <div className="text-white bg-pink-700 p-1 w-15 mt-6 rounded">{'-25%'}</div>
                            <Image
                                src={'/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png'}
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
                <div className="flex gap-60">
                    <div>
                        <p className="" >{'HAVIT HV-G92 Gamepad'}</p>
                        <span className="text-pink-700"> {'$120'}</span> <span className="text-gray line-through pl-7">{'$160'}</span>
                        <div className="flex gap-1">
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <p className="text-gray-500 text-[15px]"> {'(88)'}</p>
                        </div>
                    </div>
                    <div>
                        <p className="" >{'AK-900 Wired Keyboard'}</p>
                        <span className="text-pink-700"> {'$1960'}</span> <span className="text-gray line-through pl-7">{'$1160'}</span>
                        <div className="flex gap-1">
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-gray-500" />
                            <p className="text-gray-500 text-[15px]"> {'(75)'}</p>
                        </div>
                    </div>
                    <div>
                        <p className="" >{'IPS LCD Gaming Monitor'}</p>
                        <span className="text-pink-700"> {'$370'}</span> <span className="text-gray line-through pl-7">{'$400'}</span>
                        <div className="flex gap-1">
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <p className="text-gray-500 text-[15px]"> {'(99)'}</p>
                        </div>
                    </div>
                    <div>
                        <p className="" > {'S-Series Comfort Chair'} </p>
                        <span className="text-pink-700"> {'$375'}</span> <span className="text-gray line-through pl-7">{'$400'}</span>
                        <div className="flex gap-1">
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <p className="text-gray-500 text-[15px]"> {'(99)'}</p>
                        </div>
                    </div>
                </div>
                <div className="px-150 py-20">
                    <Button
                        buttonText="View All Products"
                        variant="secondary"
                        onclickHandler={() => alert('')}
                    />
                </div>
                <hr className="w-6 text-gray-300 px-190 py-2"></hr>
            </div>
        </div>
    )
}
export default Sales;
