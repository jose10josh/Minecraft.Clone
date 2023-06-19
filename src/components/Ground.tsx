import { Mesh } from "three";
import { usePlane } from "@react-three/cannon";
import { groundTexture } from "../images/textures";

const Ground = () => {
  const [ref] = usePlane<Mesh>(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.5, 0],
  }));

  groundTexture.repeat.set(100, 100);

  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" map={groundTexture} />
    </mesh>
  );
};

export { Ground };
