import s from "./Card.module.scss";
import { Button } from "../../ui/Button/Button";
import { useState, useContext, useEffect } from "react";
import { basketContext } from "../../providers/BasketProvider/BasketProvider";
import { ProductCard } from "../ProductCard/ProductCard";

export const Card = ({ el, img, collect, category, id }) => {
  const { addToBasket, basketCheck } = useContext(basketContext);

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
        <img src={img} alt="card chicken blue cheese" className={s.card__img} />
        <div className={s.card__wrapper}>
          <div className={s.card__textBlock}>
            <h3 className={s.card__title}>{el.name}</h3>
            <p className={s.card__structure}>{el.description}</p>
          </div>
          <div className={s.card__order}>
            <p className={s.card__price}>от {el.price} ₽</p>
            {collect ? (
              <Button onClick={handleModalOpen} color="orange">
                Собрать
              </Button>
            ) : category !== "pizza" && category !== "combo" ? (
              <Button
                onClick={() => addToBasket({...el, quantity: 1})}
                color="semiOrange"
                text="orangeText"
              >


                В корзину

              </Button>
            ) : (
              <Button
                onClick={handleModalOpen}
                color="semiOrange"
                text="orangeText"
              >
                Выбрать
              </Button>
            )}
          </div>
        </div>
      </article>
      {isOpenModalNew && <ProductCard onClose={handleModalClose} />}
    </>
  );
};
