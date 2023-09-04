import { createContext } from "react"
import type { ThemeState } from "../hooks/useTheme"

const ThemeStateContext = createContext<ThemeState | undefined>(undefined)

export default ThemeStateContext
