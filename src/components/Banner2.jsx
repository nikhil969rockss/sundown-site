import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin(useGSAP);

const Banner2 = () => {
  useGSAP(() => {
    gsap.to(".con", {
      x: "-100%",
      duration: 10,
      repeat: -1,
      ease:"linear"
    });
  });

  return (
    <div className="banner font-[neu1] mt-8 whitespace-nowrap ">

      <div className="con inline-block whitespace-nowrap ">
        <p className="inline text-[13vw]">&nbsp;EXPERIENCES &nbsp;</p>
        <div className="inline-block w-[5vw] md:mb-6 mb-2 h-[5vw] bg-[#FE330A] rounded-full "></div>
        <p className="inline text-[13vw]">&nbsp;CONTENTS &nbsp;</p>
        <div className="inline-block md:mb-6 w-[5vw] mb-2 h-[5vw] bg-[#FE330A] rounded-full "></div>
        <p className="inline text-[13vw]">&nbsp;ENVIRONMENTS &nbsp;</p>
        <div className="inline-block w-[5vw] mb-2 h-[5vw] bg-[#FE330A] rounded-full "></div>
        
      </div>
      <div className="con inline-block whitespace-nowrap ">
        <p className="inline text-[13vw]">&nbsp;EXPERIENCES &nbsp;</p>
        <div className="inline-block w-[5vw] mb-2 h-[5vw] md:mb-6  bg-[#FE330A] rounded-full "></div>
        <p className="inline text-[13vw]">&nbsp;CONTENTS &nbsp;</p>
        <div className="inline-block w-[5vw] mb-2 h-[5vw] md:mb-6 bg-[#FE330A] rounded-full "></div>
        <p className="inline text-[13vw]">&nbsp;ENVIRONMENTS &nbsp;</p>
        <div className="inline-block w-[5vw] mb-2 h-[5vw] md:mb-6 bg-[#FE330A] rounded-full "></div>

      </div>
      <div className="con inline-block whitespace-nowrap ">
        <p className="inline text-[13vw]">&nbsp;EXPERIENCES &nbsp;</p>
        <div className="inline-block w-[5vw] mb-2 h-[5vw] md:mb-6 bg-[#FE330A] rounded-full "></div>
        <p className="inline text-[13vw]">&nbsp;CONTENTS &nbsp;</p>
        <div className="inline-block w-[5vw] mb-2 h-[5vw] md:mb-6 bg-[#FE330A] rounded-full "></div>
        <p className="inline text-[13vw]">&nbsp;ENVIRONMENTS &nbsp;</p>
        <div className="inline-block w-[5vw] mb-2 h-[5vw] md:mb-6 bg-[#FE330A] rounded-full "></div>

      </div>
      
     
    </div>
  );
};

export default Banner2;
