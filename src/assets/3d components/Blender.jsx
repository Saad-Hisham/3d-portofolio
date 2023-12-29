/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Erik Egnatosyan (https://sketchfab.com/sans.egnatosyan)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/html-logo-3d-model-ab8b32cab3364027ab00a033a0b2ff38
Title: HTML logo 3d model
*/

import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import BlenderScene from "../3d models/blender.glb"
import gsap from "gsap";
const Blender = (props) => {
    const { nodes, materials } = useGLTF(BlenderScene);
    const BlenderRef = useRef()
    useEffect(() => {
        const timeline = gsap.timeline();
        timeline.to(BlenderRef.current.rotation, {
            y: 360, repeat: -1, duration: 250,ease:"linear"
        })
    }, [])

    return (
      <group {...props} dispose={null} ref={BlenderRef}>
      <group position={[0.495, 0.235, -0.539]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials.Orange}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_1.geometry}
          material={materials.Blue}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials["Material.001"]}
        position={[-2.798, -5.266, -0.628]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={3.063}
      />
    </group>
    );
}

export default Blender