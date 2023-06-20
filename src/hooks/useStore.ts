import { nanoid } from "nanoid";
import { create } from "zustand";

type CubeT = {
  id: string;
  pos: [number, number, number];
  texture: string;
};

interface StoreState {
  texture: string;
  cubes: CubeT[];
  addCube: (x: number, y: number, z: number) => void;
  // removeCube: () => void;
  // setTexture: () => void;
  // saveWorld: () => void;
  // resertWorld: () => void;
}

const useStore = create<StoreState>((set) => ({
  texture: "dirt",
  cubes: [
    {
      id: nanoid(),
      pos: [1, 1, 1],
      texture: "log",
    },
  ],
  addCube: (x: number, y: number, z: number) => {
    set((state) => ({
      cubes: [
        ...state.cubes,
        {
          id: nanoid(),
          pos: [x, y, z],
          texture: state.texture,
        },
      ],
    }));
  },
  // removeCube: () => {},
  // setTexture: () => {},
  // saveWorld: () => {},
  // resertWorld: () => {},
}));

export { useStore };
