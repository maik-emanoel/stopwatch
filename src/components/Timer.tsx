import {
  ArrowClockwise,
  FlagPennant,
  IconContext,
  Pause,
  Play,
} from "@phosphor-icons/react";
import { useState, useEffect, useRef } from "react";
import { Button } from "./Button";

interface TimerProps {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  setSplits: React.Dispatch<React.SetStateAction<number[]>>;
}

export function Timer(props: TimerProps) {
  const { counter, setCounter, setSplits } = props;

  const [isRunning, setIsRunning] = useState(false);
  const lastUpdateRef = useRef(Date.now());

  function handleStartAndPause() {
    setIsRunning((prevIsRunning) => !prevIsRunning);
    lastUpdateRef.current = Date.now();
  }

  function handleReset() {
    setIsRunning(false);
    setCounter(0);
    setSplits([])
  }

  useEffect(() => {
    const updateCounter = () => {
      const now = Date.now();
      const elapsedMilliseconds = now - lastUpdateRef.current;

      setCounter((prevCounter) => prevCounter + elapsedMilliseconds);
      lastUpdateRef.current = now;
    };

    if (isRunning) {
      const intervalId = setInterval(updateCounter, 10);
      // If false pause counter
      return () => clearInterval(intervalId);
    }
  }, [isRunning, setCounter]);

  const minutes = Math.floor(counter / (1000 * 60));
  const seconds = Math.floor((counter / 1000) % 60);
  const milliseconds = counter % 1000;

  return (
    <div className="max-w-[400px] w-full">
      <h1 className="text-purple text-titleClamp font-bold uppercase tracking-[3.78px] ml-1">
        Stopwatch
      </h1>
      <div className="text-gray text-counterClamp tracking-[3.78px] w-fit">
        <span>{minutes.toString().padStart(2, "0")}:</span>
        <span>{seconds.toString().padStart(2, "0")}.</span>
        <span>{milliseconds.toString().padStart(3, "0")}</span>
      </div>

      <IconContext.Provider
        value={{
          size: 18,
          weight: "bold",
        }}
      >
        <div className="mt-8 ml-1 flex items-center gap-3">
          <Button
            onClick={handleStartAndPause}
            tooltipName={isRunning ? "Pause" : "Play"}
          >
            {isRunning ? <Pause /> : <Play />}
          </Button>

          <Button onClick={handleReset} tooltipName="Reset">
            <ArrowClockwise />
          </Button>

          <Button
            tooltipName="Split"
            onClick={() => {
              setSplits((prevState) => [...prevState, counter]);
            }}
          >
            <FlagPennant />
          </Button>
        </div>
      </IconContext.Provider>
    </div>
  );
}
