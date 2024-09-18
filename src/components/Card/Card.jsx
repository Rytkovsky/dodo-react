import s from "./Card.module.scss";
import { Button } from "../../ui/Button/Button";

export const Card = ({ el, img }) => {
  return (
    <>
      <article className={s.card}>
        <div className={s.card__wrapper}>
          <img
            src={img}
            alt="card chicken blue cheese"
            className={s.card__img}
          />
        </div>
        <div className={s.card__text_block}>
          <h3 className={s.card__title}>{el.name}</h3>
          <p className={s.card__structure}>{el.description}</p>
          <div className={s.card__order}>
            <p className={s.card__price}>{el.price} ₽</p>
            <Button>Собрать</Button>
          </div>
        </div>
      </article>
    </>
  );
};
