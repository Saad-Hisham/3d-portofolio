import React, { useRef, useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useDispatch } from 'react-redux';
import { setRoomPos } from './Redux/Redux';

const Triggers = () => {
    const about = useRef(null);
    const aboutBackground = useRef(null);
    const skillsBackground = useRef(null);
    const worksBackground = useRef(null);

    
    const dispatch = useDispatch()

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: about.current,
                start: "top center",
                end: "140% 140%",
                scrub: true,
                markers: false,
                onUpdate: (self) => {
                    let pos = (((window.innerWidth * 0.00286317708) * (self.progress))) * .2 + -2
                    if (window.innerWidth >= 647) {
                        pos = (((window.innerWidth * 0.00286317708) * (self.progress))) * .2 + -2
                        dispatch(setRoomPos([pos, -3, 2]))
                    }
                    if (window.innerWidth >= 1000) {
                        pos = (((window.innerWidth * 0.00286317708) * (self.progress))) * 1.4 + -2
                        dispatch(setRoomPos([pos, -3, 2]))

                    }
                }
            }
        });
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".about",
                start: "top center",
                end: "15% 15%",
                scrub: true,
                markers: false,
                onUpdate: (self) => {
                }
            }
        });
        const tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".end-border",
                start: "center center",
                end: "bottom center",
                scrub: true,
                markers: false,
                onUpdate: (self) => {
                }
            }
        });
        const tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: ".about",
                start: "top center",
                end: "bottom center",
                scrub: true,
                markers: false,

            }
        });
        const tl5 = gsap.timeline({
            scrollTrigger: {
                trigger: ".skills-trigger",
                start: "top center",
                end: "bottom center",
                scrub: true,
                markers: false,

            }
        });
        if (window.innerWidth >= window.innerHeight) {
            tl.to(aboutBackground.current, {
                scale: 20 * (window.innerWidth / 1920),
                duration: 5,
            })
        }
        else {
            tl.to(aboutBackground.current, {
                scale: 20 * (window.innerWidth / 1920) + window.innerHeight * 0.01851851851 / 2,
                duration: 5,
            })

        }
        
        tl.to(aboutBackground.current,{
            width:"100vw",
            height:"100vh"
        })
        tl2.to(".about", {
            borderTopRightRadius: 5
        })
        tl3.to(".about", {
            borderBottomRightRadius: "40rem",
            duration: 3
        })
        tl4.to(".border-left", {
            height: "100%"
        })

        if (window.innerWidth >= window.innerHeight) {
            tl5.to(".skills-background", {
                scale: 20 * (window.innerWidth / 1920),
                duration: 5,
            })
        }
        else {
            tl5.to(".skills-background", {
                scale: 20 * (window.innerWidth / 1920) + window.innerHeight * 0.01851851851 / 2,
                duration: 5,
            })
        }
        tl5.to(".skills-background",{
            width:"100vw",
            height:"100vh"
        })

    }, []);

    return (
        <div>
            <div className='about-trigger' ref={about}></div>
            <div className='about-background' ref={aboutBackground}></div>
            <div className='skills-background' ref={skillsBackground}></div>
            <div className='works-background' ref={worksBackground}></div>


        </div>
    );
}

export default Triggers;