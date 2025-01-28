import { IoSearch } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";
import Sidebar from "./Sidebar";
import admin from '../../../public/admin.svg'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
const Layout = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const isPathAdmin = location.pathname === "/admin"

    const handleLogout = () => {
        navigate("/")
    }
    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen w-full ">
                <div className="w-full h-[100px] ">
                    <div className="w-full h-full flex items-center justify-between px-5">
                        <NavLink to="/admin" >
                            <h1 className="text-[35px] font-bold bg-gradient-to-r from-[#2B4C6C] via-[#4A6A7B] to-[#A6D4D3] text-transparent bg-clip-text">ArtVine</h1>
                        </NavLink>
                        <div className="w-[300px] h-[40%] rounded-[10px] bg-[#E9EEF5] px-5 flex flex-row items-center justify-start gap-2   ">
                            <IoSearch className="text-[#A4AAB6]" />
                            <input type="text" name="" id="" placeholder="search" className="text-[15px] placeholder:text-[15px] bg-[#E9EEF5] outline-none" />

                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-start w-full h-full poppins-regular ">
                    <div className="w-[22%] h-full">
                        <hr />
                        <div className="sidebar w-full h-[98%] flex flex-col gap-12 justify-between py-5 overflow-y-hidden">
                            <div className="flex flex-col items-center justify-center ">
                                <h1 className="text-[20px] font-semibold">Sneha Gaikwad</h1>
                                <p className="text-[13px] text-[#A4AAB6]">snehagaikwad@work.com</p>
                            </div>
                            <Sidebar />
                            <div className="flex flex-row gap-2 items-center justify-center text-[#575757] font-semibold cursor-pointer"
                                onClick={handleLogout}
                            >
                                <MdOutlineLogout className="font-bold " size={25} />
                                <h1>Logout</h1>
                            </div>
                        </div>
                    </div>
                    {/* bg-[#e1eaed] border-[#c6dfe8] */}
                    <div className="w-full h-full items-center justify-center flex  p-5 pt-3 bg-gray-50  ">
                        <div className="w-full h-full  pt-2 border-t border-t-gray-100  ">
                            <div className=" w-full h-full ">
                                {
                                    isPathAdmin && (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <img src={admin} alt="" className="w-[500px]" />
                                        </div>
                                    )
                                }
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout