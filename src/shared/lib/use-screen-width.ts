import { useEffect, useState } from "react";
import { Screen } from "shared/api/internal/types";

export const useScreenWidth = (): Screen => {
  const [width, setWidth] = useState(global.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(global.innerWidth);
    });
  }, []);

  console.log(width);
  console.log(width / 16, (375 + 32) / 16);

  if (width / 16 < (375 + 32) / 16) {
    return "xs";
  } else if (width / 16 < (768 + 32) / 16) {
    return "sm";
  } else if (width / 16 < (1140 + 32) / 16) {
    return "md";
  } else {
    return "xl";
  }
};
