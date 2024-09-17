import s from "./NewAndPopular.module.scss";

import { Container } from "../Container/Container";
import { PopularCard } from "../../components/PopularCard/PopularCard";

export const NewAndPopular = ({ popularSection }) => {
  return (
    <>
      <section className={s.popular}>
        <Container>
          <h2 className={s.popular__title}>Новое и популярное</h2>
          <div className={s.popular__wrapper}>
            {popularSection.map((el) => (
              <PopularCard key={el._id} el={el} img={el.imageUrl}></PopularCard>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};
