import s from "./Item.module.scss";

export const Item = ({ children, className }) => {
  return (
    <>
      <li className={className}>{children}</li>
    </>
  );
};
