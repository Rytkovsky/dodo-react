import s from "./contactButton.module.scss";

export const contactButton = ({ children }) => {
  return (
    <>
      <button className={s.contactBtn}>{children}</button>
    </>
  );
};
