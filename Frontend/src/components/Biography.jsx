import { RiDoubleQuotesL } from "react-icons/ri";

const Biography = () => {
    return (
        <div id="biography" className='h-screen bg-[#0C1013] pt-5 text-white flex flex-col justify-between items-center gap-10 '>
            <div className=" h-1/2 w-full flex flex-row justify-center  items-center gap-10   ">
                <div className="w-1/3   h-full flex items-center justify-start px-10 relative mt-[90px] mb-5 ">
                    <div className="w-[350px] h-[350px] bg-[#9EC4BD] absolute top-[20px] left-[60px]" />
                    <div className="w-[350px] h-[350px] bg-black absolute bg-[url('/artist.jpg')] bg-cover bg-no-repeat" />
                </div>

                <div className="w-2/4 h-full flex flex-col gap-2">
                    <h1 className="font-bold text-[50px] tracking-wider">Biography</h1>
                    <div className="border-t-[3px] border-[#9EC4BD] w-[100px] pb-2 "></div>
                    <div className="flex flex-col gap-5">
                        <p className=" poppins-regular w-[600px] text-[16px] " >A Ukrainian painter of Armenian descent of late Romanticism who is considered one of the greatest masters of marine art. Baptized as Hovhannes Aivazian, he was born into an Armenian family in the Black Sea port of Feodosia in Crimea and was mostly based there.</p>

                        <p className=" poppins-regular w-[600px] text-[16px] " >One of the most prominent Russian artists of his time, Aivazovsky was also popular outside the Russian Empire. He held numerous solo exhibitions in Europe and the United States. During his almost 60-year career, he created around 6,000 paintings, making him one of the most prolific artists of his time.</p>

                        <p className=" poppins-regular w-[600px] text-[16px] " >Most of Aivazovsky's works are kept in Russian, Ukrainian and Armenian museums as well as private collections.</p>
                    </div>


                </div>
            </div>

            <div className="flex flex-col w-full h-1/2 pt-8 ">
                <div className="px-[190px]">
                    <RiDoubleQuotesL size={90} className="text-[#9EC4BD]" />
                </div>
                <h1 className=" -mt-3 text-center text-[18px]">A person who is not gifted with a memory that preserves the impressions of nature can be an excellent copier, <br /> but never a true artist. The movements of the living nature are imperceptible for the brush: to paint lightning, <br /> a gust of wind, a surge of waves is unthinkable from nature.</h1>
                <div className="flex items-center justify-center flex-col pt-8 ">
                    <div className="border-t-[2px] border-[#9EC4BD] px-7 pb-2"></div>
                    <p className='text-[#9EC4BD] text-center text-[20px] leading-[95px] px-6  -mt-[35px]'>Ivan Aivazovsky</p>
                </div>
            </div>
        </div>
    )
}

export default Biography