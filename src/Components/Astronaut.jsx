import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export const Astronaut = () => {
  const ref = useRef();
  const { scene } = useGLTF("/astronaut.glb");

  // Slow Floating Rotation
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.003;
    }
  });

  return <primitive ref={ref} object={scene} scale={2} position={[0, -1, 0]} />;
};
