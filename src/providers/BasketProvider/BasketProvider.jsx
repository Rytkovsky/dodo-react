import { createContext, useEffect, useState } from "react";

export const basketContext = createContext(null);

export const BasketProvider = ({ children }) => {
  //КОРЗИНА
  const [basket, setBasket] = useState([]);
  //ПОДСЧЕТ СУММЫ ЗА ТОВАРЫ
  const [totalSum, setTotalSum] = useState(0);
  useEffect(() => {
    const basketPrice = basket.reduce(
      (acc, el) => acc + el.price * el.quantity,
      0
    );
    setTotalSum(basketPrice);
  }, [basket]);
  //СМЕНА СОСТОЯНИЯ В КОРЗИНЕ В ШАПКЕ
  const [firstHeader, setFirstHeader] = useState(1);

  //ФУНКЦИЯ ПО СМЕНЕ НА ПЕРВЫЙ ЭКРАН ХЕДЕРА
  function changeToFirstHeader() {
    setFirstHeader(1);
  }

  //ФУНКЦИЯ ПО СМЕНЕ НА ВТОРОЙ ЭКРАН ХЕДЕРА
  function changeToSecondHeader() {
    setFirstHeader(2);
  }

  function changeToThirdHeader() {
    setFirstHeader(3);
  }
  function changeToEmptyHeader() {
    setFirstHeader(4);
  }

  //ДОБАВЛЕНИЕ ТОВАРА В КОРЗИНУ(МАССИВ)
  function addToBasket(product) {
    const basketProducts = basket.find((el) => el._id === product._id);

    if (!basketProducts) {
      const basketAdd = [...basket, product];
      //ПРОВАЛИВАЕМСЯ ВНУТРЬ МАССИВА И КАЖДОМУ ЭЛЕМЕНТУ ДАЁМ КЛЮЧ
      const addQuantity = basketAdd.map((el) =>
        el._id === product._id ? { ...el, quantity: 1 } : el
      );
      setBasket(addQuantity);
    } else if (basketProducts) {
      addAmount(product);
    }
  }

  //ДОБАВЛЕНИЕ КОЛИЧЕСТВА ТОВАРА НА ПЛЮС
  function addAmount(product) {
    const updatedBasket = basket.map((el) =>
      el._id === product._id ? { ...el, quantity: el.quantity + 1 } : el
    );
    setBasket(updatedBasket);
  }
  //УДАЛЕНИЕ КОЛИЧЕСТВА ТОВАРА НА МИНУС
  function decreaseAmount(product) {
    const updatedBasket = basket.map((el) =>
      el._id === product._id ? { ...el, quantity: el.quantity - 1 } : el
    );
    setBasket(updatedBasket);
    // УДАЛЕНИЕ ТОВАРА ИЗ КОРЗИНЫ ЕСЛИ КОЛИЧЕСТВО БУДЕТ 0
    if (product.quantity <= 1) {
      removeFromBasket(product);
    }
  }

  //ПРОВЕРКА НА НАЛИЧИЕ ТОВАРА В КОРЗИНЕ
  function basketCheck(id) {
    return basket.find((el) => el._id === id);
  }

  //ПОИСК КОЛИЧЕСТВА ТОВАРА
  function findQuantity(quantity) {
    return basket.find((el) => el.quantity === quantity);
  }

  //УДАЛЕНИЕ ТОВАРА ИЗ КОРЗИНЫ
  function removeFromBasket(product) {
    setBasket(basket.filter((el) => el._id !== product._id));
  }

  const basketData = {
    basket,
    addToBasket,
    removeFromBasket,
    basketCheck,
    addAmount,
    decreaseAmount,
    totalSum,
    findQuantity,
    firstHeader,
    changeToFirstHeader,
    changeToSecondHeader,
    changeToThirdHeader,
    changeToEmptyHeader,
  };

  return (
    <>
      <basketContext.Provider value={basketData}>
        {children}
      </basketContext.Provider>
    </>
  );
};
