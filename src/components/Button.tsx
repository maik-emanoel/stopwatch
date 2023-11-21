import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button className="w-9 h-9 grid place-items-center rounded-full bg-purple text-white" {...rest}>
      {children}
    </button>
  );
}
