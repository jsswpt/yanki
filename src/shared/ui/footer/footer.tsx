import { HTMLAttributes } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Container } from "../container/container";
import Link from "next/link";
import { Instagram, Telegram } from "shared/assets/icons/ui";

interface Footer extends HTMLAttributes<HTMLElement> {}

export const Footer = (props: Footer) => {
  return (
    <footer {...props} className={cn(st.footer, props.className)}>
      <Container className={st.footer_container}>
        <div className={cn(st.footer_wrap, st.footer_wrap__info)}>
          <div className={st.footer_info__element}>
            <div className={st.info_element__top}>
              <h6 className={cn(st.info_title, "contrast-selection")}>
                Компания
              </h6>
            </div>
            <nav className={st.info_element__nav}>
              <ul className={st.info_nav__list}>
                <li className={st.info_element__item}>
                  <Link
                    href="/"
                    className={cn(st.info_link, "contrast-selection")}
                  >
                    О нас
                  </Link>
                </li>
                <li className={st.info_element__item}>
                  <Link
                    href="/"
                    className={cn(st.info_link, "contrast-selection")}
                  >
                    Контакты
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={st.footer_info__element}>
            <div className={st.info_element__top}>
              <h6 className={cn(st.info_title, "contrast-selection")}>
                Полезное
              </h6>
            </div>
            <nav className={st.info_element__nav}>
              <ul className={st.info_nav__list}>
                <li className={st.info_element__item}>
                  <Link
                    href="/"
                    className={cn(st.info_link, "contrast-selection")}
                  >
                    Оплата и доставка
                  </Link>
                </li>
                <li className={st.info_element__item}>
                  <Link
                    href="/"
                    className={cn(st.info_link, "contrast-selection")}
                  >
                    Условия возврата
                  </Link>
                </li>
                <li className={st.info_element__item}>
                  <Link
                    href="/"
                    className={cn(st.info_link, "contrast-selection")}
                  >
                    Бонусная программа
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={st.footer_info__element}>
            <div className={st.info_element__top}>
              <h6 className={cn(st.info_title, "contrast-selection")}>
                Покупателю
              </h6>
            </div>
            <nav className={st.info_element__nav}>
              <ul className={st.info_nav__list}>
                <li className={st.info_element__item}>
                  <Link
                    href="/"
                    className={cn(st.info_link, "contrast-selection")}
                  >
                    Избранное
                  </Link>
                </li>
                <li className={st.info_element__item}>
                  <Link
                    href="/"
                    className={cn(st.info_link, "contrast-selection")}
                  >
                    Публичная оферта
                  </Link>
                </li>
                <li className={st.info_element__item}>
                  <Link
                    href="/"
                    className={cn(st.info_link, "contrast-selection")}
                  >
                    Политика конфиденциальности
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={st.footer_info__element}>
            <div className={st.info_element__top}>
              <h6 className={cn(st.info_title, "contrast-selection")}>
                Контакты
              </h6>
            </div>
            <nav className={st.info_element__nav}>
              <ul className={st.info_nav__list}>
                <li
                  className={cn(
                    st.info_element__item,
                    st.info_element__item_icons
                  )}
                >
                  <Link
                    href="/"
                    className={cn(st.info_link, "contrast-selection")}
                  >
                    <Instagram className={st.info_icon} />
                  </Link>
                  <Link
                    href="/"
                    className={cn(st.info_link, "contrast-selection")}
                  >
                    <Telegram className={st.info_icon} />
                  </Link>
                </li>
                <li className={st.info_element__item}>
                  <Link
                    href="tel: +380730963644"
                    className={cn(st.info_link, "contrast-selection")}
                  >
                    +38 (073) 096 36 44
                  </Link>
                </li>
                <li className={st.info_element__item}>
                  <Link
                    href="mailto: info@yanki.com"
                    className={cn(st.info_link, "contrast-selection")}
                  >
                    info@yanki.com
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className={cn(st.footer_wrap, st.footer_wrap__rights)}>
          <p className={cn(st.rights_title, "contrast-selection")}>
            ©️ 2021 Yanki. All rights reserved
          </p>
        </div>
      </Container>
    </footer>
  );
};
