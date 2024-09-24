import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./app/styles/global.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/routes";
import { BasketProvider } from "./providers/BasketProvider/BasketProvider";
import { BasketForm } from "./pages/BasketForm/BasketForm";
import { CounterProvider } from "./providers/CounterProvider/CounterProvider";

createRoot(document.getElementById("root")).render(
  <CounterProvider>
    <BasketProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </BasketProvider>
  </CounterProvider>
);
