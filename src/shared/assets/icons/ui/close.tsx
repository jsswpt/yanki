import { Icon } from "../icon.type";

export const Close = (props: Icon) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="black"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <rect
        width="34.0562"
        height="4.00661"
        transform="matrix(0.704853 0.709353 -0.704853 0.709353 2.99561 0)"
        fill="white"
      />
      <rect
        width="34.0562"
        height="4.00661"
        transform="matrix(0.704853 -0.709353 0.704853 0.709353 0 24.1579)"
        fill="white"
      />
    </svg>
  );
};
