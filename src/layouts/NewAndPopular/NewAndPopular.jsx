import s from "./NewAndPopular.module.scss";

import { Container } from "../Container/Container";
import { PopularCard } from "../../components/PopularCard/PopularCard";
import { MobileNavigation } from "../../components/MobileNavigation";
import { useContext } from "react";
import { WindowWidthContext } from "../../providers/WindowWidthContext/WindowWidthContext";

export const NewAndPopular = ({ popularSection, className }) => {
  const width = useContext(WindowWidthContext);

  return (
    <section className={className}>
      {width > 650 ? (
        <>
          <div className={s.popular__wrapper}>
            {popularSection?.map((el) => (
              <PopularCard key={el._id} el={el} img={el.imageUrl}></PopularCard>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className={s.popular__wrapper}>
            {popularSection?.map((el) => (
              <PopularCard key={el._id} el={el} img={el.imageUrl}></PopularCard>
            ))}
          </div>
          <MobileNavigation />
        </>
      )}
    </section>
  );
};
