import { Card } from "../../components/Card/Card";
import { Container } from "../Container/Container";
import s from "./Section.module.scss";

export const Section = ({ mainSections }) => {
  return (
    <>
      <section className={s.cards}>
        <Container>
          <h2 className={s.cards__title}></h2>
          <div className={s.cards__wrapper}>
            {mainSections.map((el) => (
              <Card key={el._id} el={el} img={el.imageUrl}></Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};
