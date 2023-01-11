import {
  useEffect,
  useMemo,
  useState,
  useCallback,
  HTMLAttributes,
} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import Image, { StaticImageData } from "next/image";

interface ClothingCategoryCard extends HTMLAttributes<HTMLElement> {
  imgURL: StaticImageData | string;
  title: string;
}

export const ClothingCategoryCard = (props: ClothingCategoryCard) => {
  return (
    <article className={cn(st.category_card, props.className)}>
      <div className={cn(st.category_card_wrap, st.category_card_wrap__bg)}>
        <Image
          src={props.imgURL}
          alt={props.title}
          className={st.category_card_bg__img}
        />
      </div>
      <div className={cn(st.category_card_wrap, st.category_card_wrap__title)}>
        <h3 className={st.category_card_title}>{props.title}</h3>
      </div>
    </article>
  );
};
