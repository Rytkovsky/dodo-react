import s from "./AddRemoveBtn.module.scss";
import minus from "../../assets/svg/minus.svg";
import plus from "../../assets/svg/plus.svg";
import { useEffect, useState } from "react";

export const AddRemoveBtn = ({ el }) => {
  const [count, setCount] = useState(el.quantity);
  el.quantity = count;

  return (
    <>
      <div className={s.btn}>
        <button
          onClick={() => setCount(el.quantity === 1 ? count : count - 1)}
          className={s.minus}
        >
          <img src={minus} />
        </button>
        <span>{el.quantity}</span>
        <button onClick={() => setCount(el.quantity + 1)} className={s.plus}>
          <img src={plus} />
        </button>
      </div>
    </>
  );
};
