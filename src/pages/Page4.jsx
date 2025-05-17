import React, { useRef, useState } from "react";
import { data } from "../constants/page-4/data";

import gsap from "gsap";
import SideLittle from "../components/SideLittle";
import SwiperBox from "../components/SwiperBox";
import useScroll from "./hooks/useScroll";

const Page4 = () => {
  const [description, setDescription] = useState(data[0].description);
  const [img, setImg] = useState(data[0].img);
  const [allData, setAllData] = useState(data);

  const paraRef = useRef();
  const imgRef = useRef();
  function handleClick(item, index) {
    gsap.to(paraRef.current, {
      x: -100,
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        setAllData((prev) =>
          prev.map((i, idx) => {
            if (index === idx) {
              setDescription(i.description);
              setImg(i.img);
              return { ...i, active: true };
            } else {
              return { ...i, active: false };
            }
          })
        );
        gsap.fromTo(
          paraRef.current,
          {
            x: 100,
            opacity: 0,
          },
          { x: 0, opacity: 1 }
        );
      },
    });
    gsap.to(imgRef.current, {
      y: -100,
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        setAllData((prev) =>
          prev.map((i, idx) => {
            if (index === idx) {
              setImg(i.img);
              return { ...i, active: true };
            } else {
              return { ...i, active: false };
            }
          })
        );
        gsap.fromTo(
          imgRef.current,
          {
            y: 100,
            opacity: 0,
          },
          { y: 0, opacity: 1 }
        );
      },
    });
  }
  useScroll("#design", {start: "top 100%", end: "bottom 110%"})
  return (<>
    <div  className="bg-[#EFEAE3] w-full p-5 relative z-[10]">
      <div id="design" className=" w-full h-[100vh] md:mt-25 bg-black relative flex flex-col md:flex-row rounded-3xl justify-center items-center md:items-start transition-all duration-300">
        <div className="one h-[40%] sm:h-[50%] md:mt-25 md:h-auto md:w-[40%] bg-black w-[70%]">
          <div className="flex  flex-col items-center sm:my-4  p-5 md:p-10   ">
            {allData.map((item, index) => (
              <div key={item.id}
                onClick={() => handleClick(item, index)}
                className="self-start  flex font-[neu1]   cursor-pointer  gap-2"
              >
                <div className={`w-1 bg-[#504B45] `}>
                  <div
                    className={`w-full h-[100%] ${item.active ? "bg-[#FE330A]" : "bg-[#504B45]"
                      }`}
                  ></div>
                </div>
                <p
                  className={`text-[6vw] md:text-[4vw] sm:text-[5vw] sm:leading-[5vw]  md:leading-[4vw] ${item.active ? "text-white scale-105" : "text-[#504b45]"
                    } transition-all duration-300  leading-[6vw]`}
                >
                  {item.title}
                </p>
              </div>
            ))}

            <p
              ref={paraRef}
              id="p"
              className="text-white mt-5 text-[2.2vw] leading-[2.4vw] md:text-[1vw] md:leading-[1.5vw] font-[300] sm:text-[2vw] sm:leading-[2.5vw] opacity-100   "
            >
              {description}
            </p>
          </div>
        </div>
        <div
          ref={imgRef}
          style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}
          className={`two  overflow-hidden  rounded-2xl  w-full h-full md:w-[60%]`}
        ></div>
      </div>

      <SideLittle className={"mt-15 mb-3"} title={"WHO WE WORK WITH"} />
      <SwiperBox />

    </div>

  </>
  );
};

export default Page4;
