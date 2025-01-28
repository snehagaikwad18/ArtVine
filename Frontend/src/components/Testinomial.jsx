import { useEffect, useRef } from 'react'
import testinomial1 from '/testinomial1.jpg'
import testinomial2 from '/testinomial2.jpg'
import testinomial3 from '/testinomial3.jpg'
import { BiSolidQuoteLeft } from "react-icons/bi";
import { BiSolidQuoteRight } from "react-icons/bi";
const Testinomial = () => {
    const carouselRef = useRef(null);
    useEffect(() => {
        const scrollInterval = setInterval(() => {
            if (carouselRef.current) {
                const container = carouselRef.current;
                container.scrollBy({ left: 300, behavior: "smooth" });
            }
        }, 1000); // Auto-scroll every 3 seconds

        // Clean up interval on component unmount
        return () => clearInterval(scrollInterval);
    }, []);
    return (
        <div id='testimonials-section' className='px-[50px] py-[30px] '>
            <h1 className="font-bold text-[50px] tracking-wider">Testimonials</h1>
            <div className="border-t-[3px] border-[#9EC4BD] w-[100px] pb-2 "></div>

            <div
                ref={carouselRef}
                id="testimonials"
                className="flex flex-row gap-8 w-full pt-20 overflow-x-auto animate-slide-in"
            >
                {/* Testimonial 1 */}
                <div className="bg-[#D8E9E6] px-5 pt-5 pb-10 text-center rounded-md transform transition-all duration-500 hover:scale-105 animate-fade-in">
                    <div className="text-black">
                        <h1 className="font-bold text-[25px]">Sneha Gaikwad</h1>
                    </div>
                    <div className="relative mt-24">
                        {/* Left Quote Icon */}
                        <div className="absolute -top-[25px] left-[10%] ">
                            <BiSolidQuoteLeft size={50} />
                        </div>

                        {/* Photo of the person */}
                        <div className="absolute -top-[50px] left-[50%] transform -translate-x-1/2 border-[7px] border-[#2B4C6C] p-5 rounded-full w-[120px] h-[120px] bg-[url('/testinomial1.jpg')] bg-cover bg-no-repeat ">
                        </div>

                        {/* Right Quote Icon */}
                        <div className="absolute -top-[25px] right-[10%] ">
                            <BiSolidQuoteRight size={50} />
                        </div>

                        {/* Testimonial Content */}
                        <div className="bg-[#2B4C6C] text-white rounded-2xl p-5 pt-[100px] w-[400px] mx-auto animate-fade-in">
                            <p className="">
                                From being boy Aivazovsky adored music, he used to play folk songs on the violin.
                            </p>
                            <p className="">
                                Aivazovsky played at Glinka's evening parties time after time. Three melodies heard from Aivazovsky were included by Glinka in the opera «Ruslan and Lyudmila». In Glinka's «Mirrored Lines» we read: «Aivazovsky let me hear three Tatar tunes, two of them I used later for lezghinka and the third one for Andante of Ratmir's scene in the third act of the «Ruslan and Lyudmila» opera.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="bg-[#D8E9E6] px-5 pt-5 pb-10 text-center rounded-md transform transition-all duration-500 hover:scale-105 animate-fade-in">
                    <div className="text-black">
                        <h1 className="font-bold text-[25px]">Sneha Gaikwad</h1>
                    </div>
                    <div className="relative mt-24">
                        {/* Left Quote Icon */}
                        <div className="absolute -top-[25px] left-[10%] ">
                            <BiSolidQuoteLeft size={50} />
                        </div>

                        {/* Photo of the person */}
                        <div className="absolute -top-[50px] left-[50%] transform -translate-x-1/2 border-[7px] border-[#2B4C6C] p-5 rounded-full w-[120px] h-[120px] bg-[url('/testinomial2.jpg')] bg-cover bg-no-repeat ">
                        </div>

                        {/* Right Quote Icon */}
                        <div className="absolute -top-[25px] right-[10%] ">
                            <BiSolidQuoteRight size={50} />
                        </div>

                        {/* Testimonial Content */}
                        <div className="bg-[#2B4C6C] text-white rounded-2xl p-5 pt-[100px] w-[400px] mx-auto animate-fade-in">
                            <p className="">
                                From being boy Aivazovsky adored music, he used to play folk songs on the violin.
                            </p>
                            <p className="">
                                Aivazovsky played at Glinka's evening parties time after time. Three melodies heard from Aivazovsky were included by Glinka in the opera «Ruslan and Lyudmila». In Glinka's «Mirrored Lines» we read: «Aivazovsky let me hear three Tatar tunes, two of them I used later for lezghinka and the third one for Andante of Ratmir's scene in the third act of the «Ruslan and Lyudmila» opera.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="bg-[#D8E9E6] px-5 pt-5 pb-10 text-center rounded-md transform transition-all duration-500 hover:scale-105 animate-fade-in">
                    <div className="text-black">
                        <h1 className="font-bold text-[25px]">Sneha Gaikwad</h1>
                    </div>
                    <div className="relative mt-24">
                        {/* Left Quote Icon */}
                        <div className="absolute -top-[25px] left-[10%] ">
                            <BiSolidQuoteLeft size={50} />
                        </div>

                        {/* Photo of the person */}
                        <div className="absolute -top-[50px] left-[50%] transform -translate-x-1/2 border-[7px] border-[#2B4C6C] p-5 rounded-full w-[120px] h-[120px] bg-[url('/testinomial3.jpg')] bg-cover bg-no-repeat ">
                        </div>

                        {/* Right Quote Icon */}
                        <div className="absolute -top-[25px] right-[10%] ">
                            <BiSolidQuoteRight size={50} />
                        </div>

                        {/* Testimonial Content */}
                        <div className="bg-[#2B4C6C] text-white rounded-2xl p-5 pt-[100px] w-[400px] mx-auto animate-fade-in">
                            <p className="">
                                From being boy Aivazovsky adored music, he used to play folk songs on the violin.
                            </p>
                            <p className="">
                                Aivazovsky played at Glinka's evening parties time after time. Three melodies heard from Aivazovsky were included by Glinka in the opera «Ruslan and Lyudmila». In Glinka's «Mirrored Lines» we read: «Aivazovsky let me hear three Tatar tunes, two of them I used later for lezghinka and the third one for Andante of Ratmir's scene in the third act of the «Ruslan and Lyudmila» opera.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-[#D8E9E6] px-5 pt-5 pb-10 text-center rounded-md transform transition-all duration-500 hover:scale-105 animate-fade-in">
                    <div className="text-black">
                        <h1 className="font-bold text-[25px]">Sneha Gaikwad</h1>
                    </div>
                    <div className="relative mt-24">
                        {/* Left Quote Icon */}
                        <div className="absolute -top-[25px] left-[10%] ">
                            <BiSolidQuoteLeft size={50} />
                        </div>

                        {/* Photo of the person */}
                        <div className="absolute -top-[50px] left-[50%] transform -translate-x-1/2 border-[7px] border-[#2B4C6C] p-5 rounded-full w-[120px] h-[120px] bg-[url('/testinomial1.jpg')] bg-cover bg-no-repeat ">
                        </div>

                        {/* Right Quote Icon */}
                        <div className="absolute -top-[25px] right-[10%] ">
                            <BiSolidQuoteRight size={50} />
                        </div>

                        {/* Testimonial Content */}
                        <div className="bg-[#2B4C6C] text-white rounded-2xl p-5 pt-[100px] w-[400px] mx-auto animate-fade-in">
                            <p className="">
                                From being boy Aivazovsky adored music, he used to play folk songs on the violin.
                            </p>
                            <p className="">
                                Aivazovsky played at Glinka's evening parties time after time. Three melodies heard from Aivazovsky were included by Glinka in the opera «Ruslan and Lyudmila». In Glinka's «Mirrored Lines» we read: «Aivazovsky let me hear three Tatar tunes, two of them I used later for lezghinka and the third one for Andante of Ratmir's scene in the third act of the «Ruslan and Lyudmila» opera.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Duplicate this for more testimonials */}
                {/* ... Repeat the above divs for additional testimonials ... */}
            </div>

        </div>
    )
}

export default Testinomial