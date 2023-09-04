import { style, styleVariants } from "@vanilla-extract/css"
import { colors } from "../themes/colors.css"
import { vars } from "../themes/vars.css"

const colorVars = {
  string: {
    default: colors.code[3],
    alpha: colors.code.alpha[3],
  },
  number: {
    default: colors.code[4],
    alpha: colors.code.alpha[4],
  },
  boolean: {
    default: colors.code[4],
    alpha: colors.code.alpha[4],
  },
  undefined: {
    default: colors.code[4],
    alpha: colors.code.alpha[4],
  },
}

export const code = styleVariants({
  string: { color: colorVars.string.default },
  number: { color: colorVars.number.default },
  boolean: { color: colorVars.boolean.default },
  undefined: { color: colorVars.undefined.default },
})

const activeBase = style({
  padding: "2px 4px",
  borderRadius: vars.border.radius,
})

export const codeActive = styleVariants({
  string: [activeBase, { backgroundColor: colorVars.string.alpha }],
  number: [activeBase, { backgroundColor: colorVars.number.alpha }],
  boolean: [activeBase, { backgroundColor: colorVars.boolean.alpha }],
  undefined: [activeBase, { backgroundColor: colorVars.undefined.alpha }],
})
