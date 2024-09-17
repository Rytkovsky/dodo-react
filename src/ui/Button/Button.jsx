import s from "./Button.module.scss";

export const Button = ({ children, onClick }) => {
  return (
    <>
      <button onClick={onClick} className={s.button}>
        {children}
      </button>
    </>
  );
};
