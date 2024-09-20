import { useState } from "react";
import { Section } from "../Section/Section";
import s from "./Main.module.scss";
import { useEffect } from "react";
import { NewAndPopular } from "../NewAndPopular/NewAndPopular";
import { Slider } from "../Slider";
import { Container } from "../Container/Container";
import { ProductCard } from "../../components/ProductCard/ProductCard";
ProductCard
export const Main = () => {
  //ВСЕ ПРОДУКТЫ
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

  //МАССИВ - ДЛЯ ПЕРЕДАЧИ ВЕРНОГО МАССИВА В СЕКЦИЮ
  const productsArray = ["pizza", "combo", "snack", "dessert", "drink"];
  //МАССИВ - ДЛЯ ПЕРЕДАЧИ ЗАГОЛОВКА В СЕКЦИЮ
  const productsTitle = ["Пицца", "Комбо", "Закуски", "Десерты", "Напитки"];

  return (
    <>

      <Container>
        <Slider />
        <h2 className={s.popular__title}>Новое и популярное</h2>
        <NewAndPopular popularSection={popularSection} />
        {productsArray.map((item, i) => (
          <Section
            key={item}
            title={productsTitle[i]}
            productArray={mainSections.filter((el) => el.category === item)}
          />
        ))}
      </Container>
      <ProductCard/>

    </>
  );
};
