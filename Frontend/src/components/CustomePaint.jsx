import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
const CustomePaint = () => {
    const navigate = useNavigate();
    const ref = useRef(null); // Reference to the div
    const isInView = useInView(ref, { once: false }); // Animation triggers every time the div comes into view

    return (
        <div id="custome-art" className="h-screen flex items-center justify-center bg-gradient-to-br from-[#4A6A7B] via-[#D8E9E6] to-[#4A6A7B] relative overflow-hidden">
            <motion.div
                ref={ref}
                className="bg-white shadow-xl rounded-xl max-w-3xl p-10 relative z-10"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8 }}
            >
                {/* Heading */}
                <motion.h1
                    className="text-5xl font-playfair text-[#0C1013] text-center mb-6 font-semibold"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    Create Your Dream Painting
                </motion.h1>

                {/* Description */}
                <motion.p
                    className="text-lg font-graphik  text-[#0C1013] text-center mb-8 leading-relaxed"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 1 }}
                >
                    Looking for a painting that reflects your unique style and vision? Share your
                    ideas, and our artists will bring them to life with care and precision.
                </motion.p>

                {/* List */}
                <motion.ul
                    className="text-[#0C1013] mb-8 space-y-3 text-lg leading-7"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                staggerChildren: 0.2,
                            },
                        },
                    }}
                >
                    {[
                        "🎨 Personalized to your vision.",
                        "🖌️ Crafted with high-quality materials.",
                        "🚚 Delivered right to your doorstep.",
                    ].map((item, index) => (
                        <motion.li
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 10 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            {item}
                        </motion.li>
                    ))}
                </motion.ul>

                {/* Button */}
                <div className="flex justify-center">
                    <motion.button
                        className="bg-gradient-to-r from-[#2B4C6C] via-[#4A6A7B] to-[#A6D4D3] text-white px-8 py-4 rounded-full text-lg shadow-xl transform transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={()=>navigate("/custom-order")}
                    >
                        Get Started with Your Custom Painting
                    </motion.button>
                </div>
            </motion.div>
        </div>

    )
}

export default CustomePaint