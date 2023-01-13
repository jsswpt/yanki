import { useEffect, useMemo, useState, useCallback, useRef } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Cart, Favorite, Person, Search } from "shared/assets/icons/ui";
import Link from "next/link";
import { Yanki } from "shared/assets/icons/media";
import { Container } from "shared/ui";
import Image from "next/image";
import Menu from "shared/assets/icons/ui/menu.svg";

export const MobileHeader = () => {
  return (
    <header className={st.header}>
      <Container className={st.header_container}>
        <div className={cn(st.header_wrap, st.header_wrap__menu)}>
          <Image src={Menu} alt="menu" className={st.menu_icon} />
        </div>
        <div className={cn(st.header_wrap, st.header_wrap__logo)}>
          <Link href="" className={st.logo_wrapper}>
            <Yanki className={st.logo} />
          </Link>
        </div>
        <div className={cn(st.header_wrap, st.header_wrap__actions)}>
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
