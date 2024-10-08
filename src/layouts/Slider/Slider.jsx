import s from "./Slider.module.scss";
import slider1 from "../../assets/imgs/slider/slider1.webp";
import slider2 from "../../assets/imgs/slider/slider2.webp";
import slider3 from "../../assets/imgs/slider/slider3.webp";
import mobSlider1 from "../../assets/imgs/slider/mobile__slider.webp";
import mobSlider2 from "../../assets/imgs/slider/mobile__slider2.webp";

import { Container } from "../Container/Container";
import { useContext } from "react";
import { WindowWidthContext } from "../../providers/WindowWidthContext/WindowWidthContext";

import { Swiper, SwiperSlide } from "swiper/react";

export const Slider = () => {
  const width = useContext(WindowWidthContext);
  return (
    <>
      <swiper-container
        space-between="10"
        slides-per-view="1"
        navigation="true"
        pagination="true"
        pagination-clickable="true"
      >
        <swiper-slide lazy="true">
          {" "}
          {width > 500 ? (
            <img src={slider1} className={s.slider} loading="lazy" />
          ) : (
            <img src={mobSlider1} className={s.slider} loading="lazy" />
          )}
        </swiper-slide>
        <swiper-slide lazy="true">
          {width > 500 ? (
            <img src={slider2} className={s.slider} loading="lazy" />
          ) : (
            <img src={mobSlider2} className={s.slider} loading="lazy" />
          )}
        </swiper-slide>
        <swiper-slide lazy="true">
          {width > 500 ? (
            <img src={slider3} className={s.slider} loading="lazy" />
          ) : (
            <img src={mobSlider1} className={s.slider} loading="lazy" />
          )}
        </swiper-slide>
      </swiper-container>
    </>
  );
};
