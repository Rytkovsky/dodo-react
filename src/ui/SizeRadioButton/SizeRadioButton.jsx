import { useState } from "react";
import s from "./SizeRadioButton.module.scss";

export const SizeRadioButton = ({ setSize }) => {
  const [checked, setChecked] = useState("middle");

  const handleSizeChange = (size) => {
    setChecked(size);
    setSize(size);
  };

  return (
    <div className={s.size__nav}>
      <div>
        <input
          className={s.size__input}
          type="radio"
          name="size"
          id="small"
          onChange={() => handleSizeChange("small")}
          checked={checked === "small"}
        />
        <label className={s.size__label} htmlFor="small">
          Маленькая
        </label>
      </div>
      <div>
        <input
          className={s.size__input}
          type="radio"
          name="size"
          id="middle"
          onChange={() => handleSizeChange("middle")}
          checked={checked === "middle"}
        />
        <label className={s.size__label} htmlFor="middle">
          Средняя
        </label>
      </div>
      <div>
        <input
          className={s.size__input}
          type="radio"
          name="size"
          id="big"
          onChange={() => handleSizeChange("big")}
          checked={checked === "big"}
        />
        <label className={s.size__label} htmlFor="big">
          Большая
        </label>
      </div>
    </div>
  );
};
