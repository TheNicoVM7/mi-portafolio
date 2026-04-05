import { useState, useEffect } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

export default function ThemeToggle() {
    const [theme, setTheme] = useState<"dark" | "light">("dark");

    // Al montar, detecta preferencia del sistema o localStorage
    useEffect(() => {
        const stored = localStorage.getItem("theme") as "dark" | "light" | null;
        if (stored) {
            setTheme(stored);
            document.documentElement.setAttribute("data-theme", stored);
        } else {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            const initial = prefersDark ? "dark" : "light";
            setTheme(initial);
            document.documentElement.setAttribute("data-theme", initial);
        }
    }, []);

    const toggleTheme = () => {
        const next = theme === "dark" ? "light" : "dark";
        setTheme(next);
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("theme", next);
    };

    return (
        <button
            onClick={toggleTheme}
            aria-label="Cambiar tema"
            style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: theme === "dark" ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)",
                fontSize: "1.3rem",
                transition: "color 0.2s",
            }}
        >
            {theme === "dark" ? <MdLightMode size={22} /> : <MdDarkMode size={22} />}
        </button>
    );
}