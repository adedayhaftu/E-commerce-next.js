'user client'
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
    return (
        <header className="bg-black text-white flex justify-center pl-100 items-center gap-100 py-2 text-sm">
            <div className="flex items-center gap-2">
                <p>Summer Sales For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                <Link href="/shop" className="font-bold underline hover:bg-sky-700 ">ShopNow</Link>
            </div>
            <div className="flex justify-end items-center p-2 gap-5">
                <span>English</span>
                <FaChevronDown size={12}/>
            </div>
        </header>
    )
}

export default Header;