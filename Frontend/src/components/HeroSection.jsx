import Navbar from '../components/Navbar'

const HeroSection = () => {
    return (
        <div className='bg-[url("/homeBg.jpg")] bg-cover bg-center h-screen   '>
            <Navbar />
            <div className="px-[140px] flex flex-col  justify-center h-2/3 pt-[59px] ">
                <h1 className='text-[#ffffff]  text-[90px] leading-[95px] px-6 '>Sneha <br />Gaikwad</h1>
                <br />
                <p className='text-[#9EC4BD] text-[20px] text-end w-[490px]   pr-[50px] cursor-pointer'>Read more -</p>
            </div>

        </div>
    )
}

export default HeroSection