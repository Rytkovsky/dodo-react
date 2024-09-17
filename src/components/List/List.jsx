import s from "./List.module.scss";

export const List = ({ children,className }) => {
  return (
    <>
      <ul className={className}>{children}</ul>
    </>
  );
};
