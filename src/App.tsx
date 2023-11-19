import { SideImage } from "./components/SideImage";
import { Timer } from "./components/Timer";

export function App() {
  return (
    <main className="flex items-center">
      <Timer />
      <SideImage />
    </main>
  )
}
