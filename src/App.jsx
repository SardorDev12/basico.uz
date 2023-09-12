import Header from "./Components/Header";
import Home from "./Components/Home";
import Qualities from "./Components/Qualities";
import Services from "./Components/Services";
import Faq from "./Components/FaqSection";
import Statistics from "./Components/Statistics";
import Portfolio from "./Components/Portfolio";
import Partners from "./Components/Partners";
import Footer from "./Components/Footer";
import Cta from "./Components/Cta";
import AboutUs from "./Components/AboutUs";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Services />
      <AboutUs />
      <Qualities />
      <Statistics />
      <Faq />
      <Portfolio />
      <Partners />
      <Footer />
      <Cta />
    </>
  );
}

export default App;
