import s from "./Card.module.scss";
import { Button } from "../../ui/Button/Button";

export const Card = ({ el, img, collect }) => {
  return (
    <>
      <article className={s.card}>
        <img src={img} alt="card chicken blue cheese" className={s.card__img} />
        <div className={s.card__wrapper}>
          <div className={s.card__textBlock}>
            <h3 className={s.card__title}>{el.name}</h3>
            <p className={s.card__structure}>{el.description}</p>
          </div>
          <div className={s.card__order}>
            <p className={s.card__price}>{el.price} ₽</p>
            {collect ? (
              <Button color="orange">Собрать</Button>
            ) : (
              <Button color="semiOrange" text="orangeText">
                Выбрать
              </Button>
            )}
          </div>
        </div>
      </article>
    </>
  );
};
