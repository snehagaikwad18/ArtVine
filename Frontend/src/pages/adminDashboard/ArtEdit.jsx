
import { HiOutlineXMark } from 'react-icons/hi2'
import { toast, ToastContainer } from 'react-toastify'
import usePaintingStore from '../../PaintingStore'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

const ArtEdit = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const removePainting = usePaintingStore((state) => state.removePainting)

  const [artData, setArtData] = useState({
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

  const handleDelete = async () => {
    const url = "http://localhost:8080/api/admin/arts/"
    try {
      const res = await axios.delete(`${url}${id}`)
      console.log("deleted :", res.data)

      removePainting(id)

      toast.success('Deleted Successfully !', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce,
      });

      setTimeout(() => {
        navigate("/admin/arts")
      }, 2000)

    } catch (error) {
      console.log(error)
      throw error
    }

  }

  const handleUpdate = (e) => {
    e.preventDefault()
    console.log("updated id :", id)
    toast.success('Updated Successfully !', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
    });
  }

  const getdata = () => {
    if (artData) {
      console.log("thi is  art data ::", artData)
    }
  }

  useEffect(() => {
    const getPaintingDetails = async () => {
      const url = "http://localhost:8080/api/admin/arts/"
      const res = await axios.get(`${url}${id}`)
      console.log("this is get data :", res.data)
      setArtData(res.data)
    }

    getPaintingDetails()
  }, [])
  return (
    <div className='w-full h-full bg-white'>
      <ToastContainer />
      <div className="bg-white w- h-[650px]  overflow-y-auto">
        <div className="p-5">

          <button onClick={getdata} >get data</button>
          <form method="POST" action=""
            onSubmit={handleUpdate}
          >
            <div className="flex flex-col pb-5 px-5 gap-5 w-full">
              <div className="flex flex-row items-center justify-start gap-5 w-full">
                <h1 className="text-[20px] font-semibold w-1/4 " >Name :</h1>
                <textarea required rows="1" cols="50" name="title" id="title" value={artData.title} className=" w-full outline-none resize-none shadow-xl border px-5 py-1 rounded-lg">{artData && artData.title}</textarea>
              </div>


              <div className="flex flex-row items-center justify-start gap-5 w-full">
                <label htmlFor="" className="text-[20px] font-semibold w-1/4 text-nowrap  " >Dimensions : </label >
                <div className="flex flex-row items-center justify-start gap-2 w-full">
                  <textarea required rows="1" cols="50" name="height" id="height" value={artData.height} className="  outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg w-[80px]">{artData && artData.height}</textarea>
                  <label htmlFor="" className="  text-[15px] text-[#575757] flex flex-row justify-center items-center "><HiOutlineXMark /></label >
                  <textarea required rows="1" cols="50" name="width" id="width" value={artData.width} className="  outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg w-[80px]">{artData && artData.width}</textarea>
                </div>
              </div>

              <div className="flex flex-row items-center justify-start gap-5 w-full">
                <label htmlFor="category" className="text-[20px] font-semibold w-1/4" >Category : </label >
                <textarea required rows="1" cols="50" name="category" id="category" value={artData.category} className=" w-full outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg">{artData && artData.category}</textarea>
              </div>

              <div className="flex flex-row items-center justify-start gap-5 w-full">
                <label htmlFor="" className="text-[20px] font-semibold w-1/4" >Medium : </label >
                <textarea required rows="1" cols="50" name="medium" id="medium" value={artData.medium} className=" w-full outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg">{artData && artData.medium}</textarea>
              </div>

              <div className="flex flex-row items-center justify-start gap-5 w-full">
                <label htmlFor="" className="text-[20px] font-semibold w-1/4" >Stock : </label >
                <textarea required rows="1" cols="50" name="stock" id="stock" value={artData.available_stock} className=" w-full outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg">{artData && artData.available_stock}</textarea>
              </div>

              <div className="flex flex-row items-center justify-start gap-5 w-full">
                <label htmlFor="" className="text-[20px] font-semibold w-1/4" >Rating : </label >
                <textarea required rows="1" cols="50" name="rating" id="rating" value={artData.rating} className=" w-full outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg">{artData && artData.rating}</textarea>
              </div>

              {/* <div className="flex flex-row items-center justify-start gap-5 w-full">
                <label htmlFor="" className="text-[20px] font-semibold w-1/4" >Review : </label >
                <textarea required rows="1" cols="50" name="name" id="name" className=" w-full outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg">
                  i love this painting
                </textarea>
              </div> */}

              <div className=" flex flex-row items-center justify-start gap-5 w-full  text-[15px]  ">
                <h1 className="text-[20px] font-semibold   w-1/4" >Price :</h1>
                <textarea required rows="1" cols="50" name="price" id="price" value={artData.price} className=" w-full outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg">{artData && artData.price}</textarea>
              </div>

              <div className="flex flex-row items-start justify-start gap-5 w-full ">
                <label htmlFor="image_url" className="text-[20px] font-semibold w-1/4 text-nowrap " >Painting url:</label >
                <textarea rows="3" cols="50" name="image_url" id="image_url" value={artData.image_url} className=" outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg text-[15px] text-[#3050c7] w-full ">{artData && artData.image_url}</textarea>
              </div>

              <div className="w-full gap-5 flex flex-row items-center justify-center pt-5">
                <button className="text-white bg-[#4A6A7B] h-[40px] rounded-md w-[150px] "
                  onClick={handleUpdate}
                >
                  Update
                </button>
              </div>
            </div>
          </form>

          <button className="text-white bg-red-500 h-[40px] rounded-md w-[150px] "
            onClick={handleDelete}
          >
            Delete
          </button>


        </div>
      </div>
    </div>
  )
}

export default ArtEdit