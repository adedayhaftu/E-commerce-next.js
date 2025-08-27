'use client'
import Image from "next/image";
import Button from "../sharedComponent/Button";
import Footer from "../sharedComponent/Footer";
import Header from "../sharedComponent/Header";
import Navbar from "../sharedComponent/Navbar";
import Link from "next/link";
const Login = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="flex overflow-y-scroll scrollbar-hide ">
        <Image
          src={'/dl.beatsnoop 1.png'}
          alt="Login image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-[50%] h-250 py-20" />
        <div className="pl-50 py-70 w-[35%]">
          <p className="text-[45px]">Log in to Exclusive</p>
          <p className="text-[20px] mb-5">Enter your details below</p>
          <form>
            <input
              type="email"
              placeholder="Email Or Phone Number"
              className=" w-full py-5 bg-transparent border-b border-gray-400 focus:outline-none  placeholder-gray-500" />
            <input
              type="text"
              placeholder="Password"
              className="w-full py-5 bg-transparent border-b border-gray-400 focus:outline-none  placeholder-gray-500" />
            <div className="flex py-6 justify-between">
              <div className="bg-pink-700 w-30">
               <Link href='/home' ><Button
                  buttonText="Log in"
                  variant=""
                  onclickHandler={() => alert('You have successfully logged in')}
                />
                </Link>
              </div>
              <button className="text-pink-500">
                Forget Password?
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Login;