import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import { Basket } from "../pages/Basket/Basket";
import { Home } from "../pages/Home/Home";
import { BasketForm } from "../pages/BasketForm/BasketForm";
import { BasketFinal } from "../pages/BasketFinal/BasketFinal";
import { CanceledOrder } from "../pages/CanceledOrder/CanceledOrder";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/basket",
    element: <Basket />,
  },
  {
    path: "/basketForm",
    element: <BasketForm />,
  },
  {
    path: "/basketFinal",
    element: <BasketFinal />,
  },
  {
    path: "/canceledOrder",
    element: <CanceledOrder />,
  },
]);
