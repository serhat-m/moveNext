import { HeaderCSS } from "../styles"
import ThemeSwitch from "./ThemeSwitch"
import { SvgNpmLogo } from "../assets/svgs"

const Header = () => {
  return (
    <header className={`${HeaderCSS.header}`}>
      <div className={`container ${HeaderCSS.container}`}>
        <span className={HeaderCSS.title}>moveNext</span>
        <a href="https://www.npmjs.com/package/movenext" target="_blank" rel="noreferrer" className={HeaderCSS.npm}>
          <SvgNpmLogo />
        </a>
      </div>
      <ThemeSwitch />
    </header>
  )
}

export default Header
