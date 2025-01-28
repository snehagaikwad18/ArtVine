import { WiTime3 } from "react-icons/wi";
import { NavLink } from "react-router-dom";
import { IoTodayOutline } from "react-icons/io5";
const OrderListing = () => {
    return (
        <div id="orderListing" className='w-full h-[650px] shadow-lg bg-white p-5 overflow-y-auto' >
            <div className="flex flex-row items-center justify-between border-b  py-5">
                <h1>#A23D4587</h1>
                <h1 className='text-[#5C5C5C] text-[13px] ' >Dispatched</h1>
                <h1 className='text-[#5C5C5C] text-[13px] ' >Landscape</h1>
                <div className="flex flex-row items-center justify- gap-1">
                    <IoTodayOutline size={18} className="text-[#5C5C5C]" />
                    <h1 className="text-[#5C5C5C] text-[15px]">15 JAN 2502</h1>
                </div>
                <NavLink to="/admin/orders/123" className="bg-[#4A6A7B] w-[10%] h-[35px] rounded-md text-center">
                    <button className='text-white bg-[#4A6A7B]  h-[35px] rounded-md'>View</button>
                </NavLink>
            </div>
        </div>
    )
}

export default OrderListing