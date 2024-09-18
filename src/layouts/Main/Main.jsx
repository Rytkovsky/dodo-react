import { useState } from "react";
import { Section } from "../Section/Section";
import s from "./Main.module.scss";
import { useEffect } from "react";
import { NewAndPopular } from "../NewAndPopular/NewAndPopular";
import { Slider } from "../Slider";

export const Main = () => {
  //ВСЕ ПРОДУКТЫ
  const [mainSections, setMainSection] = useState([]);
  //СЕКЦИЯ С ПОПУЛЯРНЫМИ ПРОДУКТАМИ
  const [popularSection, setPopularSection] = useState([]);
  //СЕКЦИЯ С ПИЦЦАМИ
  const [pizza, setPizza] = useState([]);
  //СЕКЦИЯ С КОМБО
  const [combo, setCombo] = useState([]);
  //СЕКЦИЯ С ЗАКУСКАМИ
  const [snack, setSnack] = useState([]);
  //СЕКЦИЯ С ДЕСЕРТАМИ
  const [dessert, setDessert] = useState([]);
  //СЕКЦИЯ С НАПИТКАМИ
  const [drink, setDrink] = useState([]);

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

  //ПОДГРУЖАЕМ С СЕРВЕРА МАССИВ С ПИЦЦАМИ
  useEffect(() => {
    fetch("http://localhost:5000/products/category/pizza")
      .then((res) => res.json())
      .then((res) => setPizza(res));
  }, []);

  //ПОДГРУЖАЕМ С СЕРВЕРА МАССИВ С КОМБО
  useEffect(() => {
    fetch("http://localhost:5000/products/category/combo")
      .then((res) => res.json())
      .then((res) => setCombo(res));
  }, []);

  //ПОДГРУЖАЕМ С СЕРВЕРА МАССИВ С ЗАКУСКАМИ
  useEffect(() => {
    fetch("http://localhost:5000/products/category/snack")
      .then((res) => res.json())
      .then((res) => setSnack(res));
  }, []);

  //ПОДГРУЖАЕМ С СЕРВЕРА МАССИВ С ДЕСЕРТАМИ
  useEffect(() => {
    fetch("http://localhost:5000/products/category/dessert")
      .then((res) => res.json())
      .then((res) => setDessert(res));
  }, []);

  //ПОДГРУЖАЕМ С СЕРВЕРА МАССИВ С НАПИТКАМИ
  useEffect(() => {
    fetch("http://localhost:5000/products/category/drink")
      .then((res) => res.json())
      .then((res) => setDrink(res));
  }, []);

  return (
    <>
      <Slider></Slider>
      <NewAndPopular popularSection={popularSection}></NewAndPopular>

      <Section array={pizza}>Пицца</Section>

      <Section array={combo}>Комбо</Section>

      <Section array={snack}>Закуски</Section>

      <Section array={dessert}>Десерты</Section>

      <Section array={drink}>Напитки</Section>
    </>
  );
};
