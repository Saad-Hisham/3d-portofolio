import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import Room from '../3d components/Room';
import Loader from '../components/Loader';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {  OrthographicCamera } from '@react-three/drei';
import { useDispatch, useSelector } from 'react-redux';
import { setRoomPos } from './Redux/Redux';

gsap.registerPlugin(ScrollTrigger);

const Scene = (props) => {
  const [positions, setpositions] = useState([0, 0, 5]);
  const animatedElementRef = useRef(null);
  const [rotate, setRotate] = useState(-1);
  const Rotatestate = useSelector((state) => state.state.RotateState);
  const [roomscale, setRoomScale] = useState([window.innerWidth * 0.00003645833, window.innerWidth * 0.00003645833, window.innerWidth * 0.00003645833])
  const roomPostions = useSelector((state) => state.state.roomPosition)
  const roomZoom = useSelector((state) => state.state.roomZoom)
  const light = useSelector((state) => state.state.light)


  const dispatch = useDispatch()


  useEffect(() => {
    window.addEventListener("mousemove", (e) => {

      const mouseX = e.clientX;
      const windowWidth = window.innerWidth;

      let rotateValue = (mouseX / windowWidth) * -0.5 - 0.5;
      rotateValue = Math.max(-1, Math.min(-0.5, rotateValue));

      if (Rotatestate) {
        setRotate(rotateValue)
      }
    });
  }, [Rotatestate]);
  useEffect(() => {
    if (window.innerWidth <= 647) {
      setRoomScale([0.03, 0.03, 0.03])
      dispatch(setRoomPos([roomPostions[0], -1.3, 2]))
    }

    else {
      setRoomScale([0.07, 0.07, 0.07])
      dispatch(setRoomPos([roomPostions[0], -3, 2]))

    }
  }, [window.innerWidth])

  return (
    <section className="room-parent" ref={animatedElementRef}>
      <Canvas style={{ height: '100vh' }} shadows={true}>
        <OrthographicCamera makeDefault zoom={roomZoom} position={[0, 0, 10]} left={-window.innerWidth / 2} right={window.innerWidth / 2} top={window.innerHeight / 2} bottom={-window.innerHeight / 2} />
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={light} />
          <directionalLight
            castShadow={true}
            position={[.01, -2.55, 19.5]}
            intensity={light}
            shadow-camera-right={20}
          />

          <Room
            rotation={[.5, rotate, 0]}
            position={roomPostions}
            scale={roomscale}
            castShadow={true}
            receiveShadow={true}
            animations={props.animations}
          />

        </Suspense>
      </Canvas>
    </section>
  );
};

export default Scene;