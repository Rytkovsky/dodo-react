import s from "./NewAndPopular.module.scss";

import { Container } from "../Container/Container";
import { PopularCard } from "../../components/PopularCard/PopularCard";
import { useContext } from "react";
import { basketContext } from "../../providers/BasketProvider/BasketProvider";

export const NewAndPopular = ({ popularSection, className }) => {
  const { addToBasket } = useContext(basketContext);
  return (
    <>
      <section className={className}>
        <div className={s.popular__wrapper}>
          {popularSection?.map((el) => (
            <PopularCard
              onClick={() => addToBasket(el)}
              key={el._id}
              el={el}
              img={el.imageUrl}
            ></PopularCard>
          ))}
        </div>
      </section>
    </>
  );
};
