import { style } from "@vanilla-extract/css"
import { colors } from "../themes/colors.css"
import { vars } from "../themes/vars.css"

export const header = style({
  backgroundColor: colors.base[10],
  borderBottom: `${vars.border.size} solid ${colors.base[30]}`,
  marginBottom: `calc(${vars.spacing["5"]} * 1.5)`,
  position: "relative",
})

export const container = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: vars.spacing["2"],
  height: 65,
})

export const title = style({
  fontFamily: vars.fonts.firaCode.family,
  fontWeight: vars.fonts.firaCode.weights[600],
  fontSize: "1.5rem",
  color: colors.base[40],
})

export const npm = style({
  width: "calc(1rem * 2.3)",
  marginTop: "8px",
})
