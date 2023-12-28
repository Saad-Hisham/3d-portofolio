import { useEffect, useRef, useState } from "react";
import Scene from "./assets/components/Scene"
import { ScrollTrigger } from "gsap/all";
import Lenis from '@studio-freight/lenis'
import Home from "./assets/components/Home";
import Triggers from "./assets/components/Triggers";
import About from "./assets/3d components/About";
import Slider from "./assets/components/Slider";
import { useSelector } from "react-redux";
import Skills from "./assets/components/Skills";
import Works from "./assets/components/Works";
import Contact from "./assets/components/Contact";
import Footer from "./assets/components/Footer";
import gsap from "gsap";

function App() {
  const sliderState = useSelector((state) => state.state.sliderState)

  // disable zoom so the site don't break
  const handleWheel = (event) => {
    if (event.ctrlKey) {
      event.preventDefault();
    }
  };

  useEffect(() => {
    gsap.to("body",{
      maxHeight: "100vh",
      overflow: "hidden"
    })
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);


  useEffect(() => {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)



  }, []);

  return (
    <>
      <main>
        <Scene />
        <Home />
        <Triggers />
        <About />
        {sliderState ? <Slider /> : null}
        <Skills />
        <Works/>
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}

export default App
