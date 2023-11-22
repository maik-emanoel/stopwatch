import { ButtonHTMLAttributes, ReactNode, useState } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  tooltipName: string
}

export function Button({ children, tooltipName,  ...rest }: ButtonProps) {
  const [tooltipIsVisible, setTooltipIsVisible] = useState(false);

  return (
    <div
      className="relative text-white"
      onMouseEnter={() => setTooltipIsVisible(true)}
      onMouseLeave={() => setTooltipIsVisible(false)}
    >
      <button
        className="w-9 h-9 grid place-items-center rounded-full bg-purple active:scale-90"
        {...rest}
      >
        {children}
      </button>

      {tooltipIsVisible && (
        <div
          id="tooltip-default"
          role="tooltip"
          className="absolute left-[50%] translate-x-[-50%] mt-2 px-3 py-1 rounded-lg bg-gray/75 backdrop-blur text-sm"
        >
          <span>{tooltipName}</span>
        </div>
      )}
    </div>
  );
}
