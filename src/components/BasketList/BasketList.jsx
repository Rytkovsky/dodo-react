import s from "./BasketList.module.scss";

export const BasketList = ({ children, className }) => {
  return (
    <>
      <ul className={className}>{children}</ul>
    </>
  );
};
