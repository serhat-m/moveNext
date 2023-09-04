import { style } from "@vanilla-extract/css"
import { colors } from "../themes/colors.css"
import { vars } from "../themes/vars.css"

export const base = style({
  fontSize: "1rem",
  fontWeight: "inherit",
  color: colors.base[40],
  padding: `${vars.spacing["1"]} ${vars.spacing["2"]}`,
  borderRadius: vars.border.radius,
  ":hover": {
    cursor: "pointer",
  },
})

export const primary = style({
  backgroundColor: colors.base[20],
  border: `${vars.border.size} solid ${colors.base[30]}`,
  // ":hover": {
  //     backgroundColor: colors.base[30]
  // },
})

export const secondary = style({
  backgroundColor: colors.base[10],
  border: `${vars.border.size} solid ${colors.base[30]}`,
  // ":hover": {
  //     backgroundColor: colors.base[20]
  // },
})
