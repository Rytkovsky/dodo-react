import s from "./Card.module.scss";
import ChickenBlueCheese from "../../../public/images/chicken-blue-cheese.webp";
import { Button } from "../../ui/Button/Button";

export const Card = () => {
  return (
    <>
      <article className={s.card}>
        <div className={s.card__wrapper}>
          <img
            src={ChickenBlueCheese}
            alt="card chicken blue cheese"
            className={s.card__img}
          />
        </div>
        <div className={s.card__text_block}>
          <h3 className={s.card__title}>Цыпленок блю чиз</h3>
          <p className={s.card__structure}>
            Цыпленок, сыр блю чиз, томаты, моцарелла, соус альфредо
          </p>
          <div className={s.card__order}>
            <p className={s.card__price}>от 445 ₽</p>
            <Button>Собрать</Button>
          </div>
        </div>
      </article>
    </>
  );
};
