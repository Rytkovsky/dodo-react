import { LogoTitle } from "../../components/LogoTitle/LogoTitle";
import { PhoneNumber } from "../../ui/PhoneNumber/PhoneNumber";
import { Container } from "../Container/Container";
import s from "./BasketFooter.module.scss";

export const BasketFooter = () => {
  return (
    <>
      <footer className={s.basketFooter}>
        <Container>
          <PhoneNumber className={s.basketFooter__tel} />
          <div className={s.basketFooter__bottom}>
            <div className={s.basketFooter__bottom_logo}>
              <LogoTitle className={s.basketFooter__bottom_img} />
              <p>© 2024</p>
            </div>
            <div className={s.basketFooter__bottom_text}>
              <p>
                <a href="#">Правовая информация</a>
              </p>
              <p>
                <a href="#">Калорийность и состав</a>
              </p>
              <p>
                <a href="#">Помощь</a>
              </p>
            </div>
            <p className={s.basketFooter__mail}>
              <a href="mailto:feedback@dodopizza.com">feedback@dodopizza.com</a>
            </p>
          </div>
        </Container>
      </footer>
    </>
  );
};
