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
  const { basket } = useContext(basketContext);

  return (
    <>
      <section className={s.basket}>
        <ContainerBasket>
          <h2 className={s.basket__title}>Корзина</h2>
          <BasketList>
            {basket.map((el) => (
              <BasketItem el={el} key={el._id} img={el.imageUrl} />
            ))}
          </BasketList>
          <h3 className={s.basket__subTitle}>Добавить к заказу?</h3>
          <NewAndPopular
            className={s.basket__popular}
            popularSection={popularSection}
          />
          <h3 className={s.basket__price}>
            Сумма заказа:
            <span className={s.basket__totalPrice}>
              {" "}
              {basket.reduce((acc, el) => acc + el.price, 0)}₽
            </span>
          </h3>
          <div className={s.basket__btns}>
            <Link to={"/"}>
              <Button color="gray" size="semiLarge" text="black">
                {`<`} Вернуться в меню{" "}
              </Button>
            </Link>
            <Button color="orange" size="semiLarge">
              Оформить заказ {`>`}
            </Button>
          </div>
        </ContainerBasket>
      </section>
    </>
  );
};
