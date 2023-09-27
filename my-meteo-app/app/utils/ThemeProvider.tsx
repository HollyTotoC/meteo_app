import React, { useEffect } from "react";
import { overrideThemeVariables } from "ui-neumorphism";

interface ThemeProviderProps {
    children: React.ReactNode;
    theme: "light" | "dark";
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
    useEffect(() => {
        if (theme === "dark") {
            overrideThemeVariables({
                "--light-bg": "#2e2e2e",
                "--light-bg-dark-shadow": "#000000",
                "--light-bg-light-shadow": "#4b4b4b",
                "--dark-bg": "#E9B7B9",
                "--dark-bg-dark-shadow": "#ba9294",
                "--dark-bg-light-shadow": "#ffdcde",
                "--primary": "#8672FB",
                "--primary-dark": "#4526f9",
                "--primary-light": "#c7befd",
            });
        } else if (theme === "light") {
            overrideThemeVariables({
                "--light-bg": "#e6e6e6",
                "--light-bg-dark-shadow": "#c4c4c4",
                "--light-bg-light-shadow": "#ffffff",
                "--dark-bg": "#292E35",
                "--dark-bg-dark-shadow": "#21252a",
                "--dark-bg-light-shadow": "#313740",
                "--primary": "#8672FB",
                "--primary-dark": "#4526f9",
                "--primary-light": "#c7befd",
            });
        }
    }, [theme]);

    return <>{children}</>;
};

export default ThemeProvider;
