import { ButtonHTMLAttributes } from "react"
import { ButtonCSS, KeyButtonCSS } from "../styles"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const KeyButton = ({ children, ...otherProps }: Props) => {
  return (
    <button
      {...otherProps}
      className={`${otherProps.className ? `${otherProps.className} ` : ""}${ButtonCSS.base} ${ButtonCSS.primary} ${KeyButtonCSS.base}`}
    >
      {children}
    </button>
  )
}

export default KeyButton
