import { useEffect, useState } from "react";
import { useStore } from "../hooks/useStore";
import useKeyBoard from "../hooks/useKeyBoard";
import * as imagesTexture from "../images/images";

const TextureSelector = () => {
  const [visible, setVisible] = useState(false);
  const [texture, setTexture] = useStore((state) => [
    state.texture,
    state.setTexture,
  ]);

  const { dirt, grass, glass, wood, log } = useKeyBoard();

  useEffect(() => {
    const options = {
      dirt,
      grass,
      glass,
      wood,
      log,
    };

    const selectedTexture = Object.entries(options).find(
      ([texture, isEnabled]) => isEnabled
    );
    if (selectedTexture) {
      const [textureName] = selectedTexture;
      setTexture(textureName);
    }
  }, [dirt, grass, glass, wood, log]);

  useEffect(() => {
    const visibilityTimeOut = setTimeout(() => {
      setVisible(false);
    }, 1000);
    setVisible(true);

    return () => {
      clearTimeout(visibilityTimeOut);
    };
  }, [texture]);

  if (!visible) return null;

  return (
    <div className="texture-selector">
      {Object.entries(imagesTexture).map(([imgKey, img]) => {
        return (
          <img
            key={imgKey}
            src={img}
            alt={imgKey}
            className={texture === imgKey.replace("Img", "") ? "selected" : ""}
          />
        );
      })}
    </div>
  );
};

export { TextureSelector };
