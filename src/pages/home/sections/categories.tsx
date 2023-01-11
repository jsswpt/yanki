import { useEffect, useMemo, useState, useCallback } from "react";

import st from "../styles.module.scss";
import cn from "classnames";

import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";

import { ClothingCategoryCard, Container } from "shared/ui";

import Coat from "shared/assets/imgs/coat.jpg";
import FurCoat from "shared/assets/imgs/fur-coat.jpg";
import Jacket from "shared/assets/imgs/jacket.jpg";
import Parka from "shared/assets/imgs/parka.jpg";
import { SectionLayout } from "shared/ui";

export const Categories = () => {
  return (
    <SectionLayout title="Категории">
      <Swiper slidesPerView={4} spaceBetween={15}>
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
