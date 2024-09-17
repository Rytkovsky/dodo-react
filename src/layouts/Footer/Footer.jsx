import { Container } from "../Container/Container";
import s from "./Footer.module.scss";
import goggleBtn from "../../assets/imgs/contact-btns/google-play.webp";
import appleBtn from "../../assets/imgs/contact-btns/app-store.webp";
import greyLogo from "../../assets/imgs/links/Gray_logo.svg";
import fb from "../../assets/imgs/links/fb.svg";
import inst from "../../assets/imgs/links/inst.svg";
import ok from "../../assets/imgs/links/ok.svg";
import vk from "../../assets/imgs/links/vk.svg";
import yt from "../../assets/imgs/links/youtube.svg";
import { List } from "../../components/List/List";
import { Item } from "../../components/Item/Item";

export const Footer = () => {
  return (
    <>
      <footer className={s.footer}>
        <Container>
          <div className={s.footer__top_wrapper}>
            <div className={s.footer__main_info}>
              <List className={s.footer__list}>
                <Item className={s.footer__item}>
                  <a href="#">Додо Пицца</a>
                </Item>
                <Item className={s.footer__item}>
                  <a href="#">О нас</a>
                </Item>
                <Item className={s.footer__item}>
                  <a href="#">Додо Книга</a>
                </Item>
                <Item className={s.footer__item}>
                  <a href="#">Блог "Сила Ума"</a>
                </Item>
                <Item className={s.footer__item}>
                  <a href="#">Додо ИС</a>
                </Item>
              </List>
              <List className={s.footer__list}>
                <Item className={s.footer__item}>
                  <a href="#">Работа</a>
                </Item>
                <Item className={s.footer__item}>
                  <a href="#">В пиццерии</a>
                </Item>
                <Item className={s.footer__item}>
                  <a href="#">В контакт-центре</a>
                </Item>
              </List>
              <List className={s.footer__list}>
                <Item className={s.footer__item}>
                  <a href="#">Партнерам</a>
                </Item>
                <Item className={s.footer__item}>
                  <a href="#">Франшиза</a>
                </Item>
                <Item className={s.footer__item}>
                  <a href="#">Инвестиции</a>
                </Item>
                <Item className={s.footer__item}>
                  <a href="#">Поставщикам</a>
                </Item>
                <Item className={s.footer__item}>
                  <a href="#">Предложить помещение</a>
                </Item>
              </List>
              <List className={s.footer__list}>
                <Item className={s.footer__item}>
                  <a href="#">Это интересно</a>
                </Item>
                <Item className={s.footer__item}>
                  <a href="#">Экскурсии и мастер-классы</a>
                </Item>
                <Item className={s.footer__item}>
                  <a href="#">Корпоративные заказы</a>
                </Item>
              </List>
            </div>
            <div className={s.footer__contacts}>
              <a href="https://clck.ru/3DLRvG" target="_blank">
                <img src={goggleBtn} className={s.footer__app_btn} />
              </a>
              <a href="https://clck.ru/3DLRu4" target="_blank">
                <img src={appleBtn} className={s.footer__app_btn} />
              </a>
              <p className={s.footer__tel}>
                <a href="tel:+78003020060">8-800-302-00-60</a>
              </p>
              <p className={s.footer__item}>Звонок бесплатный</p>
              <p className={s.footer__mail}>
                <a href="mailto:feedback@dodopizza.com">
                  feedback@dodopizza.com  
                </a>
              </p>
            </div>
          </div>
          <div className={s.footer__income_info}>
            <div className={s.footer__income_detailsLeft}>
              <h3 className={s.footer__income_title}>1 396 362 874 ₽</h3>
              <p>
                Выручка российской сети в этом месяце. В прошлом — 2 460 305 416
                ₽
              </p>
            </div>
            <div className={s.footer__income_detailsRight}>
              <h3 className={s.footer__income_title}>688 пиццерий</h3>
              <p>в 14 странах, включая Китай, США и Великобританию</p>
            </div>
          </div>
          <div className={s.footer__bottom}>
            <div className={s.footer__bottom_logo}>
              <img src={greyLogo}></img>
              <p>© 2021</p>
            </div>
            <div className={s.footer__bottom_text}>
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
            <div className={s.footer__bottom_links}>
              <a
                href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2Fdodopizza%2F%3Flocale%3Dru_RU"
                target="_blank"
              >
                <img src={fb} />
              </a>
              <a href="https://www.instagram.com/dodopizza/" target="_blank">
                <img src={inst} />
              </a>
              <a href="https://ok.ru/yourdodopizza" target="_blank">
                <img src={ok} />
              </a>
              <a href="https://vk.com/dodo" target="_blank">
                <img src={vk} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCkPTVsNw2R5lwQ_VxF6Wuow"
                target="_blank"
              >
                <img src={yt} />
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};
