import { ButtonHTMLAttributes } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { ButtonBase } from "./button.type";

interface Button
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    ButtonBase {}

export const Button = (props: Button) => {
  return (
    <button
      {...props}
      className={cn(st.button, props.className, {
        [st.rounded]: props.rounded,

        [st.fullWidth]: props.fullWidth,

        [st.medium]: props.height === "medium" || !props.height,
        [st.large]: props.height === "large",

        [st.contrast]: props.color === "contrast" || !props.color,
        [st.inherit]: props.color === "inherit",
        [st.primary]: props.color === "primary",
      })}
    >
      {props.children}
    </button>
  );
};
