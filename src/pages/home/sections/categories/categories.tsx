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
import { useLocalization } from "shared/hooks";

type Categories = {
  screen: "xs" | "sm" | "md" | "xl";
};

export const Categories = (props: Categories) => {
  const [screen, setScreen] = useState<Screen | null>(null);

  const { translate } = useLocalization();

  useEffect(() => {
    setScreen(props.screen);
  }, [props.screen]);

  return (
    <SectionLayout title={translate("categories")}>
      <Swiper
        slidesPerView={
          screen === "xl" ? 4 : screen === "md" || screen === "sm" ? 3 : 2
        }
        spaceBetween={15}
      >
        <SwiperSlide>
          <ClothingCategoryCard imgURL={Jacket} title={translate("jackets")} />
        </SwiperSlide>
        <SwiperSlide>
          <ClothingCategoryCard imgURL={Coat} title={translate("coats")} />
        </SwiperSlide>
        <SwiperSlide>
          <ClothingCategoryCard
            imgURL={FurCoat}
            title={translate("furCoats")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ClothingCategoryCard imgURL={Parka} title={translate("parkas")} />
        </SwiperSlide>
      </Swiper>
    </SectionLayout>
  );
};
