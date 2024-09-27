import { useContext, useState } from "react";
import checkImg from "../../assets/svg/checking.svg";
import s from "./Ingredient.module.scss";
import { basketContext } from "../../providers/BasketProvider/BasketProvider";

export const Ingredient = ({
  img,
  description,
  price,
  addIngredientPrice,
  addIngredients,
  removeIngredients,
  el,
}) => {
  //СОСТОЯНИЕ ДЛЯ ВЫБРАННОГО ДОПОЛНИТЕЛЬНОГО ИНГРИДИЕНТА
  const [isSelected, setIsSelected] = useState(false);
  const { addPrice } = useContext(basketContext);
  //ПРИ НАЖАТИИ НА ИНГРИДИЕНТ ОН БУДЕТ МЕНЯТЬСЯ С ТРУ НА ФОЛС
  function handleSelected() {
    setIsSelected((prevState) => !prevState);
  }
  // ЕСЛИ ИНГРИДИЕНТ ВЫБРАН - К ИТОГОВОЙ СУММЕ ДОБАВЛЯЕТСЯ ЕГО СТОИМОСТЬ НА КНОПКУ
  function handleСhoiceIngredient(price, description) {
    handleSelected();
    if (!isSelected) {
      addIngredientPrice(price);
      addPrice(price);
      addIngredients(price, description);
    } else {
      addIngredientPrice(-price);
      removeIngredients(description);
    }
  }

  return (
    <>
      <button
        onClick={() => {
          handleСhoiceIngredient(price, description);
        }}
        type="button"
      >
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
            <p className={s.ingredient__price}>{price} ₽</p>
          </div>
        </article>
      </button>
    </>
  );
};
