import s from "./Ingredient.module.scss";
import IngMushroom from "../../../public/images/mushroom.webp";
export const Ingredient = () => {
  return (
    <>
      <div className={s.ingredient__wrapper}>
        <button type="button">
          <article className={s.ingredient__card}>
            <div className={s.ingredient__wrapper_img}>
              <input className={s.ingredient__checkbox} type="checkbox" />
              <img
                src={IngMushroom}
                alt="mushroom"
                className={s.ingredient__img}
              />
            </div>
            <div className={s.ingredient__text_block}>
              <h3 className={s.ingredient__name}>Шампиньоны</h3>
            </div>
            <div>
              <p className={s.ingredient__price}> 65 ₽</p>
            </div>
          </article>
        </button>
      </div>
    </>
  );
};
