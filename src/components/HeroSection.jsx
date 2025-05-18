import React from 'react'

const HeroSection = () => {
  return (
    <div className='hero font-[neu1] flex flex-col md:flex-row-reverse  md:justify-between relative z-[-1]  '>
      <h1 className='text-[16vw] leading-[12vw] md:text-[10vw] md:leading-[8vw] uppercase self-end text-right font-900 mt-25'>spaces <br />
        that <br />
        inspire</h1>

      <h2 className='text-[3.5vw] leading-[4vw] md:text-[2vw] md:leading-[2vw] md:max-w-[30%]  max-w-[55%] mt-14 mb-14 md:self-end justify-self-end  '>Sundown is a multi-disciplinary studio focused on creating unique, end-to-end experiences and environments.</h2>

    </div>
  )
}

export default HeroSection