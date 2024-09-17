import { useState } from "react";
import { Section } from "../Section/Section";
import s from "./Main.module.scss";
import { useEffect } from "react";
import { NewAndPopular } from "../NewAndPopular/NewAndPopular";

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

  console.log(popularSection);

  return (
    <>
      <NewAndPopular popularSection={popularSection}></NewAndPopular>
      <Section title="Пицца"></Section>
      <Section title="Комбо"></Section>
      <Section title="Закуски"></Section>
      <Section title="Десерты"></Section>
      <Section title="Напитки"></Section>
    </>
  );
};
