import { useBox } from "@react-three/cannon";
import { Mesh } from "three";
import * as textures from "../images/textures";
import { useState } from "react";
import { useStore } from "../hooks/useStore";

type Props = {
  id: string;
  position: [number, number, number];
  texture: string;
};
const Cube = ({ id, position, texture }: Props) => {
  const [removeCube] = useStore((state) => [state.removeCube]);
  const [isHovered, setIsHovered] = useState(false);
  const [ref] = useBox<Mesh>(() => ({
    type: "Static",
    position,
  }));

  const activeTexture = textures[`${texture}Texture` as keyof typeof textures];

  return (
    <mesh
      ref={ref}
      onPointerMove={(e) => {
        e.stopPropagation();
        setIsHovered(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setIsHovered(false);
      }}
      onClick={(e) => {
        e.stopPropagation();
        if (e.altKey) {
          removeCube(id);
        }
      }}
    >
      <boxGeometry attach="geometry" />
      <meshStandardMaterial
        color={isHovered ? "grey" : "white"}
        map={activeTexture}
        attach={"material"}
      />
    </mesh>
  );
};

export { Cube };
