import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./app/styles/global.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/routes";
import { BasketProvider } from "./providers/BasketProvider/BasketProvider";

createRoot(document.getElementById("root")).render(
  <BasketProvider>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </BasketProvider>
);
