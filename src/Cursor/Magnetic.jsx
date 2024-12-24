import React from 'react'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion';

export default function Magnetic({children}) {
    const ref = useRef(null);
    const [position, setPosition] = useState({x:0,y:0});

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const {height, width, left, top} = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width/2)
        const middleY = clientY - (top + height/2)
        setPosition({x: middleX*0.1, y: middleY*0.1})
    }

    const reset = () => {
        setPosition({x:0, y:0})
    }

    const { x, y } = position;
    return (
        <motion.div
            className='relative h-[100%] w-[100%]'
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{x, y}}
            transition={{type: "spring", stiffness: 150, damping: 15, mass: 0.1}}
        >
            {children}
        </motion.div>
    )
}