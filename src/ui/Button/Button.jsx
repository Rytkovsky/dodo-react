import clsx from "clsx";
import s from "./Button.module.scss";

export const Button = ({ children, onClick, color, size, text }) => {




  return (
    <>
      <button
        onClick={onClick}
        className={clsx(s.button, {
          [s.button_orange]: color === "orange",
          [s.button_semiOrange]: color === "semiOrange",
          [s.button_gray]: color === "gray",
          [s.button_small]: size === "small",
          [s.button_medium]: size === "medium",
          [s.button_semiLarge]: size === "semiLarge",
          [s.button_large]: size === "large",
          [s.button_text]: text === "black",
          [s.button_orangeText]: text === "orangeText",
        })}
      >
        {children}
      </button>
    </>
  );
};
