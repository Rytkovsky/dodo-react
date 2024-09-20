import s from "./Logo.module.scss";
import logoBird from "../../assets/svg/logo__dodo__bird.svg";

export const Logo = ({ className }) => {
  return (
    <>
      <img className={className} src={logoBird} alt="logo" />
    </>
  );
};
