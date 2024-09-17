import s from "./Navigation.module.scss";

export const Navigation = () => {
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
            <a href="#snacks">Закуски</a>
          </li>
          <li className={s.navigation__item}>
            <a href="#desserts">Десерты</a>
          </li>
          <li className={s.navigation__item}>
            <a href="#drinks">Напитки</a>
          </li>
          <li className={s.navigation__item}>
            <a href="#others">Другие товары</a>
          </li>
        </ul>
      </nav>
    </>
  );
};