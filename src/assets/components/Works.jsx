import React, { useEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useDispatch } from 'react-redux';
import { adjustLight, changeVideo, worksPos } from './Redux/Redux';
import rockImage from "../images/rock.jpg";
import calcImage from "../images/calculator.jpg";
import Todo from "../images/todo.jpg";
import world from "../images/world.jpg";
import base from "../images/base.jpg";
import generator from "../images/generator.jpg";
import gameImage from "../images/game.png";
import gemuImage from "../images/gemu.png";

const Works = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".works-trigger",
                start: "top center",
                end: "bottom bottom",
                scrub: true,
                markers: false,
                onUpdate: (self) => {
                    if (window.innerWidth > 1000) {
                        dispatch(worksPos(self.progress))
                        dispatch(adjustLight(2 - self.progress))
                        dispatch(changeVideo(0))
                    }
                }
            }
        });
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".works-border-trigger",
                start: "20% center",
                end: "center center",
                scrub: true,
                markers: false,
            }
        });
        const tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".works-border-trigger",
                start: "110% center",
                end: "130% center",
                scrub: true,
                markers: false,
            }
        });
        if (window.innerWidth >= window.innerHeight) {
            tl.to(".works-background", {
                scale: 20 * (window.innerWidth / 1920),
                duration: 5,
            }).to(".works-background", {
                width: "100vw",
                height: "100vh"
            })
        }
        else {
            tl.to(".works-background", {
                scale: 20 * (window.innerWidth / 1920) + window.innerHeight * 0.01851851851 / 2,
                duration: 5,
            }).to(".works-background", {
                width: "100vw",
                height: "100vh"
            })
        }
        tl2.to(".works-section", {
            borderTopRightRadius: 5
        })
        tl3.to(".works-section", {
            borderBottomRightRadius: "45rem"
        })
    }, []);
    return (
        <section className='works-section-container'>
            <div className='works-trigger'></div>
            <section className='works-section'>
                <div className='works-border-trigger'></div>
                <article className='works'>
                    <h4>MY WORKS</h4>
                    <div className='projects-container'>
                        <div className='work-block' onMouseEnter={() => { dispatch(changeVideo(1)) }}>
                            <div className='details'>
                                <p>
                                    I developed an engaging Rock, Scissors, Paper game utilizing ReactJS and incorporating Redux for effective state management. The inclusion of Framer Motion introduces delightful animations, enhancing the overall user experience. Additionally, I extended the project by creating an online version of the game, leveraging Firebase's real-time database feature.
                                </p>
                                <button>
                                    <a href='https://online-rock-paper-scissors-game.vercel.app' target='blank'>Visit the site</a>
                                </button>
                            </div>
                            <img src={rockImage} alt='Rock, Paper, Scissors game image' width='300' height='200' />
                            <h5>Online Rock Paper Scissors game with animations</h5>
                        </div>
                        {/* Shinobi Clash */}
                        <div className='work-block' onMouseEnter={() => { dispatch(changeVideo(2)) }}>
                            <div className='details'>
                                <p>Samurai Side-Scroller (2D Action Game)<br />
                                    A fast-paced 2D side-scrolling game where you play as a skilled samurai navigating intense battles. The game features core combat mechanics including attack, defend, and heal, alongside powerful abilities like throwing shurikens and teleporting directly to enemies for surprise strikes.<br />
                                    <b>Skills:</b> phaser
                                </p>
                                <button>
                                    <a href='https://shinobi-clash.vercel.app/' target='blank'>Visit the site</a>
                                </button>
                            </div>
                            <img src={gameImage} alt='Shinobi Clash game image' width='300' height='200' />
                            <h5>Shinobi Clash (2d side scrolling game)</h5>
                        </div>
                        <div className='work-block' onMouseEnter={() => { dispatch(changeVideo(3)) }}>
                            <div className='details'>
                                <p>
                                    I whipped up this to-do list app that's packed with features! It's got drag-and-drop functionality for easy task management, plus a sleek dark mode for some extra style. I used React as the main framework and plugged in a DnD library to make the drag-and-drop interactions super smooth. Oh, and I even added a cool capture feature!
                                </p>
                                <button>
                                    <a href='https://todo-list-app-with-dark-mode-drag-and-drop-functionality.vercel.app' target='blank'>Visit the site</a>
                                </button>
                            </div>
                            <img src={Todo} alt='Drag & Drop Todo App with Dark Mode' width='300' height='200' />
                            <h5>Drag & Drop Todo App with Dark Mode</h5>
                        </div>
                        {/* Gemy 3d Chatbot */}
                        <div className='work-block' onMouseEnter={() => { dispatch(changeVideo(4)) }}>
                            <div className='details'>
                                <p>Built a 3D chatbot using React Three Fiber for interactive 3D models, Gemini API as a .<br />
                                    <b>Skills:</b> HTML · Cascading Style Sheets (CSS) · React.js · rasa · REST APIs · Three.js
                                </p>
                                <button>
                                    <a href='https://gemy3.vercel.app/' target='blank'>Visit the site</a>
                                </button>
                            </div>
                            <img src={gemuImage} alt='Gemy 3d Chatbot image' width='300' height='200' />
                            <h5>Gemy 3d Chatbot</h5>
                        </div>
                        <div className='work-block' onMouseEnter={() => { dispatch(changeVideo(5)) }}>
                            <div className='details'>
                                <p>Designed a catchy "Coming Soon" section with React and Framer Motion. Added engaging animations for a visually appealing and interactive experience.</p>
                                <button>
                                    <a href='https://animated-section.vercel.app' target='blank'>Visit the site</a>
                                </button>
                            </div>
                            <img src={base} alt='Animated Base Apparel Coming Soon section' width='300' height='200' />
                            <h5>Animated Base Apparel Coming Soon section </h5>
                        </div>
                        <div className='work-block' onMouseEnter={() => { dispatch(changeVideo(6)) }}>
                            <div className='details'>
                                <p>Developed an advice generator using React and fetch to pull advice from an API. Simple and effective!</p>
                                <button>
                                    <a href='https://advice-generator-app-brown-tau.vercel.app' target='blank'>Visit the site</a>
                                </button>
                            </div>
                            <img src={generator} alt='Advice generator app image' width='300' height='200' />
                            <h5>Advice generator app</h5>
                        </div>
                    </div>
                </article>
            </section>
        </section>
    )
}

export default Works
