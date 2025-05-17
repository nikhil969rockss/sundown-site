import React from 'react'
import { page3Data } from '../constants/page-3/data2'
import FeaturesSections from './FeaturesSections'
import useScroll from '../pages/hooks/useScroll'

const MobileFeature = () => {
  useScroll(".features", { start: "top 90%", end: "bottom 10%" })
  return (
    <div className='lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 p-5 '>
      {page3Data.map((item, index) => (
        <FeaturesSections key={item.id} title={item.title} subTitle={item.subTitle} img={item?.img} video={item?.video} label={item.label} />
      ))}


    </div>
  )
}


export default MobileFeature