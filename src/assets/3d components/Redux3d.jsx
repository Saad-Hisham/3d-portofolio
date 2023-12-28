/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Erik Egnatosyan (https://sketchfab.com/sans.egnatosyan)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/html-logo-3d-model-ab8b32cab3364027ab00a033a0b2ff38
Title: HTML logo 3d model
*/

import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import reduxScene from "../3d models/redux.glb"
import gsap from "gsap";
const Redux3d = (props) => {
    const { nodes, materials } = useGLTF(reduxScene);
    const reduxRef = useRef()
    const sRef = useRef()

    useEffect(() => {
        const timeline = gsap.timeline();
        timeline.to(reduxRef.current.rotation, {
            y: -360, repeat: -1, duration: 250, ease: "linear"
        })
    }, [])

    return (
        <group {...props} dispose={null} >
        <mesh
        ref={reduxRef}
          castShadow
          receiveShadow
          geometry={nodes.Circle001.geometry}
          material={materials["Material.003"]}
          position={[-2.375, 4.25, 118.799]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
        ref={sRef}
          castShadow
          receiveShadow
          geometry={nodes.Text.geometry}
          material={materials["Material.004"]}
          position={[1.018, 2.451, 118.694]}
          rotation={[Math.PI / 2, 0, 0.047]}
          scale={4.047}
        />
      </group>
    );
}

export default Redux3d