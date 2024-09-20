import s from "./Ingredient.module.scss";
// import IngMushroom from "../../../public/images/mushroom.webp";
export const Ingredient = ({ img, description, price }) => {
  return (
    <>
      <button type="button">
        <article className={s.ingredient__card}>
          <div className={s.ingredient__wrapper_img}>
            <input className={s.ingredient__checkbox} type="checkbox" />
            <img src={img} alt="img" className={s.ingredient__img} />
          </div>
          <div className={s.ingredient__text_block}>
            <h3 className={s.ingredient__name}>{description}</h3>
          </div>
          <div>
            <p className={s.ingredient__price}>{price}</p>
          </div>
        </article>
      </button>
    </>
  );
};
