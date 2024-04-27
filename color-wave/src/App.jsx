import Display from "./components/Display";
import SelectionPallet from "./components/SelectionPallet";

function App() {
  return (
    <>
      <div className="md:p-10 p-4 md:grid md:grid-cols-2 md:gap-10 gap-4 flex flex-col  h-auto w-full">
        <Display />
        <SelectionPallet />
      </div>
    </>
  );
}

export default App;
