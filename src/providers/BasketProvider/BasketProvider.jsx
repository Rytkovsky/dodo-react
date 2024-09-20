import { createContext, useState } from "react";
import s from "./BasketProvider.module.scss";

export const basketContext = createContext(null);

export const BasketProvider = ({ children }) => {
  //КОРЗИНА
  const [basket, setBasket] = useState([]);
  //ДОБАВЛЕНИЕ ТОВАРА В КОРЗИНУ(МАССИВ)
  function addToBasket(product) {
    const basketProducts = basket.find((el) => el._id === product._id);

    if (!basketProducts) {
      setBasket([...basket, product]);
    } else {
      return;
    }
  }

  //ПРОВЕРКА НА ТО ЕСТЬ ЛИ ТОВАР В КОРЗИНЕ(МАССИВЕ)
  // function basketCheck(id) {
  //   return basket.find((el) => el.id === id);
  // }

  const basketData = {
    basket,
    addToBasket,
    // basketCheck,
  };
  console.log(basket);

  return (
    <>
      <basketContext.Provider value={basketData}>
        {children}
      </basketContext.Provider>
    </>
  );
};
