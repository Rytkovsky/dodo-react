import s from "./Slider.module.scss";
import slider1 from "../../assets/imgs/slider/slider1.webp";
import mobileSlider from "../../assets/imgs/slider/mobile__slider.webp";
import { Container } from "../Container/Container";
import { useContext } from "react";
import { WindowWidthContext } from "../../providers/WindowWidthContext/WindowWidthContext";

export const Slider = () => {
  const width = useContext(WindowWidthContext);
  return (
    <>
      {width > 320 ? (
        <>
          <img className={s.slider} src={slider1}></img>
        </>
      ) : (
        <>
          <img className={s.slider} src={mobileSlider}></img>
        </>
      )}
      
    </>
  );
};
