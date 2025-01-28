import React from 'react'
import { BiUser } from "react-icons/bi";
import { PiHandbagSimple } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import logo from '/logo.jpg'
import { BiSearch } from "react-icons/bi";
import Bag from '../components/cart/Bag';
import CalculatedShipping from '../components/cart/CalculatedShipping';
// import { title } from 'process';
import support from '/support.png'
import chat from '/chat.png'
import gift from '/gift.png'
import DeliveryTruck from '/deliveryTruck.png'
import { NavLink } from 'react-router-dom';


const footerItem = [
    {
        img: DeliveryTruck,
        title: "Free Shipping",
        description: "When you spend $50+",
        bgColor: "bg-pink-100"
    },
    {
        img: support,
        title: "Call Us Anytime",
        description: "+34 555 5555",
        bgColor: "bg-teal-100",
    },
    {
        img: chat,
        title: "Chat With Us",
        description: "We offer 24-hour chat support",
        bgColor: "bg-pink-300"
    },
    {
        img: gift,
        title: "Gift Cards",
        description: "For your loved one, in any amount",
        bgColor: "bg-pink-300"
    },
]

const Cart = () => {
    return (
        <div className='poppins-regular' >
            {/* nav */}
            <div className="py-6 px-8 flex flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-8">
                    <img src={logo} alt="" className='w-[45px] h-[45px]' />
                    <div className="bg-slate-100 p-3 rounded-full w-[500px] flex flex-row items-center gap-2">
                        <BiSearch size={18} />
                        <input type="text" placeholder='Search' className='bg-slate-100 placeholder:text-black outline-none ' />
                    </div>
                </div>
                <div className="flex flex-row items-center justify-end gap-5">
                    <NavLink className="cursor-pointer flex flex-row items-center justify-center gap-1 " to="/cart" > <PiHandbagSimple size={20} /></NavLink>

                    <BiUser size={20} />
                    <IoSettingsOutline size={20} />
                </div>
            </div>
            <div className="bg-slate-100 w-full h-full p-5 px-8 ">
                <h1 className='text-[27px] font-semibold pb-1 ' >Shopping Bag</h1>
                <p> <span className='font-bold  ' >2 Items</span> in your bag.</p>
            </div>

            <div className="bg-slate-100 px-8 pb-10 flex flex-row items-start justify-between w-full h-full">
                <Bag />
                <CalculatedShipping />
            </div>

            {/* footer */}
            <footer className='bg-slate-100 flex flex-row flex-1 items-center justify-between px-8 pb-10' >
                {
                    footerItem.map((item, index) => {
                        return (
                            <div key={index} className="bg-white px-5 py-2 rounded-xl flex flex-row items-center justify-center gap-5  ">
                                <div className={`${item.bgColor} p-10 rounded-full bg-cover bg-no-repeat `}
                                    style={{
                                        backgroundImage: `url(${item.img})`,
                                    }}
                                >
                                    {/* <img src={item.img} alt="" className='w-[100px] h-[100px] ' /> */}
                                </div>
                                <div className="flex flex-col items-start justify-center  ">
                                    <h1 className='font-bold'>{item.title}</h1>
                                    <h1 className='text-gray-400 text-[12px]'>{item.description}</h1>
                                </div>
                            </div>
                        )
                    })
                }
            </footer>
        </div>
    )
}

export default Cart