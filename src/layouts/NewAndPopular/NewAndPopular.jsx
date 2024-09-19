import s from "./NewAndPopular.module.scss";

import { Container } from "../Container/Container";
import { PopularCard } from "../../components/PopularCard/PopularCard";

export const NewAndPopular = ({ popularSection, className }) => {
  return (
    <>
      <section className={className}>
        <div className={s.popular__wrapper}>
          {popularSection?.map((el) => (
            <PopularCard key={el._id} el={el} img={el.imageUrl}></PopularCard>
          ))}
        </div>
      </section>
    </>
  );
};
