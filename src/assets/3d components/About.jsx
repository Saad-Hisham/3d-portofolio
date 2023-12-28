import React, { useEffect } from 'react'
import hand from "../images/hand.png"
import resume from "../images/Resume.pdf"
import gsap from 'gsap'
import { useDispatch } from 'react-redux'
import { toggleSlider } from '../components/Redux/Redux'
const About = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    gsap.to(".hand", {
      rotate: 45,
      yoyo: true,
      repeat: -1,
      ease: "linear"
    })
  }, [])
  return (
    <section className='about'>
      <div className='content'>
        <div>
          <h2>ABOUT ME </h2>
          <p>
            Hi there! 
            <img src={hand} alt="hand waving emoji" className='hand' width="32px" height="32px"/>
            &nbsp; &nbsp;I'm Saad Hesham, a passionate learner and front-end developer with over 1 year of experience in freelancing.
          </p>

          <div className='buttons-container'>
            <button>
              <a href={resume} download>Get Resume</a></button>
            <button onClick={() => {
              dispatch(toggleSlider())
            }}>Testimonial & Certificates</button>
          </div>
        </div>

      </div>
      <div className='border-left'></div>
      <div className='end-border'></div>
    </section>
  )
}

export default About