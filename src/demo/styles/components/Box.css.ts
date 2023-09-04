import { style } from "@vanilla-extract/css"
import { vars } from "../themes/vars.css"
import { colors } from "../themes/colors.css"

export const box = style({
  borderRadius: vars.border.radius,
  border: `${vars.border.size} solid ${colors.base[30]}`,
  backgroundColor: colors.base[10],
})

// .box {
//     border-radius: $border-radius;
//     border: $border-size solid getColor("purple30");
//     background-color: getColor("purple10");
//     @include fadeInUp("list", 0.5, 25px);
// }
