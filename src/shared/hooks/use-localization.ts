import { useRouter } from "next/router";
import { useMemo } from "react";
import { en, Localization, ru } from "shared/localization";

export const useLocalization = () => {
  const router = useRouter();

  const translate = (key: keyof Localization) => {
    switch (router.locale) {
      case "ru":
        return ru[key];
      case "en":
        return en[key];
      default:
        return ru[key];
    }
  };

  return { translate };
};
