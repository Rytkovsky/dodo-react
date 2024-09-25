import { Link } from "react-router-dom";
import { BasketLayout } from "../../layouts/BasketLayout/BasketLayout";
import { Container } from "../../layouts/Container/Container";
import s from "./BasketForm.module.scss";
import { Button } from "../../ui/Button/Button";
import { useContext } from "react";
import { basketContext } from "../../providers/BasketProvider/BasketProvider";
import { BasketList } from "../../components/BasketList/BasketList";
import { BasketFormItem } from "../../components/BasketFormItem/BasketFormItem";

export const BasketForm = () => {
  const { basket, changeToFirstHeader, changeToThirdHeader, totalSum } =
    useContext(basketContext);

  return (
    <>
      <BasketLayout>
        <section className={s.form}>
          <Container>
            <h2 className={s.form__title}>Заказ на доставку</h2>
            <div className={s.form__wrapper}>
              <form action="#" method="post">
                <div className={s.form__form}>
                  <p className={s.form__personData}>Имя</p>
                  <input className={s.form__input} type="text" required />
                </div>
                <div className={s.form__form}>
                  <p className={s.form__personData}>Номер телефона</p>
                  <input className={s.form__input} type="tel" required />
                </div>
                <div className={s.form__form}>
                  <p className={s.form__personData}>Куда доставить</p>
                  <input className={s.form__inputBig} type="text" required />
                </div>

                <div className={s.form__btns}>
                  <Link to={"/basket"}>
                    <Button
                      onClick={changeToFirstHeader}
                      color="gray"
                      size="semiLarge"
                      text="black"
                    >
                      {`<`} Вернуться в корзину{" "}
                    </Button>
                  </Link>

                  <Link to={"/basketFinal"}>
                    <Button onClick={changeToThirdHeader} color="orange" size="semiLarge">
                      Оформить заказ на {totalSum} ₽ {`>`}
                    </Button>
                  </Link>
                </div>
              </form>
              <BasketList className={s.form__totalProducts}>
                <p>Состав заказа</p>{" "}
                {basket.map((el) => (
                  <BasketFormItem key={el._id} el={el} />
                ))}
                <p className={s.form__totalAmount}>
                  Стоимость заказа: {totalSum} ₽
                </p>
              </BasketList>
            </div>
          </Container>
        </section>
      </BasketLayout>
    </>
  );
};
