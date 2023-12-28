

import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import ThjsScene from "../3d models/three.glb"
import gsap from "gsap";
const Thjs = (props) => {
    const { nodes, materials } = useGLTF(ThjsScene);
    const Thjsref = useRef()
    useEffect(() => {
        const timeline = gsap.timeline();
        timeline.to(Thjsref.current.rotation, {
            y: 360, repeat: -1, duration: 250,ease:"linear"
        })
    }, [])

    return (
        <group {...props} dispose={null} ref={Thjsref}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle.geometry}
          material={materials["Material.008"]}
          position={[-1.658, -0.053, 0]}
          rotation={[Math.PI / 2, 0.772, 0]}
          scale={1.282}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text.geometry}
          material={materials["Material.007"]}
          position={[-0.334, -0.392, -0.075]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    );
}

export default Thjs