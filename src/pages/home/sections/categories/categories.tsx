import { useEffect, useMemo, useState, useCallback } from "react";

import st from "../../styles.module.scss";
import cn from "classnames";

import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";

import { ClothingCategoryCard, Container } from "shared/ui";

import Coat from "shared/assets/imgs/coat.jpg";
import FurCoat from "shared/assets/imgs/fur-coat.jpg";
import Jacket from "shared/assets/imgs/jacket.jpg";
import Parka from "shared/assets/imgs/parka.jpg";
import { SectionLayout } from "shared/ui";
import { Screen } from "shared/api/internal/types";

type Categories = {
  screen: "xs" | "sm" | "md" | "xl";
};

export const Categories = (props: Categories) => {
  const [screen, setScreen] = useState<Screen | null>(null);

  useEffect(() => {
    setScreen(props.screen);
  }, [props.screen]);

  return (
    <SectionLayout title="Категории">
      <Swiper
        slidesPerView={
          screen === "xl" ? 4 : screen === "md" || screen === "sm" ? 3 : 2
        }
        spaceBetween={15}
      >
        <SwiperSlide>
          <ClothingCategoryCard imgURL={Jacket} title="Куртки" />
        </SwiperSlide>
        <SwiperSlide>
          <ClothingCategoryCard imgURL={Coat} title="Пальто" />
        </SwiperSlide>
        <SwiperSlide>
          <ClothingCategoryCard imgURL={FurCoat} title="Шубы" />
        </SwiperSlide>
        <SwiperSlide>
          <ClothingCategoryCard imgURL={Parka} title="Парки" />
        </SwiperSlide>
      </Swiper>
    </SectionLayout>
  );
};
