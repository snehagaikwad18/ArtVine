import React from 'react'
import testinomial1 from '../../public/testinomial1.jpg'
import testinomial2 from '../../public/testinomial2.jpg'
import testinomial3 from '../../public/testinomial3.jpg'
import { RiNumber1 } from "react-icons/ri";

const Testinomial = () => {
    return (
        <div className='bg-[#0C1013] text-white px-[50px] py-[30px] '>
            <h1 className="font-bold text-[50px] tracking-wider">Testinomial</h1>
            <div className="border-t-[3px] border-[#9EC4BD] w-[100px] pb-2 "></div>


            {/* testinomial */}
            <div className="flex flex-col gap-[100px] pt-20 justify-center items-center">
                <div className="flex flex-row items-center justify-center gap-16  w-4/6">
                    <div className=" h-[400px] text-white  ">
                        <img src={testinomial1} alt="" className='w-full h-full  rounded-xl ' /></div>
                    <div className=" w-2/3 flex flex-col gap-3 items-start justify-center poppins-regular text-[18px] ">
                        <p className='w-[600px]' >From being boy Aivazovsky adored music, he used to play folk songs on the violin.</p>
                        <p className='w-[600px]' >Aivazovsky played at Glinka's evening parties time after time. Three melodies heard from Aivazovsky, were included by Glinka in the opera «Ruslan and Lyudmila». In Glinka's «Mirrored Lines» we read: «Aivazovsky let me hear three Tatar tunes, two of them I used later for lezghinka and the third one for Andante of Ratmir's scene in the third act of the «Ruslan and Lyudmila» opera.</p>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center gap-16  w-4/6">
                    <div className=" w-2/3 flex flex-col gap-3 items-start justify-center poppins-regular text-[18px] ">
                        <p className='w-[600px]'>Aivazovsky was an avid painter. He is an author of 6000 paintings. During his lifetime, the artist had 120 personal exhibitions in Russia and abroad. He was only 26 years old when his paintings were shown at the Louvre.</p>

                    </div>
                    <div className=" h-[400px] text-white  ">
                        <img src={testinomial2} alt="" className='w-full h-full  rounded-xl ' /></div>
                </div>
                <div className="flex flex-row items-center justify-center gap-16  w-4/6">
                    <div className=" h-[400px] text-white  ">
                        <img src={testinomial3} alt="" className='w-full h-full  rounded-xl ' />
                    </div>
                    <div className=" w-2/3 flex flex-col gap-3 items-start justify-center poppins-regular text-[18px] ">
                        <p className='w-[600px]' >«Among the Waves» is the biggest painting of Aivazovsky.
                            It is measured 282×425cm. It took only ten days for the artist
                            to paint it. Aivazovsky was 80 years old when he created
                            this painting.</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Testinomial