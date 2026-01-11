/* eslint-disable react-hooks/immutability */
import React from "react";
import { useFrame, useThree } from "@react-three/fiber";

export const Camera = ({ zoom, onFinish }) => {
  const { camera } = useThree();

  useFrame(() => {
    if (zoom) {
      camera.position.z -= 0.05;

      if (camera.position.z <= 3) {
        camera.position.z = 3;
        onFinish();
      }
    }
  });

  return null;
};
