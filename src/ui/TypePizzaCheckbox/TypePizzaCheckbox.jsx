import s from "./TypePizzaCheckbox.module.scss";

export const TypePizzaCheckbox = () => {
  return (
    <>
      <div className={s.type__wrapper}>
        <input type="checkbox" className={s.type__switcher} />
        <span>Тонкая</span>
      
      </div>
    </>
  );
};

{/* <nav className={s.product__types_nav}>
<ul className={s.product__types}>
  <li className={s.product__type}>Традиционное</li>
  <li className={s.product__type}>Тонкое</li>
</ul>
</nav> */}