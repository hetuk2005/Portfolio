/* eslint-disable react-hooks/immutability */
import { useFrame } from "@react-three/fiber";

export const CamerRig = ({ targetZ, zoom, onZoomComplete, camera }) => {
  useFrame(() => {
    if (window.innerWidth < 768) return;

    if (!zoom) return;

    camera.position.z -= 0.08;

    if (camera.position.z <= targetZ) {
      camera.position.z = targetZ;
      onZoomComplete();
    }
  });

  return null;
};
