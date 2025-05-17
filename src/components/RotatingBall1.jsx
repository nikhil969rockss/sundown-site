import React from 'react'
import { motion } from "motion/react"

const RotatingBall1 = () => {
  const ballVariants1 = {
    initial: { skew: "20deg" },
    animate: {
      skew: "-10deg", y: -50, x: 10, transition: {
        duration: 7, repeat: Infinity, bounce: 1, repeatType: 'reverse'

      }
    }
  }
  const ballVariants2 = {
    initial: { skew: "10deg" },
    animate: {
      skew: "-10deg", y: -70, x: 50, transition: {
        duration: 10, repeat: Infinity, bounce: 1, repeatType: 'reverse'

      }
    }
  }
  const ballVariants3 = {
    initial: { skew: "10deg" },
    animate: {
      skew: "-15deg", y: -10, x: -20, transition: {
        duration: 2, repeat: Infinity, bounce: 1, repeatType: 'reverse'

      }
    }
  }
  
  
  return (<>
    <motion.div
      variants={ballVariants1}
      initial="initial"

      animate="animate"
      className='ball w-[40vh] h-[40vh] bg-gradient-to-r from-[#fb3108] blur-[15px] shadow-2xl to-[#fa3007e5] md:w-[50vw] md:h-[50vw] absolute right-0 md:right-[-10%] top-[-10%] rounded-full'></motion.div>
    <motion.div
      variants={ballVariants2}
      initial="initial"
      animate="animate"
    
      className='ball w-[40vh] h-[40vh] bg-gradient-to-r from-[#FE360C] to-[#fc370fe5] shadow-2xl absolute blur-[15px] right-[10%] md:w-[50vw] md:h-[50vw] top-[-10%] md:top-0 rounded-full'></motion.div>
    <motion.div
    variants={ballVariants3}
    initial="initial"
    animate="animate"
      className=' ball w-[40vh] h-[40vh] bg-gradient-to-r shadow-2xl blur-[15px] from-[#FE360C] to-[#fc370fe5] md:w-[40vw] md:h-[30vw] absolute right-[20%] top-[-10%] md:top-0 rounded-full'></motion.div>
  </>
  )
}

export default RotatingBall1