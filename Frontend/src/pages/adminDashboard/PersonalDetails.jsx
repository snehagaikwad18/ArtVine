import { IoTodayOutline } from "react-icons/io5";
import { NavLink, Outlet, useParams } from "react-router-dom";

const PersonalDetails = () => {
  const { id } = useParams(); // Extract `id` from route params

  return (
    <div className="w-full h-full">
      {id ? (
        // Render Outlet for the child route
        <div className="w-full h-full bg-white">
          <Outlet />
        </div>
      ) : (
        // Render the main list when `id` is not present
        <div className="w-full h-[650px] shadow-lg bg-white p-5 overflow-y-auto">
          <div className="flex flex-row items-center justify-between border-b py-5">
            <h1>Sneha Gaikwad</h1>
            <h1 className="text-[#5C5C5C] text-[13px]">Painter & Sculptor</h1>
            <h1 className="text-[#5C5C5C] text-[13px]">Mumbai</h1>
            <div className="flex flex-row items-center gap-1">
              <IoTodayOutline size={18} className="text-[#5C5C5C]" />
              <h1 className="text-[#5C5C5C] text-[15px]">15 JAN 1996</h1>
            </div>
            <NavLink
              to="/admin/personal-details/tyugf7"
              className="bg-[#4A6A7B] w-[10%] h-[35px] rounded-md text-center"
            >
              <button className="text-white bg-[#4A6A7B] h-[35px] rounded-md">
                View
              </button>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalDetails;
