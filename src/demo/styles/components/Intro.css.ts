import { style } from "@vanilla-extract/css"
import { vars } from "../themes/vars.css"
import { colors } from "../themes/colors.css"

export const description = style({
  textAlign: "center",
  marginBottom: `calc(${vars.spacing["5"]} * 1.5)`,
})

export const settings = style({
  display: "flex",
  flexDirection: "column",
  marginBottom: `calc(${vars.spacing["5"]} * 1.8)`,
  "@media": {
    [`screen and (max-width: 768px)`]: {
      marginBottom: `calc(${vars.spacing["5"]} * 1.5)`,
    },
  },
})

export const group = style({
  padding: vars.spacing["3"],
  borderBottom: `${vars.border.size} solid ${colors.base[30]}`,
  display: "flex",
  gap: vars.spacing["2"],
  alignItems: "center",
  justifyContent: "center",
  ":last-child": {
    borderBottom: "unset",
  },
})

export const controlButtons = style({
  display: "flex",
  flexDirection: "row",
  gap: vars.spacing["1"],
})
