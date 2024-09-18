import { Card } from "../../components/Card/Card";
import { Container } from "../Container/Container";
import s from "./Section.module.scss";

export const Section = ({ array,children }) => {
  return (
    <>
      <section className={s.cards}>
        <Container>
          <h2 className={s.cards__title}>{children}</h2>
          <div className={s.cards__wrapper}>
            {array.map((el) => (
              <Card key={el._id} el={el} img={el.imageUrl}></Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};
