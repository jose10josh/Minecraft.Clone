import { useEffect, useState } from "react";

const ACTIONS_KEYBOARD_MAP = {
  KeyW: "moveForward",
  KeyS: "moveBackward",
  KeyA: "moveLeft",
  KeyD: "moveRight",
  Space: "jump",
  Digit1: "dirt",
  Digit2: "grass",
  Digit3: "glass",
  Digit4: "wood",
  Digit5: "log",
};

const useKeyBoard = () => {
  const [actions, setActions] = useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
    dirt: false,
    grass: false,
    glass: false,
    wood: false,
    log: false,
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { code } = event;
      const action =
        ACTIONS_KEYBOARD_MAP[code as keyof typeof ACTIONS_KEYBOARD_MAP];

      if (action) {
        setActions((prev) => ({ ...prev, [action]: true }));
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      const { code } = event;
      const action =
        ACTIONS_KEYBOARD_MAP[code as keyof typeof ACTIONS_KEYBOARD_MAP];

      if (action) {
        setActions((prev) => ({ ...prev, [action]: false }));
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return actions;
};

export default useKeyBoard;
