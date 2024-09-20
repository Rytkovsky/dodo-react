import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import { Basket } from "../pages/Basket/Basket";
import { Home } from "../pages/Home/Home";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/basket",
    element: <Basket />,
  },
]);
