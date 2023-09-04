import { ReactNode } from "react"
import { useTheme } from "./hooks/useTheme"
import ThemeStateContext from "./context/ThemeContext"

const Theme = ({ children }: { children: ReactNode }) => {
  const themeState = useTheme()

  return <ThemeStateContext.Provider value={themeState}>{children}</ThemeStateContext.Provider>
}

export default Theme
