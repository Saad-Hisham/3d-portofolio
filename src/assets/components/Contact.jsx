import emailjs from '@emailjs/browser';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { adjustLight, changeVideo, contactPos } from './Redux/Redux';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SendIco from "../images/sendico.png"
import phoneIco from "../images/phone.png"
import githubIco from "../images/github.png"
import linkedInIco from "../images/linkedIn.png"
import frontEndMentorIco from "../images/frontEndMentor.jpeg"


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hgv4wwe', 'template_jl0xfli', form.current, 'irT832AFiNyH3Biqx')
      .then((result) => {
        
        alert("Message Sent successfully")
        setFormData({name:"",email:"",message:""})

      }, (error) => {
        alert("something went wrong please try again")
      });
  };

  const dispatch = useDispatch()
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact-trigger",
        start: "top center",
        end: "bottom bottom",
        scrub: true,
        markers: false,
        onUpdate: (self) => {
          if (window.innerWidth > 1000) {
            dispatch(contactPos(self.progress))
            dispatch(adjustLight(1 + self.progress))
            dispatch(changeVideo(0))

          }

        }
      }
    });
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact-trigger",
        start: "90% center",
        end: "150% bottom",
        scrub: true,
        markers: false,

      }
    });
    tl2.to(".contact-form", {
      borderTopLeftRadius: 0
    })
  }, [])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Validate Name
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    } else {
      newErrors.name = '';
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Valid email is required';
      isValid = false;
    } else {
      newErrors.email = '';
    }

    // Validate Message
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else {
      newErrors.message = '';
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Your form submission logic goes here
      sendEmail(e)
     
    }
  };

  return (
    <section className='contact'>
      <div className='contact-trigger'></div>
      <div className='contact-form-container'>

        <div className='contact-form'>
          <h6>CONTACT ME</h6>

          <form onSubmit={handleSubmit} ref={form}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <span className="error">{errors.name}</span>
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <span className="error">{errors.email}</span>
            </div>

            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
              />
              <span className="error">{errors.message}</span>
            </div>

            <button type="submit">Send <img src={SendIco} width="40px" height="40px" alt='send button image' /></button>
            <div style={{ display: "flex", flexDirection: "row" }}><img src={phoneIco} alt='icon for phone number' width="40px" height="40px" /> <p style={{ margin: "5px" }}>+20 101 831 8954</p></div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", maxWidth: '14rem' }}>
              <a target='blank' href='https://github.com/Saad-Hisham'><img src={githubIco} alt='github icon' width="50px" height="50px" /></a>
              <a target='blank' href='https://www.linkedin.com/in/saad-hesham-620a70232/'><img src={linkedInIco} alt='linked In icon' width="50px" height="50px" /></a>
              <a target='blank' href='https://www.frontendmentor.io/profile/Saad-Hisham'><img src={frontEndMentorIco} alt='front-end mentor icon' width="50px" height="50px" style={{ borderRadius: "50%" }} /></a>


            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact