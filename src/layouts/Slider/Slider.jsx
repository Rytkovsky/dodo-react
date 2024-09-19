import s from "./Slider.module.scss";
import slider1 from "../../assets/imgs/slider/slider1.webp";
import { Container } from "../Container/Container";

export const Slider = () => {
  return (
    <>
      <img className={s.slider} src={slider1}></img>
    </>
  );
};
