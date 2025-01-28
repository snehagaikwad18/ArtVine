import { HiOutlineXMark } from "react-icons/hi2";
import { toast, ToastContainer } from "react-toastify";

const OrderDetails = () => {
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
      <div className="bg-white w-full h-[650px] pt-3 overflow-y-auto">

        <form method="POST" onSubmit={handleUpdate} >
          <div className="p-5">
            <div className="flex flex-col border-b pb-5 px-5 gap-5 w-full">
              <div className="flex flex-row items-center justify-start gap-5 w-full">
                <label htmlFor="" className="text-[20px] font-semibold w-1/4 " >Name :</label >
                <textarea required rows="1" cols="50" name="name" id="name" className=" w-full outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg">Sneha Gaikwad</textarea>
              </div>

              <div className=" flex flex-row items-center justify-start gap-5 w-full  text-[15px]  ">
                <label htmlFor="" className="text-[20px] font-semibold   w-1/4" >Phone :</label >
                <textarea required rows="1" cols="50" name="name" id="name" className=" w-full outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg">+91 8989760222</textarea>
              </div>

              <div className=" flex flex-row items-center justify-start gap-5 w-full text-[15px] ">
                <label htmlFor="" className="text-[20px] font-semibold w-1/4" >Email :</label >
                <textarea required rows="1" cols="50" name="name" id="name" className=" w-full outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg">snehagaikwad@work.com</textarea>
              </div>

              <div className=" flex flex-row items-center justify-start gap-5 w-full text-[15px] pt-1 ">
                <label htmlFor="" className="text-[20px] font-semibold w-1/4 " >Address :</label >
                <textarea required rows="3" cols="50" name="name" id="name" className="   w-full outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg">eg. 1234 Elm Street Springfield, CA 98765 ,Maharastra</textarea>
              </div>

              <div className="flex flex-row items-center justify-start gap-5 w-full">
                <label htmlFor="" className="text-[20px] font-semibold w-1/4" >Status : </label >
                <textarea required rows="1" cols="50" name="name" id="name" className=" w-full outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg">Dispatched</textarea>
              </div>

              <div className="flex flex-row items-center justify-start gap-5 w-full">
                <label htmlFor="" className="text-[20px] font-semibold w-1/4" >Stock : </label >
                <textarea required rows="1" cols="50" name="name" id="name" className=" w-full outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg">50</textarea>
              </div>

              <div className="flex flex-row items-center justify-start gap-5 w-full">
                <label htmlFor="" className="text-[20px] font-semibold w-1/4 text-nowrap" >Order ID : </label >
                <textarea required rows="1" cols="50" name="name" id="name" className=" w-full outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg">#AB54F5498645132XY89645312</textarea>
              </div>

              <div className="flex flex-row items-center justify-start gap-5 w-full">
                <label htmlFor="" className="text-[20px] font-semibold w-1/4 text-nowrap" >Category : </label >
                <textarea required rows="1" cols="50" name="name" id="name" className=" w-full outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg text-nowrap">Custom</textarea>
              </div>
              <div className="flex flex-row items-center justify-start gap-5 w-full">
                <label htmlFor="" className="text-[20px] font-semibold w-1/4 text-nowrap" >Painting Name : </label >
                <textarea required rows="1" cols="50" name="name" id="name" className=" w-full outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg text-nowrap">Radha Krishna</textarea>
              </div>

              <div className="flex flex-row items-start justify-start gap-5 w-full ">
                <label htmlFor="" className="text-[20px] font-semibold w-1/4 text-nowrap " >Painting url:</label >
                <textarea id="trackingUrl" rows="3" cols="50" name="name" className=" outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg text-[15px] text-[#3050c7] w-full ">https://www.google.com/search?q=+order+tracking+status+ui&sca_esv=36c58403984e1bd9&udm=2&biw=1920&bih=970&sxsrf=</textarea>
              </div>


              <div className="flex flex-row items-center justify-start gap-5 w-full">
                <label htmlFor="" className="text-[20px] font-semibold w-1/4" >Price : </label >
                {/* <label  htmlFor =""  className="  text-[15px] text-[#575757] flex flex-row justify-center items-center "><BiRupee size={18} /></label > */}
                <textarea required rows="1" cols="50" name="name" id="name" className=" w-full outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg">1200.30</textarea>
              </div>

              <div className="flex flex-row items-center justify-start gap-5 w-full">
                <label htmlFor="" className="text-[20px] font-semibold w-1/4" >Due Date : </label >
                <textarea required rows="1" cols="50" name="name" id="name" className=" w-full outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg">15 jan 2025</textarea>
              </div>

              <div className="flex flex-row items-center justify-start gap-5 w-full">
                <label htmlFor="" className="text-[20px] font-semibold w-1/4 text-nowrap  " >Dimensions : </label >
                <div className="flex flex-row items-center justify-start gap-2 w-full">
                  <textarea required rows="1" cols="50" name="name" id="name" className="  outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg w-[80px]">20</textarea>
                  <label htmlFor="" className="  text-[15px] text-[#575757] flex flex-row justify-center items-center "><HiOutlineXMark /></label >
                  <textarea required rows="1" cols="50" name="name" id="name" className="  outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg w-[80px]">30</textarea>
                </div>
              </div>

              <div className="flex flex-row items-center justify-start gap-5 w-full">
                <label htmlFor="" className="text-[20px] font-semibold w-1/4" >Coupon Code : </label >
                <textarea required rows="1" cols="50" name="name" id="name" className=" w-full outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg">Ahgfu</textarea>
              </div>

              <div className="flex flex-row items-center justify-start gap-5 w-full">
                <label htmlFor="" className="text-[20px] font-semibold w-1/4" >Discount : </label >
                <textarea required rows="1" cols="50" name="name" id="name" className=" w-full outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg">50</textarea>
              </div>

              <div className="flex flex-row items-center justify-start gap-5 w-full">
                <label htmlFor="" className="text-[20px] font-semibold w-1/4" >Total Price : </label >
                <textarea required rows="1" cols="50" name="name" id="name" className=" w-full outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg">2000</textarea>
              </div>
              <div className="flex flex-row items-center justify-start gap-5 w-full">
                <label htmlFor="" className="text-[20px] font-semibold w-1/4" >Quantity : </label >
                <textarea required rows="1" cols="50" name="name" id="name" className=" w-full outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg">20</textarea>
              </div>

              <div className="flex flex-row items-center justify-start gap-5 w-full">
                <label htmlFor="" className="text-[20px] font-semibold w-1/4" >Payment Mode : </label >
                <textarea required rows="1" cols="50" name="name" id="name" className=" w-full outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg">Cash</textarea>
              </div>

              <div className="flex flex-row items-center justify-start gap-5 w-full">
                <label htmlFor="" className="text-[20px] font-semibold w-1/4" >Medium : </label >
                <textarea required rows="1" cols="50" name="name" id="name" className=" w-full outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg">Oil on canvas</textarea>
              </div>

              <div className="flex flex-row items-center justify-start gap-5 w-full">
                <label htmlFor="" className="text-[20px] font-semibold w-1/4" >Style : </label >
                <textarea required rows="1" cols="50" name="name" id="name" className=" w-full outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg">Traditional</textarea>
              </div>

              <div className="flex flex-row items-center justify-start gap-5 w-full">
                <label htmlFor="" className="text-[20px] font-semibold w-1/4" >Other Information : </label >
                <textarea required rows="1" cols="50" name="name" id="name" className=" w-full outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg">Handle with care</textarea>
              </div>

              <div className="flex flex-row items-center justify-start gap-5 w-full">
                <label htmlFor="" className="text-[20px] font-semibold w-1/4" >Courier Name : </label >
                <textarea required rows="1" cols="50" name="name" id="name" className=" w-full outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg">BlueDart</textarea>
              </div>

              <div className="flex flex-row items-center justify-start gap-5 w-full">
                <label htmlFor="" className="text-[20px] font-semibold w-1/4 text-nowrap" >Tracking Number : </label >
                <textarea required rows="1" cols="50" name="name" id="name" className=" w-full  outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg">896453120845</textarea>
              </div>

              <div className="flex flex-row items-start justify-start gap-5 w-full ">
                <label htmlFor="" className="text-[20px] font-semibold w-1/4 text-nowrap " >Tracking url:</label >
                <textarea id="trackingUrl" rows="3" cols="50" name="name" className=" outline-none resize-none shadow-2xl border px-5 py-1 rounded-lg text-[15px] text-[#3050c7] w-full ">https://www.google.com/search?q=+order+tracking+status+ui&sca_esv=36c58403984e1bd9&udm=2&biw=1920&bih=970&sxsrf=</textarea>
              </div>

            </div>
          </div>

          {/* buttons */}
          <div className="flex flex-row items-center justify-center gap-5 w-full">
            <button className="w-fit h-[50px] bg-[#4A6A7B] text-white px-10 text-center rounded-xl">Change Status</button>
          </div>
        </form>
      </div>
    </div >
  )
}

export default OrderDetails