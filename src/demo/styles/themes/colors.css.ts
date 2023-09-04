import { createGlobalThemeContract, createTheme } from "@vanilla-extract/css"

export const colors = createGlobalThemeContract(
  {
    base: {
      default: null,
      "10": null,
      "20": null,
      "30": null,
      "40": null,
    },
    code: {
      "1": null,
      "2": null,
      "3": null,
      "4": null,
      alpha: {
        "1": null,
        "2": null,
        "3": null,
        "4": null,
      },
    },
  },
  (_value, path) => path.join("-"),
)

export const light = createTheme(colors, {
  base: {
    default: "#F5F5F5",
    "10": "#EDEDF4",
    "20": "#CFC5DE",
    "30": "#AD93C1",
    "40": "#553270",
  },
  code: {
    "1": "#E1BD13",
    "2": "#553270",
    "3": "#568A37",
    "4": "#936032",
    alpha: {
      "1": "#F1EAC8",
      "2": "#D5CEDA",
      "3": "#D5E0CF",
      "4": "#E1D7CE",
    },
  },
})

export const dark = createTheme(colors, {
  base: {
    default: "#28284E",
    "10": "#2D2B55",
    "20": "#413E85",
    "30": "#615DB6",
    "40": "#ddd7ff",
  },
  code: {
    "1": "#E1BD13",
    "2": "#92EAEF",
    "3": "#91FB79",
    "4": "#E45A85",
    alpha: {
      "1": "#4D4642",
      "2": "#3D4F6E",
      "3": "#3D5257",
      "4": "#52345F",
    },
  },
})
