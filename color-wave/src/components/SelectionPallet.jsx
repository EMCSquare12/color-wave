import { useEffect, useState, useRef } from "react";
import selectionList from "./selectionList";
import { IoColorPalette } from "react-icons/io5";
import ColorPosition from "./ColorPosition";
import { LuCircleSlash2 } from "react-icons/lu";

const SelectionPallet = () => {
  const [type, setType] = useState("");
  const [list, setList] = useState("");
  const [rotationList, setRotationList] = useState([]);
  const [toggleList, setToggleList] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setType("linear");
    setList(selectionList.linearList[8]);
  }, []);

  useEffect(() => {
    const filteredList = selectionList[
      type === "linear" ? "linearList" : "radialList"
    ].filter((item) => item.toLowerCase().includes(list.toLowerCase()));

    if (list.trim() !== undefined) {
      setRotationList(filteredList);
    } else {
      setRotationList(
        selectionList[type === "linear" ? "linearList" : "radialList"]
      );
    }
  }, [type, list]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setToggleList(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleType = (value) => {
    setType(value);
    const typeList =
      selectionList[value === "linear" ? "linearList" : "radialList"];
    const typeLength = typeList.length;
    const randomType = Math.floor(Math.random() * typeLength);
    setList(typeList[randomType]);
    setToggleList(false);
  };

  const handleList = (value) => {
    setList(value);
    setToggleList(false);
  };
  const handleListChange = (value) => {
    setList(value);
    setToggleList(true);
  };

  return (
    <div
      ref={dropdownRef}
      className="md:w-[50%] h-auto  w-full md:gap-8 gap-4 rounded-md shadow border md:p-8 p-4 flex flex-col"
    >
      <div className=" h-auto w-full md:gap-8 gap-4  flex flex-row">
        <div className="flex flex-row w-[50%] h-fit">
          <button
            onClick={() => handleType("linear")}
            className={`w-[50%] md:h-12 h-10 rounded-l border border-r-transparent hover:shadow font-poppins text-sm md:text-base ${
              type === "linear"
                ? "bg-blue-600 text-white border-blue-600"
                : "text-gray-500 hover:bg-gray-100 "
            }`}
          >
            Linear
          </button>
          <button
            onClick={() => handleType("radial")}
            className={`w-[50%] md:h-12 h-10 rounded-r border  hover:shadow font-poppins text-sm md:text-base ${
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
            onClick={() => {
              setRotationList(
                selectionList[type === "linear" ? "linearList" : "radialList"]
              ),
                setToggleList(!toggleList);
            }}
            onChange={(e) => handleListChange(e.target.value)}
            value={list}
            type="text"
            className="z-10 w-full h-10 px-6 text-sm text-gray-500 border rounded outline-none md:px-8 md:h-12 focus:ring-2 hover:shadow font-poppins md:text-base"
          />
          {toggleList && (
            <ul className=" gap-2 flex flex-col overflow-y-scroll max-h-[300px] absolute top-0 w-full h-auto p-4 mt-10 bg-white border rounded shadow md:mt-12">
              {rotationList.map((item, index) => (
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
              ))}
            </ul>
          )}
        </div>
      </div>
      <hr />
      <div className=" h-auto w-full gap-4 flex flex-col">
        <div className="flex flex-row h-10 w-full bg-gray-200">
          <div className="w-[15%] h-full flex items-center justify-center ">
            <IoColorPalette className=" text-sm md:text-base text-gray-400" />
          </div>
          <div className="w-[35%] h-full flex items-center justify-center ">
            <h1 className="font-mont font-bold text-sm md:text-base text-gray-400">
              Color
            </h1>
          </div>
          <div className="w-[35%] h-full flex items-center justify-center ">
            <h1 className="font-mont font-bold text-sm md:text-base text-gray-400">
              Position
            </h1>
          </div>
          <div className="w-[15%] h-full"></div>
        </div>
        <div className="flex flex-row h-auto w-full shadow rounded">
          <div className="flex flex-row">
            <ColorPosition />
            <div className="w-[15%] h-auto flex items-center justify-center p-2">
              <LuCircleSlash2 className="text-gray-500 text-sm md:text-base cursor-not-allowed" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SelectionPallet;
