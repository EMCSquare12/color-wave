import Display from "./components/Display";
import SelectionPallet from "./components/SelectionPallet";

function App() {
  return (
    <>
      <div className="md:p-10 p-4 flex flex-col md:gap-10 gap-4 md:items-center md:justify-center items-center md:flex-row h-screen w-screen">
        <Display />
        <SelectionPallet />
      </div>
    </>
  );
}

export default App;
