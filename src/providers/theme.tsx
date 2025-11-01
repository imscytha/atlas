import { createContext, useContext, useEffect, useState } from "react"

export type Mode = "dark" | "light";
type Theme = Mode | "system";

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
};

type ThemeProviderState = {
  theme: Theme,
  mode: Mode,
  setTheme: (theme: Theme) => void
};

const ThemeProviderContext = createContext<ThemeProviderState>({
  theme: "system",
  mode: "dark",
  setTheme: () => null,
});

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );
  const [mode, setMode] = useState<Mode>("dark");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

      const handleChange = () => {
        const systemTheme = mediaQuery.matches ? "dark" : "light";
        setMode(systemTheme);
        root.classList.add(systemTheme);
      }

      handleChange();
      mediaQuery.addEventListener("change", handleChange)

      return () => mediaQuery.removeEventListener("change", handleChange)
    } else {
      setMode(theme);
      root.classList.add(theme);
    }
  }, [theme]);

  const value = {
    theme,
    mode,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const ctx = useContext(ThemeProviderContext);

  if (ctx === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return ctx
}
