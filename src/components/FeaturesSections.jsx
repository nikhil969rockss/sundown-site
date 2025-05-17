import React from 'react'

const FeaturesSections = ({title,subTitle,label,video,img}) => {
  return (
    <div className='features col-span-2 sm:col-span-1  sm:h-[480px] '>

      {video && <video className='object-cover w-full block sm:h-[80%] rounded-2xl' autoPlay={true} muted loop src={video}></video>}

      {img && <img className='object-cover w-full  block sm:h-[80%] rounded-2xl' src={img} alt="" />}
      <h4 className='uppercase text-[4vw] font-[neu1] mt-3'>{title}</h4>
      <p className='uppercase'>{subTitle}</p>
      <p className='text-black/30'>{label}</p>
    </div>
  )
}

export default FeaturesSections