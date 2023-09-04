import { createGlobalThemeContract, createGlobalTheme } from "@vanilla-extract/css"
import { fontInter, fontFiraCode } from "../base/typography.css"

export const vars = createGlobalThemeContract(
  {
    fonts: {
      inter: {
        family: null,
        weights: {
          "400": null,
          "500": null,
          "600": null,
        },
      },
      firaCode: {
        family: null,
        weights: {
          "400": null,
          "500": null,
          "600": null,
        },
      },
    },
    spacing: {
      "0": null,
      "1": null,
      "2": null,
      "3": null,
      "4": null,
      "5": null,
    },
    border: {
      radius: null,
      size: null,
    },
  },
  (_value, path) => path.join("-"),
)

createGlobalTheme(":root", vars, {
  fonts: {
    inter: {
      family: fontInter,
      weights: {
        "400": "400",
        "500": "500",
        "600": "600",
      },
    },
    firaCode: {
      family: fontFiraCode,
      weights: {
        "400": "400",
        "500": "500",
        "600": "600",
      },
    },
  },
  spacing: {
    "0": "0",
    "1": ".375rem",
    "2": ".625rem",
    "3": ".875rem",
    "4": "1.2rem",
    "5": "1.6rem",
  },
  border: {
    radius: "4px",
    size: "1.5px",
  },
})
