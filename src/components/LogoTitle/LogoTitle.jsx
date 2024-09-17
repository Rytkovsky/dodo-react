import s from "./LogoTitle.module.scss";
import logoTitle from "../../assets/svg/logo__title.svg";

export const LogoTitle = ({ className }) => {
  return (
    <>
      <a href="#">
        <img className={className} src={logoTitle} alt="logo title" />
      </a>
    </>
  );
};
