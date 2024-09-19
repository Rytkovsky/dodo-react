import { useState } from "react";
import s from "./TypeRadioButton.module.scss";

export const TypeRadioButton = () => {
  const [checked, setChecked] = useState("traditional");

  const handleTypeChange = (type) => {
    setChecked(type);
    console.log(type);
  };

  return (
    <>
      <div className={s.type__nav}>
        <div>
          <input
            className={s.type__input}
            type="radio"
            name="type__pizza"
            id="traditional"
            onChange={() => handleTypeChange("traditional")}
            checked={checked === "traditional"}
          />
          <label className={s.type__label} htmlFor="traditional">
            Традиционное
          </label>
        </div>
        <div>
          <input
            className={s.type__input}
            type="radio"
            name="type__pizza"
            id="slim"
            onChange={() => handleTypeChange("slim")}
            checked={checked === "slim"}
          />
          <label className={s.type__label} htmlFor="slim">
            Тонкое
          </label>
        </div>
      </div>
    </>
  );
};
