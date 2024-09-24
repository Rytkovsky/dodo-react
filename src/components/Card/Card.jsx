import s from "./Card.module.scss";
import { Button } from "../../ui/Button/Button";
import { useContext } from "react";
import { basketContext } from "../../providers/BasketProvider/BasketProvider";

export const Card = ({ el, img, collect, category, id }) => {
  const { addToBasket, basketCheck } = useContext(basketContext);
  //ПРОВЕРКУ НА НАЛИЧИЕ ТОВАРА В КОРЗИНЕ ПИХНУЛИ В ПЕРЕМЕННУЮ
  const checkInBasket = basketCheck(el._id);
  console.log(checkInBasket);

  return (
    <>
      <article className={s.card}>
        <img src={img} alt="card chicken blue cheese" className={s.card__img} />
        <div className={s.card__wrapper}>
          <div className={s.card__textBlock}>
            <h3 className={s.card__title}>{el.name}</h3>
            <p className={s.card__structure}>{el.description}</p>
          </div>
          <div className={s.card__order}>
            <p className={s.card__price}> от {el.price} ₽</p>
            {collect ? (
              <Button color="orange">Собрать</Button>
            ) : category !== "pizza" && "combo" ? (
              <Button
                onClick={() => addToBasket({...el, quantity: 1})}
                color="semiOrange"
                text="orangeText"
              >
                {checkInBasket ? "В корзине!" : "В корзину"}
                {/* функция */}
                {/* счетчик */}
                {/* символы на кнопках */}
              </Button>
            ) : (
              <Button color="semiOrange" text="orangeText">
                Выбрать
              </Button>
            )}
          </div>
        </div>
      </article>
    </>
  );
};
