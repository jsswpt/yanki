import st from "../../styles.module.scss";
import cn from "classnames";

import Banner1 from "shared/assets/imgs/banner-1.png";
import Banner2 from "shared/assets/imgs/banner-2.png";
import Banner3 from "shared/assets/imgs/banner-3.png";
import Image from "next/image";
import gsap from "gsap";
import { Container } from "shared/ui";
import Link from "next/link";
import { useLocalization } from "shared/hooks";

export const Banner = () => {
  const { translate } = useLocalization();

  return (
    <section className={cn(st.section, st.section_banner)}>
      <div className={st.banner_bg}>
        <div className={st.banner_bg__item}>
          <Image src={Banner1} alt="Banner1" className={st.banner_bg__img} />
        </div>
        <div className={st.banner_bg__item}>
          <Image src={Banner2} alt="Banner2" className={st.banner_bg__img} />
        </div>
        <div className={st.banner_bg__item}>
          <Image src={Banner3} alt="Banner3" className={st.banner_bg__img} />
        </div>
      </div>
      <Container className={cn(st.banner_container)}>
        <div className={st.banner_wrap__welcome}>
          <p className={st.banner_title}>{translate("newCollection")}</p>
          <hr className={cn(st.divider, st.divider_short)} />
          <Link href="/" className={st.banner_link}>
            {translate("seeNewProducts")}
          </Link>
        </div>
      </Container>
    </section>
  );
};
