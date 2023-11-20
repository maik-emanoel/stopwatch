import { ArrowClockwise, Pause, Play } from "@phosphor-icons/react";
import { useState, useEffect, useRef } from "react";

export function Timer() {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const lastUpdateRef = useRef(Date.now());

  function handleStartAndPause() {
    setIsRunning((prevIsRunning) => !prevIsRunning);
    lastUpdateRef.current = Date.now();
  }

  function handleReset() {
    setIsRunning(false)
    setCounter(0)
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
  }, [isRunning]);

  const minutes = Math.floor(counter / (1000 * 60));
  const seconds = Math.floor((counter / 1000) % 60);
  const milliseconds = counter % 1000;

  return (
    <div>
      <h1>Stopwatch</h1>
      <div>
        <span>{minutes.toString().padStart(2, "0")}:</span>
        <span>{seconds.toString().padStart(2, "0")}.</span>
        <span>{milliseconds.toString().padStart(3, "0")}</span>
      </div>

      <div>
        <button onClick={handleStartAndPause}>
          {isRunning ? <Pause /> : <Play />}
        </button>
        <button onClick={handleReset}>
          <ArrowClockwise />
        </button>
      </div>
    </div>
  );
}
