import React, { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Astronaut } from "../Components/Astronaut";

export const Home = () => {
  const cameraRef = useRef();
  const [zoom, setZoom] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handleAstronaut = () => {
    // setShowProfile(true);
    // cameraRef.current.position.z = 3;
    setZoom(true);
  };

  useFrame(() => {
    if (zoom && cameraRef.current) {
      cameraRef.current.position.z -= 0.05;

      if (cameraRef.current.position.z <= 3) {
        cameraRef.current.position.z = 3;
        setZoom(false);
        setShowProfile(true);
      }
    }
  });

  return (
    <div style={{ height: "100vh", background: "#000" }}>
      {showProfile && (
        <div
          style={{
            height: "95vh",
            margin: "15px 0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "71px",
          }}
        >
          <button
            onClick={() => setShowProfile(false)}
            style={{
              position: "absolute",
              top: "31px",
              right: "41px",
              background: "transparent",
              border: "none",
              color: "white",
              fontSize: "29px",
              cursor: "pointer",
            }}
          >
            ✖
          </button>
          <img
            src="../../public/My_Image.jpg"
            alt="My Image"
            style={{
              borderRadius: "50%",
              width: "33%",
              height: "451px",
              objectFit: "fill",
            }}
          />
          <div
            className="text"
            style={{
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "15px",
              letterSpacing: "2px",
            }}
          >
            <h2 style={{ fontSize: "35px", fontWeight: "700" }}>HETUK PATEL</h2>
            <p
              style={{
                fontSize: "27px",
                fontWeight: "700",
                textTransform: "uppercase",
              }}
            >
              Frontend Developer
            </p>
          </div>
        </div>
      )}

      {!showProfile && (
        <Canvas>
          {/* Lights */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />

          {/* Space Background */}
          <Stars radius={100} depth={50} count={7000} factor={5} speed={1} />

          {/* Astronaut */}
          <Astronaut onClick={handleAstronaut} />

          {/* Mouse Controls */}
          <OrbitControls enableZoom={true} minDistance={4} maxDistance={10} />
        </Canvas>
      )}
    </div>
  );
};
