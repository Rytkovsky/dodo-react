import s from "./ProductCard.module.scss";
import PizzaCheeseCheddar from "../../../public/images/cheesy-cheeder.webp";
import { Button } from "../../ui/Button/Button";
import { SizeRadioButton } from "../../ui/SizeRadioButton/SizeRadioButton";
import { TypeRadioButton } from "../../ui/TypeRadioButton/TypeRadioButton";
import CloseBtn from "../../assets/svg/close.svg";
import { Ingredient } from "../../ui/Ingredient/Ingredient";
import { extraIngredients } from "../../../extraIngredients.js";
export const ProductCard = () => {
  console.log(extraIngredients);

  //- Массив для передачи ингредиентов
  // const ExtraIngredients = ["img", "description", "price"];

  return (
    <div className={s.product__background}>
      <article className={s.product__card}>
        <div className={s.product__card_wrapper}>
          <button className={s.product__close}>
            <img src={CloseBtn} />
          </button>
          <div className={s.product__wrapper_img}>
            <div className={s.product__dashed}></div>
            <img
              src={PizzaCheeseCheddar}
              alt="pizza cheese cheddar"
              className={s.product__img}
            />
          </div>
          <div className={s.product__text_block}>
            <h2 className={s.product__title}>Чиззи чеддер</h2>
            <p className={s.product__description}>
              30 см, традиционное тесто, 480 г
            </p>
            <p className={s.product__structure}>
              Ветчина, сыр чеддер, сладкий перец, моцарелла, томатный
              соус,чеснок, итальянские травы
            </p>
            <SizeRadioButton />
            <TypeRadioButton />
            <h2 className={s.product__title}>Добавить в пиццу</h2>
            <div className={s.product__ing_wrapper}>
              {extraIngredients.map((el) => (
                <Ingredient
                  key={el.id}
                  img={el.img}
                  description={el.description}
                  price={el.price}
                ></Ingredient>
              ))}
            </div>
            <div className={s.product__order}>
              <Button className={s.product__button}>
                Добавить в корзину за 625 ₽
              </Button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};
