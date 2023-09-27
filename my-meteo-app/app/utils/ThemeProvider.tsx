"use client";

import React, { useEffect } from "react";
import { overrideThemeVariables } from "ui-neumorphism";

interface ThemeProviderProps {
    children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    useEffect(() => {
        overrideThemeVariables({
            "--light-bg": "#e6e6e6",
            "--light-bg-dark-shadow": "#bebebe",
            "--light-bg-light-shadow": "#f0f0f0",
            "--dark-bg": "#292E35",
            "--dark-bg-dark-shadow": "#21252a",
            "--dark-bg-light-shadow": "#313740",
            "--primary": "#8672FB",
            "--primary-dark": "#4526f9",
            "--primary-light": "#c7befd",
        });
    }, []);

    return <>{children}</>;
};

export default ThemeProvider;
