
import work1 from '../../public/work1.jpg'
import work2 from '../../public/work2.jpg'
import work3 from '../../public/work3.jpg'
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Work = () => {
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
    return (
        <div className='bg-[#0C1013] text-white px-[50px] py-[30px] '>
            <h1 className="font-bold text-[50px] tracking-wider">Works</h1>
            <div className="border-t-[3px] border-[#9EC4BD] w-[100px] pb-2 "></div>
            <div className="flex flex-row items-center justify-between pt-[100px]">
                <h1>Landscapes</h1>
                <h1>Orientalist Themes</h1>
                <h1>Seascapes</h1>
                <h1>Religeous Paintings</h1>
                <h1>Armenian Themes</h1>
            </div>
            <div className="grid  grid-cols-[330px_auto_330px] gap-[85px] gap-y-[90px] pt-[70px] ">
                {
                    work.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="flex flex-col gap-2">
                                <div
                                    className="p-10 bg-white h-[400px]"
                                    style={{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                                <h1 className='text-[#9EC4BD] flex flex-row items-center poppins-regular '><MdKeyboardDoubleArrowLeft /> {`${item.name}`}<MdKeyboardDoubleArrowRight />, {`${item.year}`}</h1>
                            </div>
                        )
                    })
                }

            </div>
            <p className='text-[#9EC4BD] text-[18px] text-center pt-20'>View more -</p>

        </div>
    )
}

export default Work