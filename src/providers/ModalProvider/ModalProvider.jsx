import { createContext, useEffect, useState } from "react";
import s from "./ModalProvider.module.scss";

export const modalContext = createContext(null);

export const ModalProvider = ({ children }) => {
  const [isOpenModalNew, setIsOpenModalNew] = useState(false);

  useEffect(() => {
    window.addEventListener("click", () => {
      setIsOpenModalNew(false);
    });
  }, []);

  const modalData = {
    isOpenModalNew,
    setIsOpenModalNew,
  };
  return (
    <>
      <modalContext.Provider value={modalData}>
        {children}
      </modalContext.Provider>
    </>
  );
};
