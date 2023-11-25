import { SideImage } from "./components/SideImage";
import { Timer } from "./components/Timer";

export function App() {
  return (
    <main className="flex justify-center items-center gap-16 max-w-[900px] w-full px-5">
      <Timer />
      <SideImage />
    </main>
  )
}
