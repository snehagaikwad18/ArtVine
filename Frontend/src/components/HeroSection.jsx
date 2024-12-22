import React from 'react'
import Navbar from './navbar'

const HeroSection = () => {
    return (
        <div className='bg-[url("/homeBg.jpg")] bg-cover bg-center h-screen px-[50px] py-[30px] '>
            <div className="flex flex-row items-center  justify-between">
                <h1 className='text-white text-[25px]'>I.Aivazovsky</h1>
                <Navbar />
                <div className="">
                    {/* buttons */}
                    <button className='bg-white p-2 rounded-md font-semibold px-5 '>Buy Now</button>
                </div>
            </div>
            <div className="px-[140px] flex flex-col  justify-center h-2/3 pt-[59px] ">
                <p className='text-[30px]' >1817 - 1900</p>
                <h1 className='text-[#ffffff]  text-[90px] leading-[95px] px-6 '>Ivan <br />Aivazovsky</h1>
                <br />
                <p className='text-[#9EC4BD] text-[20px] text-end w-[490px]   pr-[50px]'>Read more -</p>
            </div>

        </div>
    )
}

export default HeroSection