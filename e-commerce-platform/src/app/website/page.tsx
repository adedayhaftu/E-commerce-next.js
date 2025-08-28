'use client'
import SideBar from "./components/SideBar";
import HomePage from "./components/HomePage";
import Header from "../sharedComponent/Header";
import Navbar from "../sharedComponent/Navbar";
import Sales from "./components/Sales";
import Category from "./components/Category";
import BestProducts from "./components/BestProducts";
import ExploreProducts from "./components/ExploreProducts";
import NewArrival from "./components/NewArrival";
import Footer from "../sharedComponent/Footer";


const WebHome =() =>{
    return(
        <div>
          
            <Header/>
            <Navbar/>
            <div className="flex">
            <SideBar/>
            <HomePage/>
            </div>
            <Sales/>
            <Category/>
            <BestProducts/>
            <ExploreProducts/>
            <NewArrival/>
            <Footer/>
        </div>
    )
}
export default WebHome;