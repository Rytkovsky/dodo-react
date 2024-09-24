import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./app/styles/global.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/routes";
import { BasketProvider } from "./providers/BasketProvider/BasketProvider";

import { ModalProvider } from "./providers/ModalProvider/ModalProvider";

createRoot(document.getElementById("root")).render(
  <ModalProvider>

    <BasketProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </BasketProvider>

  </ModalProvider>

);
