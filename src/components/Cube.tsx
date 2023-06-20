import { useBox } from "@react-three/cannon";
import { Mesh } from "three";
import * as textures from "../images/textures";

type Props = {
  position: [number, number, number];
  texture: string;
};
const Cube = ({ position, texture }: Props) => {
  const [ref] = useBox<Mesh>(() => ({
    type: "Static",
    position,
  }));

  const activeTexture = textures[`${texture}Texture` as keyof typeof textures];

  return (
    <mesh ref={ref}>
      <boxGeometry attach="geometry" />
      <meshStandardMaterial map={activeTexture} attach={"material"} />
    </mesh>
  );
};

export { Cube };
