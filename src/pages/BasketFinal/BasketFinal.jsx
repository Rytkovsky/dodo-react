import { Link } from "react-router-dom";
import { BasketLayout } from "../../layouts/BasketLayout/BasketLayout";
import { ContainerBasket } from "../../layouts/ContainerBasket/ContainerBasket";
import s from "./BasketFinal.module.scss";
import { Button } from "../../ui/Button/Button";
import { useContext } from "react";
import { basketContext } from "../../providers/BasketProvider/BasketProvider";

export const BasketFinal = () => {
  const { changeToEmptyHeader } = useContext(basketContext);

  return (
    <>
      <BasketLayout>
        <section className={s.basketfinal}>
          <ContainerBasket>
            <p className={s.basketfinal__number}>
              Заказ № {Math.round(Math.random() * 100)}
            </p>
            <div className={s.basketfinal__time}>
              <h2>Приняли</h2>
              <h2> ~ {Math.round(Math.random() * 60)} мин </h2>
            </div>
            <p className={s.basketfinal__address}>
              Доставим по адресу: Москва, ул. 1-я Машиностроения, д. 10
            </p>
            <div className={s.basketfinal__btns}>
              <Link to={"/canceledOrder"}>
                <Button
                  onClick={changeToEmptyHeader}
                  color="gray"
                  size="semiLarge"
                  text="black"
                >
                  Отменить Заказ{" "}
                </Button>
              </Link>

              <Link to={"/"}>
                <Button color="orange" size="semiLarge">
                  Вернуться в меню
                </Button>
              </Link>
            </div>
          </ContainerBasket>
        </section>
      </BasketLayout>
    </>
  );
};
