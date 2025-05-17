import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import useScroll from './hooks/useScroll'

const Page1 = () => {
  useScroll(".navbar,.hero")
  return (
    <div className=' page1 p-5 w-full bg-[#EFEAE3] border-b border-black/20 relative z-[10] ' >
      <Navbar />
      <HeroSection />

    </div>
  )
}

export default Page1