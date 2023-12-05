import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { loadTheme, saveTheme } from "../utils/themeUtils";

type ThemeContext = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  handleToggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContext | undefined>(undefined);

type ThemeProviderProps = {
  children: ReactNode;
};

export type Theme = "light" | "dark";

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(loadTheme());

  function handleToggleTheme() {
    const html = document.querySelector("html");
    setTheme(theme === "light" ? "dark" : "light");

    if (theme === "light") {
      html?.classList.add("dark");
    } else {
      html?.classList.remove("dark");
    }
  }

  useEffect(() => {
    saveTheme(theme);

    const html = document.querySelector("html");

    if (theme === "light") {
      html?.classList.remove("dark");
    } else {
      html?.classList.add("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme deve ser usado dentro de um ThemeProvider");
  }

  return context;
}
