import React, { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Astronaut } from "../Components/Astronaut";

export const Home = () => {
  const cameraRef = useRef();
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div style={{ height: "100vh", background: "#000" }}>
      {showProfile && (
        <div>
          <img src="../../public/My_Image.jpg" alt="My Image" />
          <h2>HETUK PATEL</h2>
          <p>Fronted Developer</p>
        </div>
      )}
      <Canvas
        camera={{ position: [0, 1, 7], fov: 45 }}
        onCreated={({ camera }) => (cameraRef.current = camera)}
      >
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Space Background */}
        <Stars radius={100} depth={50} count={7000} factor={5} speed={1} />

        {/* Astronaut */}
        <Astronaut onClick={() => setShowProfile(true)} />

        {/* Mouse Controls */}
        <OrbitControls enableZoom={true} minDistance={4} maxDistance={10} />
      </Canvas>
    </div>
  );
};
