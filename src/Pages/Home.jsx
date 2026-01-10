import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Astronaut } from "../Components/Astronaut";

export const Home = () => {
  return (
    <div style={{ height: "100vh", background: "#000" }}>
      <Canvas camera={{ position: [0, 1.5, 5], fov: 50 }}>
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Space Background */}
        <Stars radius={100} depth={50} count={5000} factor={4} />

        {/* Astronaut */}
        <Astronaut />

        {/* Mouse Controls */}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};
