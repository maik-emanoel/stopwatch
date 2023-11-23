import { ButtonHTMLAttributes, ReactNode, useState } from "react";
import { isTouchSupported } from "../utils/touchUtils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  tooltipName: string;
}

type Tooltip = "visible" | "invisible" | "animationLeave";

export function Button({ children, tooltipName, ...rest }: ButtonProps) {
  const [tooltipVisibility, setTooltipVisibility] = useState<Tooltip>("invisible");

  return (
    <div
      className="relative text-white"
      onMouseEnter={() => setTooltipVisibility("visible")}
      onMouseLeave={() => {
        setTooltipVisibility("animationLeave");

        setTimeout(() => {
          setTooltipVisibility("invisible");
        }, 300);
      }}
    >
      <button
        data-istouchsupported={isTouchSupported}
        className="w-9 h-9 grid place-items-center rounded-full bg-purple transition-all duration-300 active:scale-90 data-[istouchsupported=false]:hover:brightness-110"
        {...rest}
      >
        {children}
      </button>

      {tooltipVisibility !== "invisible" && !isTouchSupported && (
        <div
          id="tooltip-default"
          role="tooltip"
          data-tooltipvisibility={tooltipVisibility}
          className="absolute left-[50%] translate-x-[-50%] mt-2 px-3 py-1 rounded-lg bg-gray/75 backdrop-blur text-sm select-none pointer-events-none data-[tooltipvisibility=visible]:animate-appear data-[tooltipvisibility=animationLeave]:animate-disappear"
        >
          <span>{tooltipName}</span>
        </div>
      )}
    </div>
  );
}
