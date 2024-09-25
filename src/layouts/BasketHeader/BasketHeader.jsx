import { Logo } from "../../components/Logo/Logo";
import { LogoTitle } from "../../components/LogoTitle/LogoTitle";
import { Container } from "../Container/Container";
import s from "./BasketHeader.module.scss";
import activeEllipse from "../../assets/svg/active-ellipse.svg";
import disabledEllipse from "../../assets/svg/disabled-ellipse.svg";
import dottedLine from "../../assets/svg/Dotted-line.svg";
import { Link } from "react-router-dom";
import { BasketQueue } from "../../components/BasketQueue/BasketQueue";

export const BasketHeader = () => {
  return (
    <>
      <header className={s.basketHeader}>
        <Container>
          <div className={s.basketHeader__wrapper}>
            <div className={s.basketHeader__logo_wrapper}>
              <Link to={"/"}>
                <Logo className={s.basketHeader__logo} />
              </Link>
              <div className={s.basketHeader__title_wrapper}>
                <Link to={"/"}>
                  <LogoTitle className={s.basketHeader__title} />
                </Link>
                <p className={s.basketHeader__subtitle}>
                  Сеть пиццерий №1 в России
                </p>
              </div>
            </div>
            <BasketQueue />
          </div>
        </Container>
      </header>
    </>
  );
};
