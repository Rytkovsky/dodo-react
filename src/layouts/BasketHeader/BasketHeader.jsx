import { Logo } from "../../components/Logo/Logo";
import { LogoTitle } from "../../components/LogoTitle/LogoTitle";
import { Container } from "../Container/Container";
import s from "./BasketHeader.module.scss";
import activeEllipse from "../../assets/svg/active-ellipse.svg";
import disabledEllipse from "../../assets/svg/disabled-ellipse.svg";
import dottedLine from "../../assets/svg/Dotted-line.svg";

export const BasketHeader = () => {
  return (
    <>
      <header className={s.basketHeader}>
        <Container>
          <div className={s.basketHeader__wrapper}>
            <div className={s.basketHeader__logo_wrapper}>
              <Logo className={s.basketHeader__logo} />
              <div className={s.basketHeader__title_wrapper}>
                <LogoTitle className={s.basketHeader__title} />
                <p className={s.basketHeader__subtitle}>
                  Сеть пиццерий №1 в России
                </p>
              </div>
            </div>
            <div className={s.basketHeader__orderMain}>
              <div className={s.basketHeader__order}>
                <span className={s.basketHeader__order_num1}>1</span>
                <div className={s.basketHeader__ellipse_wrapper}>
                  <img
                    className={s.basketHeader__ellipse}
                    src={activeEllipse}
                  />
                  <p className={s.basketHeader__order_text}>Корзина</p>
                  <img
                    className={s.basketHeader__dottedLine1}
                    src={dottedLine}
                  />
                </div>
              </div>
              <div className={s.basketHeader__order}>
                <span className={s.basketHeader__order_num2}>2</span>
                <div className={s.basketHeader__ellipse_wrapper}>
                  <img
                    className={s.basketHeader__ellipse}
                    src={disabledEllipse}
                  />
                  <p className={s.basketHeader__order_text}>
                    Оформление заказа
                  </p>
                  <img
                    className={s.basketHeader__dottedLine2}
                    src={dottedLine}
                  />
                </div>
              </div>
              <div className={s.basketHeader__order}>
                <span className={s.basketHeader__order_num3}>3</span>
                <div className={s.basketHeader__ellipse_wrapper}>
                  <img
                    className={s.basketHeader__ellipse}
                    src={disabledEllipse}
                  />
                  <p className={s.basketHeader__order_text}>Заказ принят</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};
