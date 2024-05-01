import { useState } from "react";
import Display from "./components/Display";
import SelectionPallet from "./components/SelectionPallet";
import GradientModal from "./components/GradientModal";

function App() {
  const [bgGradient, setBgGradient] = useState("");
  const [bgFirstColor, setBgFirstColor] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <div
        className={`relative flex flex-col w-full h-auto gap-4 p-4 md:p-10 md:grid md:grid-cols-2 md:gap-10`}
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
          propsGradient={(value) => setBgGradient(value)}
          propsFirstColor={(value) => setBgFirstColor(value)}
        />
      </div>
    </>
  );
}

export default App;
