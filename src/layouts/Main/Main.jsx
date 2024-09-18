import { useState } from "react";
import { Section } from "../Section/Section";
import s from "./Main.module.scss";
import { useEffect } from "react";
import { NewAndPopular } from "../NewAndPopular/NewAndPopular";
import { Slider } from "../Slider";
import { ProductCard } from "../../components/ProductCard/ProductCard";
export const Main = () => {
  //ГЛАВНЫЕ СЕКЦИИ С ПРОДУКТАМИ
  const [mainSections, setMainSection] = useState([]);
  //СЕКЦИЯ С ПОПУЛЯРНЫМИ ПРОДУКТАМИ
  const [popularSection, setPopularSection] = useState([]);
  //ПОДГРУЖАЕМ С СЕРВЕРА МАССИВ СО ВСЕМИ ПРОДУКТАМИ
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((res) => setMainSection(res));
  }, []);
  //ПОДГРУЖАЕМ С СЕРВЕРА МАССИВ С ПОПУЛЯРНЫМИ ПРОДУКТАМИ
  useEffect(() => {
    fetch("http://localhost:5000/products/popular")
      .then((res) => res.json())
      .then((res) => setPopularSection(res));
  }, []);

  return (
    <>
      <Slider></Slider>
      <NewAndPopular popularSection={popularSection}></NewAndPopular>
      <Section mainSections={mainSections}></Section>
      {/* {mainSections.map((el) => (
        <Section mainSections={el.category === "pizza"}></Section>
      ))} */}
      {/* <Section mainSections={mainSections}></Section>
      <Section mainSections={mainSections}></Section>
      <Section mainSections={mainSections}></Section>
      <Section mainSections={mainSections}></Section> */}
      <ProductCard />
    </>
  );
};
