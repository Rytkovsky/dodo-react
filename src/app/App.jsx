import "./styles/global.css";
import { Header } from "../layouts/Header/Header";
import { Main } from "../layouts/Main/Main";
import { Footer } from "../layouts/Footer/Footer";
import { Basket } from "../pages/Basket/Basket";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <Basket />
    </>
  );
}

export default App;
