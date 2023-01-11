import {
  useEffect,
  useMemo,
  useState,
  useCallback,
  HTMLAttributes,
} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Container } from "../container/container";

interface SectionLayout extends HTMLAttributes<HTMLElement> {
  title: string;
  alignTitle?: "center" | "start" | "end";
}

/**Чилдреном принимает содержимое секции. Чтобы изменить положение текста, в пропсы прокинуть alignTitle */
export const SectionLayout = (props: SectionLayout) => {
  return (
    <section {...props} className={cn(st.section, props.className)}>
      <Container>
        <div className={cn(st.section_wrap, st.section_wrap__headline)}>
          <h2
            className={cn(st.section_title, {
              [st.text_start]:
                props.alignTitle === "start" || !props.alignTitle,
              [st.text_center]: props.alignTitle === "center",
              [st.text_end]: props.alignTitle === "end",
            })}
          >
            {props.title}
          </h2>
        </div>
        <div className={cn(st.section_wrap, st.section_wrap__body)}>
          {props.children}
        </div>
      </Container>
    </section>
  );
};
