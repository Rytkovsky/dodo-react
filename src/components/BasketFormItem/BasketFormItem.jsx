import s from "./BasketFormItem.module.scss";

import { basketContext } from "../../providers/BasketProvider/BasketProvider";

export const BasketFormItem = ({ el }) => {
  return (
    <>
      <li className={s.form}>
        <p className={s.form__product}>
          {el.name}
          <span className={s.form__product_price}> {el.price} ₽</span>
        </p>{" "}
        <p className={s.form__amount}> {el.quantity} Шт </p>
      </li>
    </>
  );
};
