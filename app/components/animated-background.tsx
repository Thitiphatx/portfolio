import { motion } from "motion/react"

const SlidingText = ({ text, duration, reverse = false }: { text: string, duration: number, reverse?: boolean }) => {
    return (
        <div className="whitespace-nowrap flex">
            <motion.div
                initial={{ x: reverse ? "-50%" : "0%" }}
                animate={{ x: reverse ? "0%" : "-50%" }}
                transition={{
                    duration: duration,
                    ease: "linear",
                    repeat: Infinity,
                }}
                className="flex"
            >
                <span className="text-[12rem] font-black uppercase mr-20">{text}</span>
                <span className="text-[12rem] font-black uppercase mr-20">{text}</span>
            </motion.div>
        </div>
    )
}

const AnimatedBackground = () => {
    return (
        <div className='fixed inset-0 -z-1 overflow-hidden bg-[#050505] select-none pointer-events-none'>
            <div className="absolute inset-0 opacity-[0.1] flex flex-col justify-around -rotate-12 scale-150">
                <SlidingText 
                    text="Portfolio •" 
                    duration={80} 
                    reverse 
                />
                <SlidingText 
                    text="Thitiphat Kunrong • Portfolio •" 
                    duration={90} 
                />
                <SlidingText 
                    text="Thitiphat Kunrong •" 
                    duration={80} 
                    reverse 
                />
            </div>
        </div>
    )
}

export default AnimatedBackground