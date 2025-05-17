import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../index.css";

// import required modules
import { Pagination } from "swiper/modules";
import { swiperData } from "../constants/page-4/data";

export default function SwiperBox() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    window.addEventListener("resize", () => {
      setInnerWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize",{});
    };
  }, [innerWidth]);

  return (
    <>
      <Swiper
        slidesPerView={innerWidth> 640 ? 3: 2}
        spaceBetween={30}
        modules={[Pagination]}
        className="mySwiper"
      >
        {swiperData.map((item, index) => (
          <SwiperSlide className="" key={item.id}>
            <div className="px-3">
              <img src={item.img} alt="" />
              <p className="text-sm md:text-md mt-5">{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
