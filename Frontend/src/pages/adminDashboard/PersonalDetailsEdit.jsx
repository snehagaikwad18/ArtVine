import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'


const PersonalDetailsEdit = () => {
    const { id } = useParams()

    const [personalDetails, setPersonalDetails] = useState({
        name: "",
        phone: null,
        email: "",
        address: "",
        city: "",
        state: "",
        country: "",
        biography: "",
        artistType: "",
        imageUrl: ""
    })
    const handleUpdate = (e) => {
        e.preventDefault()

        toast.success('Updated Successfully !', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            // transition: Bounce,
        });
    }


    const handleOnChange = (e) => {
        let { name, value } = e.target
        setPersonalDetails((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleDelete = () => {

    }

    // useEffect(()=>{

    // })
    return (

        <div className='w-full h-full bg-white'>
            <ToastContainer />
            <div className="bg-white w- h-[650px]  overflow-y-auto">
                <div className="p-5">
                    <form method='POST' action=""
                        onSubmit={handleUpdate}
                    >
                        <div className="flex flex-col pb-5 px-5 gap-5 w-full">
                            <div className="flex flex-row items-center justify-start gap-5 w-full">
                                <h1 className="text-[20px] font-semibold w-1/4 " >Name :</h1>
                                <textarea required rows="1" cols="50" name="name" id="name" value={personalDetails.name} onChange={handleOnChange} className=" w-full outline-none resize-none shadow-xl border px-5 py-1 rounded-lg">{personalDetails && personalDetails.name}</textarea>
                            </div>
                            <div className=" flex flex-row items-center justify-start gap-5 w-full  text-[15px]  ">
                                <h1 className="text-[20px] font-semibold   w-1/4" >Phone :</h1>
                                <textarea required rows="1" cols="50" name="phone" id="phone" value={personalDetails.phone} onChange={handleOnChange} className=" w-full outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg">{personalDetails && personalDetails.phone}</textarea>
                            </div>

                            <div className=" flex flex-row items-center justify-start gap-5 w-full text-[15px] ">
                                <h1 className="text-[20px] font-semibold w-1/4" >Email :</h1>
                                <textarea required rows="1" cols="50" name="email" id="email" value={personalDetails.email} onChange={handleOnChange} className=" w-full outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg">{personalDetails && personalDetails.email}</textarea>
                            </div>


                            <div className=" flex flex-row items-center justify-start gap-5 w-full text-[15px] pt-1 ">
                                <h1 className="text-[20px] font-semibold w-1/4 " >City :</h1>
                                <textarea required rows="1" cols="50" name="city" id="city" value={personalDetails.city} onChange={handleOnChange} className="   w-full outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg">{personalDetails && personalDetails.city}</textarea>
                            </div>

                            <div className=" flex flex-row items-center justify-start gap-5 w-full text-[15px] pt-1 ">
                                <h1 className="text-[20px] font-semibold w-1/4 " >State :</h1>
                                <textarea required rows="1" cols="50" name="state" id="state" value={personalDetails.state} onChange={handleOnChange} className="   w-full outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg">{personalDetails && personalDetails.state}</textarea>
                            </div>

                            <div className=" flex flex-row items-center justify-start gap-5 w-full text-[15px] pt-1 ">
                                <h1 className="text-[20px] font-semibold w-1/4 " >Country :</h1>
                                <textarea required rows="1" cols="50" name="country" id="country" value={personalDetails.country} onChange={handleOnChange} className="   w-full outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg">{personalDetails && personalDetails.country}</textarea>
                            </div>


                            <div className=" flex flex-row items-center justify-start gap-5 w-full text-[15px] pt-1 ">
                                <h1 className="text-[20px] font-semibold w-1/4 " >Artist:</h1>
                                <textarea required rows="1" cols="50" name="artistType" id="artistType" value={personalDetails.artistType} onChange={handleOnChange} className="   w-full outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg">{personalDetails && personalDetails.artistType}</textarea>
                            </div>

                            <div className=" flex flex-row items-center justify-start gap-5 w-full text-[15px] pt-1 ">
                                <h1 className="text-[20px] font-semibold w-1/4 " >Address :</h1>
                                <textarea required rows="3" cols="50" name="address" id="address" value={personalDetails.address} onChange={handleOnChange} className="   w-full outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg">{personalDetails && personalDetails.address}</textarea>
                            </div>

                            <div className="flex flex-row items-start justify-start gap-5 w-full">
                                <h1 className="text-[20px] font-semibold w-1/4" >Biography : </h1>
                                <textarea required rows="10" cols="50" name="biography" id="biography" value={personalDetails.biography} onChange={handleOnChange} className=" w-full outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg">{personalDetails && personalDetails.biography}</textarea>
                            </div>

                            <div className="w-full flex flex-row items-center justify-center gap-5 pt-5">
                                <button className="text-white bg-[#4A6A7B] h-[40px] rounded-md w-[150px] "
                                    onClick={handleUpdate}
                                >
                                    Update
                                </button>
                                <button className="text-white bg-red-500 h-[40px] rounded-md w-[150px] "
                                    onClick={handleDelete}>
                                    Delete
                                </button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>


    )
}

export default PersonalDetailsEdit