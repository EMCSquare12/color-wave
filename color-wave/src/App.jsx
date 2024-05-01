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
      <div className="relative md:p-10 p-4 md:grid md:grid-cols-2 md:gap-10 gap-4 flex flex-col  h-auto w-full">
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
