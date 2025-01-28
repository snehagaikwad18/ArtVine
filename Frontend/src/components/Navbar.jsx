import { Link } from "react-scroll"
import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { PiHandbagSimple } from "react-icons/pi";

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true); // State to control visibility of the navbar
    const [scrollY, setScrollY] = useState(0); // State to track scroll position



    useEffect(() => {
        // Function to handle scroll event
        const handleScroll = () => {
            if (window.scrollY > scrollY) {
                // Scroll Down - Hide navbar
                setIsVisible(false);
            } else {
                // Scroll Up - Show navbar
                setIsVisible(true);
            }
            setScrollY(window.scrollY);
        };

        // Add event listener for scrolling
        window.addEventListener('scroll', handleScroll);

        // Remove event listener on cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollY]);

    useEffect(() => {
        // Hide navbar after a certain amount of time
        const timer = setTimeout(() => {
            if (scrollY > 100) { // If scrolled down more than 100px
                setIsVisible(false);
            }
        }, 3000); // 3 seconds

        // Cleanup the timer
        return () => clearTimeout(timer);
    }, [scrollY]);

    useEffect(() => {
        // Show navbar when the mouse moves
        const handleMouseMove = () => {
            setIsVisible(true);
        };

        // Add event listener for mouse movement
        window.addEventListener('mousemove', handleMouseMove);

        // Remove event listener on cleanup
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);


    return (
        <div
            className={`transition-all fixed  shadow-2xl  top-0 w-full ${isVisible ? 'opacity-100' : 'opacity-0'} ${isVisible ? 'pointer-events-auto' : 'pointer-events-none'}`}
        >
            <div className="flex flex-row w-full items-center justify-between gap-5 font-semibold text-[17px] p-5 overflow-x-hidden">
                <NavLink to="/admin/all" >
                    <h1 className="text-[35px] font-bold bg-gradient-to-r from-[#1e364e] via-[#4A6A7B] to-[#A6D4D3] text-transparent bg-clip-text">ArtVine</h1>
                </NavLink>
                <div className="flex flex-row gap-5 overflow-x-hidden ">
                    <Link to="biography" smooth={true} duration={500} className="cursor-pointer">
                        Biography
                    </Link>
                    <Link to="works" smooth={true} duration={500} className="cursor-pointer">
                        Works
                    </Link>
                    <Link to="custome-art" smooth={true} duration={500} className="cursor-pointer">
                        Custom Art
                    </Link>
                    <Link to="testimonials-section" smooth={true} duration={500} className="cursor-pointer">
                        Testimonials
                    </Link>

                    <NavLink className="cursor-pointer" to="/track-my-order" >Track Order</NavLink>
                </div>
                <div className="flex flex-row gap-5">
                    <NavLink className="cursor-pointer flex flex-row items-center justify-center gap-1 " to="/cart" > <PiHandbagSimple />My Cart</NavLink>

                    <button className='bg-white p-2 rounded-md font-semibold px-5 max-w-full'>Buy Now</button>
                </div>
            </div>
        </div>

    )
}

export default Navbar