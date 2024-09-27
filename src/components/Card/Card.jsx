import s from "./Card.module.scss";
import { Button } from "../../ui/Button/Button";
import { useState, useContext, useEffect } from "react";
import { basketContext } from "../../providers/BasketProvider/BasketProvider";
import { ProductCard } from "../ProductCard/ProductCard";
import { AddRemoveBtn } from "../../ui/AddRemoveBtn/AddRemoveBtn";
import { WindowWidthContext } from "../../providers/WindowWidthContext/WindowWidthContext";
import { Portal } from "../Portal/Portal";

export const Card = ({ el, img, collect, category }) => {
  const width = useContext(WindowWidthContext);

  const { basket, addToBasket, basketCheck, findQuantity } =
    useContext(basketContext);
  const checkInBasket = basketCheck(el._id);
  const [isOpenModalNew, setIsOpenModalNew] = useState(false); // локальное состояние

  useEffect(() => {
    window.addEventListener("click", () => {
      setIsOpenModalNew(false);
    });
  }, []);

  const handleModalOpen = (e) => {
    e.stopPropagation();
    setIsOpenModalNew(true);
  };

  const handleModalClose = () => {
    setIsOpenModalNew(false);
  };

  return (
    <>
      <article className={s.card}>
        <img
          onClick={handleModalOpen}
          src={img}
          alt="img card"
          className={s.card__img}
        />
        <div className={s.card__wrapper}>
          <div className={s.card__textBlock}>
            <h3 className={s.card__title}>{el.name}</h3>
            <p className={s.card__structure}>{el.description}</p>
          </div>
          <div className={s.card__order}>
            <p className={s.card__price}>от {el.price} ₽</p>
            {collect && category === "pizza" ? (
              <Button onClick={handleModalOpen} color="orange">
                {width > 550 ? "Собрать" : `от ${el.price} р`}
              </Button>
            ) : category !== "pizza" && category !== "combo" ? (
              <Button
                onClick={() => {
                  addToBasket(el), basketCheck(el._id);
                }}
                color="semiOrange"
                text="orangeText"
              >
                {checkInBasket
                  ? // ЕСЛИ ТОВАР ЕСТЬ В КОРЗИНЕ, ТО :
                    basket.map((el) => {
                      // МЭП - ЕСЛИ, ТОВАР.ID===ТОВАР-В-КОРЗИНЕ.ID,
                      if (el._id === checkInBasket._id) {
                        // ТО, ДОБАВЬ МНЕ В КНОПКУ ЧИСЛО ПО КОЛИЧЕСТВУ ТОВАРА В КОРЗИНЕ
                        return `Корзина: ${el.quantity}`;
                      }
                    })
                  : width > 550
                  ? "В корзину"
                  : `${el.price} р`}
              </Button>
            ) : (
              <Button
                onClick={handleModalOpen}
                color="semiOrange"
                text="orangeText"
              >
                {width > 550 ? "Выбрать" : `от ${el.price} р`}
              </Button>
            )}
          </div>
        </div>
      </article>

      {isOpenModalNew && (
        <Portal>
          <ProductCard
            el={el}
            img={el.imageUrl}
            onClose={handleModalClose}
          ></ProductCard>
        </Portal>
      )}
    </>
  );
};
