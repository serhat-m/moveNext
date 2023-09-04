import { useState, useContext, useEffect } from "react"
import type { Theme } from "../types/theme"
import ThemeStateContext from "../context/ThemeContext"

function getColorScheme(): Theme {
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark"
  }

  return "light"
}

function watchColorScheme(cb: (colorScheme: Theme) => void) {
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
    const colorScheme = event.matches ? "dark" : "light"
    cb(colorScheme)
  })
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getColorScheme())

  useEffect(() => {
    watchColorScheme((colorScheme) => setTheme(colorScheme))
  }, [])

  return { get: theme, set: setTheme }
}

export type ThemeState = ReturnType<typeof useTheme>

export function useThemeState() {
  const themeState = useContext(ThemeStateContext) as ThemeState
  return themeState
}
