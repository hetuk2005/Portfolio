import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export const Planet = ({ model, distance, speed = 0.3, tilt = 0, onClick }) => {
  const group = useRef();
  const planet = useRef();
  const { scene } = useGLTF(model);

  useFrame(() => {
    group.current.rotation.y += speed * 0.003;
    planet.current.rotation.y += 0.01;
  });

  return (
    <>
      <group ref={group} rotation={[0, 0, tilt]}>
        <primitive
          ref={planet}
          object={scene}
          scale={0.5}
          position={[distance, 0, 0]}
          onClick={onClick}
          onPointerOver={() => (document.body.style.cursor = "pointer")}
          onPointerOut={() => (document.body.style.cursor = "default")}
        />
      </group>
    </>
  );
};
