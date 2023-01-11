import { useEffect, useMemo, useState, useCallback, useRef } from "react";

import st from "../styles.module.scss";
import cn from "classnames";

import Banner1 from "shared/assets/imgs/banner-1.png";
import Banner2 from "shared/assets/imgs/banner-2.png";
import Banner3 from "shared/assets/imgs/banner-3.png";
import Image from "next/image";
import gsap from "gsap";
import { Container } from "shared/ui";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

export const Banner = () => {
  const firstImg = useRef<HTMLDivElement>(null);
  const secondImg = useRef<HTMLDivElement>(null);
  const thirdImg = useRef<HTMLDivElement>(null);
  const welcomeRef = useRef<HTMLDivElement>(null);

  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      const tl = gsap.timeline();

      tl.fromTo(
        firstImg.current!,
        { opacity: 0, transform: "translate(-100%)" },
        {
          duration: 1.5,
          ease: "power2.out",
          opacity: 1,
          transform: "translate(0)",
        }
      )
        .fromTo(
          secondImg.current!,
          { opacity: 0, transform: "translate(-100%)" },
          {
            duration: 1.5,
            ease: "power2.out",
            opacity: 1,
            transform: "translate(0)",
          }
        )
        .fromTo(
          thirdImg.current!,
          { opacity: 0, transform: "translate(-100%)" },
          {
            duration: 1.5,
            ease: "power2.out",
            opacity: 1,
            transform: "translate(0)",
          }
        )
        .fromTo(
          welcomeRef.current!,
          { opacity: 0, transform: "translate(0, 100%)" },
          {
            ease: "power2.inOut",
            delay: 0.5,
            duration: 2.5,
            opacity: 1,
            transform: "translate(0, 0)",
          }
        );
    }
  }, [inView]);

  return (
    <section ref={ref} className={cn(st.section, st.section_banner)}>
      <div className={st.banner_bg}>
        <div ref={firstImg} className={st.banner_bg__item}>
          <Image src={Banner1} alt="Banner1" className={st.banner_bg__img} />
        </div>
        <div ref={secondImg} className={st.banner_bg__item}>
          <Image src={Banner2} alt="Banner2" className={st.banner_bg__img} />
        </div>
        <div ref={thirdImg} className={st.banner_bg__item}>
          <Image src={Banner3} alt="Banner3" className={st.banner_bg__img} />
        </div>
      </div>
      <Container className={cn(st.banner_container)}>
        <div ref={welcomeRef} className={st.banner_wrap__welcome}>
          <p className={st.banner_title}>Новая коллекция</p>
          <hr className={cn(st.divider, st.divider_short)} />
          <Link href="/" className={st.banner_link}>
            Смотреть новинки
          </Link>
        </div>
      </Container>
    </section>
  );
};
