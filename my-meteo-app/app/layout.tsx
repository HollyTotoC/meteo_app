import "./globals.css";
import "ui-neumorphism/dist/index.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProvider from "./utils/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "My meteo app",
    description:
        "A simple Neuromorphic meteo app by Théo-toto Certa. www.totocerta.dev",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
}
