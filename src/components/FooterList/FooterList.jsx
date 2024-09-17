import s from "./List.module.scss";

export const FooterList = () => {
  return (
    <>
      <ul className={s.list}>
        <li className={s.item}>
          <a href="#">Додо Пицца</a>
        </li>
        <li className={s.item}>
          <a href="#">О нас</a>
        </li>
        <li className={s.item}>
          <a href="#">Додо Книга</a>
        </li>
        <li className={s.item}>
          <a href="#">Блог "Сила Ума"</a>
        </li>
        <li className={s.item}>
          <a href="#">Додо ИС</a>
        </li>
      </ul>
      <ul className={s.list}>
        <li className={s.item}>
          <a href="#">Работа</a>
        </li>
        <li className={s.item}>
          <a href="#">В пиццерии</a>
        </li>
        <li className={s.item}>
          <a href="#">В контакт-центре</a>
        </li>
      </ul>
      <ul className={s.list}>
        <li className={s.item}>
          <a href="#">Партнерам</a>
        </li>
        <li className={s.item}>
          <a href="#">Франшиза</a>
        </li>
        <li className={s.item}>
          <a href="#">Инвестиции</a>
        </li>
        <li className={s.item}>
          <a href="#">Поставщикам</a>
        </li>
        <li className={s.item}>
          <a href="#">Предложить помещение</a>
        </li>
      </ul>
      <ul className={s.list}>
        <li className={s.item}>
          <a href="#">Это интересно</a>
        </li>
        <li className={s.item}>
          <a href="#">Экскурсии и мастер-классы</a>
        </li>
        <li className={s.item}>
          <a href="#">Корпоративные заказы</a>
        </li>
      </ul>
    </>
  );
};
