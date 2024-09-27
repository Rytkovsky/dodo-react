import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./app/styles/global.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/routes";
import { BasketProvider } from "./providers/BasketProvider/BasketProvider";

import { ModalProvider } from "./providers/ModalProvider/ModalProvider";
import { BasketFinal } from "./pages/BasketFinal/BasketFinal";
import { WindowWidthProvider } from "./providers/WindowWidthContext/WindowWidthContext";

createRoot(document.getElementById("root")).render(
  <WindowWidthProvider>
    <ModalProvider>
      <BasketProvider>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </BasketProvider>
    </ModalProvider>
  </WindowWidthProvider>
);
