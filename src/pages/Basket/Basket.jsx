import { useEffect, useState } from "react";
import { BasketFooter } from "../../layouts/BasketFooter/BasketFooter";
import { BasketHeader } from "../../layouts/BasketHeader/BasketHeader";
import { BasketSection } from "../../layouts/BasketSection/BasketSection";
import s from "./Basket.module.scss";

export const Basket = () => {
  const [popularSection, setPopularSection] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products/popular")
      .then((res) => res.json())
      .then((res) => setPopularSection(res));
  }, []);

  return (
    <>
      <BasketHeader />
      <BasketSection popularSection={popularSection} />
      <BasketFooter />
    </>
  );
};
