import { useState } from "react";
import checkImg from "../../assets/svg/checking.svg";
import s from "./Ingredient.module.scss";

export const Ingredient = ({ img, description, price, addIngredientPrice }) => {
  const [isSelected, setIsSelected] = useState(false);

  function handleSelected() {
    setIsSelected((prevState) => !prevState);
    console.log(isSelected);
  }

  function handleСhoiceIngredient(price) {
    handleSelected();
    if (!isSelected) {
      addIngredientPrice(price);
    } else {
      addIngredientPrice(-price);
    }
  }
  //- создать новую функцию принимает параметр прайс, вызывает функцию хэндл селектед,  в условии (if isSelected тогда вызывается функция addIngredientsPrice c параметром (price) иначе вызывается функция addIngredientPrice c параметром -price) 

  return (
    <>
      {/* //-убрать handleSelected добавить новую функцию  */}
      <button onClick={() => handleСhoiceIngredient(price)} type="button">
        <article
          className={`${s.ingredient__card} ${
            isSelected ? s.ingredient__card_selected : ""
          }`}
        >
          <div className={s.ingredient__wrapper_img}>
            {isSelected && (
              <img src={checkImg} className={s.ingredient__check} />
            )}
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
