import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Astronaut } from "../Components/Astronaut";
import { Typewriter } from "react-simple-typewriter";
import { Camera } from "../Components/Camera";

export const Home = () => {
  const [zoom, setZoom] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handleAstronaut = () => {
    // setShowProfile(true);
    // cameraRef.current.position.z = 3;
    setZoom(true);
  };

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
            onClick={() => {
              setShowProfile(false);
              setZoom(false);
            }}
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
            <h2
              style={{
                fontSize: "35px",
                fontWeight: "700",
                textTransform: "uppercase",
              }}
            >
              <Typewriter
                words={["hetuk patel", "forntend developer", "creative coder"]}
                loop
                cursor
                typeSpeed={81}
                deleteSpeed={41}
                delaySpeed={1001}
              />
            </h2>
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

          <Camera
            zoom={zoom}
            onFinish={() => {
              setZoom(false);
              setShowProfile(true);
            }}
          />
        </Canvas>
      )}
    </div>
  );
};
