/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Erik Egnatosyan (https://sketchfab.com/sans.egnatosyan)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/html-logo-3d-model-ab8b32cab3364027ab00a033a0b2ff38
Title: HTML logo 3d model
*/

import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import reactScene from "../3d models/react.glb"
import gsap from "gsap";
import * as THREE from 'three';
const Reacts = (props) => {
    const { nodes, materials } = useGLTF(reactScene);
    const reactRef = useRef()
    const rotateRef = useRef()
    useEffect(() => {
        const timeline = gsap.timeline();
        timeline.to(reactRef.current.rotation, {
            y: -360, repeat: -1, duration: 250, ease: "linear"
        })
        timeline.to(rotateRef.current.rotation, {
          y: -360, repeat: -1, duration: 250, ease: "linear"
      },"-=250")
    }, [])

    return (
        <group {...props} dispose={null} ref={reactRef}>
        <mesh
       
          castShadow
          receiveShadow
          geometry={nodes.Text.geometry}
          position={[-1.569, -4.194, 0.201]}
          rotation={[Math.PI / 2, 0, 0]}
           material={new THREE.MeshBasicMaterial({ color: 0x000000 })}
        >

        </mesh>
        <mesh
         ref={rotateRef}
          castShadow
          receiveShadow
          geometry={nodes.Circle003.geometry}
          material={materials["Material.002"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.655}
        />
      </group>
    );
}

export default Reacts