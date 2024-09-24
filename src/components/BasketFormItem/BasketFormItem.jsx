import { useContext } from "react";
import s from "./BasketFormItem.module.scss";

import { basketContext } from "../../providers/BasketProvider/BasketProvider";

export const BasketFormItem = ({ el }) => {
  const { basketPrice } = useContext(basketContext);

  return (
    <>
      <li className={s.form}>
        <p className={s.form__product}>
          {el.name}
          <span className={s.form__product_price}>
            {" "}
            {el.price}  шт = {basketPrice} ₽
          </span>
        </p>{" "}
        <p className={s.form__amount}> шт </p>
      </li>
    </>
  );
};
