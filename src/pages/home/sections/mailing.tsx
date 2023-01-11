import { useEffect, useMemo, useState, useCallback } from "react";

import st from "../styles.module.scss";
import cn from "classnames";
import { Button, Input, SectionLayout } from "shared/ui";
import { Search } from "shared/assets/icons/ui";

export const Mailing = () => {
  return (
    <SectionLayout title="Узнайте первым о новинках" alignTitle="center">
      <div className={cn(st.mailing_wrap, st.mailing_wrap__form)}>
        <form action="" className={st.form_wrapper}>
          <Input
            name="email"
            type="email"
            height="large"
            placeholder="Ваш e-mail *"
            fullWidth
            icon={<Search />}
          />
          <Button fullWidth>Подписаться</Button>
          <p className={st.mailing_agreement}>
            Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих
            персональных данных и ознакомлен(а) с условиями конфиденциальности.
          </p>
        </form>
      </div>
    </SectionLayout>
  );
};
