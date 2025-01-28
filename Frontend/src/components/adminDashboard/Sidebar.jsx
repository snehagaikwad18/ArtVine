import { TbSquarePlus2 } from "react-icons/tb";
import { MdOutlinePlaylistRemove } from "react-icons/md";
import { TfiLayoutCtaBtnLeft } from "react-icons/tfi";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { RiFileList3Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { color } from "framer-motion";
import { BsPersonVcard } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiPaintBucket } from "react-icons/gi";
import { IoColorPaletteOutline } from "react-icons/io5";

const Sidebar = () => {

    const navLinkStyle = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'normal' : 'bold',
            color: isActive ? 'white' : '#575757',
            backgroundColor: isActive ? '#4A6A7B' : '#E9EEF5'

        }

    }
    return (
        <div className=' w-full h-full px-5 flex flex-col gap-3' >
            <NavLink to="/admin/personal-details"
                style={navLinkStyle}
                className="w-full h-[8%] rounded-lg bg-[#E9EEF5]  flex flex-row gap-3 items-center justify-start px-8 text-nowrap" >
                <BsPersonVcard size={25} />
                Personal Details
            </NavLink>

            <NavLink to="/admin/orders"
                style={navLinkStyle}
                className="w-full h-[8%] rounded-lg bg-[#E9EEF5]  flex flex-row gap-3 items-center justify-start px-8 " >
                <AiOutlineShoppingCart size={25} />
                Orders
            </NavLink>

            <NavLink to="/admin/arts"
                style={navLinkStyle}
                className="w-full h-[8%] rounded-lg bg-[#E9EEF5]  flex flex-row gap-3 items-center justify-start px-8" >
                <IoColorPaletteOutline size={25} />
                Arts
            </NavLink>

        </div >
    )
}

export default Sidebar