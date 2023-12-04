import sunImage from "../assets/sun.svg";
import moonImage from "../assets/moon.svg";
import { useThemeContext } from "../context/ThemeContext";

export function ThemeSwitch() {
  const {theme, handleToggleTheme} = useThemeContext()

  return (
    <div className="absolute top-5 right-7 select-none">
      <div
        className="rounded-full w-14 h-5 relative bg-zinc-200 dark:bg-white"
        style={{
          boxShadow: `inset 1px 9px 40px -25px #000000ab`,
        }}
        onClick={handleToggleTheme}
      >
        <div className="absolute top-[50%] translate-y-[-50%] left-0 grid place-items-center w-8 h-8 rounded-full bg-purple transition-all duration-200 dark:left-[50%]">
          {theme === "light" ? (
            <img src={sunImage} alt="Ícone do sol" className="w-5 h-5" />
          ) : (
            <img src={moonImage} alt="Ícone do lua" className="w-5 h-5" />
          )}
        </div>
      </div>
    </div>
  );
}
