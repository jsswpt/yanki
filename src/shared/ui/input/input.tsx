import {
  useEffect,
  useMemo,
  useState,
  useCallback,
  InputHTMLAttributes,
} from "react";

import st from "./styles.module.scss";
import cn from "classnames";

interface Input extends InputHTMLAttributes<HTMLInputElement> {
  rounded?: boolean;
  icon?: React.ReactNode;
  centerText?: boolean;
  height?: "medium" | "large";
  fullWidth?: boolean;
}

export const Input = (props: Input) => {
  return (
    <div
      className={cn(st.input_wrapper, {
        [st.fullWidth]: props.fullWidth,
      })}
    >
      <input
        {...props}
        className={cn(st.input, props.className, {
          [st.rounded]: props.rounded,
          [st.centered_text]: props.centerText,

          [st.medium]: props.height === "medium" || !props.height,
          [st.large]: props.height === "large",
        })}
      />
      {props.icon && <div className={st.icon_wrapper}>{props.icon}</div>}
    </div>
  );
};
