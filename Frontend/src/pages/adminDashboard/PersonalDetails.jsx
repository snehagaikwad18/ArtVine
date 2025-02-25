import { useEffect, useState } from "react";
import { IoTodayOutline } from "react-icons/io5";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import usePaintingStore from "../../PaintingStore";
import { HiPlus } from "react-icons/hi";

const PersonalDetails = () => {
  const { id } = useParams(); // Extract `id` from route params
  const isNewPath = location.pathname === "/admin/personal-details/new"
  const allPersonalDetails = usePaintingStore((state) => state.personalDetails)
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    phone: "",
    email: "",
    dob: "",
    address: "",
    city: "",
    state: "",
    country: "",
    biography: "",
    artistType: "",
    imageUrl: ""
  })

  useEffect(() => {


  }, [])

  return (
    <div className="w-full h-full">
      {id ? (
        // Render Outlet for the child route
        <div className="w-full h-full bg-white">
          <Outlet />
        </div>
      ) : isNewPath ? (
        <div className="w-full h-full bg-white">
          <Outlet />
        </div>
      ) : (
        // Render the main list when `id` is not present
        <div className="w-full h-[650px] shadow-lg bg-white p-5 overflow-y-auto">
          <div className="w-full flex flex-row justify-end items-center">
            <NavLink
              to="/admin/personal-details/new"
              className="bg-[#4A6A7B]  h-[35px] rounded-md text-center"
            >
              <button className="text-white bg-[#4A6A7B] px-5 py-1  text-nowrap text-center h-[35px] rounded-md flex flex-row items-center justify-center gap-1"
              // onClick={handleNewDetail}
              >
                <HiPlus fontSize={18}  />
                Add New
              </button>
            </NavLink>
          </div>

          {allPersonalDetails ? allPersonalDetails.map((item) => {
            return (
              <div key={item._id} className="flex flex-row items-center justify-between border-b py-5" >
                <h1>{item.name}</h1>
                <h1 className="text-[#5C5C5C] text-[13px]">{item.artistType}</h1>
                <h1 className="text-[#5C5C5C] text-[13px]">{item.city}</h1>
                <div className="flex flex-row items-center gap-1">
                  <IoTodayOutline size={18} className="text-[#5C5C5C]" />
                  <h1 className="text-[#5C5C5C] text-[15px]">{item.dob}</h1>
                </div>
                <NavLink
                  to={`/admin/personal-details/${id}`}
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

          <div className="flex flex-row items-center justify-between border-b py-5">
            <h1>sneha gaikwad</h1>
            <h1 className="text-[#5C5C5C] text-[13px]">painter & sculptor</h1>
            <h1 className="text-[#5C5C5C] text-[13px]">mumbai</h1>
            <div className="flex flex-row items-center gap-1">
              <IoTodayOutline size={18} className="text-[#5C5C5C]" />
              <h1 className="text-[#5C5C5C] text-[15px]">12/02/2003</h1>
            </div>
            <NavLink
              to={`/admin/personal-details/${id}`}
              className="bg-[#4A6A7B] w-[10%] h-[35px] rounded-md text-center"
            >
              <button className="text-white bg-[#4A6A7B] h-[35px] rounded-md">
                View
              </button>
            </NavLink>
          </div>

        </div>
      )
      }
    </div >
  );
};

export default PersonalDetails;
