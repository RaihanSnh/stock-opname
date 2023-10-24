import React, { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import logo from "../../assets/images/logo-main.svg";
import { useNavigate } from 'react-router-dom';
// import {WaveBottom, WaveTop} from "../../assets/images/waves/wave";

export default function NotFound() {
    const [isDragging, setDragging] = useState(false);
    const [hasBeenDragged, setHasBeenDragged] = useState(false);
    const [direction, setDirection] = useState(1); // 1 for down, -1 for up
    const [lastX, setLastX] = useState(0);
    const [lastY, setLastY] = useState(0);
    const navigate = useNavigate();
    const [{ x, y }, set] = useSpring(() => ({ x: 0, y: 0, config: config.slow }));

    const bind = useDrag(({ down, movement: [mx, my], event }) => {
        event.preventDefault();
        setDragging(down);
        if (down) {
            if (!hasBeenDragged) {
                setHasBeenDragged(true);
            }
            let newY = Math.min(lastY + my, window.innerHeight - 450); // Prevent the logo from going below the bottom of the viewport
            set({ x: mx + lastX, y: newY });
        } else {
            let newY = Math.min(my + lastY, window.innerHeight - 450); // Prevent the logo from going below the bottom of the viewport
            setLastX(mx + lastX);
            setLastY(newY);
        }
    });

    useEffect(() => {
        if (!isDragging && hasBeenDragged) {
            let newY = Math.min(lastY, window.innerHeight - 450);
            set({ y: newY });
        }
    }, [isDragging]);

    const redirectBack = () => {
        navigate(-1);
    }

    return (
        <div className="bg-gradient-to-r from-white via-sky-500 to-white min-h-screen overflow-hidden h-screen">
            {/* <WaveTop className="absolute top-0 left-0 w-full h-full" /> */}
            <div className="fixed inset-0 z-50 flex flex-col items-center justify-center space-y-8">
                <div className="text-white text-center font-bold text-9xl flex justify-center items-center">
                    <span className="text-9xl">4</span>
                    <animated.div {...bind()} style={{ x, y }}>
                        <img src={logo} alt="" className={`inline-block w-32 h-32 animate-bounce ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`} />
                    </animated.div>
                    <span className="text-9xl">4</span>
                </div>
                <div className="text-white text-center font-bold text-4xl">
                    Oops! We can't find the page you're looking for.
                </div>
                <button className='p-2 w-56 bg-white rounded text-sky-500 font-medium' onClick={redirectBack}>
                    Return back
                </button>
            </div>
            {/* <WaveBottom className="absolute bottom-0 left-0 w-full h-full" /> */}
        </div>
    );
}