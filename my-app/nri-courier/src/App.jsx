import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Countries from "./components/Countries";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useScrollReveal from "./hooks/useScrollReveal";

function App() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Services />
      <Countries />
      <WhyChooseUs />

      <Contact />
      <Footer />
    </>
  );
}

export default App;
