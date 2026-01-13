import { Ring } from "@react-three/drei";

export const Orbit = ({ radius, tilt = 0 }) => {
  return (
    <mesh rotation={[Math.PI / 3, 0, tilt]}>
      <ringGeometry args={[radius - 0.01, radius, 65]} />
      <meshStandardMaterial color="#ffff" transparent opacity={0.25} />
    </mesh>
  );
};
