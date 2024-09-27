import { createPortal } from "react-dom";
// в пропсы пихаем расположение дива куда будем пихать портал (#portal)
export const Portal = ({
  children,
  container = document.getElementById("portal"),
}) => createPortal(children, container);
