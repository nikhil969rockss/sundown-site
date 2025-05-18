import React, { useEffect, useRef, useState } from "react";


import 'remixicon/fonts/remixicon.css'
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Footer from "./pages/Footer";
import Lenis from "lenis";
import gsap from "gsap";
import { div } from "motion/react-client";



const App = () => {
  // Initialize Lenis
  const lenis = new Lenis({
    autoRaf: true,
  });

  // Listen for the scroll event and log the event data
  lenis.on('scroll', (e) => {
   
  });

  
  const [ready, setReady] = useState(false)
  useEffect(() => {
    const fontsPromise = document.fonts.ready

    const windowPromise = new Promise(resolve => {
      if (document.readyState === 'complete') return resolve()
      window.addEventListener('load', resolve)
    })
    Promise.all([fontsPromise, windowPromise]).then(() => {
      
      setReady(true)
    })

  },[])
  useEffect(() => {
    const tl = gsap.timeline()
    tl.fromTo(".class0",
      
      { display: "block" }, { display: "none", duration: 0.5, delay: 0 }
      
    )
    setTimeout(() => {
      tl.fromTo(".class1", { display: "block" }, { display: "none", duration: 0.6 })
    },600);
    setTimeout(() => {
      tl.fromTo(".class2", { display: "block" }, { display: "none", duration: 0.7 })
    },1700 );
    setTimeout(() => {
      tl.fromTo(".class3", { display: "block" }, { display: "none", duration: 0.8 })
    }, 2500);
    setTimeout(() => {
      tl.to(".reload-overlay", {
        y: "-100%"
      })
    }, 3100);
  }, [])
 

    
    if (!ready) {
    return <div className="w-full h-screen bg-black"></div>
  }
  
  return (
   
  
    <>
      <main className="min-h-screen bg-black relative ">
        
       
        <div  className="reload-overlay bg-black fixed w-full h-screen top-0 z-100 flex justify-center items-center text-white ">
          {["", "Environments", "Experiences","contents"].map((item,index) => (
            <p className={ ` ${"class"+index} font-[neu1] text-transparent bg-gradient-to-b from-orange-500 to-orange-600 bg-clip-text hidden absolute text-[7vh] md:text-[6vw]`} key={Math.random()}
            >{item }

            </p>

          ))}
     </div>
       <Page1/>
       <Page2/>
       <Page3 />
       <Page4/>
        
       <Footer />
        

        
      </main>
    </>
  );
};

export default App;
