import s from "./Header.module.scss";
import { Container } from "../Container/Container";
import { Button } from "../../ui/Button/Button";
import { Logo } from "../../components/Logo/Logo";
import { LogoTitle } from "../../components/LogoTitle/LogoTitle";
import { PhoneNumber } from "../../ui/PhoneNumber/PhoneNumber";
import { createContext, useContext } from "react";
import { WindowWidthContext } from "../../providers/WindowWidthContext/WindowWidthContext";
import MobLogo from "../../assets/svg/mob__logo.svg"

export const Header = () => {
  const width = useContext(WindowWidthContext);
  console.log(width);

  return (
    <header className={s.header}>
      <Container>
        {width > 650 ? (
          <>
            <div className={s.header__wrapper}>
              <div className={s.header__logo_wrapper}>
                <Logo className={s.header__logo} />
                <div className={s.header__title_wrapper}>
                  <LogoTitle className={s.header__title} />
                  <p className={s.header__subtitle}>
                    Сеть пиццерий №1 в России
                  </p>
                </div>
              </div>
              <div className={s.header__phone}>
                <PhoneNumber />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={s.header__wrapper}>
              <img src={MobLogo} alt="logo" />
            </div>
          </>
        )}
      </Container>
    </header>
  );
};
