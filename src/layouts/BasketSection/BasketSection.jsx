import { Link } from "react-router-dom";
import { BasketItem } from "../../components/BasketItem/BasketItem";
import { BasketList } from "../../components/BasketList/BasketList";
import { Button } from "../../ui/Button/Button";
import { ContainerBasket } from "../ContainerBasket/ContainerBasket";
import { NewAndPopular } from "../NewAndPopular/NewAndPopular";
import s from "./BasketSection.module.scss";
import { useContext } from "react";
import { basketContext } from "../../providers/BasketProvider/BasketProvider";

export const BasketSection = ({ popularSection }) => {
  const { basket, totalSum, changeToFirstHeader, changeToSecondHeader } =
    useContext(basketContext);

  return (
    <>
      <section className={s.basket}>
        <ContainerBasket>
          <h2 className={s.basket__title}>Корзина</h2>

          {basket.length ? (
            <BasketList className={s.basket__list}>
              {basket.map((el) => (
                <BasketItem el={el} key={el._id} img={el.imageUrl} />
              ))}
            </BasketList>
          ) : (
            <h2 className={s.basket__title}>
              Тут пусто! Добавьте что-нибудь из меню.
            </h2>
          )}

          {basket.length ? (
            <div>
              <h3 className={s.basket__subTitle}>Добавить к заказу?</h3>

              <NewAndPopular
                className={s.basket__popular}
                popularSection={popularSection}
              />

              <h3 className={s.basket__price}>
                Сумма заказа:
                <span className={s.basket__totalPrice}> {totalSum} ₽</span>
              </h3>
            </div>
          ) : (
            ""
          )}

          <div className={s.basket__btns}>
            <Link to={"/"}>
              <Button color="gray" size="semiLarge" text="black">
                {`<`} Вернуться в меню{" "}
              </Button>
            </Link>

            {basket.length != 0 ? (
              <Link to={"/basketForm"}>
                <Button
                  onClick={changeToSecondHeader}
                  color="orange"
                  size="semiLarge"
                >
                  Оформить заказ {`>`}
                </Button>
              </Link>
            ) : (
              ""
            )}
          </div>
        </ContainerBasket>
      </section>
    </>
  );
};
