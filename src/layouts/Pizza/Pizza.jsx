import { Card } from "../../components/Card/Card";
import { Container } from "../Container/Container";
// import s from "./Pizza.module.scss";

export const Pizza = () => {
  return (
    <>
      <section>
        <Container>
          <Card />
          <Card />
          <Card />
        </Container>
      </section>
    </>
  );
};
