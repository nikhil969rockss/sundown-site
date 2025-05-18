import React, { useState } from "react";
import LinksButton from "./LinksButton";


const Navbar = () => {
 
  const [isActive, setIsActive] = useState(false);
  function handleClickMenu() {
    setIsActive(!isActive);
  }
  return (
    <>
      <div className="navbar relative z-[6] flex justify-between items-center md:p-4">
        <img
          src="https://cdn.prod.website-files.com/644bc965881cba09e414cd5b/644bca6114dbe9598f18b662_Sundown%20logo.svg"
          alt="sundown-studio-logo"
        />
        {/* /* Desktop view*==================> */}
        <div className="flex items-center gap-5">
          {["work", "studio", "contact"].map((item) => (
            <LinksButton item={item} key={Math.random()} />
          ))}
        </div>

        {/* mobileMenu============================> */}
        <div
          onClick={() => handleClickMenu()}
          className="sm:hidden relative z-[10] border border-black/30 rounded-full px-6 py-2 flex justify-around items-center gap-2 cursor-pointer"
        >
          <div className="menu flex flex-col gap-1">
            <div
              className={`transition-all duration-300 ${
                isActive ? "rotate-15 delay-400" : "rotate-0"
              } w-[2rem] h-[1px] bg-black  `}
            ></div>
            <div
              className={`transition-all duration-300 ${
                isActive ? "-rotate-15 delay-400 origin-left " : "rotate-0"
              } w-[2rem] h-[1px] bg-black `}
            ></div>
          </div>

          <button className=" capitalize w-full "> menu</button>
        </div>
      </div>
      <div
        className={`sm:hidden ${
          isActive ? "top-0 opacity-100" : "top-[-110%] opacity-0"
        } transition-all duration-500 ease-in-out absolute  w-full top-0 left-0 h-screen bg-black/40 `}
      >
        <div className="absolute w-full h-[60vh]  bg-[#EFEAE3] top-0 left-0 rounded-bl-4xl rounded-br-4xl p-4 flex items-end justify-end z-[2]  ">
          <div className=" text-[15vw] font-[neu1] leading-[15vw] mb-16 flex flex-col items-end  ">
            <a href="#work">WORK</a>
            <a href="studio">STUDIO</a>
            <a href="#contact">CONTACT</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
