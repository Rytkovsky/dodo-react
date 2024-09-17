import "./styles/global.css";
import { Header } from "../layouts/Header/Header";
import { Pizza } from "../layouts/Pizza/Pizza";
import { Main } from "../layouts/Main/Main";

import { Footer } from "../layouts/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Pizza />
      <Main />
      <Footer />
    </>
  );
}

export default App;
