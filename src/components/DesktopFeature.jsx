import React from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { page3Data } from "../constants/page-3/data2";
import useScroll from "../pages/hooks/useScroll";


const DesktopFeature = ({ onMouseLeave, onMouseEnter, setImage }) => {
 
  useScroll(".heading, .side", { start: "top 80%", end: "bottom 40%" ,stagger:0.5})
  return (
    <>
      <div className="features hidden lg:block w-full mt-20 relative z-[4] ">
        {page3Data.map((item,index)=>(
          <div
            key={item.id}
            onMouseEnter={()=>onMouseEnter(item)}
            onMouseLeave={onMouseLeave}
            className=" item flex justify-between items-center group px-8 py-5 border-b border-black/20 cursor-pointer relative overflow-hidden "
          >
            <div className="w-full group-hover:top-[0%] transition-all duration-300 h-full absolute bg-[#FF9831] left-0 top-[-100%] "></div>
            <h2 className="heading relative z-2 font-[neu1] text-[3vw]">{item.title}</h2>
            <div className=" side relative z-2 font-[neu2]">
              <p className="uppercase">{item.subTitle}</p>
              <p className="text-black/40">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DesktopFeature;
