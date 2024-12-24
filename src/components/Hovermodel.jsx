import { MeshDistortMaterial, useAspect, useTexture } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue, useTransform } from "framer-motion";
import { motion } from "framer-motion-3d";
import React, { useEffect, useRef, useState, useMemo } from "react";
import { ShaderMaterial } from "three";
import { fragment, vertex } from "./Shader";
import { projects } from "./Projects";
function AnimatedMesh({ mouse, dimension, activeProjects }) {

  const texture = projects.map((project) => useTexture(project.src));
  
  const mesh = useRef();
  const opacity = useMotionValue(0)
  const { viewport } = useThree();
  const scale = useAspect(
    texture[0].image.width,
    texture[0].image.height,
    0.225
  );
  const lerp = (x, y, a) => x * (1 - a) + y * a;
  const smoothMouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };
  const uniform = useRef({
    uTexture: { value: texture[0] },
    uDelta: { value: { x: 0, y: 0 } },
    uOpacity:{value:0}
  });
  const x = useTransform(
    mouse.x,
    [0, dimension.width],
    [(-1 * viewport.width) / 2, viewport.width / 2]
  );
  const y = useTransform(
    mouse.y,
    [0, dimension.height],
    [viewport.height / 2, (-1 * viewport.height) / 2]
  );

  useEffect(() => {
    if (activeProjects != null) {
        animate(opacity, 1, { duration: 0.2, onUpdate: (progress) => {
            mesh.current.material.uniforms.uOpacity.value = progress;
        }});
        mesh.current.material.uniforms.uTexture.value = texture[activeProjects];
        mesh.current.visible = true; // Ensure the mesh is visible
    } else {
        animate(opacity, 0, { duration: 0.2, onUpdate: (progress) => {
            mesh.current.material.uniforms.uOpacity.value = progress;
        }});
        mesh.current.visible = false; // Hide the mesh
    }
}, [activeProjects, opacity, texture]);

  
  useFrame(() => {
    const { x, y } = mouse;
    const smoothX = smoothMouse.x.get();
    const smoothY = smoothMouse.y.get();
    smoothMouse.x.set(lerp(smoothMouse.x.get(), x.get(), 0.1));
    smoothMouse.y.set(lerp(smoothMouse.y.get(), y.get(), 0.1));
    mesh.current.material.uniforms.uDelta.value = {
      x: x.get() - smoothX,
      y: -1 * (y.get() - smoothY),
    };
  });
  const shaderMaterial = useMemo(
    () =>
      new ShaderMaterial({
        fragmentShader: fragment,
        vertexShader: vertex,
        uniforms: uniform.current,
      }),
    [fragment, vertex, uniform.current]
  ); // Add dependencies here

  return (
    <motion.mesh scale={scale} ref={mesh} position-x={x} position-y={y}>
      <planeGeometry args={[1, 1, 15, 15]} />
      <primitive object={shaderMaterial} attach="material" />
    </motion.mesh>
  );
}

export default function Hovermodel({ activeProjects }) {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const resize = () => {
    const { innerWidth, innerHeight } = window;
    setDimension({
      width: innerWidth,
      height: innerHeight,
    });
  };

  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX);
    mouse.y.set(clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("resize", resize);
    resize(); 

    return () => {
        window.removeEventListener("mousemove", mouseMove);
        window.removeEventListener("resize", resize);
    };
}, []);

return (
  <div className="absolute pointer-events-auto  top-0 z-[90] h-[100%] w-full">
          <Canvas>
              <AnimatedMesh
                  activeProjects={activeProjects}
                  mouse={mouse}
                  dimension={dimension}
              />
          </Canvas>
    
  </div>
);
}
