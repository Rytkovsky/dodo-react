import { useState } from "react";
import checkImg from "../../assets/svg/checking.svg";
import s from "./Ingredient.module.scss";

export const Ingredient = ({ img, description, price }) => {
  const [isSelected, setIsSelected] = useState(false);

  function handleSelected() {
    setIsSelected((prevState) => !prevState);
    console.log(isSelected);
  }

  return (
    <>
      <button onClick={() => handleSelected()} type="button">
        <article
          className={`${s.ingredient__card} ${
            isSelected ? s.ingredient__card_selected : ""
          }`}
        >
          <div className={s.ingredient__wrapper_img}>
          {/* true (isSelected) && <img(галочка) */}
           { isSelected && <img
              src={checkImg} 
              className={s.ingredient__check}
            />}
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
