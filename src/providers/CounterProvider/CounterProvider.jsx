import { createContext, useEffect, useState } from "react";
import s from "./CounterProvider.module.scss";

export const counterContext = createContext(null);

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(1);

  const counterData = {
    count,
    setCount,
  };
  return (
    <>
      <counterContext.Provider value={counterData}>
        {children}
      </counterContext.Provider>
    </>
  );
};
