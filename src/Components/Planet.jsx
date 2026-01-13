import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export const Planet = ({ position, color, onClick }) => {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.002;
  });

  return (
    <>
      <mesh
        ref={ref}
        position={position}
        onClick={onClick}
        onPointerOver={() => (document.body.style.cursor = "pointer")}
        onPointerOut={() => (document.body.style.cursor = "default")}
      >
        <sphereGeometry args={[0.5, 33, 33]} />
        <meshStandardMaterial color={color} emissive={color} />
      </mesh>
    </>
  );
};
