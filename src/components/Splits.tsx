import { useEffect, useRef } from "react";
import { useThemeContext } from "../context/ThemeContext";

interface SplitsProps {
  splits: number[];
}

export function Splits(props: SplitsProps) {
  const { splits } = props;
  const lastSplitRef = useRef<null | HTMLTableRowElement>(null);

  const { theme } = useThemeContext();

  useEffect(() => {
    if (lastSplitRef.current) {
      lastSplitRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [splits]);

  const splitsFormatted = splits.map((split) => {
    const minutes = Math.floor(split / (1000 * 60));
    const seconds = Math.floor((split / 1000) % 60);
    const milliseconds = split % 1000;

    return `${minutes.toString().padEnd(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}.${milliseconds.toString().padStart(3, "0")}`;
  });

  return (
    <div
      className="w-full h-full max-h-[300px] border border-zinc-300 overflow-y-auto rounded-lg bg-white/80 splitsScroll dark:bg-bodyDark dark:border-zinc-500"
      style={{
        boxShadow: `10px 9px 40px -25px ${
          theme === 'dark' ? "#00000040" : "#DDDBF2"
        }`,
      }}
    >
      <table className="w-full flex flex-col">
        <thead className="sticky top-0">
          <tr className="bg-white w-full flex py-2 border-b border-zinc-300 text-zinc-700 dark:bg-bodyDark dark:text-zinc-100 dark:border-zinc-500">
            <th className="block w-3/4">Lap</th>
            <th className="block w-full">Time</th>
          </tr>
        </thead>

        <tbody className="text-gray dark:text-zinc-200">
          {splitsFormatted.map((split, index) => {
            return (
              <tr
                className="w-full flex text-center animate-appear"
                key={index + 1}
                ref={index === splits.length - 1 ? lastSplitRef : null}
              >
                <td className="p-1 block w-3/4">{index + 1}</td>
                <td className="p-1 block w-full tracking-wide">{split}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
