"use client";

import { useTheme } from "@/components/ThemeProvider";
import { BiSun, BiMoon } from "react-icons/bi";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex size-10 items-center justify-center rounded-full border border-neutral-dark-gray/40 bg-neutral-card/80 text-neutral-offwhite backdrop-blur-sm transition-all hover:border-accent/50 hover:bg-accent/10 hover:text-accent-light hover:scale-110"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? <BiSun size={18} /> : <BiMoon size={18} />}
    </button>
  );
}
