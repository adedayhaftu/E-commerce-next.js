'use client'
import Image from "next/image";
import Button from "../sharedComponent/Button";
import Footer from "../sharedComponent/Footer";
import Header from "../sharedComponent/Header";
import Navbar from "../sharedComponent/Navbar";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
const Signup = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="flex overflow-y-scroll scrollbar-hide">
        <Image
          src={'/dl.beatsnoop 1.png'}
          alt="Login image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-[50%] h-250 py-20" />
        <div className="pl-50 py-35 w-[35%]">
          <p className="text-[45px]">Create an account</p>
          <p className="text-[20px] mb-5">Enter your details below</p>
          <form>
            <input
              type="text"
              placeholder="Name"
              className="w-full py-5 bg-transparent border-b border-gray-400 focus:outline-none  placeholder-gray-500" />
            <input
              type="email"
              placeholder="Email Or Phone Number"
              className=" w-full py-5 bg-transparent border-b border-gray-400 focus:outline-none  placeholder-gray-500" />
            <input
              type="text"
              placeholder="Password"
              className="w-full py-5 bg-transparent border-b border-gray-400 focus:outline-none  placeholder-gray-500" />
            <div className="my-10 bg-pink-700 rounded p-1">
             <Link href='/home'>  <Button
                buttonText="Create Account"
                variant=""
                onclickHandler={() => alert('You account has successfully created')}
              />
               </Link>
            </div>
            <div className="">
             <Button
                buttonText="Sign up with Google"
                variant="google"
                onclickHandler={() => alert('Google sign up')}
                icon={<FaGoogle size={20} className=" absolute ml-20 bottom-/2 -translate-y-1/50 cursor-poiner " />}
              />
            </div>
            <div className="text-center mt-5">
              Already have account? <span className="underline font-bold" > <Link href='/login'>Login </Link></span>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Signup;