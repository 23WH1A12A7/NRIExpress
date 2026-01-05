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

      {/* WhatsApp Get a Quote Button */}
      <div style={{ textAlign: "center", margin: "60px 0" }}>
        <a
          href="https://wa.me/919876543210?text=Hello%20I%20would%20like%20to%20get%20a%20quote"
          target="_blank"
          rel="noreferrer"
          className="primary-btn"
          style={{ textDecoration: "none", display: "inline-block" }}
        >
          Get a Quote
        </a>
      </div>

      <Contact />
      <Footer />
    </>
  );
}

export default App;
