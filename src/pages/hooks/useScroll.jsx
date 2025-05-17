import gsap from "gsap"
import { useLayoutEffect } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const useScroll = (selector = ".page1", options = {}) => {
  useLayoutEffect(()=>{
    const ctx = gsap.context(() => {
      const tl =gsap.timeline()
      tl.from(selector, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: selector,
          start: "top 90%",
          end: "bottom 100%",
          scrub:0.1,
          ...options
        },
        stagger: 0.2,
      

      })

    })

    return () => ctx.revert()

  }, [selector, JSON.stringify(options)])
  

}

export default useScroll;