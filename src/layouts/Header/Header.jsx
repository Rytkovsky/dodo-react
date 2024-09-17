import s from "./Header.module.scss";
import { Container } from "../Container/Container";
import { Button } from "../../ui/Button/Button";
import { Logo } from "../../components/Logo/Logo";
import { LogoTitle } from "../../components/LogoTitle/LogoTitle";
import { PhoneNumber } from "../../ui/PhoneNumber/PhoneNumber";
import { Navigation } from "../../components/Navigation/Navigation";

export const Header = () => {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.header__wrapper}>
          <div className={s.header__logo_wrapper}>
            <Logo className={s.header__logo} />
            <div className={s.header__title_wrapper}>
              <LogoTitle className={s.header__title} />
              <p className={s.header__subtitle}>Сеть пиццерий №1 в России</p>
            </div>
          </div>
          <div className={s.header__phone}>
            <PhoneNumber />
          </div>
        </div>
        <div className={s.header__navigation}>
          <Navigation>
            <ul className={s.header__lists}>
              <li className={s.header__item}>
                <a href="#pizza">Пицца</a>
              </li>
              <li className={s.header__item}>
                <a href="#combo">Комбо</a>
              </li>
              <li className={s.header__item}>
                <a href="#snacks">Закуски</a>
              </li>
              <li className={s.header__item}>
                <a href="#desserts">Десерты</a>
              </li>
              <li className={s.header__item}>
                <a href="#drinks">Напитки</a>
              </li>
              <li className={s.header__item}>
                <a href="#others">Другие товары</a>
              </li>
            </ul>
          </Navigation>
          <Button>Корзина</Button>
        </div>
      </Container>
    </header>
  );
};
