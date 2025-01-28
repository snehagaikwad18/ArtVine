import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { FaArrowLeft } from "react-icons/fa6";
import { MdCurrencyRupee } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const steps = [
    {
        heading: 'ORDER CONFIRMED',
        date: '23-feb-2024',
        shipper: 'FedEX2',
        estimatedDate: '24-feb-2024'
    },

    'SHIPPING',
    'TO DELIVER',
];

const TrackMyOrder = () => {
    return (
        <div className="px-[300px] py-[50px] poppins-regular">
            <div className="p-10 border border-gray-100 shadow-2xl    ">
                {/* Header */}
                <div className="mb-6">

                    <NavLink
                    to="/cart"
                    >
                        <button className="text-gray-500 flex flex-row items-center justify-center gap-2 "><span><FaArrowLeft size={15} /></span> Orders</button>
                    </NavLink>
                    <h1 className="text-2xl font-bold mt-2">Order details #A23D4587 <span className="bg-blue-100 text-[#1A0DAB] px-3 py-1 rounded text-sm poppins-medium ">SHIPPING</span></h1>
                    <p className="text-gray-500">Date: 08/02/2023</p>
                </div>

                {/* Shipping Details */}
                <div className="bg-white  rounded-lg  mb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className='flex flex-col gap-2'>
                            <p className="text-sm text-gray-800">Courier name</p>
                            <p className="font-medium text-gray-700 border p-3 rounded-xl ">Adora Express</p>
                        </div>
                        <div className='flex flex-col gap-2' >
                            <p className="text-sm text-gray-800">Tracking number</p>
                            <p className="font-medium text-gray-700 border p-3 rounded-xl ">SSA4569AEF4592</p>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-2 mt-5">
                        <p className="text-sm text-gray-800">Shipment tracking URL</p>
                        <div className='border p-3 rounded-xl'>

                            <a href="https://www.shipmentlink.com/servlet/TDB1_CargoTracking.do" target="_blank" rel="noopener noreferrer" className="text-[#1A0DAB] underline">
                                https://www.shipmentlink.com/servlet/TDB1_CargoTracking.do
                            </a>
                        </div>
                    </div>
                </div>

                {/* Item Ordered */}
                <h2 className="text-lg font-bold mb-4">Item ordered</h2>
                <div className=" rounded-lg bg-gray-100 py-5 w-full ">
                    <div className="space-y-4 p-5 w-full  ">
                        {/* Item 1 */}
                        <div className=" w-full flex-row flex  items-center justify-center">
                            <div className="flex items-center gap-4 w-[60%]  ">
                                <img src="https://via.placeholder.com/50" alt="Dior Earrings" className="w-[100px] h-[100px] rounded-md object-cover  " />
                                <p className="">Dior Tribales Earrings Front view Beige Multicolor Mizza   </p>
                            </div>
                            <p className="font-medium text-gray-700 w-[20%] text-center">1x</p>
                            <p className="font-medium text-gray-700 w-[20%] text-center flex flex-row items-center justify-center"><MdCurrencyRupee /> 450.00 INR</p>
                        </div>
                        <div className=" w-full flex-row flex  items-center justify-center border-t-[2px] border-gray-300 pt-5">
                            <div className="flex items-center gap-4 w-[60%]  ">
                                <img src="https://via.placeholder.com/50" alt="Dior Earrings" className="w-[100px] h-[100px] rounded-md object-cover  " />
                                <p className="">Dior Tribales Earrings Front view Beige Multicolor Mizza   </p>
                            </div>
                            <p className="font-medium text-gray-700 w-[20%] text-center">1x</p>
                            <p className="font-medium text-gray-700 w-[20%] text-center flex flex-row items-center justify-center"><MdCurrencyRupee /> 450.00 INR</p>
                        </div>
                        {/* Item 2 */}

                    </div>
                    {/* Total */}
                    <div className="flex flex-row items-center justify-center px-10 border-t-[2px] border-gray-300 mx-5">
                        <div className="w-[60%]"></div>
                        <div className="mt-6  pt-4 flex flex-col justify-center  w-[40%] gap-3">
                            <div className="flex items-center justify-between">
                                <p className="text-gray-700">Product Total</p>
                                <p className="font-medium text-gray-700">$900.00 USD</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-gray-700">Shipping cost</p>
                                <p className="font-medium text-green-500">FREE</p>
                            </div>
                            <div className="flex items-center justify-between font- border-t-[2px] border-gray-300 text-gray-900 text-lg pt-3">
                                <p>Total</p>
                                <p>$900.00 USD</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrackMyOrder