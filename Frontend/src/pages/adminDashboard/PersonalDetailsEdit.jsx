import React from 'react'
import { NavLink } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

const PersonalDetailsEdit = () => {
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
                                <textarea required rows="1" cols="50" name="name" id="name" className=" w-full outline-none resize-none shadow-xl border px-5 py-1 rounded-lg">Sneha Gaikwad</textarea>
                            </div>
                            <div className=" flex flex-row items-center justify-start gap-5 w-full  text-[15px]  ">
                                <h1 className="text-[20px] font-semibold   w-1/4" >Phone :</h1>
                                <textarea required rows="1" cols="50" name="name" id="name" className=" w-full outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg">+91 8989760222</textarea>
                            </div>

                            <div className=" flex flex-row items-center justify-start gap-5 w-full text-[15px] ">
                                <h1 className="text-[20px] font-semibold w-1/4" >Email :</h1>
                                <textarea required rows="1" cols="50" name="name" id="name" className=" w-full outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg">snehagaikwad@work.com</textarea>
                            </div>

                            <div className=" flex flex-row items-center justify-start gap-5 w-full text-[15px] pt-1 ">
                                <h1 className="text-[20px] font-semibold w-1/4 " >Address :</h1>
                                <textarea required rows="3" cols="50" name="name" id="name" className="   w-full outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg">eg. 1234 Elm Street Springfield, CA 98765 ,Maharastra</textarea>
                            </div>

                            <div className="flex flex-row items-start justify-start gap-5 w-full">
                                <h1 className="text-[20px] font-semibold w-1/4" >Biography : </h1>
                                <textarea required rows="10" cols="50" name="name" id="name" className=" w-full outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg">A Ukrainian painter of Armenian descent of late Romanticism who is considered one of the greatest masters of marine art. Baptized as Hovhannes Aivazian, he was born into an Armenian family in the Black Sea port of Feodosia in Crimea and was mostly based there.
                                    One of the most prominent Russian artists of his time, Aivazovsky was also popular outside the Russian Empire. He held numerous solo exhibitions in Europe and the United States. During his almost 60-year career, he created around 6,000 paintings, making him one of the most prolific artists of his time.
                                    Most of Aivazovsky's works are kept in Russian, Ukrainian and Armenian museums as well as private collections.
                                </textarea>
                            </div>
                            <div className="w-full flex items-center justify-center pt-5">
                                <button className="text-white bg-[#4A6A7B] h-[40px] rounded-md w-[150px] ">
                                    Update
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