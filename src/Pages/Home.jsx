/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Astronaut } from "../Components/Astronaut";
import { Camera } from "../Components/Camera";
import { SolarSystem } from "../Components/SolarSystem";

const nameText = "HETUK PATEL";
const roles = ["FRONTEND DEVELOPER", "CREATIVE CODER"];

export const Home = ({ setPage }) => {
  const [displayRole, setDisplayRole] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);
  const [phase, setPhase] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  // const [cameraTarget, setCameraTarget] = useState(null);

  const handleAstronaut = () => {
    // setShowProfile(true);
    // cameraRef.current.position.z = 3;
    setShowProfile(true);
  };

  useEffect(() => {
    let timeout;

    // PHASE 0 — TYPE NAME
    if (phase === 0) {
      if (charIndex === 0 && displayName !== "") {
        setDisplayName("");
      }

      if (charIndex < nameText.length) {
        timeout = setTimeout(() => {
          setDisplayName((prev) => prev + nameText[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setPhase(1);
          setCharIndex(0);
        }, 800);
      }
    }

    // PHASE 1 — TYPE ROLE
    if (phase === 1) {
      const role = roles[roleIndex];

      if (charIndex === 0 && displayRole !== "") {
        setDisplayRole("");
      }

      if (charIndex < role.length) {
        timeout = setTimeout(() => {
          setDisplayRole((prev) => prev + role[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 90);
      } else {
        timeout = setTimeout(() => {
          setPhase(2);
        }, 1000);
      }
    }

    // PHASE 2 — DELETE ROLE
    if (phase === 2) {
      if (displayRole.length > 0) {
        timeout = setTimeout(() => {
          setDisplayRole((prev) => prev.slice(0, -1));
        }, 60);
      } else {
        setCharIndex(0);
        setPhase(3);
      }
    }

    // PHASE 3 — TYPE NEXT ROLE
    if (phase === 3) {
      const nextRoleIndex = (roleIndex + 1) % roles.length;
      const nextRole = roles[nextRoleIndex];

      if (charIndex === 0 && displayRole !== "") {
        setDisplayRole("");
      }

      if (charIndex < nextRole.length) {
        timeout = setTimeout(() => {
          setDisplayRole((prev) => prev + nextRole[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 90);
      } else {
        timeout = setTimeout(() => {
          setRoleIndex(nextRoleIndex);
          setPhase(4);
        }, 1000);
      }
    }

    // PHASE 4 — DELETE ROLE + NAME
    if (phase === 4) {
      if (displayRole.length > 0) {
        timeout = setTimeout(() => {
          setDisplayRole((prev) => prev.slice(0, -1));
        }, 50);
      } else if (displayName.length > 0) {
        timeout = setTimeout(() => {
          setDisplayName((prev) => prev.slice(0, -1));
        }, 50);
      } else {
        setCharIndex(0);
        setRoleIndex(0);
        setPhase(0);
      }
    }

    return () => clearTimeout(timeout);
  }, [phase, charIndex, displayName, displayRole, roleIndex]);

  return (
    <div style={{ height: "100vh", background: "#000" }}>
      {!showProfile && (
        <Canvas>
          {/* Lights */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />

          {/* Space Background */}
          <Stars
            radius={100}
            depth={50}
            count={window.innerWidth < 767 ? 2000 : 7000}
            factor={5}
            speed={1}
          />

          {/* Astronaut */}
          <Astronaut onClick={handleAstronaut} />

          {/* SolarSystem */}
          <SolarSystem onPlanetClick={setPage} />

          {/* Mouse Controls */}
          <OrbitControls enableZoom={true} minDistance={3} maxDistance={10} />

          <Camera
            zoom={zoom}
            onFinish={() => {
              setZoom(false);
              setShowProfile(true);
            }}
          />
          {/* <CameraRig target={cameraTarget} /> */}
        </Canvas>
      )}

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
          className="profile_div"
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
              borderRadius: "50%",
            }}
          >
            ✖
          </button>
          <img
            className="profile_img"
            src="/My_Image.jpg"
            alt="My Image"
            style={{
              borderRadius: "50%",
              width: "33%",
              height: "451px",
              objectFit: "fill",
              position: "fixed",
              left: "15%",
            }}
          />
          <div
            className="text"
            style={{
              whiteSpace: "pre-line",
              color: "#fff",
              letterSpacing: "2px",
              position: "absolute",
              right: "25%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(29px,7vw,35px)",
                fontWeight: "700",
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              {displayName}
            </h2>
            <p
              style={{
                fontSize: "clamp(19px,5vh,27px)",
                fontWeight: "700",
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              {displayRole}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
