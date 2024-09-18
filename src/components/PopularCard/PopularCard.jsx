import s from "./PopularCard.module.scss";

export const PopularCard = ({ el, img }) => {
  return (
    <>
      <article className={s.popular}>
        <button>
          <img className={s.popular__img} src={img}></img>
        </button>
        <div>
          <h3 className={s.popular__title}>{el.name}</h3>
          <p className={s.popular__text}>{el.price} ₽</p>
        </div>
      </article>
    </>
  );
};
