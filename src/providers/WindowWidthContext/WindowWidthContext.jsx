import React, { createContext, useState, useEffect } from "react";

export const WindowWidthContext = createContext(null);

export const WindowWidthProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWidth);

    // Убирает обработчик во время размонтирования компонента
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <WindowWidthContext.Provider value={width}>
      {children}
    </WindowWidthContext.Provider>
  );
};
