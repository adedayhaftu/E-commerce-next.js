'use client'
import { FaArrowRight } from "react-icons/fa";
import { FaTruck, FaHeadphonesAlt } from "react-icons/fa";
import { AiTwotoneSecurityScan } from "react-icons/ai";
import Image from "next/image";
const NewArrival = () => {
    return (
        <div>
            <div className="flex">
                <div className="w-5 bg-pink-700 rounded h-10 my-10 ml-30"> </div>
                <div className="pt-12 pl-2 text-pink-700 font-bold">
                    Featured
                </div>
            </div>
            <p className="font-bold text-[40px] ml-30"> New Arrival</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-400 ml-32 rounded my-16">
                <div className="relative bg-black ">
                    <Image
                        src="/ps5-slim-goedkope-playstation_large 1.png"
                        alt="PlayStation 5"
                        width={1000}
                        height={700}
                        className="h-auto w-full"
                    />
                    <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="font-bold text-4xl">PlayStation 5</h3>
                        <p className="text-lg mb-2">Black and White version of the PS5 coming out on sale.</p>
                        <p className="underline pl-6 flex gap-3">shop Now <FaArrowRight className="my-1" /></p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div className="relative col-span-2">
                        <Image
                            src="/attractive-woman-wearing-hat-posing-black-background 1.png"
                            alt="Women"
                            width={250}
                            height={250}
                            className="rounded-lg w-full "
                        />
                        <div className="absolute bottom-13 left-6 text-white">
                            <h3 className="font-bold text-4xl mb-4">Women&apos; Collections</h3>
                            <p className="text-lg mb-2">Featured woman collections that<br/>give you another vibe.</p>
                            <p className="underline flex mt-3">Shop Now </p>
                        </div>
                    </div>
                    <div className="relative bg-black">
                        <Image
                            src="/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png"
                            alt="Speakers"
                            width={250}
                            height={250}
                            className="rounded-lg object-cover w-full "
                        />
                        <div className="absolute bottom-6 left-6 text-white">
                            <h3 className="font-bold text-4xl">Speakers</h3>
                            <p className="text-lg mb-2">Amazon wireless speakers</p>
                            <p className="underline pl-6 flex gap-3">shop Now <FaArrowRight className="my-1" /></p>
                        </div>
                    </div>
                    <div className="relative bg-black">
                        <Image
                            src="/652e82cd70aa6522dd785109a455904c.png"
                            alt="Perfume"
                            width={250}
                            height={250}
                            className="rounded-lg object-cover w-full"
                        />
                        <div className="absolute bottom-6 left-6 text-white">
                            <h3 className="font-bold text-4xl">Perfume</h3>
                            <p className="text-lg mb-2">GUCCI INTENSE OUD EDP</p>
                            <p className="underline pl-6 flex gap-3">shop Now <FaArrowRight className="my-1" /></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex mx-30 py-19 justify-between ">
                <div>
                     <div className="bg-gray-300 rounded-full p-6 h-50  w-50">
                        <FaTruck size={150} className="bg-black rounded-full text-white p-3"/>
                    </div>
                 <div className="py-5">
                       <p className="font-bold text-[30px]">FREE AND FAST DELIVERY</p>
                    <p>Free delivery far all orders over $140</p>
                 </div>
                </div>
                <div>
                     <div className="bg-gray-300 rounded-full p-6 h-50  w-50">
                        <FaHeadphonesAlt size={150} className="bg-black rounded-full text-white p-3"/>
                    </div>
                 <div className="py-5">
                       <p className="font-bold text-[30px]">FREE AND FAST DELIVERY</p>
                    <p>Free delivery far all orders over $140</p>
                 </div>
                </div>
                <div>
                    <div className="bg-gray-300 rounded-full p-6 h-50  w-50">
                        <AiTwotoneSecurityScan size={150} className="bg-black rounded-full text-white p-3"/>
                    </div>
                 <div className="py-5">
                       <p className="font-bold text-[30px]">FREE AND FAST DELIVERY</p>
                    <p>Free delivery far all orders over $140</p>
                 </div>
                </div>
            </div>
        </div>
    )
}
export default NewArrival;