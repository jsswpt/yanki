import { useEffect, useRef } from "react";

import { Container } from "../../shared/ui";
import Link from "next/link";
import Image from "next/image";

import Menu from "shared/assets/icons/ui/menu.svg";
import { Cart, Favorite, Person, Search } from "shared/assets/icons/ui/";
import { Yanki } from "shared/assets/icons/media";
import gsap from "gsap";
import st from "./styles.module.scss";
import cn from "classnames";
import { SelectCurrency, SelectLanguage } from "features";
import { useLocalization } from "shared/hooks";

export const Header = () => {
  const { translate } = useLocalization();
  return (
    <header className={st.header}>
      <Container className={st.header_container}>
        <div className={cn(st.header_wrap, st.header_wrap__menu)}>
          <Image src={Menu} alt="menu" className={st.menu_icon} />
        </div>
        <nav className={cn(st.header_wrap, st.header_wrap__nav)}>
          <ul className={st.header_nav__list}>
            <li className={st.header_nav__item}>
              <Link href="/" className={st.link}>
                {translate("new")}
              </Link>
            </li>
            <li className={st.header_nav__item}>
              <Link href="/catalog" className={st.link}>
                {translate("catalog")}
              </Link>
            </li>
            <li className={st.header_nav__item}>
              <Link href="/about-us" className={st.link}>
                {translate("aboutUs")}
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
          <SelectLanguage />
          <SelectCurrency />
        </div>
        <div className={cn(st.header_wrap, st.header_wrap__actions)}>
          <div className={cn(st.actions_wrap__action, st.action_search)}>
            <Search className={cn(st.action_icon, st.search)} />
          </div>
          <div className={cn(st.actions_wrap__action, st.action_person)}>
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
};
