import About from "./components/About/About";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import MainSection from "./components/MainSection/MainSection";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import Testimonial from "./components/Testimonial/Testimonial";

function App() {
  return (
    <>
    <Navbar />
    <MainSection />
    <About />
    <Skills />
    <Services />
    <Testimonial />
    <ContactUs />
    <Footer />
    </>
  );
}

export default App;
