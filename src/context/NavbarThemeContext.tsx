"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type NavbarTheme = "onDark" | "onLight";
// "onDark"  = navbar is sitting on a dark image  → use light/white text
// "onLight" = navbar is sitting on a light image → use dark/black text

interface NavbarThemeContextValue {
  theme: NavbarTheme;
  setTheme: (theme: NavbarTheme) => void;
}

const NavbarThemeContext = createContext<NavbarThemeContextValue | undefined>(undefined);

export function NavbarThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<NavbarTheme>("onDark"); // sensible default
  return (
    <NavbarThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </NavbarThemeContext.Provider>
  );
}

export function useNavbarTheme() {
  const ctx = useContext(NavbarThemeContext);
  if (!ctx) throw new Error("useNavbarTheme must be used inside NavbarThemeProvider");
  return ctx;
}