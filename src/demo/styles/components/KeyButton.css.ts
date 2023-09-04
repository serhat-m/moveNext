import { style } from "@vanilla-extract/css"
import { vars } from "../themes/vars.css"

export const base = style({
  width: 35,
  height: 35,
  padding: vars.spacing["2"],
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})
