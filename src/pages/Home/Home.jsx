import { useState } from "react";
import { Footer } from "../../layouts/Footer/Footer";
import { Header } from "../../layouts/Header/Header";
import { Main } from "../../layouts/Main/Main";
import s from "./Home.module.scss";


export const Home = () => {


  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};
