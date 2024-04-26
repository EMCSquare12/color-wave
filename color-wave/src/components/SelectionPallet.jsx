import { useEffect, useState } from "react";
import selectionList from "./selectionList";

const SelectionPallet = () => {
  const [type, setType] = useState("");
  const [list, setList] = useState("");

  useEffect(() => {
    setType("linear");
  }, []);
  const handleType = (value) => {
    setType(value);
  };

  const handleList = (value) => {
    setList(value);
  };
  const handleListChange = (value) => {
    setList(value);
  };

  return (
    <div className="md:w-[50%] h-auto md:h-[50%] w-full md:gap-8 gap-4 rounded-md shadow border md:p-8 p-4 flex flex-row">
      <div className="flex flex-row w-[50%] h-fit">
        <button
          onClick={() => handleType("linear")}
          className={`w-[50%] md:h-12 h-10 rounded-l border border-r-transparent hover:shadow font-font-poppins text-sm md:text-base ${
            type === "linear"
              ? "bg-blue-600 text-white border-blue-600"
              : "text-gray-500 hover:bg-gray-100 "
          }`}
        >
          Linear
        </button>
        <button
          onClick={() => handleType("radial")}
          className={`w-[50%] md:h-12 h-10 rounded-r border  hover:shadow font-font-poppins text-sm md:text-base ${
            type === "radial"
              ? "bg-blue-600 text-white border-blue-600"
              : "text-gray-500 hover:bg-gray-100  "
          }`}
        >
          Radial
        </button>
      </div>
      <div className="flex flex-row w-[50%] h-fit relative">
        <input
          onChange={(e) => handleListChange(e.target.value)}
          value={list}
          type="text"
          className="z-10 w-full h-10 px-6 text-sm text-gray-500 border rounded outline-none md:h-12 focus:ring-2 hover:shadow font-font-poppins md:text-base"
        />
        <ul className=" overflow-y-scroll max-h-[300px] absolute top-0 w-full h-auto p-4 mt-10 bg-white border rounded shadow md:mt-12">
          {selectionList[type === "linear" ? "linearList" : "radialList"].map(
            (item, index) => (
              <li
                key={index}
                onClick={() => handleList(item)}
                className={`flex items-center h-10 p-2 text-sm  rounded md:h-12 hover:text-white  md:p-4 font-font-poppins md:text-base ${
                  list === item
                    ? "bg-blue-600 text-white"
                    : "hover:bg-blue-300 bg-white text-gray-500"
                }`}
              >
                {item}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};
export default SelectionPallet;
