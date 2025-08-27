import React from "react"
import { FaArrowRight } from "react-icons/fa";

const SideBar = () => {
    return (

        <div className="flex pl-44">
            <ul>
                <div className="flex justify-between items-center gap-10 ">
                    <li>Woman's Fashion</li>
                    <FaArrowRight size={12} />
                </div>
                <div className="flex justify-between items-center gap-10 pt-4">
                    <li>Men's Fashion</li>
                    <FaArrowRight size={12} />
                </div>
                <li className="pt-4">Electronics</li>
                <li className="pt-4">Home & Lifestyle</li>
                <li className="pt-4">Medicine</li>
                <li className="pt-4">Sports & Outdoor</li>
                <li className="pt-4">Baby's & Toys</li>
                <li className="pt-4">Groceries & Pets</li>
                <li className="pt-4">Health & Beauty</li>
            </ul>

        </div>

    )
}

export default SideBar;