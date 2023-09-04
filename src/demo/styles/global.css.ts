import { globalStyle } from "@vanilla-extract/css"
import { vars } from "./themes/vars.css"
import { colors } from "./themes/colors.css"

globalStyle("body", {
  fontFamily: vars.fonts.inter.family,
  fontSize: "1rem",
  fontWeight: vars.fonts.inter.weights["400"],
  backgroundColor: colors.base.default,
  color: colors.base[40],
})

globalStyle("code", {
  fontFamily: vars.fonts.firaCode.family,
  fontSize: "0.875em",
  fontWeight: vars.fonts.firaCode.weights["500"],
})

globalStyle("h1, h2, h3, h4, h5, h6", {
  fontFamily: vars.fonts.firaCode.family,
  fontWeight: vars.fonts.firaCode.weights["600"],
  lineHeight: 1,
})

globalStyle("h1", {
  fontSize: "1.1rem",
  backgroundColor: colors.base[20],
  border: `${vars.border.size} solid ${colors.base[30]}`,
  borderRadius: vars.border.radius,
  padding: `calc(${vars.spacing["1"]} * 1.3)`,
  textAlign: "center",
  marginBottom: vars.spacing["3"],
})

globalStyle("svg", {
  width: "100%",
  fill: colors.base[40],
})
