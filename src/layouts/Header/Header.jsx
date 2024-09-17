import s from "./Header.module.scss";
import { Container } from "../Container/Container";
import { Button } from "../../ui/Button/Button";
import { Logo } from "../../components/Logo/Logo";
import { LogoTitle } from "../../components/LogoTitle/LogoTitle";
import { PhoneNumber } from "../../ui/PhoneNumber/PhoneNumber";
import { Navigation } from "../../components/Navigation/Navigation";
// import { MobileNavigation } from "../../components/MobileNavigation/MobileNavigation";

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
          <Navigation />
          {/* <MobileNavigation /> */}
          <Button>Корзина</Button>
        </div>
      </Container>
    </header>
  );
};
