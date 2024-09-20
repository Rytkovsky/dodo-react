import { BasketFooter } from "../BasketFooter/BasketFooter";
import { BasketHeader } from "../BasketHeader/BasketHeader";
import s from "./BasketLayout.module.scss";

export const BasketLayout = ({ children }) => {
  return (
    <>
      <BasketHeader />
      {children}
      <BasketFooter />
    </>
  );
};
