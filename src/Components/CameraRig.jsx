/* eslint-disable react-hooks/immutability */
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export const CamerRig = ({ targetZ, zoom, onZoomComplete, camera, target }) => {
  const { cameras } = useThree();
  const vec = new THREE.Vector3();

  useFrame(() => {
    if (window.innerWidth < 768) return;

    if (!zoom) return;

    camera.position.z -= 0.08;

    if (camera.position.z <= targetZ) {
      camera.position.z = targetZ;
      onZoomComplete();
    }

    if (target) {
      vec.set(target.x, target.y + 1.5, target.z + 5);
      cameras.position.lerp(vec, 0.05);
      cameras.lookAt(target);
    }
  });

  return null;
};
