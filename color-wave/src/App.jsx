import { useState } from "react";
import Display from "./components/Display";
import SelectionPallet from "./components/SelectionPallet";

function App() {
  const [bgGradient, setBgGradient] = useState("");
  const [bgFirstColor, setBgFirstColor] = useState("");
  return (
    <>
      <div className="md:p-10 p-4 md:grid md:grid-cols-2 md:gap-10 gap-4 flex flex-col  h-auto w-full">
        <Display gradient={bgGradient} bgColor={bgFirstColor} />
        <SelectionPallet
          propsGradient={(value) => setBgGradient(value)}
          propsFirstColor={(value) => setBgFirstColor(value)}
        />
      </div>
    </>
  );
}

export default App;
