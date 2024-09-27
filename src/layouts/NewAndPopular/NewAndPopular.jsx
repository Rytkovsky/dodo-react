import s from "./NewAndPopular.module.scss";

import { Container } from "../Container/Container";
import { PopularCard } from "../../components/PopularCard/PopularCard";
import { MobileNavigation } from "../../components/MobileNavigation";
import { useContext } from "react";
import { WindowWidthContext } from "../../providers/WindowWidthContext/WindowWidthContext";
import { basketContext } from "../../providers/BasketProvider/BasketProvider";

export const NewAndPopular = ({ popularSection, className }) => {
  const width = useContext(WindowWidthContext);
  const { addToBasket } = useContext(basketContext);
  return (
    <section className={className}>
      {width > 650 ? (
        <>
          <div className={s.popular__wrapper}>
            {popularSection?.map((el) => (
              <PopularCard
                onClick={() => addToBasket(el)}
                key={el._id}
                el={el}
                img={el.imageUrl}
              ></PopularCard>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className={s.popular__wrapper}>
            {popularSection?.map((el) => (
              <PopularCard
                onClick={() => addToBasket(el)}
                key={el._id}
                el={el}
                img={el.imageUrl}
              ></PopularCard>
            ))}
          </div>
          <MobileNavigation />
        </>
      )}
    </section>
  );
};
