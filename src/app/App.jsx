import "./styles/global.css";
import { Header } from "../layouts/Header/Header";
import { Pizza } from "../layouts/Pizza/Pizza";
import { Main } from "../layouts/Main/Main";

import { Footer } from "../layouts/Footer/Footer";
// import { ProductCard } from "../components/ProductCard/ProductCard";

function App() {
  return (
    <>
      <Header />
      <Pizza />
      {/* <ProductCard /> */}
      <Main />
      <Footer />
    </>
  );
}

export default App;
