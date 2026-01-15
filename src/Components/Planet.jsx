import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Html } from "@react-three/drei";
import { label } from "three/tsl";

export const Planet = ({
  model,
  distance,
  scale = 0.5,
  speed = 0.3,
  tilt = 0,
  onClick,
}) => {
  const group = useRef();
  const planet = useRef();
  const { scene } = useGLTF(model);
  const [hover, setHover] = useState(false);

  useFrame(() => {
    group.current.rotation.y += speed * 0.003;
    planet.current.rotation.y += 0.01;
  });

  {
    hover && (
      <Html distanceFactor={11}>
        <div
          style={{
            background: "rgba(0,0,0,0.7)",
            padding: "7px 13px",
            borderRadius: "9px",
            color: "white",
            whiteSpace: "nowrap",
            fontSize: "15px",
          }}
        >
          {label}
        </div>
      </Html>
    );
  }

  return (
    <>
      <group ref={group} rotation={[0, 0, tilt]} scale={scale}>
        <primitive
          ref={planet}
          object={scene}
          scale={scale}
          position={[distance, 0, 0]}
          onClick={onClick}
          onPointerOver={() => (
            (document.body.style.cursor = "pointer"), setHover(true)
          )}
          onPointerOut={() => (
            (document.body.style.cursor = "default"), setHover(false)
          )}
        />
      </group>
    </>
  );
};
