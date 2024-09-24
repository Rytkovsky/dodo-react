import { Navigation } from "../../components/Navigation/Navigation";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { Container } from "../../layouts/Container/Container";
import { Footer } from "../../layouts/Footer/Footer";
import { Header } from "../../layouts/Header/Header";
import { Main } from "../../layouts/Main/Main";
import s from "./Home.module.scss";

export const Home = () => {
  return (
    <>
      <Header />

      <Navigation />

      <Main />
      <Footer />
    </>
  );
};
