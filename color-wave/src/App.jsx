import { useState, useEffect } from "react";
import Display from "./components/Display";
import SelectionPallet from "./components/SelectionPallet";
import GradientModal from "./components/GradientModal";
import Hero from "./components/Hero";

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
    <>
      <Hero />
      <div className="flex items-center justify-center h-screen">
        <div
          className={`relative flex flex-col w-full h-auto gap-4 py-4 px-4 md:px-40 md:p-10 md:grid md:grid-cols-2 md:gap-10`}
        >
          {modalIsOpen && (
            <GradientModal
              gradientModal={bgGradient}
              isOpen={() => setModalIsOpen(false)}
            />
          )}
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
      </div>
    </>
  );
}

export default App;
