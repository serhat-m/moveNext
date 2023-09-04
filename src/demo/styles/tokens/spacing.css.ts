import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles"
import { vars } from "../themes/vars.css"
import breakpoints from "../breakpoints"

const marginProps = defineProperties({
  conditions: {
    xs: { "@media": `screen and (min-width: ${breakpoints.xs})` },
    sm: { "@media": `screen and (min-width: ${breakpoints.sm})` },
    md: { "@media": `screen and (min-width: ${breakpoints.md})` },
    lg: { "@media": `screen and (min-width: ${breakpoints.lg})` },
    xl: { "@media": `screen and (min-width: ${breakpoints.xl})` },
    xxl: { "@media": `screen and (min-width: ${breakpoints.xxl})` },
  } as Record<keyof typeof breakpoints, Record<string, string>>,
  defaultCondition: "xs",
  properties: {
    marginTop: vars.spacing,
    marginBottom: vars.spacing,
    marginLeft: vars.spacing,
    marginRight: vars.spacing,
  },
  shorthands: {
    xy: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    x: ["marginLeft", "marginRight"],
    y: ["marginTop", "marginBottom"],
    top: ["marginTop"],
    bottom: ["marginBottom"],
  },
})

export const margin = createSprinkles(marginProps)
