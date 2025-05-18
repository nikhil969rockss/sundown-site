import gsap from 'gsap'
import { motion } from 'motion/react'
import { useEffect } from 'react'



const Ball = ({ height, width, top, right, left, bottom, className }) => {
  useEffect(() => {
    gsap.to("#balls", {
      transform: "skew(5deg)",
      rotate: 360,
      duration: 4,
      y:10 ,
      repeat: -1,
      yoyo: true ,
      stagger: 0.2,
      ease: 'linear'
    })
  })
  return (
    <motion.div
      id='balls'
      className={` w-[${height}] z-[-1] h-[${width}]  bg-gradient-to-r from-[ #FC482A] to-[#f14628] blur-[20px] shadow-2xl rounded-full absolute left-[${left}] top-[${top}] right-[${right}] bottom-[${bottom}] ${className}  `}></motion.div>
  )
}

export default Ball