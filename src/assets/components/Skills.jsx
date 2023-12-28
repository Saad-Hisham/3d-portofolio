import React, { Suspense, useEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useDispatch } from 'react-redux';
import Redux, { adjustRoomPos, setRoomZoom } from './Redux/Redux';
import { Canvas } from '@react-three/fiber';
import Loader from './Loader';
import Html from '../3d components/Html';
import { OrbitControls } from '@react-three/drei';
import Room from '../3d components/Room';
import Css from '../3d components/Css';
import Js from '../3d components/Js';
import Reacts from '../3d components/Reacts';
import Bootstrap from '../3d components/Bootstarp';
import Redux3d from '../3d components/Redux3d';
import Thjs from '../3d components/Thjs';
import Firebase from '../3d components/Firebase';
import Blender from '../3d components/Blender';
import Gsap from '../3d components/Gsap';

const Skills = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".skills-trigger",
                start: "top center",
                end: "bottom bottom",
                scrub: true,
                markers: false,
                onUpdate: (self) => {
                    if (window.innerWidth >= 1000) {
                        dispatch(adjustRoomPos([((window.innerWidth * 3.9) * -0.00101010101) * self.progress, (self.progress - 2) * 2]))
                    }
                    dispatch(setRoomZoom(self.progress * (window.innerWidth * 0.07575757575) + 70, 0 + (self.progress * -1) * 7))

                }
            }
        });
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".child-skills",
                start: "top center",
                end: "40% 40%",
                scrub: true,
                markers: false,

            }
        });
        const tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".end-border-trigger",
                start: "top center",
                end: "bottom bottom",
                scrub: true,
                markers: false,

            }
        });
        const tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: ".child-skills",
                start: "top center",
                end: "150% 150%",
                scrub: true,
                markers: false,

            }
        });
        tl2.to(".child-skills", {
            borderTopLeftRadius: 5
        })
        tl3.to(".child-skills", {
            borderBottomLeftRadius: "55rem"
        })
        tl4.to(".r-b", {
            height: "100%"
        })
    }, [])
    function Sizes() {
        let scale = [0.003, 0.003, 0.003]
        let position = [window.innerWidth * -0.00052083333, 2.5, 0]
        let cssPosition = [window.innerWidth * -0.00052083333 + 1, 2.5, 0]
        let jsPosition = [window.innerWidth * -0.00046875, 2, 0]
        let reactPos = [window.innerWidth * -0.00046875 + 1, 2, 0]
        let jsScale = .12
        let reactScale = .09
        let bootstrapPos = [window.innerWidth * -0.00046875, .7, 0]
        let reduxPos = [0, .19, 0]
        let reduxScale = 0.023
        let threePos = [window.innerWidth * -0.00052083333, -.8, 0]
        let firebasePos = [.4, -1.1, 0]
        let boostrapScale = .13
        let blenderPos = [.4, -1.9, 0]
        let GsapPos = [-.45, -2, 0]
        let GsapScale = window.innerWidth*0.00004166666






        if (window.innerWidth <= 1000) {
            scale = [0.003, 0.003, 0.003]
            position = [0, 2.1, 0]
            cssPosition = [0, 1.2, 0]
            jsScale = .14
            jsPosition = [0, 1, 0]
            reactPos = [0, .3, 0]
            reactScale = .08
            bootstrapPos = [0, -.4, 0]
            reduxPos = [-.1, -.6, 0]
            boostrapScale = .12
            reduxScale = 0.021
            threePos = [0, -1.5, 0]
            firebasePos = [0, -2.4, 0]
            blenderPos = [0, -3, 0]

            GsapPos = [.2, -3.7, 0]
            GsapScale = .07





        }

        return [
            scale, position, cssPosition,
            jsPosition, reactPos, jsScale,
            reactScale, bootstrapPos, reduxPos,
            reduxScale, threePos, firebasePos,
            boostrapScale, blenderPos, GsapPos,
            GsapScale]
    }
    return (
        <section className='skills'>

            <div className='skills-trigger'></div>

            <div className='parent-skills'>
                <div className='end-border-trigger'></div>

                <div className='child-skills'>
                    <div className='r-b'></div>
                    <div className='skills-content'>
                        <h3>SKILLS</h3>
                        <Canvas style={{ width: '100%', height: "2192.52px", position: "absolute", left: 0 }} shadows={true}
                            camera={{ near: 0.1, far: 1000 }}
                        >
                            <Suspense fallback={<Loader />} >
                                <ambientLight intensity={2} />
                                <directionalLight intensity={5}
                                />
                                <Html
                                    scale={Sizes()[0]}
                                    position={Sizes()[1]}
                                />
                                <Css
                                    scale={Sizes()[0]}
                                    position={Sizes()[2]}

                                />
                                <Js
                                    scale={Sizes()[5]}
                                    position={Sizes()[3]}
                                />
                                <Reacts
                                    scale={Sizes()[6]}
                                    position={Sizes()[4]}

                                />
                                <Bootstrap
                                    scale={Sizes()[12]}
                                    position={Sizes()[7]}
                                />
                                <Redux3d
                                    scale={Sizes()[9]}
                                    position={Sizes()[8]}

                                />
                                <Thjs
                                    scale={.14}
                                    position={Sizes()[10]}
                                />
                                <Firebase
                                    scale={.07}
                                    position={Sizes()[11]}
                                />
                                <Blender
                                    scale={.05}
                                    position={Sizes()[13]}
                                />
                                <Gsap
                                    scale={Sizes()[15]}
                                    position={Sizes()[14]}
                                />
                            </Suspense>
                        </Canvas>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Skills