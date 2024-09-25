import { Link } from "react-router-dom";
import s from "./Navigation.module.scss";
import { Button } from "../../ui/Button/Button";
import { Container } from "../../layouts/Container/Container";
import { useContext } from "react";
import { basketContext } from "../../providers/BasketProvider/BasketProvider";

export const Navigation = () => {
  const { changeToFirstHeader } = useContext(basketContext);

  return (
    <>
      <nav className={s.navigation}>
        <ul className={s.navigation__lists}>
          <li className={s.navigation__item}>
            <a href="#pizza">Пицца</a>
          </li>
          <li className={s.navigation__item}>
            <a href="#combo">Комбо</a>
          </li>
          <li className={s.navigation__item}>
            <a href="#snack">Закуски</a>
          </li>
          <li className={s.navigation__item}>
            <a href="#dessert">Десерты</a>
          </li>
          <li className={s.navigation__item}>
            <a href="#drink">Напитки</a>
          </li>
          <li className={s.navigation__item}>
            <a href="#others">Другие товары</a>
          </li>
        </ul>
        <Link to={"/basket"}>
          <Button onClick={changeToFirstHeader} color="orange" size="medium">
            Корзина
          </Button>
        </Link>
      </nav>
    </>
  );
};
