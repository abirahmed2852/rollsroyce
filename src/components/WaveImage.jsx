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
  const [clicked, click] = useState(false);
  useCursor(hovered);

  useFrame(() => {
    ref.current.distort = THREE.MathUtils.lerp(
      ref.current.distort,
      hovered ? 0.4 : 0,
      hovered ? 0.05 : 0.01,
      clicked ? 0.4 : 0,
      clicked ? 0.05 : 0.01
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
    "https://live.staticflickr.com/7329/10744631846_017b582009_z.jpg"
  );
  const handleDistort = () => {
    setIntensity(1.5); // Increase intensity
    setTimeout(() => {
      setIntensity(0.5); // Reset intensity after 2 seconds
    }, 2000);
  };

  useEffect(() => {
    // Cleanup timeout if component unmounts
    return () => clearTimeout(handleDistort);
  }, []);

  return (
    <mesh
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      onClick={handleDistort} // Handle click for non-touch devices
      onPointerDown={handleDistort} 
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

export default function WaveImage() {
  return (
    <div className=" w-[100%] h-[60vh]">

      <Canvas>
        <ambientLight intensity={4.5} />
        <Flag />
      </Canvas>
    </div>

  );
} 