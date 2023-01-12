import { useEffect, useMemo, useState, useCallback, createRef } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Footer, Header, MobileHeader } from "shared/ui";
import { Banner } from "./sections/banner/banner";
import gsap from "gsap";
import { Categories } from "./sections/categories/categories";
import { Mailing } from "./sections/mailing/mailing";
import { useScreenWidth } from "shared/lib";
import { MobileBanner } from "./sections/banner/mobile-banner";
import { Screen } from "shared/api/internal/types";

export const Home = () => {
  const [screenType, setScreenType] = useState<Screen | null>(null);
  const screen = useScreenWidth();

  useEffect(() => {
    setScreenType(screen);
  }, [screen]);

  return (
    <>
      {screenType === "xl" ? <Header /> : <MobileHeader />}
      <main>
        {screenType === "xl" && <Banner />}
        {(screenType === "xs" || screenType === "sm") && <MobileBanner />}
        <Categories screen={screen} />
        <Mailing />
      </main>
      <Footer />
    </>
  );
};
