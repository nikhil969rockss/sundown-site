import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full md:h-[100vh] h-[70vh] bg-transparent"></div>
      <div className="text-white bg-black w-full md:h-screen h-[70vh] fixed bottom-0 left-0 flex justify-center items-end z-[1] p-4 ">
        <div className="email-div absolute w-[80%] md:w-[90%] md:p-4 top-[4%]  mt-5 md:mt-10 flex justify-between items-center  ">
          <div className="flex flex-col justify-center font-[neu1] text-[4vh] leading-[4vh] gap-2 ">
            <p>work</p>
            <p>studio</p>
            <p>contact</p>
          </div>
          <div className=" w-[60%] font-[neu2] md:w-[30%] ">
            <p className="text-[2vh] md:text-[1.5vw] md:leading-[1.5vw] leading-[2.4vh]">Get industry insights and creative inspiration straight to your inbox.</p>
            <div className="flex items-end justify-between border-b border-white/40">
              <input className="mt-5 outline-none  bg-transparent text text-sm md:text-md w-full " type="text" placeholder="Email address" /><i className="ri-arrow-right-line cursor-pointer"></i>
            </div>
          </div>
        </div>
        <div className="mb-4 sundown-div px-5  ">
          <h1 className="text-[12vh] leading-[14vh]  md:text-[23vw] md:leading-[23vw] font-[neu1] text-center">
            Sundown
          </h1>
          <div className="w-full  h-[0.5px] bg-white/50"></div>
          <div className="capitalize flex gap-2 justify-between text-sm md:text-md mt-4 text-white/80">
            <a>Copyright&copy;sundown studio</a>
            <a>
              <i className="ri-global-line"></i>Brooklyn, NY
            </a>
            <a href="#" className="cursor-pointer">
              <i className="ri-instagram-line"></i>Instagram
            </a>
            <a href="#" className="cursor-pointer">
              <i className="ri-linkedin-box-fill"></i>LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
