import React from 'react'

const SideLittle = ({title,className}) => {
  return (
    <div className={`p-5 side-little r  flex items-center gap-2 max-w-[70%] ${className}  `} >
      <div className={`w-[9px] h-[9px] rounded-full bg-[#FE330A] `} ></div>
      <p className='font-[neu2] text-sm font-400 uppercase'>{title}</p>
    </div>
  )
}

export default SideLittle