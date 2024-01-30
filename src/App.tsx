import { useCallback, useEffect, useState } from "react";
import { SideImage } from "./components/SideImage";
import { Timer } from "./components/Timer";
import { Splits } from "./components/Splits";

import "swiper/css";
import "swiper/css/effect-flip";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper/core";
import { EffectFlip } from "swiper/modules";
import { ThemeSwitch } from "./components/ThemeSwitch";
import Particles from "react-particles";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { optionsParticles } from "./particlesjs/particlesjs-config";
import { useThemeContext } from "./context/ThemeContext";

SwiperCore.use([EffectFlip]);

export function App() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  const { theme } = useThemeContext();
  const [counter, setCounter] = useState(0);
  const [splits, setSplits] = useState<number[]>([]);

  const [swiper, setSwiper] = useState<SwiperCore | null>(null);

  useEffect(() => {
    if (splits.length > 0) {
      swiper?.slideNext();
    }
  }, [splits, swiper]);

  return (
    <>
      <main className="flex justify-between items-center gap-y-16 max-w-[900px] w-full px-5 z-10 md:flex-wrap md:justify-center">
        <Timer
          counter={counter}
          setCounter={setCounter}
          setSplits={setSplits}
        />
        <div className="max-w-[400px] w-full relative">
          <Swiper
            effect="flip"
            flipEffect={{
              limitRotation: true,
              slideShadows: false,
            }}
            className="max-h-[300px] h-full"
            onInit={(e) => setSwiper(e)}
            onClick={() => {
              if (swiper) {
                swiper.slidePrev();
              }
            }}
          >
            <SwiperSlide>
              <SideImage />
            </SwiperSlide>
            {splits.length > 0 && (
              <SwiperSlide>
                <Splits splits={splits} />
              </SwiperSlide>
            )}
          </Swiper>
        </div>

        <ThemeSwitch />
      </main>

      {theme === "dark" && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={optionsParticles}
        />
      )}
    </>
  );
}
