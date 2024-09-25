import s from "./AddRemoveBtn.module.scss";
import minus from "../../assets/svg/minus.svg";
import plus from "../../assets/svg/plus.svg";
import { useContext } from "react";
import { basketContext } from "../../providers/BasketProvider/BasketProvider";

export const AddRemoveBtn = ({ el }) => {
  
  const { addAmount, decreaseAmount } = useContext(basketContext);
  return (
    <>
      <div className={s.btn}>
        <button onClick={() => decreaseAmount(el)} className={s.minus}>
          <img src={minus} />
        </button>
        <span>{el.quantity}</span>
        <button onClick={() => addAmount(el)}>
          <img src={plus} />
        </button>
      </div>
    </>
  );
};
