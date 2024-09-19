import s from "./BasketItem.module.scss";
import productImg from "../../../public/images/cheesy-cheeder.webp";
import deleteItem from "../../assets/svg/item-delete.svg";
import { AddRemoveBtn } from "../../ui/AddRemoveBtn/AddRemoveBtn";

export const BasketItem = () => {
  return (
    <>
      <li className={s.basketItem}>
        <div className={s.basketItem__info}>
          <img src={productImg} className={s.basketItem__img}></img>
          <div className={s.basketItem__text}>
            <h3 className={s.basketItem__title}>Чиззи Чеддер</h3>
            <p className={s.basketItem__desc}>
              Средняя 30 см, традиционное тесто
            </p>
          </div>
        </div>
        <div className={s.basketItem__control}>
          <AddRemoveBtn />
          <p className={s.basketItem__price}>3 799 ₽</p>
          <button className={s.basketItem__removeItem}>
            <img src={deleteItem} />
          </button>
        </div>
      </li>
    </>
  );
};
