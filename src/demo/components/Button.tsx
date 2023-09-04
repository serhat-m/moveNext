import { ButtonHTMLAttributes } from "react"
import { ButtonCSS } from "../styles"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  appearance: "primary" | "secondary"
}

const Button = ({ appearance, children, ...otherProps }: Props) => {
  return (
    <button
      {...otherProps}
      className={`${otherProps.className ? `${otherProps.className} ` : ""}${ButtonCSS.base} ${
        appearance === "primary" ? ButtonCSS.primary : ButtonCSS.secondary
      }`}
    >
      {children}
    </button>
  )
}

export default Button
