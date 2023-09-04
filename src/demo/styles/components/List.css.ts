import { style, globalStyle } from "@vanilla-extract/css"
import { vars } from "../themes/vars.css"
import { colors } from "../themes/colors.css"

export const list = style({
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  padding: "unset",
  margin: "unset",
  listStyle: "none",
})

export const item = style({
  padding: vars.spacing["3"],
  textDecoration: "unset",
  color: colors.base[40],
  borderBottom: `${vars.border.size} solid ${colors.base[30]}`,
  backgroundColor: colors.base[10],
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  ":last-child": {
    borderBottom: "unset",
  },
})

// Add to prevent multiple mouse over events and therefore multiple state updates for the same element
// Example: <a> Tag is the main tag which enables the selected class. Inside <a><p>Text</p></a> is another Tag which also triggers the same mouse over event
globalStyle(`${item} *`, {
  pointerEvents: "none",
})

export const itemSelected = style({
  backgroundColor: colors.base[20],
})
