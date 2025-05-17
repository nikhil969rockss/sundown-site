import React, { useState } from "react";

import SideLittle from "../components/SideLittle";

import MobileFeature from "../components/MobileFeature";
import DesktopFeature from "../components/DesktopFeature";
const Page3 = ({}) => {
  const [isActive, setActive] = useState(false);
  const [img, setImage] = useState(null);
  function onMouseEnter(item) {
    setActive(true);
    setImage(item?.img || item?.video);
  }
  function onMouseLeave() {
    setActive((prev) => !prev);
  }
  
  return (
    <>
      <div className="relative z-[10] w-full bg-[#EFEAE3]">
        <SideLittle title={"Feature products"} />
        <MobileFeature />
        <DesktopFeature
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          setImage={setImage}
        />
      </div>
      <div
        style={{
          backgroundImage: `url(${img})
    `,
          backgroundPosition: "cover",
          backgroundPosition: "center",
        }}
        className={`${
          isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
        } transition-all select-none pointer-events-none duration-300 w-[320px] fixed rounded-2xl h-[400px]  z-[10000] top-[20%] left-[50%] overflow-hidden`}
      >
        <video
          autoPlay={true}
          loop
          muted
          className=" w-full h-full object-cover "
          src={img}
        ></video>
      </div>
    </>
  );
};

export default Page3;
