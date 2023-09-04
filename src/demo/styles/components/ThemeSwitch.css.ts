import { style } from "@vanilla-extract/css"
import { colors } from "../themes/colors.css"
import { vars } from "../themes/vars.css"

export const button = style({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  right: vars.spacing["3"],
  width: 45,
  height: 45,
  borderRadius: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "transform .2s",
  ":hover": {
    cursor: "pointer",
    backgroundColor: colors.base[20],
  },
  ":active": {
    transform: "translateY(-50%) scale(.9)",
  },
})

export const icon = style({
  height: "65%",
  fill: colors.base[40],
})
