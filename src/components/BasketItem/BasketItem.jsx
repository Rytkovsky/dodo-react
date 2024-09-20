import s from "./BasketItem.module.scss";
import deleteItem from "../../assets/svg/item-delete.svg";
import { AddRemoveBtn } from "../../ui/AddRemoveBtn/AddRemoveBtn";

export const BasketItem = ({ el, img }) => {
  console.log(el);

  return (
    <>
      <li className={s.basketItem}>
        <div className={s.basketItem__info}>
          <img src={img} className={s.basketItem__img}></img>
          <div className={s.basketItem__text}>
            <h3 className={s.basketItem__title}>{el.name}</h3>
            <p className={s.basketItem__desc}>{el.description}</p>
          </div>
        </div>
        <div className={s.basketItem__control}>
          <AddRemoveBtn />
          <p className={s.basketItem__price}>{el.price}</p>
          <button className={s.basketItem__removeItem}>
            <img src={deleteItem} />
          </button>
        </div>
      </li>
    </>
  );
};
