import { Mesh } from "three";
import { usePlane } from "@react-three/cannon";
import { groundTexture } from "../images/textures";
import { useStore } from "../hooks/useStore";
import { ThreeEvent } from "@react-three/fiber";

const Ground = () => {
  const [ref] = usePlane<Mesh>(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.5, 0],
  }));

  const [addCube] = useStore((state) => [state.addCube]);
  groundTexture.repeat.set(100, 100);

  const handleClickGround = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    const [x, y, z] = Object.values(e.point).map((n) => Math.ceil(n));
    addCube(x, y, z);
  };

  return (
    <mesh ref={ref} receiveShadow onClick={handleClickGround}>
      <planeGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" map={groundTexture} />
    </mesh>
  );
};

export { Ground };
