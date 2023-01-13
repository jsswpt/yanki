import { useEffect, useMemo, useState, useCallback } from "react";

import st from "../../styles.module.scss";
import cn from "classnames";
import { Button, Input, SectionLayout } from "shared/ui";
import { Search } from "shared/assets/icons/ui";
import { useLocalization } from "shared/hooks";

export const Mailing = () => {
  const { translate } = useLocalization();
  return (
    <SectionLayout
      title={translate("beTheFirstToFindOutAboutNewProducts")}
      alignTitle="center"
    >
      <div className={cn(st.mailing_wrap, st.mailing_wrap__form)}>
        <form action="" className={st.form_wrapper}>
          <Input
            name="email"
            type="email"
            height="large"
            placeholder={`${translate("yourEmail")}*`}
            centerText
            fullWidth
          />
          <Button fullWidth height="large">
            {translate("subscribe")}
          </Button>
          <p className={st.mailing_agreement}>
            {translate("subscribeAgreement")}
          </p>
        </form>
      </div>
    </SectionLayout>
  );
};
