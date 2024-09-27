import s from "./ProductCard.module.scss";
import { Button } from "../../ui/Button/Button";
import { SizeRadioButton } from "../../ui/SizeRadioButton/SizeRadioButton";
import { TypeRadioButton } from "../../ui/TypeRadioButton/TypeRadioButton";
import CloseBtn from "../../assets/svg/close.svg";
import { Ingredient } from "../../ui/Ingredient/Ingredient";
import { extraIngredients } from "../../../extraIngredients.js";
import { useContext, useEffect, useState } from "react";
import { basketContext } from "../../providers/BasketProvider/BasketProvider.jsx";

export const ProductCard = ({ onClose, el, img }) => {
  const [size, setSize] = useState("middle");
  const [typeTesto, setTypeTesto] = useState("traditional");
  const [totalIngredientSum, setTotalIngredientSum] = useState(0);

  const {
    addToBasket,
    basketCheck,
    basket,
    addIngredients,
    removeIngredients,
    addKeys,
  } = useContext(basketContext);
  const checkInBasket = basketCheck(el._id);

  //-  Создание функции для суммирования цены ингредиентов
  function addIngredientPrice(price) {
    setTotalIngredientSum((prevState) => prevState + price);
  }
  // ДЕЛАЕТ СТАТИЧНЫЙ ЗАДНИЙ ФОН ПРИ ВЫБОРЕ МОДАЛЬНОГО ОКНА
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className={s.product__background}>
      <article onClick={(e) => e.stopPropagation()} className={s.product__card}>
        <div className={s.product__card_wrapper}>
          <button onClick={() => onClose()} className={s.product__close}>
            <img src={CloseBtn} />
          </button>
          <div className={s.product__wrapper_img}>
            <img src={img} alt="pizza img" className={s.product__img} />
          </div>
          <div className={s.product__ingDopDiv}>
            <div className={s.product__text_block}>
              <h2 className={s.product__title}>{el.name}</h2>

              {el.category === "pizza" || el.category === "combo" ? (
                <p className={s.product__description}>
                  {size === "middle" ? 30 : size === "big" ? 35 : 25} см,{" "}
                  {typeTesto === "traditional"
                    ? "традиционное тесто"
                    : "тонкое тесто"}
                  , {size === "middle" ? 480 : size === "big" ? 640 : 310} г
                </p>
              ) : (
                ""
              )}

              <p className={s.product__structure}>{el.description}</p>

              {el.category === "pizza" ? (
                <>
                  <SizeRadioButton setSize={setSize} />
                  <TypeRadioButton setTypeTesto={setTypeTesto} />
                  <h2 className={s.product__title}>Добавить в пиццу</h2>
                  <div className={s.product__ing_wrapper}>
                    {extraIngredients.map((el) => (
                      <Ingredient
                        el={el}
                        key={el.id}
                        img={el.img}
                        description={el.description}
                        price={el.price}
                        addIngredientPrice={addIngredientPrice}
                        addIngredients={addIngredients}
                        removeIngredients={removeIngredients}
                      />
                    ))}
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
            <div className={s.product__order}>
              <Button
                onClick={() => addToBasket(el)}
                color="orange"
                size="large"
              >
                {checkInBasket
                  ? basket.map((el) => {
                      if (el._id === checkInBasket._id) {
                        return `Корзина: ${el.quantity}`;
                      }
                    })
                  : `Добавить в корзину за  
                  ${
                    (size === "middle"
                      ? el.price
                      : size === "big"
                      ? el.price + 200
                      : el.price - 100) + totalIngredientSum
                  } ₽`}
              </Button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};
