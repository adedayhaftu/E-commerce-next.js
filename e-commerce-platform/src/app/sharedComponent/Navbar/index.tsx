'user client'
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
    return (
        <nav className="flex items-center p-4 gap-80">
            <div className="text-2xl p-10 pl-40 font-bold text-black">Exclusive</div>
            <div className="flex gap-25 text-lg size-10">
                <Link href="/website" className=" hover:underline hover:text-purple-700">Home</Link>
                <Link href="/contact" className=" hover:underline hover:text-purple-700">Contact</Link>
                <Link href="/about" className=" hover:underline hover:text-purple-700">About</Link>
                <Link href="/signup" className=" hover:underline hover:text-purple-700">Sign Up</Link>
            </div>
            <div className="flex gap-5 text-lg size-7 pl-80">
                <input type="text" placeholder="what are you looking for?"
                    className="border-1 border-gray-10 rounded-full px-4 py-4" />
                    <button className="text-gray-600 font-normal">
                    <AiOutlineSearch size={25} />
                    </button>
            </div>
        </nav>
    )
}

export default Navbar;