import { motion } from 'motion/react'
import React from 'react'

const RotatingBall2 = () => {
  const ballVariant = {
    initial : {skew: "10deg"},
    final : {skew: "-10deg", x:10 , y:-50, transition: { duration:4, repeat: Infinity, repeatType:'reverse',bounce:1 } }
  }
  return (
    <motion.div
    variants={ballVariant}
    initial="initial"
    animate="final" 
    className='w-[60vh] h-[60vh] md:w-[35vw] md:h-[35vw] rounded-full bg-gradient-to-r from-[#FE360C] to-[#fc370fe5] absolute top-[10%] blur-[14px] shadow-2xl right-[-10%] md:left-[20%] md:top-[20%] z-[-1] '></motion.div>
  )
}

export default RotatingBall2