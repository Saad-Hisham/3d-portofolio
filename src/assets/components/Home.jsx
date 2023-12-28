import React, { useEffect } from 'react'
import arrow from "../images/down.png"
import gsap from "gsap";

const Home = () => {
  useEffect(()=>{
    gsap.to(".arrow-down",{
      y:7,
      repeat:-1,
      yoyo:true,
      ease: "back.ouh(1)",
    })
  },[])
  return (
    <section className="parent">
    <h1>
      <span className="letter">W</span>
      <span className="letter">e</span>
      <span className="letter">l</span>
      <span className="letter">c</span>
      <span className="letter">o</span>
      <span className="letter">m</span>
      <span className="letter">e</span>

      <span className="letter"> &nbsp;</span>
      <span className="letter">t</span>
      <span className="letter">o</span>
      <span className="letter"> &nbsp;</span>
      <span className="letter">m</span>
      <span className="letter">y</span>
      <span className="letter"> &nbsp;</span>
      <span className="letter">p</span>
      <span className="letter">o</span>
      <span className="letter">r</span>
      <span className="letter">t</span>
      <span className="letter">f</span>
      <span className="letter">o</span>
      <span className="letter">l</span>
      <span className="letter">i</span>
      <span className="letter">o</span>
      <span className="letter">!</span>

    </h1>
    <div className='heading-container'>
    <h2>
    <span className="h-2letter">S</span>
    <span className="h-2letter">a</span>
    <span className="h-2letter">a</span>
    <span className="h-2letter">d</span>
    <span className="h-2letter">&nbsp;</span>
    <span className="h-2letter">H</span>
    <span className="h-2letter">e</span>
    <span className="h-2letter">s</span>
    <span className="h-2letter">h</span>
    <span className="h-2letter">a</span>
    <span className="h-2letter">m</span>
    

      </h2>
    <h3>
    <span className="h-3letter">F</span>
    <span className="h-3letter">r</span>
    <span className="h-3letter">o</span>
    <span className="h-3letter">n</span>
    <span className="h-3letter">t</span>
    <span className="h-3letter">-</span>
    <span className="h-3letter">E</span>
    <span className="h-3letter">n</span>
    <span className="h-3letter">d</span>
    <span className="h-3letter">&nbsp;</span>
    <span className="h-3letter">D</span>
    <span className="h-3letter">e</span>
    <span className="h-3letter">v</span>
    <span className="h-3letter">e</span>
    <span className="h-3letter">l</span>
    <span className="h-3letter">o</span>
    <span className="h-3letter">p</span>
    <span className="h-3letter">e</span>
    <span className="h-3letter">r</span>
    
    
      
      </h3>
      <div className='arrow-container'>
      <img src={arrow} alt='arrow iamge' className='arrow-down'/>
      </div>
    </div>
  </section>
  )
}

export default Home