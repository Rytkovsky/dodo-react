import { Link } from "react-router-dom";
import { BasketLayout } from "../../layouts/BasketLayout/BasketLayout";
import { ContainerBasket } from "../../layouts/ContainerBasket/ContainerBasket";
import s from "./BasketFinal.module.scss";
import { Button } from "../../ui/Button/Button";
import { useContext } from "react";
import { basketContext } from "../../providers/BasketProvider/BasketProvider";

export const BasketFinal = () => {
  const { changeToEmptyHeader, clearAllBasket } = useContext(basketContext);
  const addresses = [
    "Москва, Химки, д. 10",
    "Москва, Домашняя ул., д. 10",
    "Москва, Загородный пр-кт., д. 10",
    "Москва, Любимая ул., д. 10",
    "Москва, Задорожная ул., д. 10",
    "Москва, Энгельса ул., д. 10",
    "Москва, Ультрамариновый пр-кт.,  д. 10",
    "Москва, Казахская ул., д. 10",
    "Москва, Мировой пр-кт., д. 10",
  ];
  const randomAddress = Math.round(Math.random() * addresses.length);

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
            <p className={s.basketfinal__address}>{addresses[randomAddress]}</p>
            <div className={s.basketfinal__btns}>
              <Link to={"/canceledOrder"}>
                <Button
                  onClick={() => {
                    changeToEmptyHeader(), clearAllBasket();
                  }}
                  color="gray"
                  size="semiLarge"
                  text="black"
                >
                  Отменить Заказ{" "}
                </Button>
              </Link>

              <Link to={"/"}>
                <Button
                  onClick={clearAllBasket}
                  color="orange"
                  size="semiLarge"
                >
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
