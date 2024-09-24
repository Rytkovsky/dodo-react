import { Navigation } from "../../components/Navigation/Navigation";
import { Footer } from "../../layouts/Footer/Footer";
import { Header } from "../../layouts/Header/Header";
import { Main } from "../../layouts/Main/Main";
import {Navigation} from "../../components/Navigation/Navigation"
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
