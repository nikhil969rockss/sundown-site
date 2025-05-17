import React from "react";
import Banner2 from "../components/Banner2";
import RotatingBall1 from "../components/RotatingBall1";
import RotatingBall2 from "../components/RotatingBall2";
import useScroll from "./hooks/useScroll";

const Page2 = () => {
  useScroll([".video"] )
  useScroll(".banner" ,{start: "top 100%", end: "bottom 40%"})
  useScroll(".title, .img, .para", { start: "top 100%", end: "bottom 40%" })
  return (
    <div className="page-2 bg-[#EFEAE3] w-full relative z-[10]  p-5">
      <div className="video relative z-[10] rounded-2xl md:px-3 md:mt-8">
        <video
          autoPlay={true}
          muted
          loop
          className="rounded-3xl object-cover w-full"
          src="/video.mp4"
        ></video>
      </div>
      <RotatingBall1 />

      <Banner2 />

      <div className="main-section relative z-10 font-[neu1] grid grid-cols-12 mb-15  place-items-center md:px-10">
        <div className="relative z-10 grid col-span-full md:col-span-6    text-[5vw] leading-[5vw] mt-10 max-w-[90%] md:max-w-full md:text-[4vw] md:leading-[4.3vw] md:m-10 md:mt-30 ">
          <h2 className="title">We are a group of design-driven, goal-focused creators, producers, and designers who believe that the details make all the difference.</h2>
        </div>
        <div className="md:*:grid col-span-12 md:col-span-6 md:place-items-end  mt-10">
          <div className="max-w-[70%] md:max-w-[40%] md:mt-25 md:mr-15 flex flex-col gap-6 ">
            <img className="rounded-2xl img" src="https://assets-global.website-files.com/644bc965881cba09e414cd5b/644be3acfab44ee35bf9e13a_Holding_thumb-p-500.webp" alt="" />
            <p className="para font-[neu2] text-[3.5vw] leading-[4vw] md:text-[1vw] md:leading-[1.2vw]  "> We love to create, we love to solve, we love to collaborate, and we love to turn amazing ideas into reality. We’re here to partner with you through every step of the process and know that relationships are the most important things we build.</p>
          </div>
          <RotatingBall2 />


        </div>
      </div>
    </div>
  );
};

export default Page2;
