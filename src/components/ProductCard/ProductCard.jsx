import s from "./ProductCard.module.scss";
import PizzaCheeseCheddar from "../../../public/images/cheesy-cheddar.webp";
import { Button } from "../../ui/Button/Button";
import { TypePizzaCheckbox } from "../../ui/TypePizzaCheckbox/TypePizzaCheckbox";

export const ProductCard = () => {
  return (
    <>
      <article className={s.product__card}>
        <div className={s.product__card_wrapper}>
          <div className={s.product__wrapper_img}>
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
            <nav className={s.product__nav}>
              <ul className={s.product__sizes}>
                <li className={s.product__size}>Маленькая</li>
                <li className={s.product__size}>Средняя</li>
                <li className={s.product__size}>Большая</li>
              </ul>
            </nav>
            <TypePizzaCheckbox/>
            {/* <nav className={s.product__types_nav}>
              <ul className={s.product__types}>
                <li className={s.product__type}>Традиционное</li>
                <li className={s.product__type}>Тонкое</li>
              </ul>
            </nav> */}
            <div className={s.product__ingredients_wrapper}>
              <h3 className={s.product__ingredients}>Добавить в пиццу</h3>

              <div className={s.product__order}>
                <Button className={s.product__button}>
                  Добавить в корзину за 625 ₽
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
