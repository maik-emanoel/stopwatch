import { Theme } from "../context/ThemeContext";

export function saveTheme(theme: Theme) {
    localStorage.setItem('theme', JSON.stringify(theme))
}

export function loadTheme() {
    const storedTheme = localStorage.getItem('theme')
    return storedTheme ? JSON.parse(storedTheme) : 'light'
}