import s from "./ContainerBasket.module.scss";

export const ContainerBasket = ({ children }) => {
  return (
    <>
      <div className={s.container}>{children}</div>
    </>
  );
};
