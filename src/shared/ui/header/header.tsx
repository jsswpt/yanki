import { useEffect, useMemo, useState, useCallback, forwardRef } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Container } from "../";
import Link from "next/link";
import Image from "next/image";

import Menu from "shared/assets/icons/ui/menu.svg";
import { Cart, Favorite, Person, Search } from "shared/assets/icons/ui/";
import { Yanki } from "shared/assets/icons/media";

export const Header = forwardRef<HTMLElement>((_, ref) => {
  return (
    <header ref={ref} className={st.header}>
      <Container className={st.header_container}>
        <div className={cn(st.header_wrap, st.header_wrap__menu)}>
          <Image src={Menu} alt="menu" className={st.menu_icon} />
        </div>
        <nav className={cn(st.header_wrap, st.header_wrap__nav)}>
          <ul className={st.header_nav__list}>
            <li className={st.header_nav__item}>
              <Link href="/" className={st.link}>
                New
              </Link>
            </li>
            <li className={st.header_nav__item}>
              <Link href="/" className={st.link}>
                Каталог
              </Link>
            </li>
            <li className={st.header_nav__item}>
              <Link href="/" className={st.link}>
                О нас
              </Link>
            </li>
          </ul>
        </nav>
        <div className={cn(st.header_wrap, st.header_wrap__logo)}>
          <Link href="" className={st.logo_wrapper}>
            <Yanki className={st.logo} />
          </Link>
        </div>
        <div className={cn(st.header_wrap, st.header_wrap__localization)}>
          <div className={st.localization_wrap__language}>
            <p className={st.header_title}>RU</p>
          </div>
          <div className={st.localization_wrap__currency}>
            <p className={st.header_title}>UAH</p>
          </div>
        </div>
        <div className={cn(st.header_wrap, st.header_wrap__actions)}>
          <div className={st.actions_wrap__action}>
            <Search className={cn(st.action_icon, st.search)} />
          </div>
          <div className={st.actions_wrap__action}>
            <Person className={cn(st.action_icon, st.person)} />
          </div>
          <div className={st.actions_wrap__action}>
            <Favorite className={cn(st.action_icon, st.favorite)} />
          </div>
          <div className={st.actions_wrap__action}>
            <Cart className={cn(st.action_icon, st.cart)} />
          </div>
        </div>
      </Container>
    </header>
  );
});
