import { Container } from "../Container/Container";
import s from "./Footer.module.scss";
import goggleBtn from "../../assets/imgs/google-play.webp";
import appleBtn from "../../assets/imgs/app-store.webp";
import { contactButton } from "../../ui/contactButton/contactButton";

export const Footer = () => {
  return (
    <>
      <footer className={s.footer}>
        <Container>
          <div className={s.footer__main_info}>
            <ul className={s.footer__list}>
              <li>
                <a href="#">Додо Пицца</a>
              </li>
              <li>
                <a href="#">О нас</a>
              </li>
              <li>
                <a href="#">Додо Книга</a>
              </li>
              <li>
                <a href="#">Блог "Сила Ума"</a>
              </li>
              <li>
                <a href="#">Додо ИС</a>
              </li>
            </ul>
            <ul className={s.footer__list}>
              <li>
                <a href="#">Работа</a>
              </li>
              <li>
                <a href="#">В пиццерии</a>
              </li>
              <li>
                <a href="#">В контакт-центре</a>
              </li>
            </ul>
            <ul className={s.footer__list}>
              <li>
                <a href="#">Партнерам</a>
              </li>
              <li>
                <a href="#">Франшиза</a>
              </li>
              <li>
                <a href="#">Инвестиции</a>
              </li>
              <li>
                <a href="#">Поставщикам</a>
              </li>
              <li>
                <a href="#">Предложить помещение</a>
              </li>
            </ul>
            <ul className={s.footer__list}>
              <li>
                <a href="#">Это интересно</a>
              </li>
              <li>
                <a href="#">Экскурсии и мастер-классы</a>
              </li>
              <li>
                <a href="#">Корпоративные заказы</a>
              </li>
            </ul>
          </div>
          <div className={s.footer__contacts}>
            <contactButton>
              <img className={s.test} src={goggleBtn}/>
            </contactButton>
            <contactButton>
              <img className={s.test} src={appleBtn}/>
            </contactButton>
          </div>
        </Container>
      </footer>
    </>
  );
};
