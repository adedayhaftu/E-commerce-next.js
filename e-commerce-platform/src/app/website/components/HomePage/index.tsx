import Image from "next/image"
import { FaArrowRight } from "react-icons/fa"

const HomePage = () => {
    return (
        <div className="flex gap-8 bg-black text-white  w-300 ml-30 ">
            <div className="  gap-8 pl-13 ml-15 ">
                <div className=" flex text-xl items-center pt-15 gap-10">
                    <Image
                        src={'/1200px-Apple_gray_logo 1.png'}
                        alt="apple"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-13 h-15"/>
                    <p className="font-semi-bold"> iPhone 14 Series</p>
                </div>
                <div className="font-bold text-3xl pt-10 text-[55px] w-80 ">
                    <h1>Up to 10% off Voucher</h1>
                </div>
                <div className="font-semi-bold underline flex items-center gap-5 pt-7">
                    <p>Shop Now</p>
                    <FaArrowRight size={13} />
                </div>
            </div>
            <div className="ml-32 pt-7">
                <Image
                    src={'/hero_endframe__cvklg0xk3w6e_large 2.png'}
                    alt="apple"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-140 h-100"/>

            </div>
        </div>
    )
}
export default HomePage;