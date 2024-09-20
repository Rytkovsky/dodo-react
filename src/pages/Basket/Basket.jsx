import { useEffect, useState } from "react";
import { BasketSection } from "../../layouts/BasketSection/BasketSection";
import s from "./Basket.module.scss";
import { BasketLayout } from "../../layouts/BasketLayout/BasketLayout";

export const Basket = () => {
  const [popularSection, setPopularSection] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products/popular")
      .then((res) => res.json())
      .then((res) => setPopularSection(res));
  }, []);

  return (
    <>
      <BasketLayout>
        <BasketSection popularSection={popularSection} />
      </BasketLayout>
    </>
  );
};
