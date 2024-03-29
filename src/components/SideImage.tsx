import { useEffect, useRef } from "react";
import spaceBackground from "../assets/space-background.svg";
import rocket from "../assets/rocket.png";
import VanillaTilt from "vanilla-tilt";

export function SideImage() {
  const imageRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      VanillaTilt.init(imageRef.current, {
        max: 20,
        speed: 400,
      });
    }
  }, []);

  return (
    <div
      className="relative h-full select-none md:max-w-[300px] sm:mx-auto"
      ref={imageRef}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <img
        src={spaceBackground}
        alt="Imagem de plano de fundo do espaço"
        style={{
          transform: "perspective(500px)",
          backfaceVisibility: "hidden",
          MozBackfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
        }}
      />
      <img
        src={rocket}
        alt="Imagem de um foguete em 2D"
        className="absolute h-[85%] top-0 left-[32%]"
        style={{
          transform: "translateZ(50px)",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
        }}
      />
    </div>
  );
}
