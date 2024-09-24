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
      const basketAdd = [...basket, product];
      //ПРОВАЛИВАЕМСЯ ВНУТРЬ МАССИВА И КАЖДОМУ ЭЛЕМЕНТУ ДАЁМ КЛЮЧ
      const quantity = basketAdd.map((el) => ({ ...el, quantity: 1 }));
      setBasket(quantity);
    } else {
      return;
    }
  }

  //ПРОВЕРКА НА НАЛИЧИЕ ТОВАРА В КОРЗИНЕ
  function basketCheck(id) {
    return basket.find((el) => el._id === id);
  }

  //УДАЛЕНИЕ ТОВАРА ИЗ КОРЗИНЫ
  function removeFromBasket(product) {
    setBasket(basket.filter((el) => el._id !== product._id));
  }
  //ПОДСЧЕТ СУММЫ ЗА ТОВАРЫ
  const basketPrice = basket.reduce((acc, el) => acc + el.price, 0);

  const basketData = {
    basket,
    basketPrice,
    addToBasket,
    removeFromBasket,
    basketCheck,
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
