import s from "./AddRemoveBtn.module.scss";
import minus from "../../assets/svg/minus.svg";
import plus from "../../assets/svg/plus.svg";

export const AddRemoveBtn = () => {
  return (
    <>
      <div className={s.btn}>
        <button className={s.minus}>
          <img src={minus} />
        </button>
        <span>1</span>
        <button className={s.plus}>
          <img src={plus} />
        </button>
      </div>
    </>
  );
};
