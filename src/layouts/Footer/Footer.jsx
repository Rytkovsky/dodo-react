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
import { FooterList } from "../../components/FooterList/FooterList";
import { useEffect } from "react";
import { useState } from "react";
import { PhoneNumber } from "../../ui/PhoneNumber/PhoneNumber";
import { LogoTitle } from "../../components/LogoTitle/LogoTitle";

export const Footer = () => {
  const [moneyData, getMoneyData] = useState({
    countries: 22,
    currency: "",
    currentMonthRevenue: 0,
    previousMonthRevenue: 0,
    workingPizzerias: 0,
  });

  useEffect(() => {
    fetch("http://localhost:5000/statistics")
      .then((res) => res.json())
      .then((res) => getMoneyData(res));
  }, []);

  const {
    countries,
    currency,
    currentMonthRevenue,
    previousMonthRevenue,
    workingPizzerias,
  } = moneyData;

  return (
    <>
      <footer className={s.footer}>
        <Container>
          <div className={s.footer__top_wrapper}>
            <div className={s.footer__main_info}>
              <FooterList />
            </div>
            <div className={s.footer__contacts}>
              <a href="https://clck.ru/3DLRvG" target="_blank">
                <img src={goggleBtn} className={s.footer__app_btn} />
              </a>
              <a href="https://clck.ru/3DLRu4" target="_blank">
                <img src={appleBtn} className={s.footer__app_btn} />
              </a>
              <PhoneNumber className={s.footer__tel} />
              <p className={s.footer__mail}>
                <a href="mailto:feedback@dodopizza.com">
                  feedback@dodopizza.com
                </a>
              </p>
            </div>
          </div>
          <div className={s.footer__income_info}>
            <div className={s.footer__income_detailsLeft}>
              <h3 className={s.footer__income_title}>
                {currentMonthRevenue.toLocaleString("ru")} {currency}
              </h3>
              <p>
                Выручка российской сети в этом месяце. В прошлом —{" "}
                {previousMonthRevenue.toLocaleString("ru")} {currency}
              </p>
            </div>
            <div className={s.footer__income_detailsRight}>
              <h3 className={s.footer__income_title}>
                {workingPizzerias.toLocaleString("ru")} пиццерий
              </h3>
              <p>в {countries} странах, включая Китай, США и Великобританию</p>
            </div>
          </div>
          <div className={s.footer__bottom}>
            <div className={s.footer__bottom_logo}>
              <LogoTitle className={s.footer__bottom_img} />
              <p>© 2024</p>
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
