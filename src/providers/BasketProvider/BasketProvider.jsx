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
  // //МАССИВ ДОПОЛНИТЕЛЬНЫХ ИНГРИДИЕНТОВ
  const [ingredient, setIngredient] = useState([]);
  //СМЕНА СОСТОЯНИЯ В КОРЗИНЕ В ШАПКЕ
  const [firstHeader, setFirstHeader] = useState(1);

  //ФУНКЦИЯ ПО СМЕНЕ НА ПЕРВЫЙ ЭКРАН ХЕДЕРА
  function changeToFirstHeader() {
    setFirstHeader(1);
  }
  // НА ВТОРОЙ ЭКРАН ХЕДЕРА
  function changeToSecondHeader() {
    setFirstHeader(2);
  }
  //НА ТРЕТИЙ
  function changeToThirdHeader() {
    setFirstHeader(3);
  }
  //НА ЧЕТВЕРТЫЙ
  function changeToEmptyHeader() {
    setFirstHeader(4);
  }

  //ДОБАВЛЕНИЕ ТОВАРА В КОРЗИНУ(МАССИВ)
  function addToBasket(product) {
    const basketProducts = basket.find((el) => el._id === product._id);

    if (!basketProducts) {
      const basketAdd = [...basket, product];

      //ПРОВАЛИВАЕМСЯ ВНУТРЬ МАССИВА И КАЖДОМУ ЭЛЕМЕНТУ ДАЁМ КЛЮЧ КОЛИЧЕСТВА
      const addQuantity = basketAdd.map((el) =>
        el._id === product._id ? { ...el, quantity: 1 } : el
      );
      setBasket(addQuantity);
    } else if (basketProducts) {
      addAmount(product);
    }
  }

  // ДОБАВЛЕНИЕ НОВЫХ КЛЮЧЕЙ ДЛЯ ДОП. ИНГРИДИЕНТОВ
  function addKeys(description) {
    const newBasket = basket.map((el) => ({
      ...el,
      ingredients: [...el.ingredients, description],
    }));

    setBasket(newBasket);
  }

  //ДОБАВЛЕНИЕ ЦЕНЫ ПРИ ДОП. ИНГРИДИЕНТАХ
  function addPrice(price) {
    const newBasket = basket.map((el) => ({ ...el, price: el.price + price }));
    setBasket(newBasket);
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
  //ПОЛНАЯ ОЧИСТКА КОРЗИНЫ ПРИ НАЖАТИИ "Отменить заказ"
  function clearAllBasket() {
    setBasket([]);
  }

  //ДОБАВЛЕНИЕ ДОП ИНГРИДИЕНТОВ В МАССИВ
  //СОХРАНЯЕМ ПРЕДЫДУЩЕЕ СОСТОЯНИЕ И ДОБАВЛЯЕМ НОВЫЙ ЭЛЕМЕНТ
  function addIngredients(description) {
    setIngredient((prevState) => [...prevState, description]);
  }
  //УДАЛЕНИЕ ИНГРИДИЕНТОВ ИЗ МАССИВА
  function removeIngredients(description) {
    const filteredIngredient = ingredient.filter(
      (el) => el.description !== description
    );
    setIngredient(filteredIngredient);
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
    clearAllBasket,
    addIngredients,
    removeIngredients,
    ingredient,
    addKeys,
    addPrice
  };
  console.log(ingredient);
  console.log(basket);

  return (
    <>
      <basketContext.Provider value={basketData}>
        {children}
      </basketContext.Provider>
    </>
  );
};
