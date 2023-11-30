import { useState } from "react";
import { SideImage } from "./components/SideImage";
import { Timer } from "./components/Timer";
import { Splits } from "./components/Splits";

export function App() {
  const [counter, setCounter] = useState(0);
  const [splits, setSplits] = useState<number[]>([]);

  return (
    <main className="flex justify-center items-center gap-16 max-w-[900px] w-full px-5 md:flex-wrap">
      <Timer counter={counter} setCounter={setCounter} setSplits={setSplits} />
      <div className="flex flex-col max-w-[400px] max-h-[300px] w-full md:h-[300px]">
        {splits.length > 0 ? <Splits splits={splits} /> : <SideImage />}
      </div>
    </main>
  );
}
