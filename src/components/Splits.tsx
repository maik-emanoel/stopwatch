interface SplitsProps {
  splits: number[];
}

export function Splits(props: SplitsProps) {
  const { splits } = props;

  const splitsFormatted = splits.map((split) => {
    const minutes = Math.floor(split / (1000 * 60));
    const seconds = Math.floor((split / 1000) % 60);
    const milliseconds = split % 1000;

    return `${minutes.toString().padEnd(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}:${milliseconds.toString().padStart(3, "0")}`;
  });

  return (
    <div className="w-full border border-gray overflow-y-auto rounded-lg backdrop-blur-md splitsScroll">
      <table className="w-full flex flex-col">
        <thead className="sticky top-0">
          <tr className="bg-white w-full flex">
            <th className="py-1 block w-3/4">Lap</th>
            <th className="py-1 block w-full">Time</th>
          </tr>
        </thead>

        <tbody>
          {splitsFormatted.map((split, index) => {
            return (
              <tr className="w-full flex text-center">
                <td className="p-1 block w-3/4">{index + 1}</td>
                <td className="p-1 block w-full">{split}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
