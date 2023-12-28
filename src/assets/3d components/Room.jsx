import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations, Box } from "@react-three/drei";
import RoomScene from "../3d models/room.glb"
import { a } from "@react-spring/three"
import { useLoader } from "@react-three/fiber";
import { VideoTexture, TextureLoader } from "three";
import gsap from "gsap";
import * as THREE from "three";
import { useDispatch, useSelector } from "react-redux";
import { setRotateState } from "../components/Redux/Redux";
const Room = (props) => {
  const roomRef = useRef();
  const bookShelf = useRef(null);
  const desk1 = useRef(null)
  const desk2 = useRef(null)
  const desk3 = useRef(null)
  const mouse = useRef(null)
  const screen = useRef(null)
  const paint = useRef(null)
  const chair = useRef(null)
  const cat = useRef(null)
  const plant = useRef(null)
  const parent = useRef(null)
  const fishStand = useRef(null)
  const fish = useRef(null)
  const box = useRef(null)
  const dispatch = useDispatch()
  const { nodes, materials, animations } = useGLTF(RoomScene);
  const { actions } = useAnimations(animations, roomRef);
  const display = useSelector((state) => state.state.video)
  const [video] = useState(() => {
    const vid = document.createElement("video")
    vid.src = "/Rocks.mp4";
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;

    return vid
  })

  useEffect(() => {
    if (display === 1) {
      video.src = "/Rocks.mp4"
      video.play();
    }
    if (display === 2) {
      video.src = "/calc.mp4"
      video.play()
    }
    if (display === 3) {
      video.src = "/Todos.mp4"
      video.play()
    }
    if (display === 4) {
      video.src = "/Countries-f.mp4"
      video.play()
    }
    if (display === 5) {
      video.src = "/Base-f.mp4"
      video.play()
    }
    if (display === 6) {
      video.src = "/generator-f.mp4"
      video.play()
    }
  }, [display, video]);
  function material() {
    if (display != 0) {

      return (
        <meshStandardMaterial side={THREE.DoubleSide}>
          <videoTexture attach="map" args={[video]} />
          <videoTexture attach="emissiveMap" args={[video]} />
        </meshStandardMaterial>

      )
    }
  }

  useEffect(() => {

    const timeline = gsap.timeline();
    timeline
      .to(box.current.scale, {
        x: 11, y: 11, z: 11, duration: 1, ease: "back.ouh(1)"
      }).to(box.current.position,
        {

          x: window.innerWidth >= 647 ? -15 : -55,
          y: window.innerWidth >= 647 ? 50 : 35,
          z: window.innerWidth >= 647 ? 25 : 25,

          duration: 1
        },

        "-=.2")
      .to(box.current.rotation, {
        y: Math.PI * 0.5,
        duration: 1
      }, "-=1")
      .to(".letter", {
        y: 0,
        duration: .7,
        stagger: 0.04,
        ease: "back.out(2)",
      }).to(".letter", {
        y: 35,
        duration: .3,
        stagger: 0.04,
        ease: "back.out(2)",
        delay: 2.5
      })
      .to(box.current.scale, {
        x: 95,
        y: 95,
        z: 95,
        duration: 1
      }, "-=1")
      .to(box.current.position, {
        x: 23,
        y: 50,
        z: -20,
        duration: 1
      }, "-=1")
      .to(box.current.rotation, {
        y: Math.PI * 1,

      }, "-=1")

      .to(parent.current.scale, {
        x: 46.61, y: 46.611, z: 46.61, duration: 0.1

      }).to(box.current.scale, {
        x: 0,
        y: 0,
        z: 0
      })
      .to(
        desk1.current.scale,
        { x: 0.047, y: 0.028, z: 0.192, duration: 0.7, ease: "power2.out" }, "-=0.4"
      ).to(
        desk2.current.scale,
        { x: 12.94, y: 0.942, z: 16.941, duration: 0.7, ease: "power2.out" }, "-=0.4"
      )
      .to(
        desk3.current.scale,
        { x: 13.068, y: -1.091, z: -22.942, duration: 0.7, ease: "power2.out" }, "-=0.4"
      )
      .to(
        mouse.current.scale,
        { x: 34.413, y: 34.413, z: 34.413, duration: 0.7, ease: "power2.out" }, "-=0.4"
      )
      .to(
        screen.current.scale,
        { x: 0.897, y: 0.813, z: 0.893, duration: 0.7, ease: "power2.out" }, "-=0.4"
      )
      .to(
        paint.current.scale,
        { x: 1.209, y: 6.716, z: 4.736, duration: 0.7, ease: "power2.out" }, "-=0.4"
      )
      .to(
        chair.current.scale,
        { x: 0.391, y: 0.391, z: 0.391, duration: 0.7, ease: "power2.out" },
        "-=0.4" // Delay the start of this animation by 0.4 seconds
      )
      .to(
        cat.current.scale,
        { x: 4.436, y: 4.436, z: 4.436, duration: 0.7, ease: "power2.out" }, "-=0.4"
      )
      .to(
        plant.current.scale,
        { x: -0.055, y: -0.055, z: -0.012, duration: 0.7, ease: "power2.out" },
        "-=0.4" // Delay the start of this animation by 0.4 seconds
      )
      .to(
        fishStand.current.scale,
        { x: 10.87, y: 14.535, z: 14.535, duration: 0.7, ease: "power2.out" },
        "-=0.4" // Delay the start of this animation by 0.4 seconds
      ).to(
        fish.current.scale,
        {
          x: 5.358, y: 5.358, z: 5.358, duration: 0.7, ease: "power2.out"
        }).to(
          bookShelf.current.scale,
          { x: -0.064, y: -0.064, z: -0.013, duration: 0.7, ease: "power2.out" }
        ).to("h1", {
          display: "none"
        }).to(".h-2letter", {
          y: 0,
          duration: .7,
          stagger: 0.09,
          ease: "back.out(2)",
        }, "-=3.5").to(".h-3letter", {
          y: 0,
          duration: .7,
          stagger: 0.09,
          ease: "back.out(2)",
        }, "-=3.5").to("body", {
          overflow: "visible",
          maxHeight: ""
        })
      .to(".arrow-container", {
        display: "flex"
      })
    timeline.eventCallback("onComplete", () => {
      // Code to execute when the timeline completes
      actions["fish Action.001"].play();
      dispatch(setRotateState())

    });
  }, []);

  return (
    <group ref={roomRef} {...props} dispose={null} >
      <group name="Scene">

        <group
          name="Sketchfab_model"
          position={[-4.347, 32.791, -52.767]}
          rotation={[-Math.PI / 2, 0, 1.597]}
          scale={0.868}
        >
          <group name="Figuresfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="RootNode">
              <group name="Gumi_Figure" position={[6.305, 0, 0]}>
                <group name="Figure_bottom4">
                  <group
                    name="Circle6"
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={1.763}
                  />
                </group>
                <group name="Gumi">
                  <group name="Gumiobj_1" />
                </group>
              </group>
              <group name="Hatsune_miku_Figure" position={[-6.195, 0, 0]}>
                <group
                  name="Circle"
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={1.763}
                />
                <group name="MikuFigure">
                  <group name="MikuFigureobj_1" />
                </group>
              </group>
              <group name="Kaito_Figure" position={[-3.695, 0, 0]}>
                <group name="Figure_bottom">
                  <group
                    name="Circle2"
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={1.763}
                  />
                </group>
                <group name="KaitoFigure">
                  <group name="KaitoFigureobj_1" />
                </group>
              </group>
              <group name="Len_Figure" position={[1.305, 0, 0]}>
                <group name="Figure_bottom2">
                  <group
                    name="Circle4"
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={1.763}
                  />
                </group>
                <group name="LenFigure">
                  <group name="LenFigureobj_1" />
                </group>
              </group>
              <group name="Meiko_Figure" position={[3.805, 0, 0]}>
                <group name="Figure_bottom3">
                  <group
                    name="Circle5"
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={1.763}
                  />
                </group>
                <group name="MeikoFigure">
                  <group name="MeikoFigureobj_1" />
                </group>
              </group>
              <group name="Rin_Figure" position={[-1.195, 0, 0]}>
                <group name="Figure_bottom1">
                  <group
                    name="Circle3"
                    position={[0.032, 0, 0]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={1.763}
                  />
                </group>
                <group name="RinFigure">
                  <group name="RinFigureobj_1" />
                </group>
              </group>
            </group>
          </group>
        </group>
        <group
          name="Sketchfab_model001"
          position={[-11.005, 10.904, -8.222]}
          rotation={[-Math.PI / 2, 0, -2.09]}
          scale={0}
          ref={chair}
        >
          <group
            name="274d03ff638d453593d5618d775668ebfbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="RootNode001">
              <group
                name="Box01"
                position={[-22.416, 36.429, -126.045]}
                rotation={[-Math.PI / 2, 0, 0.203]}
              />
              <group
                name="Box02"
                position={[-85.259, 57.343, -139.265]}
                rotation={[-Math.PI / 2, 0, 0.203]}
              />
              <group
                name="Circle01"
                position={[-53.047, 26.621, -92.605]}
                rotation={[-Math.PI / 2, 0, 0.203]}
              >
                <mesh
                  name="Circle01_Matteplastic_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Circle01_Matteplastic_0.geometry}
                  material={materials.Matteplastic}
                  position={[3.035, -0.218, -0.059]}
                />
              </group>
              <group
                name="Cylinder01"
                position={[-51.211, 4.359, -120.109]}
                rotation={[-Math.PI / 2, 0, 0.203]}
              >
                <mesh
                  name="Cylinder01_BlackMetal_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder01_BlackMetal_0.geometry}
                  material={materials.BlackMetal}
                  position={[-0.012, -0.002, 21.31]}
                />
                <group
                  name="Cylinder01_Matteplastic_0"
                  position={[-0.007, 0.081, 7.536]}
                  scale={1.178}
                >
                  <mesh
                    name="Cylinder01_Matteplastic_0_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder01_Matteplastic_0_1.geometry}
                    material={materials.Matteplastic}
                  />
                  <mesh
                    name="Cylinder01_Matteplastic_0_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder01_Matteplastic_0_2.geometry}
                    material={materials.Chrome}
                  />
                </group>
              </group>
              <group
                name="Cylinder03"
                position={[-43.911, 25.862, -121.614]}
                rotation={[-Math.PI / 2, 0, 0.203]}
              />
              <group
                name="Cylinder07"
                position={[-51.807, 29.202, -138.711]}
                rotation={[-Math.PI / 2, 0, 0.203]}
              >
                <mesh
                  name="Cylinder07_BlackMetal_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder07_BlackMetal_0.geometry}
                  material={materials.BlackMetal}
                  position={[0.003, 0.038, -0.316]}
                />
              </group>
              <group
                name="Cylinder08"
                position={[-46.044, 29.443, -139.913]}
                rotation={[-Math.PI / 2, 0, 0.203]}
              >
                <mesh
                  name="Cylinder08_BlackMetal_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder08_BlackMetal_0.geometry}
                  material={materials.BlackMetal}
                  position={[0.003, 0.038, -0.316]}
                />
              </group>
              <group
                name="Cylinder09"
                position={[-47.118, 30.344, -144.884]}
                rotation={[-Math.PI / 2, 0, 0.203]}
              >
                <mesh
                  name="Cylinder09_BlackMetal_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder09_BlackMetal_0.geometry}
                  material={materials.BlackMetal}
                  position={[0.003, 0.038, -0.316]}
                />
              </group>
              <group
                name="Cylinder10"
                position={[-52.882, 30.103, -143.682]}
                rotation={[-Math.PI / 2, 0, 0.203]}
              >
                <mesh
                  name="Cylinder10_BlackMetal_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder10_BlackMetal_0.geometry}
                  material={materials.BlackMetal}
                  position={[0.003, 0.038, -0.316]}
                />
              </group>
              <group
                name="Cylinder11"
                position={[-43.432, 29.902, -97.895]}
                rotation={[-Math.PI / 2, 0, 0.203]}
              >
                <mesh
                  name="Cylinder11_BlackMetal_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder11_BlackMetal_0.geometry}
                  material={materials.BlackMetal}
                  position={[0.006, -0.044, -0.315]}
                />
              </group>
              <group
                name="Cylinder12"
                position={[-44.411, 29.001, -102.886]}
                rotation={[-Math.PI / 2, 0, 0.203]}
              >
                <mesh
                  name="Cylinder12_BlackMetal_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder12_BlackMetal_0.geometry}
                  material={materials.BlackMetal}
                  position={[0.006, -0.044, -0.315]}
                />
              </group>
              <group
                name="Cylinder13"
                position={[-37.663, 30.142, -99.07]}
                rotation={[-Math.PI / 2, 0, 0.203]}
              >
                <mesh
                  name="Cylinder13_BlackMetal_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder13_BlackMetal_0.geometry}
                  material={materials.BlackMetal}
                  position={[0.006, -0.044, -0.315]}
                />
              </group>
              <group
                name="Cylinder14"
                position={[-38.642, 29.241, -104.061]}
                rotation={[-Math.PI / 2, 0, 0.203]}
              >
                <mesh
                  name="Cylinder14_BlackMetal_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder14_BlackMetal_0.geometry}
                  material={materials.BlackMetal}
                  position={[0.006, -0.044, -0.315]}
                />
              </group>
              <group
                name="Cylinder15"
                position={[-19.862, 33.508, -79.262]}
                rotation={[-Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Cylinder15_BlackMetal_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder15_BlackMetal_0.geometry}
                  material={materials.BlackMetal}
                  position={[-23.528, 13.076, 1.739]}
                  rotation={[0, 0, 0.203]}
                />
              </group>
              <group
                name="Cylinder16"
                position={[-22.655, 35.87, -104.279]}
                rotation={[-Math.PI / 2, 0, 0.792]}
              >
                <mesh
                  name="Cylinder16_BlackMetal_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder16_BlackMetal_0.geometry}
                  material={materials.BlackMetal}
                  position={[0.004, 0.012, -0.318]}
                />
              </group>
              <group
                name="Cylinder17"
                position={[-47.901, 35.87, -149.764]}
                rotation={[-Math.PI / 2, 0, 0.203]}
              >
                <mesh
                  name="Cylinder17_BlackMetal_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder17_BlackMetal_0.geometry}
                  material={materials.BlackMetal}
                  position={[0.004, -0.012, -0.318]}
                />
              </group>
              <group
                name="Cylinder18"
                position={[-54.92, 35.565, -148.249]}
                rotation={[-Math.PI / 2, 0, 0.203]}
              >
                <mesh
                  name="Cylinder18_BlackMetal_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder18_BlackMetal_0.geometry}
                  material={materials.BlackMetal}
                  position={[0.004, -0.012, -0.318]}
                />
              </group>
              <group
                name="Line01"
                position={[-54.384, 26.329, -119.455]}
                rotation={[-Math.PI / 2, 0, 0.203]}
              >
                <group
                  name="Line01_BlackMetal_0"
                  position={[5.18, -0.003, 0.484]}
                  scale={1.197}
                >
                  <mesh
                    name="Line01_BlackMetal_0_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Line01_BlackMetal_0_1.geometry}
                    material={materials.BlackMetal}
                  />
                  <mesh
                    name="Line01_BlackMetal_0_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.Line01_BlackMetal_0_2.geometry}
                    material={materials.Matteplastic}
                  />
                  <mesh
                    name="Line01_BlackMetal_0_3"
                    castShadow
                    receiveShadow
                    geometry={nodes.Line01_BlackMetal_0_3.geometry}
                    material={materials.Lether}
                  />
                  <mesh
                    name="Line01_BlackMetal_0_4"
                    castShadow
                    receiveShadow
                    geometry={nodes.Line01_BlackMetal_0_4.geometry}
                    material={materials.Chairback}
                  />
                </group>
              </group>
              <group
                name="Line02"
                position={[-50.424, 26.228, -98.04]}
                rotation={[-Math.PI / 2, 0, 0.203]}
              >
                <mesh
                  name="Line02_BlackMetal_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Line02_BlackMetal_0.geometry}
                  material={materials.BlackMetal}
                  position={[0.096, 8.109, 0.347]}
                />
              </group>
              <group
                name="Line04"
                position={[-18.111, 48.52, -79.051]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <group
                name="Line05"
                position={[-53.248, 50.577, -148.809]}
                rotation={[-Math.PI / 2, 0, 0.203]}
              />
              <group
                name="Rectangle02"
                position={[-51.211, 1.992, -120.109]}
                rotation={[-Math.PI / 2, 0, 0.203]}
              >
                <group name="Cylinder04" position={[-9.737, 28.277, -4.174]}>
                  <group name="Cylinder02" position={[-1.576, 0.248, -4.729]} />
                </group>
                <group name="Cylinder20" position={[23.84, 17.931, -4.174]}>
                  <group name="Cylinder19" position={[-0.419, 1.539, -4.729]} />
                </group>
                <group name="Cylinder21" position={[24.416, -17.128, -4.174]}>
                  <group name="Cylinder22" position={[0.917, 1.305, -4.729]} />
                </group>
                <group name="Cylinder23" position={[-8.754, -28.449, -4.174]}>
                  <group name="Cylinder24" position={[1.58, -0.216, -4.729]} />
                </group>
                <group name="Cylinder26" position={[-29.848, -0.519, -4.174]}>
                  <group name="Cylinder25" position={[-0.697, 1.434, -4.729]} />
                </group>
              </group>
              <group
                name="Rectangle11"
                position={[-45.457, 32.536, -121.296]}
                rotation={[-Math.PI / 2, 0, 0.203]}
              />
            </group>
          </group>
        </group>
        <group
          name="Sketchfab_model002"
          position={[20.832, 31.45, 14.351]}
          rotation={[-Math.PI / 2, 0, -0.589]}
          scale={0}
          ref={cat}
        >
          <group name="SleepiingCatobjcleanermaterialmergergles">
            <mesh
              name="Object_2"
              castShadow
              receiveShadow
              geometry={nodes.Object_2.geometry}
              material={materials["Material.027"]}
              position={[1.456, 4.973, -1.141]}
              rotation={[0, 0, -0.775]}
              scale={1.355}
            />
          </group>
        </group>
        <group
          name="Sketchfab_model003"
          position={[-4.446, 46.601, -4.58]}
          rotation={[-Math.PI / 2, 0, -1.565]}
          scale={[4.612, 5.813, 4.612]}
        >
          <group
            name="6e0e112cd7674ca8b5e641d361706031fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="RootNode002">
              <group
                name="Camera001"
                position={[-355.098, 495.831, -1244.254]}
                rotation={[-Math.PI, 0.756, 2.68]}
                scale={100}
              >
                <group name="Object_4" />
              </group>
              <group
                name="Cube035"
                rotation={[-Math.PI / 2, 0, 0]}
                scale={60.543}
              />
            </group>
          </group>
        </group>

        <group
          name="Sketchfab_model005"
          position={[-2.97, 41.567, 10.8]}
          rotation={[-Math.PI / 2, 0, -2.999]}
          scale={0}
          ref={mouse}
        >
          <group name="mugobjcleanermaterialmergergles">
            <group name="Object_2001" rotation={[0, 0, 1.045]} scale={0.88}>
              <mesh
                name="Object_0001"
                castShadow
                receiveShadow
                geometry={nodes.Object_0001.geometry}
                material={materials["Material.037"]}
              />
              <mesh
                name="Object_0001_1"
                castShadow
                receiveShadow
                geometry={nodes.Object_0001_1.geometry}
                material={materials["Material.036"]}
              />
              <mesh
                name="Object_0001_2"
                castShadow
                receiveShadow
                geometry={nodes.Object_0001_2.geometry}
                material={materials.lambert4}
              />
            </group>
          </group>
        </group>
        <group
          name="Sketchfab_model006"
          position={[-10.323, 36.667, -46.412]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0}
          ref={fish}
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="aquarium_0" position={[-0.027, 0.676, -0.188]}>
                <mesh
                  name="Object_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials.a_boat}
                />
                <mesh
                  name="Object_11"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_11.geometry}
                  material={materials.water}
                />
                <mesh
                  name="Object_4001"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4001.geometry}
                  material={materials.aquarium}
                />
                <mesh
                  name="Object_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_5.geometry}
                  material={materials.sand}
                />
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials.palm_tree_trunk}
                />
                <mesh
                  name="Object_7"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_7.geometry}
                  material={materials.palm}
                />
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials.stone}
                />
                <mesh
                  name="Object_9"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_9.geometry}
                  material={materials.crab}
                />
              </group>
              <group name="fish_tank_6">
                <group name="GLTF_created_0">
                  <group name="aquarium001_5" />
                  <skinnedMesh
                    name="Object_16"
                    geometry={nodes.Object_16.geometry}
                    material={materials.fish}
                    skeleton={nodes.Object_16.skeleton}
                  />
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                </group>
              </group>
            </group>
          </group>
        </group>
        <group
          name="Cube"
          position={[17.886, 47.001, -22.83]}
          rotation={[0.013, 0.007, 0.006]}
          scale={0}
          ref={parent}
        >
          <mesh
            name="Cube_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube_1.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            name="Cube_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube_2.geometry}
            material={materials["Material.006"]}
          />
          <mesh
            name="Cube_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube_3.geometry}
            material={materials["Material.007"]}
          />
          <mesh
            name="Cube_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube_4.geometry}
            material={materials["Material.008"]}
          />
        </group>
        <group
          name="Cube010"
          position={[39.608, 15.233, -50.859]}
          rotation={[Math.PI, -0.217, 0]}
          scale={0}
          ref={bookShelf}
        >
          <mesh
            name="Cube016"
            castShadow
            receiveShadow
            geometry={nodes.Cube016.geometry}
            material={materials["Material.013"]}
          />
          <mesh
            name="Cube016_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube016_1.geometry}
            material={materials["Material.012"]}
          />
          <mesh
            name="Cube016_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube016_2.geometry}
            material={materials["Material.002"]}
          />
          <mesh
            name="Cube016_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube016_3.geometry}
            material={materials.Material}
          />
          <mesh
            name="Cube016_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube016_4.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            name="Cube016_5"
            castShadow
            receiveShadow
            geometry={nodes.Cube016_5.geometry}
            material={materials["Material.003"]}
          />
          <mesh
            name="Cube016_6"
            castShadow
            receiveShadow
            geometry={nodes.Cube016_6.geometry}
            material={materials["Material.004"]}
          />
          <mesh
            name="Cube016_7"
            castShadow
            receiveShadow
            geometry={nodes.Cube016_7.geometry}
            material={materials["Material.009"]}
          />
          <mesh
            name="Cube016_8"
            castShadow
            receiveShadow
            geometry={nodes.Cube016_8.geometry}
            material={materials["Material.014"]}
          />
          <mesh
            name="Cube016_9"
            castShadow
            receiveShadow
            geometry={nodes.Cube016_9.geometry}
            material={materials["Material.015"]}
          />
          <mesh
            name="Cube016_10"
            castShadow
            receiveShadow
            geometry={nodes.Cube016_10.geometry}
            material={materials["Material.017"]}
          />
          <mesh
            name="Cube016_11"
            castShadow
            receiveShadow
            geometry={nodes.Cube016_11.geometry}
            material={materials["Material.010"]}
          />
          <mesh
            name="Cube016_12"
            castShadow
            receiveShadow
            geometry={nodes.Cube016_12.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            name="Cube016_13"
            castShadow
            receiveShadow
            geometry={nodes.Cube016_13.geometry}
            material={materials.Circle6__0}
          />
          <mesh
            name="Cube016_14"
            castShadow
            receiveShadow
            geometry={nodes.Cube016_14.geometry}
            material={materials.test_lambert2}
          />
          <mesh
            name="Cube016_15"
            castShadow
            receiveShadow
            geometry={nodes.Cube016_15.geometry}
            material={materials.ctr_gumh001_hitemalpha_1Material}
          />
          <mesh
            name="Cube016_16"
            castShadow
            receiveShadow
            geometry={nodes.Cube016_16.geometry}
            material={materials.test_test_te_000_r1}
          />
          <mesh
            name="Cube016_17"
            castShadow
            receiveShadow
            geometry={nodes.Cube016_17.geometry}
            material={materials.test_test_alpha}
          />
          <mesh
            name="Cube016_18"
            castShadow
            receiveShadow
            geometry={nodes.Cube016_18.geometry}
            material={materials.lambert2}
          />
          <mesh
            name="Cube016_19"
            castShadow
            receiveShadow
            geometry={nodes.Cube016_19.geometry}
            material={materials.meiko_all}
          />
          <mesh
            name="Cube016_20"
            castShadow
            receiveShadow
            geometry={nodes.Cube016_20.geometry}
            material={materials.rin_S003_Diffuse}
          />
          <mesh
            name="Cube016_21"
            castShadow
            receiveShadow
            geometry={nodes.Cube016_21.geometry}
            material={materials.rin_S003_Alpha}
          />
          <mesh
            name="Cube016_22"
            castShadow
            receiveShadow
            geometry={nodes.Cube016_22.geometry}
            material={materials.ren_s4}
          />
          <mesh
            name="Cube016_23"
            castShadow
            receiveShadow
            geometry={nodes.Cube016_23.geometry}
            material={materials.ren_s004_algha}
          />
        </group>
        <group
          name="Cube032"
          position={[-20.552, 75.695, -4.491]}
          scale={0}
          ref={paint}
        >
          <mesh
            name="Cube020"
            castShadow
            receiveShadow
            geometry={nodes.Cube020.geometry}
            material={materials["Material.023"]}
          />
          <mesh
            name="Cube020_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube020_1.geometry}
            material={materials["Material.019"]}
          />
          <mesh
            name="Cube020_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube020_2.geometry}
            material={materials["Material.020"]}
          />
          <mesh
            name="Cube020_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube020_3.geometry}
            material={materials["Material.022"]}
          />
          <mesh
            name="Cube020_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube020_4.geometry}
            material={materials["Material.021"]}
          />
        </group>
        <mesh
          name="Cube027"
          castShadow
          receiveShadow
          geometry={nodes.Cube027.geometry}
          material={materials["Material.024"]}
          position={[-10.442, 40.484, -6.983]}
          scale={0}
          ref={desk3}
        />
        <mesh
          name="Cube029"
          castShadow
          receiveShadow
          geometry={nodes.Cube029.geometry}
          material={materials["Material.026"]}
          position={[-10.442, 22.78, 14.842]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0}
          ref={desk2}

        />
        <group
          name="Cube033"
          position={[3.545, 22.105, -23.659]}
          scale={0}
          ref={desk1}
        >
          <mesh
            name="Cube037"
            castShadow
            receiveShadow
            geometry={nodes.Cube037.geometry}
            material={materials["Material.030"]}
          />
          <mesh
            name="Cube037_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube037_1.geometry}
            material={materials["Material.025"]}
          />
          <mesh
            name="Cube037_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube037_2.geometry}
            material={materials["Material.029"]}
          />
        </group>
        <group
          name="Plane"
          position={[-11.685, 56.019, 4.428]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0}
          ref={screen}
        >
          <mesh
            name="Plane_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane_1.geometry}
            material={materials["Material.034"]}
            scale={1.01}
          >
            {material()}

          </mesh>
          <mesh
            name="Plane_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane_2.geometry}
            material={materials["Material.033"]}
          />
          <mesh
            name="Plane_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane_3.geometry}
            material={materials["Material.035"]}
          />
        </group>
        <group
          name="Cube036"
          position={[-13.528, 46.701, -25.558]}
          rotation={[0, -1.378, -Math.PI]}
          scale={0}
          ref={plant}
        >
          <mesh
            name="Cube043"
            castShadow
            receiveShadow
            geometry={nodes.Cube043.geometry}
            material={materials["Material.013"]}
          />
          <mesh
            name="Cube043_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube043_1.geometry}
            material={materials["Material.015"]}
          />
        </group>
        {/* fish stand */}
        <mesh
          ref={fishStand}
          name="Cube001"
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials["Material.028"]}
          position={[-9.184, 22.131, -45.28]}
          scale={0}
        />
        <Box
          name="CustomBox"
          castShadow
          receiveShadow
          position={[30, 50, -45]}

          scale={[0, 0, 0]}
          rotation={[0, 0, 0]}
          ref={box}
          color="red"
        >
          <meshStandardMaterial attach="material" color="#2578b9" />

        </Box>
      </group>
    </group>
  );
}

useGLTF.preload("/room.glb");
export default Room