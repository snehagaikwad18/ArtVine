import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
    return (
        <div className='px-10 bg-black text-white flex flex-row justify-between items-center pt-[100px]'>
            <div className="border-t border-[#9EC4BD] bg-black w-full p-5 py-10">
                <div className="flex flex-row justify-center items-center gap-5">
                    <div className="flex flex-row justify-between items-center w-full poppins-regular ">
                        <h1 className='text-[#9EC4BD] text-[25px] playfair-display-regular'>I.Aivazovsky</h1>
                        <h1>Biography</h1>
                        <h1>Works</h1>
                        <h1>Custom Art</h1>
                        <h1>Testimonialss</h1>
                        <h1>Track Order</h1>
                        <div className="flex flex-row gap-2">
                            <FiTwitter />
                            <FaInstagram />
                            <LuFacebook />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer