import { useContext } from "react";
import s from "./BasketFormItem.module.scss";
import { counterContext } from "../../providers/CounterProvider/CounterProvider";
import { basketContext } from "../../providers/BasketProvider/BasketProvider";

export const BasketFormItem = ({ el }) => {
  const { count } = useContext(counterContext);
  const { basketPrice } = useContext(basketContext);

  return (
    <>
      <li className={s.form}>
  
        <p className={s.form__product}>
          {el.name}
          <span className={s.form__product_price}>
            {" "}
            {el.price} ₽ * {count} шт = {basketPrice * count} ₽
          </span>
        </p>{" "}
        <p className={s.form__amount}>{count} шт </p>
      </li>
    </>
  );
};
