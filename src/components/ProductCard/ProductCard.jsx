import s from "./ProductCard.module.scss";
import { Button } from "../../ui/Button/Button";
import { SizeRadioButton } from "../../ui/SizeRadioButton/SizeRadioButton";
import { TypeRadioButton } from "../../ui/TypeRadioButton/TypeRadioButton";
import CloseBtn from "../../assets/svg/close.svg";
import { Ingredient } from "../../ui/Ingredient/Ingredient";
import { extraIngredients } from "../../../extraIngredients.js";
import { useContext, useEffect, useState } from "react";
import { modalContext } from "../../providers/ModalProvider/ModalProvider.jsx";

export const ProductCard = ({ onClose, el, img }) => {
  const [size, setSize] = useState("middle");
  const [typeTesto, setTypeTesto] = useState("traditional");
  const [totalIngredientSum, setTotalIngredientSum] = useState(0);

  //-  Создание функции для суммирования цены ингредиентов
  function addIngredientPrice(price) {
    setTotalIngredientSum((prevState) => prevState + price);
    //- перезаписать состояние предыдущим состоянием + прайс далее через пропс передать эту в функцию в кард ингредиент
  }

  const { setIsOpenModalNew } = useContext(modalContext);
  console.log("test");
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
            <div className={s.product__dashed}></div>
            <img src={img} alt="pizza img" className={s.product__img} />
          </div>
          <div className={s.product__ingDopDiv}>
            <div className={s.product__text_block}>
              <h2 className={s.product__title}>{el.name}</h2>
              <p className={s.product__description}>
                {size === "middle" ? 30 : size === "big" ? 35 : 25} см,{" "}
                {typeTesto === "traditional"
                  ? "традиционное тесто"
                  : "тонкое тесто"}
                , {size === "middle" ? 480 : size === "big" ? 640 : 310} г
              </p>
              <p className={s.product__structure}>{el.description}</p>

              {el.category === "pizza" ? (
                <>
                  <SizeRadioButton setSize={setSize} />
                  <TypeRadioButton setTypeTesto={setTypeTesto} />
                  <h2 className={s.product__title}>Добавить в пиццу</h2>
                  <div className={s.product__ing_wrapper}>
                    {extraIngredients.map((el) => (
                      <Ingredient
                        key={el.id}
                        img={el.img}
                        description={el.description}
                        price={el.price}
                        addIngredientPrice={addIngredientPrice}
                      />
                    ))}
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
            <div className={s.product__order}>
              <Button color="orange" size="large">
                Добавить в корзину за{" "}
                {(size === "middle" ? el.price : size === "big" ? 925 : 320) +
                  totalIngredientSum}{" "}
                ₽
              </Button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};
