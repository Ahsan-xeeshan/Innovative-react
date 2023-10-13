import "./App.css";
import Banner from "./Components/Banner/Banner";
import Choose from "./Components/Choose/Choose";
import Copywright from "./Components/Copywright/Copywright";
import Counter from "./Components/Counter/Counter";
import Footer from "./Components/Footer/Footer";
import Impact from "./Components/Impact/Impact";
import Navbar from "./Components/Navbar/Navbar";
import Price from "./Components/Price/Price";
import Review from "./Components/Review/Review";
import Service from "./Components/Service/Service";
import Suggession from "./Components/Suggession/Suggession";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Counter />
      <Choose />
      <Service />
      <Impact />
      <Price />
      <Review />
      <Suggession />
      <Footer />
      <Copywright />
    </>
  );
}

export default App;
