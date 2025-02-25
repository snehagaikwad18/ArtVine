import { BiRupee } from 'react-icons/bi'
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom'
import usePaintingStore from '../../PaintingStore'
import { useEffect } from 'react'
import axios from 'axios'

const OngoingOrderListing = () => {
  const allPaintings = usePaintingStore((state) => state.paintings)
  const location = useLocation()
  const { id } = useParams()

  const setPainting = usePaintingStore((state) => state.setPainting)

  const isPathNew = location.pathname === "/admin/arts/new"

  const handleNewArt = () => {
    console.log("this is location: ", location)
  }


  useEffect(() => {
    const fetchData = async () => {
      const url = "http://localhost:8080/api/admin/arts"
      try {
        await axios.get(url)
          .then((res) => {
            console.log("data fetched successfully", res.data)
            setPainting(res.data)
          })
          .catch((err) => {
            console.log("this is error : ", err)
          })
      } catch (error) {
        console.log("this is error : ", error)
      }
    }
    fetchData()
  }, [])


  return (
    <div className="w-full h-full">
      {id ? (
        // Render Outlet for the child route
        <div className="w-full h-full bg-white">
          <Outlet />
        </div>
      ) : isPathNew ? (
        <div className="">
          <Outlet />
        </div>
      ) : (
        // Render the main list when `id` is not present
        <div className="w-full h-[650px] shadow-lg bg-white p-5 overflow-y-auto" >
          <div className="w-full flex flex-row justify-end items-center">
            <NavLink
              to="/admin/arts/new"
              className="bg-[#4A6A7B]  h-[35px] rounded-md text-center"
            >
              <button className="text-white bg-[#4A6A7B] px-5 py-1 w-[110px] text-nowrap text-center h-[35px] rounded-md"
                onClick={handleNewArt}
              >
                Add New
              </button>
            </NavLink>
          </div>
          <h1 className='text-red-500 font-bold ' >Add enable disabled button to show arts on frontend </h1>
          {
            allPaintings ? allPaintings.map((item, index) => {
              return (
                <div key={index} className="flex flex-row items-center justify-between  border-b py-5">
                  <h1 className=' w-1/4 '>#{item._id}</h1>
                  <h1 className="w-1/4  text-start text-[#5C5C5C] text-[13px]">{item.title}</h1>
                  <h1 className="w-1/4  text-start text-[#5C5C5C] text-[13px]">{item.category && item.category || "Category"}</h1>
                  <div className=" w-1/4 text-start flex flex-row items-center ">
                    <BiRupee size={22} className="text-[#5C5C5C]" />
                    <h1 className="text-[#5C5C5C] text-[17px]">{item.price}</h1>
                  </div>
                  <NavLink
                    to={`/admin/arts/${item._id}`}
                    className="bg-[#4A6A7B] w-[10%] h-[35px] rounded-md text-center"
                  >
                    <button className="text-white bg-[#4A6A7B] h-[35px] rounded-md">
                      View
                    </button>
                  </NavLink>
                </div>
              )
            })
              : null
          }
        </div >
      )
      }
    </div >
  )
}

export default OngoingOrderListing

