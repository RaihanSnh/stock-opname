import { motion } from 'framer-motion';
import logo from "../../assets/images/logo-main.svg";
import { useNavigate } from "react-router-dom";
import { useRef } from 'react';

export default function NotFound() {
    const navigate = useNavigate();
    const constraintsRef = useRef(null);

    const redirectBack = () => {
        navigate(-1);
    }

    return (
        <div ref={constraintsRef} className="bg-gradient-to-r from-white via-sky-600 to-white min-h-screen overflow-hidden h-screen flex items-center justify-center">
            <div className="text-center">
                <div className="text-white font-bold text-9xl flex justify-center items-center mb-10">
                    <span className="text-9xl mr-5">4</span>
                    <motion.div
                        drag
                        dragConstraints={constraintsRef}
                        dragElastic={1}
                        transition={{
                            repeat: Infinity,
                            repeatType: "reverse",
                            type: "inertia",
                            stiffness: 10,
                            damping: 1
                        }}
                        className="cursor-grab"
                    >
                        <img src={logo} alt="" className="inline-block w-32 h-32 animate-bounce" style={{ pointerEvents: 'none' }} />
                    </motion.div>
                    <span className="text-9xl ml-5">4</span>
                </div>
                <div className="text-white font-bold text-4xl mb-4"> Oops! We can’t find the page you’re looking for. </div>
                <button onClick={redirectBack} className="w-1/2 px-12 py-3 bg-white text-sky-600 rounded border border-gray-100 shadow-lg transform transition duration-500 hover:bg-gray-100 hover:text-sky-600 hover:scale-105 hover:shadow-xl">Return</button>
            </div>
        </div>
    );
}
