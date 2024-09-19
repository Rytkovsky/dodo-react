import { Card } from "../../components/Card/Card";
import { Container } from "../Container/Container";
import s from "./Section.module.scss";

export const Section = ({
  title,
  productArray,

}) => {
  return (
    <>
      <section className={s.cards}>
        <h2 className={s.cards__title}>{title}</h2>
        <div className={s.cards__wrapper}>
          {productArray.map((el) => (
            <Card
              key={el._id}
              el={el}
              img={el.imageUrl}
              collect={el.collect}
              title={title}

            ></Card>
          ))}
        </div>
      </section>
    </>
  );
};
