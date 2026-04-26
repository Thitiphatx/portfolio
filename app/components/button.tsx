import { motion } from "motion/react"
import React from "react"

interface ButtonProps extends React.ComponentPropsWithRef<typeof motion.button> {

}

const Button = ({ children, className = "", ...props }: ButtonProps) => {
  const baseStyles = "relative px-8 py-2 font-black uppercase tracking-tighter overflow-hidden rounded-full cursor-pointer border-none"

  return (
    <motion.button
      initial={{
        backgroundColor: "#0A0A0A",
        color: "#FFFFFF",
        boxShadow: "0 0 0 2px #333333"
      }}
      whileHover={{
        boxShadow: [
          "0 0 0 4px #CCFF00",
          "0 0 0 4px #FFEF00",
          "0 0 0 4px #CCFF00"
        ],
        transition: {
          boxShadow: { repeat: Infinity, duration: 2, ease: "linear" },
        }
      }}
      whileTap={{
        backgroundColor: ["#CCFF00", "#FFEF00", "#CCFF00"],
        boxShadow: [
          "0 0 0 4px #CCFF00",
          "0 0 0 4px #FFEF00",
          "0 0 0 4px #CCFF00"
        ],
        color: "#000000",
        transition: {
          backgroundColor: {
            repeat: Infinity,
            duration: 2,
            ease: "linear",
            repeatType: "loop"
          },
          boxShadow: {
            repeat: Infinity,
            duration: 2,
            ease: "linear",
            repeatType: "loop"
          },
        }
      }}
      className={`${baseStyles} ${className}`}
      {...props}
    >
      <motion.span
        className="inline-block relative z-10"
      >
        {children}
      </motion.span>
    </motion.button>
  )
}

export default Button