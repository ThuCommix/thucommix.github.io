import { createContext, useEffect, useState, type ReactNode } from "react";
import { TokensBackground, TokensForeground, tokens, type Theme } from "../Themes";

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function getSystemTheme(): Theme {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
    }
    return "light";
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>(getSystemTheme());

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = () => setTheme(getSystemTheme());
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    useEffect(() => {
        const style = document.documentElement.style;
        if (theme === "dark") {
            style.setProperty(TokensBackground, "#121212");
            style.setProperty(TokensForeground, "#e0e0e0");
        } else {
            style.setProperty(TokensBackground, "#ffffff");
            style.setProperty(TokensForeground, "#000000");
        }

        style.backgroundColor = tokens.background;
        style.color = tokens.foreground;

        console.log(`Detected color scheme: ${theme}`);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;