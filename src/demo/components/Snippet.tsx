import { SnippetCSS } from "../styles"
import { colors } from "../styles/themes/colors.css"
import joinClassNames from "../functions/joinClassNames"

interface Props {
  title: string
  children: string | number | boolean | undefined
  active?: boolean
}

type KeysCode = keyof typeof SnippetCSS.code
type KeysCodeActive = keyof typeof SnippetCSS.codeActive

const Snippet = ({ title, children, active }: Props) => {
  const colorClassName = SnippetCSS.code[typeof children as KeysCode]
  const activeClassName = active ? SnippetCSS.codeActive[typeof children as KeysCodeActive] : undefined

  return (
    <>
      <code style={{ color: colors.code[2] }}>{title}: </code>
      <code className={joinClassNames(colorClassName, activeClassName)}>
        {`${typeof children === "string" ? `'${children}'` : children}`}
      </code>
    </>
  )
}

export default Snippet
