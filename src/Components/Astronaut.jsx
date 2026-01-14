import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export const Astronaut = ({ onClick }) => {
  const ref = useRef();
  const { scene } = useGLTF("/astronaut.glb");

  // Slow Floating Rotation
  useFrame(() => {
    if (window.innerWidth < 768) return;

    // Slow Rotation
    ref.current.rotation.y += 0.003;

    // Mouse Based Rotation
    // ref.current.rotation.x = state.mouse.y * 0.4;
    // ref.current.rotation.z = state.mouse.x * 0.4;
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={2.5}
      position={[0, -1.3, 0]}
      rotation={[0, Math.PI, 0]}
      onClick={onClick}
      // Cursor Pointer
      onPointerOver={() => (document.body.style.cursor = "pointer")}
      onPointerOut={() => (document.body.style.cursor = "default")}
    />
  );
};
