import React, { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { MeshDistortMaterial, useCursor } from "@react-three/drei";
import { useControls } from "leva";

function Flag() {
  const { scale } = ({ scale: 2.5 });
  const { wireframe } = ({ wireframe: false });
  const { speed } = ({ speed: 5 });
  const [intensity, setIntensity] = useState(0.5);
  const ref = useRef();
  const [hovered, hover] = useState(false);
  useCursor(hovered);

  useFrame(() => {
    ref.current.distort = THREE.MathUtils.lerp(
      ref.current.distort,
      hovered ? 0.4 : 0,
      hovered ? 0.05 : 0.01
    );
  });

  useEffect(() => {
    const handleScroll = () => {
      // Example: Update intensity based on scroll position
      const scrollY = window.scrollY;
      const newIntensity = Math.min(1.0, scrollY / window.innerHeight);
      setIntensity(newIntensity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const texture = useLoader(
    THREE.TextureLoader,
 "https://ik.imagekit.io/sunnykurmi/images/craft1.jpg?updatedAt=1720062332621"
  );

  return (
    <mesh
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      scale={scale}
    >
      <planeGeometry args={[2, 3, 100, 100]} />
      <MeshDistortMaterial
        map={texture}
        ref={ref}
        intensity={intensity}
        speed={speed}
        wireframe={wireframe}
      ></MeshDistortMaterial>
    </mesh>
  );
}

export default function WaveImage2() {
  return (
    <div className=" w-[100%] h-[60vh]">

      <Canvas>
        <ambientLight intensity={4.5} />
        <Flag />
      </Canvas>
    </div>

  );
} 