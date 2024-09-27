import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./app/styles/global.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/routes";
import { BasketProvider } from "./providers/BasketProvider/BasketProvider";
import { WindowWidthProvider } from "./providers/WindowWidthContext/WindowWidthContext";
import { register } from "swiper/element";
register();

createRoot(document.getElementById("root")).render(
  <WindowWidthProvider>
    <BasketProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </BasketProvider>
  </WindowWidthProvider>
);
