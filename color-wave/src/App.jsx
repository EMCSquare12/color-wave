import { useState, useEffect } from "react";
import Display from "./components/Display";
import SelectionPallet from "./components/SelectionPallet";
import GradientModal from "./components/GradientModal";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";

function App() {
  const [bgGradient, setBgGradient] = useState("");
  const [bgFirstColor, setBgFirstColor] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    if (modalIsOpen === true) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [modalIsOpen]);

  return (
    <div className="bg-gray-50">
      {modalIsOpen && (
        <GradientModal
          gradientModal={bgGradient}
          isOpen={() => setModalIsOpen(false)}
        />
      )}
      <Header />
      <Hero />
      <div
        className={`relative flex flex-col w-full md:full h-auto gap-4 my-12 md:px-20 px-4 md:grid md:grid-cols-2 md:gap-10`}
      >
        <Display
          gradient={bgGradient}
          bgColor={bgFirstColor}
          isOpen={() => setModalIsOpen(true)}
        />
        <SelectionPallet
          callbackGradient={(value) => setBgGradient(value)}
          callbackFirstColor={(value) => setBgFirstColor(value)}
        />
      </div>
      <hr />
      <About />
      <Footer />
    </div>
  );
}

export default App;
