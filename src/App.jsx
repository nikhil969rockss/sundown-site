import React, { useState } from "react";


import 'remixicon/fonts/remixicon.css'
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Footer from "./pages/Footer";
import Lenis from "lenis";
import gsap from "gsap";
import { useScroll } from "motion/react";

const App = () => {
  // Initialize Lenis
  const lenis = new Lenis({
    autoRaf: true,
  });

  // Listen for the scroll event and log the event data
  lenis.on('scroll', (e) => {
   
  });
 
  
  
  return (
   
   
    <>
      <main className="min-h-screen bg-black relative ">
       
       
        {/* #EFEAE3 */}
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
