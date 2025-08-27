'use client'
import { FaStar } from "react-icons/fa6";
import Image from "next/image";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import Button from "@/app/sharedComponent/Button";
const ExploreProducts = () => {
    return (
        <div>
            <div className="flex">
                <div className="w-5  bg-pink-700 rounded h-10 my-10 ml-30"> </div>
                <div className="pt-12 pl-2 text-pink-700 font-bold">
                    Our Products
                </div>
            </div>
            <p className="font-bold text-[40px] ml-30">Explore Our Products</p>
            <div >
                <div className="flex gap-20 w-[100%] px-55 py-25" >
                    <div>
                        <div className="flex gap-5">
                            <div>
                                <Image
                                    src={'/71RdoeXxtrL 1.png'}
                                    alt=""
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="w-30 ml-25"/>
                            </div>
                            <div className="pt-5">
                                <AiOutlineHeart className="size-5"/>
                                <AiOutlineEye className="size-5 mt-3"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            <Image
                                src={'/eos-250d-03-500x500 1.png'}
                                alt=""
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-35 ml-25" />
                        </div>
                        <div className="pt-5 gap-5">
                            <AiOutlineHeart className="size-5" />
                            <AiOutlineEye className="size-5 mt-3" />
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            <Image
                                src={'/ideapad-gaming-3i-01-500x500 1.png'}
                                alt=""
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-35 ml-25" />
                        </div>
                        <div className="pt-5 gap-5">
                            <AiOutlineHeart className="size-5" />
                            <AiOutlineEye className="size-5 mt-3" />
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            <Image
                                src={'/e-comm.png'}
                                alt=""
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-50 ml-25 mr-3" />
                        </div>
                        <div className="pt-5 gap-5">
                            <AiOutlineHeart className="size-5" />
                            <AiOutlineEye className="size-5 mt-3" />
                        </div>
                    </div>
                </div>
                <div className="flex gap-50 pl-60 mt-[-80px]">
                    <div>
                        <p className="" >Breed Dry Dog Food</p>
                        <div className="text-pink-700 flex gap-3">
                            $360 <div className="flex gap-1">
                                <FaStar className="text-yellow-500" />
                                <FaStar className="text-yellow-500" />
                                <FaStar className="text-yellow-500" />
                                <FaStar className="text-gray-500" />
                                <FaStar className="text-gray-500" />
                                <p className="text-gray-500 text-[15px]"> (35)</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="" >CANON EOS DSLR Camera</p>
                        <div className="flex">
                            <div className="text-pink-700 x gap-3">
                                $360
                            </div>
                            <div className="flex gap-1">
                                <FaStar className="text-yellow-500" />
                                <FaStar className="text-yellow-500" />
                                <FaStar className="text-yellow-500" />
                                <FaStar className="text-yellow-500" />
                                <FaStar className="text-gray-500" />
                                <p className="text-gray-500 text-[15px]"> (95)</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="" >ASUS FHD Gaming Laptop</p>
                        <div className="flex">
                            <div className="text-pink-700  gap-3">
                                $700
                            </div> <div className="flex gap-1">
                                <FaStar className="text-yellow-500" />
                                <FaStar className="text-yellow-500" />
                                <FaStar className="text-yellow-500" />
                                <FaStar className="text-yellow-500" />
                                <FaStar className="text-yellow-500" />
                                <p className="text-gray-500 text-[15px]"> (325)</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="" >Curology Product Set</p>
                        <div className="flex">
                            <div className="text-pink-700 flex gap-3">
                                $500
                            </div>
                            <div className="flex gap-1">
                                <FaStar className="text-yellow-500" />
                                <FaStar className="text-yellow-500" />
                                <FaStar className="text-yellow-500" />
                                <FaStar className="text-yellow-500" />
                                <FaStar className="text-gray-500" />
                                <p className="text-gray-500 text-[15px]"> (145)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-20 w-[100%] px-60 py-3" >
                <div>
                    <div className="flex">
                        <div>
                            <div className="text-white bg-pink-700 p-1 w-15 mt-6 rounded">NEW</div>
                            <Image
                                src={'/New-Mercedes-Benz-Gtr-Licensed-Ride-on-Car-Kids-Electric-Toy-Car 1.png'}
                                alt=""
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-40 ml-15" />
                        </div>
                        <div className="pt-5 ">
                            <AiOutlineHeart className="size-5" />
                            <AiOutlineEye className="size-5 mt-3" />
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div>
                        <div className="text-white bg-pink-700 p-1 w-15 mt-6 rounded">-35%</div>
                        <Image
                            src={'/Copa_Sense 1.png'}
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
                        <div className="text-white bg-pink-700 p-1 w-15 mt-6 rounded">-30%</div>
                        <Image
                            src={'/GP11_PRD3 1.png'}
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
                        <div className="text-white bg-pink-700 p-1 w-15 mt-6 rounded">-25%</div>
                        <Image
                            src={'/698717_Z8A1X_3475_001_100_0000_Light-Reversible-quilted-satin-jacket 1.png'}
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
            <div className="flex  ml-60 gap-60">
                <div>
                    <p>Kids Electric Car</p>
                    <div className="flex">
                        <span className="text-pink-700"> $960</span>
                        <div className="flex gap-1">
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <p className="text-gray-500 text-[15px]"> (65)</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="p-2 rounded-full outline bg-pink-700"></div>
                        <div className=" p-2 rounded-full bg-pink-700"></div>
                    </div>
                </div>
                <div>
                    <p className="" >Jr.Zoom Soccer Cleats</p>
                    <div className="flex">
                        <span className="text-pink-700"> $1160</span>
                        <div className="flex gap-1">
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <p className="text-gray-500 text-[15px]"> (35)</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="p-2 rounded-full outline bg-yellow-200"></div>
                        <div className=" p-2 rounded-full bg-pink-700"></div>
                    </div>
                </div>
                <div>
                    <p className="" >GP11 Shooter USB Gamepad</p>
                    <div className="flex">
                        <span className="text-pink-700"> $660</span>
                        <div className="flex gap-1">
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <p className="text-gray-500 text-[15px]"> (55)</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="p-2 rounded-full outline bg-black "></div>
                        <div className=" p-2 rounded-full bg-pink-700"></div>
                    </div>
                </div>
                <div>
                    <p className="" >Quilted Satin Jacket</p>
                    <div className="flex">
                        <span className="text-pink-700"> $660</span>
                        <div className="flex gap-1">
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <p className="text-gray-500 text-[15px]"> (55)</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="p-2 rounded-full outline bg-green-800"></div>
                        <div className=" p-2 rounded-full bg-pink-700"></div>
                    </div>
                </div>
            </div>
            <div className="px-200 py-20 ">
                <Button
                    buttonText="View All Products"
                    variant="secondary"
                    onclickHandler={() => alert('')}
                />
            </div>
        </div>
    )
}
export default ExploreProducts;