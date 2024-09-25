import { Link } from "react-router-dom";
import { BasketLayout } from "../../layouts/BasketLayout/BasketLayout";
import { ContainerBasket } from "../../layouts/ContainerBasket/ContainerBasket";
import s from "./CanceledOrder.module.scss";
import { Button } from "../../ui/Button/Button";

export const CanceledOrder = () => {
  return (
    <>
      <BasketLayout>
        <section className={s.canceledOrder}>
          <ContainerBasket>
            <h2 className={s.canceledOrder__title} >Заказ Успешно отменен.</h2>
            <Link to={"/"}>
              <Button color="orange" size="semiLarge">
                Вернуться в меню
              </Button>
            </Link>
          </ContainerBasket>
        </section>
      </BasketLayout>
    </>
  );
};
