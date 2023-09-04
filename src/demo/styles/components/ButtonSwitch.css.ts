import { style, globalStyle } from "@vanilla-extract/css"
import { fontFiraCode } from "../base/typography.css"
import { vars } from "../themes/vars.css"

export const title = style({
  fontFamily: fontFiraCode,
  width: 125,
  textAlign: "right",
})

export const container = style({})

globalStyle(`${container} > *`, {
  fontFamily: fontFiraCode,
  marginLeft: `calc(${vars.border.size} * -1)`,
  width: 91,
  textAlign: "center",
})

globalStyle(`${container} > *:first-child`, {
  borderTopRightRadius: "unset",
  borderBottomRightRadius: "unset",
})

globalStyle(`${container} > *:last-child`, {
  borderTopLeftRadius: "unset",
  borderBottomLeftRadius: "unset",
})
