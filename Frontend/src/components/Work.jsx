
import work1 from '/work1.jpg'
import work2 from '/work2.jpg'
import work3 from '/work3.jpg'
import { NavLink } from "react-router-dom";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BiRupee } from "react-icons/bi";
import axios from 'axios';
import { useEffect, useState } from 'react';
const Work = () => {
    const [listingData, setListingData] = useState([]);
    const work = [
        {
            img: work1,
            name: 'Storm on the Arctic Ocean',
            year: "1864"
        },
        {
            img: work2,
            name: 'Storm on the Arctic Ocean',
            year: "1864"
        },
        {
            img: work3,
            name: 'Storm on the Arctic Ocean',
            year: "1864"
        },
        {
            img: work1,
            name: 'Storm on the Arctic Ocean',
            year: "1864"
        },
        {
            img: work2,
            name: 'Storm on the Arctic Ocean',
            year: "1864"
        },
        {
            img: work3,
            name: 'Storm on the Arctic Ocean',
            year: "1864"
        },
        {
            img: work1,
            name: 'Storm on the Arctic Ocean',
            year: "1864"
        },
        {
            img: work2,
            name: 'Storm on the Arctic Ocean',
            year: "1864"
        },
        {
            img: work3,
            name: 'Storm on the Arctic Ocean',
            year: "1864"
        },
        {
            img: work1,
            name: 'Storm on the Arctic Ocean',
            year: "1864"
        },
        {
            img: work2,
            name: 'Storm on the Arctic Ocean',
            year: "1864"
        },
        {
            img: work3,
            name: 'Storm on the Arctic Ocean',
            year: "1864"
        },

    ]
    useEffect(() => {
        const fetchListingData = async () => {
            try {
                await axios.get("http://localhost:8080/listings")
                    .then((res) => {
                        setListingData(res.data)
                        console.log("this is frontend responce:", res)
                    })
                    .catch((err) => {
                        console.log("this is err : ", err)
                    })
            } catch (error) {
                console.log("error :", error)
            }
        }

        fetchListingData()
    }, [])


    return (
        <div id='works' className='bg-[#0C1013] text-white px-[50px] py-[30px] '>
            <h1 className="font-bold text-[50px] tracking-wider">Works</h1>
            <div className="border-t-[3px] border-[#9EC4BD] w-[100px] pb-2 "></div>
            <div className="flex flex-row items-center justify-between pt-[100px]">
                <h1>Landscapes</h1>
                <h1>Orientalist Themes</h1>
                <h1>Seascapes</h1>
                <h1>Religeous Paintings</h1>
                <h1>Armenian Themes</h1>
            </div>

            <div className="grid  grid-cols-[330px_auto_330px] gap-[85px] gap-y-[90px] pt-[70px] " >
                {
                    listingData ?
                        listingData.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="flex flex-col gap-2">
                                    <div
                                        className="p-10 bg-white h-[400px]"
                                        style={{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                                    />
                                    <h1 className='text-[#9EC4BD] flex flex-row items-center poppins-regular '><MdKeyboardDoubleArrowLeft /> {`${item.title}`}<MdKeyboardDoubleArrowRight />, <BiRupee size={20} />{`${item.price}`}</h1>
                                    <p>{item.description}</p>
                                    <div className="flex  pt-1">
                                        <NavLink to="/cart" >
                                            <button className=' bg-white font-bold w-fit px-8 text-black py-2 rounded-md text-[13px]'>ADD TO CART </button>
                                        </NavLink>
                                    </div>
                                </div>
                            )
                        })
                        : null
                }
            </div >

            <p className='text-[#9EC4BD] text-[18px] text-center pt-20'>View more -</p>

        </div>
    )
}

export default Work

// {
//     listingData.map((item, index) => {
//         return (
//             <div
//                 key={index}
//                 className="flex flex-col gap-2">
//                 {/* <div
//                                 className="p-10 bg-white h-[400px]"
//                                 style={{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} /> */}
//                 <h1 className='text-[#9EC4BD] flex flex-row items-center poppins-regular '><MdKeyboardDoubleArrowLeft /> {`${item.title}`}<MdKeyboardDoubleArrowRight />, <BiRupee size={20} />{`${item.category}`}</h1>
//                 <div className="flex  pt-1">
//                     <NavLink to="/cart" >
//                         <button className=' bg-white font-bold w-fit px-8 text-black py-2 rounded-md text-[13px]'>ADD TO CART </button>
//                     </NavLink>
//                 </div>
//             </div>
//         )
//     })
// }

//       