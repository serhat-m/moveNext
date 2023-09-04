import { SvgSun, SvgMoon } from "../assets/svgs"
import { ThemeSwitchCSS } from "../styles"
import { useThemeState } from "../hooks/useTheme"

const ThemeSwitch = () => {
  const themeState = useThemeState()

  return (
    <button
      className={`${ThemeSwitchCSS.button}`}
      onClick={() => (themeState.get === "dark" ? themeState.set("light") : themeState.set("dark"))}
    >
      {themeState.get === "dark" ? <SvgSun className={ThemeSwitchCSS.icon} /> : <SvgMoon className={ThemeSwitchCSS.icon} />}
    </button>
  )
}

export default ThemeSwitch
