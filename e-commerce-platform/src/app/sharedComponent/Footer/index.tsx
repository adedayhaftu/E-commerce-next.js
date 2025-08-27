import { FaTelegramPlane } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
    return (
        <footer className="bg-black text-white ">
            <div className="flex justify-around items-center p-1 pb-10">
                <div className="">
                    <h1 className="text-xl font-bold mb-3">Exclusive</h1>
                    <p className="mb-3 font-semi-bold">Subscribe</p>
                    <p className="mb-4 text-sm text-gray-300">Get 10% off youe first order</p>
                    <form className="relative w-50">
                        <input
                            type="email"
                            className=" outline w-full py-2 pl-4 pr-12 rounded "
                            placeholder="Enter your email"
                        />
                        <FaTelegramPlane
                            size={20}
                            className=" absolute right-4 top-1/2 -translate-y-1/2 cursor-poiner"
                        />
                    </form>
                </div>
                <div className="flex-col space-y-3">
                    <h1 className="text-xl font-semi-bold ">Support</h1>
                    <p className="text-gray-300 text-sm "> 111 Bijoy sarani,Dhaka,DH 1515, Bangladesh.</p>
                    <p className="text-gray-300 text-sm  ">Exclusive@gmail.com</p>
                    <p className="text-gray-300 text-sm">+88015-88888-9999</p>
                </div>
                <div className="flex-col mt-14 ">
                    <h1 className="text-xl font-semi-bold mb-3">Account</h1>
                    <ul className="space-y-3 text-sm">
                        <li><Link href={'/'} className="hover:underline">My Account</Link></li>
                        <li><Link href={'/'} className="hover:underline">Login/Register </Link></li>
                        <li><Link href={'/'} className="hover:underline">Cart </Link></li>
                        <li> <Link href={'/'} className="hover:underline">Wishlist </Link></li>
                        <li><Link href={'/'} className="hover:underline">Shop </Link></li>
                    </ul>
                </div>
                <div className="flex-col mt-8">
                    <h1 className="text-xl font-semi-bold mb-3">Quich Lick</h1>
                    <ul className="space-y-3 text-sm">
                        <li><Link href={'/'} className="hover:underline">Privacy Policy </Link></li>
                        <li><Link href={'/'} className="hover:underline">Terms Of Use </Link></li>
                        <li> <Link href={'/'} className="hover:underline">FAQ </Link></li>
                        <li> <Link href={'/'} className="hover:underline">Contact </Link></li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-xl font-semi-bold mt-6">Download App</h1>
                    <p className="text-sm text-gray-300 mb-3">save $3 with App New User Only</p>
                    <div className="flex gap-3">
                        <div>
                            <Image src={'/Qrcode 1.png'}
                                alt="QR code"
                                width={100}
                                height={100}
                                className="rounded-1g "/>
                        </div>
                        <div>
                            <div>
                                <Image src={'/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png'}
                                    alt="play-app"
                                    width={130}
                                    height={100}
                                    className="rounded-1g " />
                            </div>
                            <div>
                                <Image src={'/download-appstore.png'}
                                    alt="app-store"
                                    width={130}
                                    height={100}
                                    className="rounded-1g pt-4" />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-10 p-5">
                        <FaFacebookF size={20} />
                        <FaTwitter size={20} />
                        <FaInstagram size={20} />
                        <FaLinkedin size={20} />
                    </div>
                </div>
            </div>
            <hr className="text-gray-800 "></hr>
            <p className="flex item-center text-align-center py-1 px-180 text-sm text-gray-500" > <FaCopyright className="my-1 mx-2" />Copyright Rimel 2022. All right reserved</p>
        </footer>
    )
}
export default Footer;