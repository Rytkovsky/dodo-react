import { BasketItem } from "../../components/BasketItem/BasketItem";
import { BasketList } from "../../components/BasketList/BasketList";
import { Button } from "../../ui/Button/Button";
import { ContainerBasket } from "../ContainerBasket/ContainerBasket";
import { NewAndPopular } from "../NewAndPopular/NewAndPopular";
import s from "./BasketSection.module.scss";

export const BasketSection = ({ popularSection }) => {
  return (
    <>
      <section className={s.basket}>
        <ContainerBasket>
          <h2 className={s.basket__title}>Корзина</h2>
          <BasketList>
            <BasketItem></BasketItem>
          </BasketList>
          <h3 className={s.basket__subTitle}>Добавить к заказу?</h3>
          <NewAndPopular
            className={s.basket__popular}
            popularSection={popularSection}
          />
          <h3 className={s.basket__price}>
            Сумма заказа:<span className={s.basket__totalPrice}> 4 792 ₽</span>
          </h3>
          <div className={s.basket__btns}>
            <Button color="gray" size="semiLarge" text="black">
              {`<`} Вернуться в меню{" "}
            </Button>
            <Button color="orange" size="semiLarge">
              Оформить заказ {`>`}
            </Button>
          </div>
        </ContainerBasket>
      </section>
    </>
  );
};
