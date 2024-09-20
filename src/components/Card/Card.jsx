import s from "./Card.module.scss";
import { Button } from "../../ui/Button/Button";
import { useContext } from "react";
import { basketContext } from "../../providers/BasketProvider/BasketProvider";

export const Card = ({ el, img, collect, category, id }) => {
  const { addToBasket, basketCheck } = useContext(basketContext);

  // const checkProduct = basketCheck(id);
  // console.log(checkProduct);

  // function basketHandler() {
  //   if (checkProduct) {
  //     return;
  //   } else {
  //     addToBasket(el);
  //   }
  // }

  return (
    <>
      <article className={s.card}>
        <div className={s.card__wrapper}>
          <img
            src={img}
            alt="card chicken blue cheese"
            className={s.card__img}
          />
        </div>
        <div className={s.card__text_block}>
          <h3 className={s.card__title}>{el.name}</h3>
          <p className={s.card__structure}>{el.description}</p>
          <div className={s.card__order}>
            <p className={s.card__price}> от {el.price} ₽</p>
            {collect ? (
              <Button color="orange">Собрать</Button>
            ) : category !== "pizza" && "combo" ? (
              <Button
                onClick={() => addToBasket(el)}
                color="semiOrange"
                text="orangeText"
              >
                {" "}
                В корзину{" "}
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
