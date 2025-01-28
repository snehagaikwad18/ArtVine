import { useState } from 'react'
import { HiOutlineXMark } from 'react-icons/hi2'
import { ToastContainer, toast } from 'react-toastify'
import usePaintingStore from '../../PaintingStore'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



const NewArt = () => {
    const navigate = useNavigate()
    const [error, setError] = useState({})
    const [data, setData] = useState({
        title: "",
        height: 0,
        width: 0,
        category: "",
        medium: "",
        available_stock: 0,
        rating: 0,
        price: 0,
        image_url: "",
    });
    
    const addNewPainting = usePaintingStore((state) => state.addPainting);


    const onChangeInput = (e) => {
        const { name, value } = e.target
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }))
        setError((prevErr) => ({
            ...prevErr,
            [name]: ""
        }))
    }

    const validateInput = () => {
        const newErrors = {}

        for (const [key, value] of Object.entries(data)) {
            if (!value) {
                newErrors[key] = `${key} is required`
            }
        }
        setError(newErrors)
        let isError = Object.keys(newErrors).length === 0
        return isError;
    }

    const postData = async (data) => {
        const url = "http://localhost:8080/api/admin/arts/new"
        try {
            const res = await axios.post(url, data)
            const responseData = res.data
            console.log("response : ", responseData)
            return responseData
        } catch (error) {
            console.log(error)
            throw error

        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const isValidate = validateInput()
        console.log("this is isvalidate function", isValidate)

        if (!isValidate) {
            return
        }

        try {
            const savedPaintings = await postData(data)
            console.log("savedPaintings : : ", savedPaintings)
            console.log("this is formdata", data)
            addNewPainting(savedPaintings)

            toast.success('Added Successfully !', {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                // transition: Bounce,
            });

            setData({
                title: "",
                height: 0,
                width: 0,
                category: "",
                medium: "",
                available_stock: 0,
                rating: 0,
                price: 0,
                image_url: "",
            })

            setTimeout(() => {
                navigate("/admin/arts")
            }, 2500)

        } catch (error) {
            console.log(error)
            toast.error('Something Wrong', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            throw error
        }
    }



    return (
        <div className='w-full h-full bg-white'>
            <ToastContainer />
            <div className="bg-white w- h-[650px]  overflow-y-auto">
                <div className="p-5">
                    <form method="post" action='/admin/arts'
                        onSubmit={handleSubmit}
                        noValidate
                        className='needs-validation'
                    >
                        <div className="flex flex-col pb-5 px-5 gap-5 w-full">
                            <div className="flex flex-row items-center justify-start gap-5 w-full">
                                <label htmlFor='title' className="text-[20px] font-semibold w-1/4 " >Name :</label>
                                <div className="flex flex-col justify-start items-start w-full gap-2">
                                    <input onChange={onChangeInput} required value={data.title} name="title" id="title" className=" w-full outline-none resize-none shadow-xl border px-5 py-1 rounded-lg"></input>
                                    {error.title && (<p className=' pl-1 text-red-500 text-[15px]'>{error.title}</p>)}
                                </div>
                            </div>


                            <div className="flex flex-row items-center justify-start gap-5 w-full">
                                <label htmlFor="height" className="text-[20px] font-semibold w-1/4 text-nowrap  " >Dimensions : </label >
                                <div className="flex flex-col justify-start items-start w-full gap-2">
                                    <div className="flex flex-row items-center justify-start gap-2 w-full">
                                        <div className="flex flex-col justify-start items-start  gap-2">
                                            <input onChange={onChangeInput} required value={data.height} name="height" id="height" className="  outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg w-[150px]"></input>
                                            {error.height && (<p className=' text-red-500 text-[15px]'>{error.height}</p>)}
                                        </div>

                                        <label htmlFor="width" className="  text-[15px] text-[#575757] flex flex-row justify-center items-center "><HiOutlineXMark /></label >

                                        <div className="flex flex-col justify-start items-start  gap-2">
                                            <input onChange={onChangeInput} required value={data.width} name="width" id="width" className="  outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg w-[150px]"></input>
                                            {error.width && (<p className='  text-red-500 text-[15px]'>{error.width}</p>)}
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-[50px] px-1">
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-row items-center justify-start gap-5 w-full">
                                <label htmlFor="category" className="text-[20px] font-semibold w-1/4" >Category : </label >
                                <div className="flex flex-col justify-start items-start w-full gap-2">
                                    <input onChange={onChangeInput} required value={data.category} name="category" id="category" className=" w-full outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg"></input>
                                    {error.category && (<p className=' pl-1 text-red-500 text-[15px]'>{error.category}</p>)}
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-start gap-5 w-full">
                                <label htmlFor="medium" className="text-[20px] font-semibold w-1/4" >Medium : </label >
                                <div className="flex flex-col justify-start items-start w-full gap-2">
                                    <input onChange={onChangeInput} required value={data.medium} name="medium" id="medium" className=" w-full outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg"></input>
                                    {error.medium && (<p className=' pl-1 text-red-500 text-[15px]'>{error.medium}</p>)}
                                </div>
                            </div>

                            <div className="flex flex-row items-center justify-start gap-5 w-full">
                                <label htmlFor="available_stock" className="text-[20px] font-semibold w-1/4" >Stock : </label >
                                <div className="flex flex-col justify-start items-start w-full gap-2">
                                    <input onChange={onChangeInput} required value={data.available_stock} name="available_stock" id="available_stock" className=" w-full outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg"></input>
                                    {error.available_stock && (<p className=' pl-1 text-red-500 text-[15px]'>{error.available_stock}</p>)}
                                </div>
                            </div>

                            <div className="flex flex-row items-center justify-start gap-5 w-full">
                                <label htmlFor="rating" className="text-[20px] font-semibold w-1/4" >Rating : </label >
                                <div className="flex flex-col justify-start items-start w-full gap-2">
                                    <input onChange={onChangeInput} required value={data.rating} name="rating" id="rating" className=" w-full outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg"></input>
                                    {error.rating && (<p className=' pl-1 text-red-500 text-[15px]'>{error.rating}</p>)}
                                </div>
                            </div>

                            {/* <div className="flex flex-row items-center justify-start gap-5 w-full">
                                <label htmlFor="" className="text-[20px] font-semibold w-1/4" >Review : </label >
                                <input name="name" id="name" className=" w-full outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg">
                                </input>
                                </div> */}

                            <div className=" flex flex-row items-center justify-start gap-5 w-full  text-[15px]  ">
                                <label htmlFor='price' className="text-[20px] font-semibold   w-1/4" >Price :</label>
                                <div className="flex flex-col justify-start items-start w-full gap-2">
                                    <input onChange={onChangeInput} required value={data.price} name="price" id="price" className=" w-full outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg"></input>
                                    {error.price && (<p className=' pl-1 text-red-500 text-[15px]'>{error.price}</p>)}
                                </div>
                            </div>

                            <div className="flex flex-row items-start justify-start gap-5 w-full ">
                                <label htmlFor="image_url" className="text-[20px] font-semibold w-1/4 text-nowrap " >Painting url:</label >
                                <div className="flex flex-col justify-start items-start w-full gap-2">
                                    <input onChange={onChangeInput} required value={data.image_url} name="image_url" id="image_url" rows="3" cols="50" className=" outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg text-[15px] text-[#3050c7] w-full "></input>
                                    {error.image_url && (<p className=' pl-1 text-red-500 text-[15px]'>{error.image_url}</p>)}
                                </div>
                            </div>

                            <div className="flex flex-row items-center justify-center gap-5 w-full">
                                <button className="w-fit h-[50px] bg-[#4A6A7B] text-white px-10 text-center rounded-xl">Add</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewArt