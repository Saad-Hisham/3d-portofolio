

import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import FirebaseScene from "../3d models/firebase.glb"
import gsap from "gsap";
import { useLoader } from "@react-three/fiber";
import { TextureLoader, DoubleSide } from "three"; 
const Firebase = (props) => {
    const { nodes, materials } = useGLTF(FirebaseScene);
    const firebaseRef = useRef()
    const texture = useLoader(TextureLoader, "/image.jpeg");

    useEffect(() => {
        const timeline = gsap.timeline();
        timeline.to(firebaseRef.current.rotation, {
            y: 360, repeat: -1, duration: 250,ease:"linear"
        })
    }, [])

    return (
        <group {...props} dispose={null} ref={firebaseRef}>
        <mesh
          geometry={nodes.Circle.geometry}
          material={materials ? materials["Material.007"] : new MeshStandardMaterial({ color: 'red' })}
          position={[0.973, 5.742, 1.613]}
          rotation={[Math.PI / 2, -0.344, 0]}
        > 

      <meshStandardMaterial side={DoubleSide} map={texture} emissiveMap={texture} />
        </mesh>
        <mesh
          geometry={nodes.Text.geometry}
          material={nodes.Text.material}
          position={[-2.625, 0.221, 1.424]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.712}
        />
      </group>
    );
}

export default Firebase