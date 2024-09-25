import s from "./BasketQueue.module.scss";
import activeEllipse from "../../assets/svg/active-ellipse.svg";
import disabledEllipse from "../../assets/svg/disabled-ellipse.svg";
import dottedLine from "../../assets/svg/Dotted-line.svg";
import fullLIne from "../../assets/svg/full line.svg";
import checkDone from "../../assets/svg/check.svg";
import { useContext } from "react";
import { basketContext } from "../../providers/BasketProvider/BasketProvider";

export const BasketQueue = () => {
  const { firstHeader } = useContext(basketContext);

  return (
    <>
      {firstHeader === 1 ? (
        <div className={s.basketHeader__orderMain}>
          <div className={s.basketHeader__order}>
            <span className={s.basketHeader__order_num1}>1</span>
            <div className={s.basketHeader__ellipse_wrapper}>
              <img className={s.basketHeader__ellipse} src={activeEllipse} />
              <p className={s.basketHeader__order_text1}>Корзина</p>
              <img className={s.basketHeader__dottedLine1} src={dottedLine} />
            </div>
          </div>
          <div className={s.basketHeader__order}>
            <span className={s.basketHeader__order_num2}>2</span>
            <div className={s.basketHeader__ellipse_wrapper}>
              <img className={s.basketHeader__ellipse} src={disabledEllipse} />
              <p className={s.basketHeader__order_text2}>Оформление заказа</p>
              <img className={s.basketHeader__dottedLine2} src={dottedLine} />
            </div>
          </div>
          <div className={s.basketHeader__order}>
            <span className={s.basketHeader__order_num3}>3</span>
            <div className={s.basketHeader__ellipse_wrapper}>
              <img className={s.basketHeader__ellipse} src={disabledEllipse} />
              <p className={s.basketHeader__order_text3}>Заказ принят</p>
            </div>
          </div>
        </div>
      ) : firstHeader === 2 ? (
        <div className={s.basketHeader__orderMain}>
          <div className={s.basketHeader__order}>
            <span className={s.basketHeader__order_num1}>
              <img src={checkDone} />
            </span>
            <div className={s.basketHeader__ellipse_wrapper}>
              <img className={s.basketHeader__ellipse} src={activeEllipse} />
              <p className={s.basketHeader__order_text1}>Корзина</p>
              <img className={s.basketHeader__dottedLine1} src={fullLIne} />
            </div>
          </div>
          <div className={s.basketHeader__order}>
            <span className={s.basketHeader__order_num22}>2</span>
            <div className={s.basketHeader__ellipse_wrapper}>
              <img className={s.basketHeader__ellipse} src={activeEllipse} />
              <p className={s.basketHeader__order_text22}>Оформление заказа</p>
              <img className={s.basketHeader__dottedLine2} src={dottedLine} />
            </div>
          </div>
          <div className={s.basketHeader__order}>
            <span className={s.basketHeader__order_num3}>3</span>
            <div className={s.basketHeader__ellipse_wrapper}>
              <img className={s.basketHeader__ellipse} src={disabledEllipse} />
              <p className={s.basketHeader__order_text3}>Заказ принят</p>
            </div>
          </div>
        </div>
      ) : firstHeader === 3 ? (
        <div className={s.basketHeader__orderMain}>
          <div className={s.basketHeader__order}>
            <span className={s.basketHeader__order_num1}>
              <img src={checkDone} />
            </span>
            <div className={s.basketHeader__ellipse_wrapper}>
              <img className={s.basketHeader__ellipse} src={activeEllipse} />
              <p className={s.basketHeader__order_text1}>Корзина</p>
              <img className={s.basketHeader__dottedLine1} src={fullLIne} />
            </div>
          </div>
          <div className={s.basketHeader__order}>
            <span className={s.basketHeader__order_num22}>
              <img src={checkDone} />
            </span>
            <div className={s.basketHeader__ellipse_wrapper}>
              <img className={s.basketHeader__ellipse} src={activeEllipse} />
              <p className={s.basketHeader__order_text22}>Оформление заказа</p>
              <img className={s.basketHeader__dottedLine2} src={fullLIne} />
            </div>
          </div>
          <div className={s.basketHeader__order}>
            <span className={s.basketHeader__order_num3}>
              <img src={checkDone} />
            </span>
            <div className={s.basketHeader__ellipse_wrapper}>
              <img className={s.basketHeader__ellipse} src={activeEllipse} />
              <p className={s.basketHeader__order_text22}>Заказ принят</p>
            </div>
          </div>
        </div>
      ) : firstHeader === 4 ? (
        <div></div>
      ) : (
        ""
      )}
    </>
  );
};
