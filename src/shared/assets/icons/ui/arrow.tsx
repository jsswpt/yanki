import { Icon } from "../icon.type";

export const Arrow = (props: Icon) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="black"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        d="M9 9.88903L12.8891 5.99997L14 7.11091L9 12.1109L4 7.1109L5.11094 5.99997L9 9.88903Z"
        fill="white"
      />
    </svg>
  );
};
