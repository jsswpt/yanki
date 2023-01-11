import { useEffect, useMemo, useState, useCallback, createRef } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Footer, Header } from "shared/ui";
import { Banner } from "./sections/banner";
import gsap from "gsap";
import { Categories } from "./sections/categories";
import { Mailing } from "./sections/mailing";

export const Home = () => {
  const headerRef = createRef<HTMLElement>();
  useEffect(() => {
    gsap.fromTo(
      headerRef.current!,
      { opacity: 0 },
      { opacity: 1, ease: "power1.out", delay: 4.5, duration: 2 }
    );
  }, []);
  return (
    <>
      <Header ref={headerRef} />
      <main>
        <Banner />
        <Categories />
        <Mailing />
      </main>
      <Footer />
    </>
  );
};
