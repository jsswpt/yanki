import st from "./styles.module.scss";
import cn from "classnames";
import React, { HTMLAttributes } from "react";

interface Container extends HTMLAttributes<HTMLDivElement> {}

export const Container = (props: Container) => {
  return (
    <div {...props} className={cn(st.container, props.className)}>
      {props.children}
    </div>
  );
};
