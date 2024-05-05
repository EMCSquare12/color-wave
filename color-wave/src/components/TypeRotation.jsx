import { useState, useEffect, useRef } from "react";
import selectionList from "./selectionList";
import { GrRadialSelected } from "react-icons/gr";
import { TbAngle } from "react-icons/tb";

const TypeRotation = ({ callBackType, callbackRotation, type, rotation }) => {
  const [rotationList, setRotationList] = useState([]);
  const [toggleList, setToggleList] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const dropdownRef = useRef(null);
  const rotationRef = useRef(null);

  const handleType = (value) => {
    callBackType(value);
    const typeList =
      selectionList[value === "linear" ? "linearList" : "radialList"];
    const typeLength = typeList.length;
    const randomType = Math.floor(Math.random() * typeLength);
    callbackRotation(typeList[randomType]);
    setSelectedIndex(-1);
    setRotationList(typeList);
  };

  useEffect(() => {
    callBackType("linear");
    callbackRotation(selectionList.linearList[8]);
  }, []);

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

  useEffect(() => {
    const handleArrow = (event, direction) => {
      const selectedListLength =
        selectionList[type === "linear" ? "linearList" : "radialList"];
      if (toggleList && rotationRef.current) {
        if (
          (direction === "down" && event.key === "ArrowDown") ||
          (direction === "up" && event.key === "ArrowUp")
        ) {
          const newIndex =
            direction === "down"
              ? Math.min(
                  Math.max(0, selectedIndex + 1),
                  selectedListLength.length - 1
                )
              : Math.min(
                  Math.max(0, selectedIndex - 1),
                  selectedListLength.length - 1
                );
          setSelectedIndex(newIndex);
          callbackRotation(selectedListLength[newIndex]);
        }
      }
    };

    const handleKeyDown = (event) => handleArrow(event, "down");
    const handleKeyUp = (event) => handleArrow(event, "up");

    console.log(selectedIndex);

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keydown", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keydown", handleKeyUp);
    };
  }, [selectedIndex, toggleList, rotation]);

  useEffect(() => {
    const handleKeyEnter = (event) => {
      if (toggleList === true && rotationRef.current) {
        if (event.key === "Enter") {
          setToggleList(false);
        }
      } else if (rotationRef.current.contains(event.target)) {
        setToggleList(true);
      }
    };

    document.addEventListener("keydown", handleKeyEnter);
    return () => {
      document.removeEventListener("keydown", handleKeyEnter);
    };
  }, [toggleList]);

  return (
    <div
      ref={dropdownRef}
      className="flex flex-row w-full h-auto gap-4 md:gap-8"
    >
      <div className="flex flex-row w-[50%] h-fit">
        <button
          onClick={() => handleType("linear")}
          className={`w-[50%] md:h-12 border-gray-300 outline-none h-10 flex items-center justify-center gap-2 rounded-l border border-r-transparent font-semibold hover:shadow font-poppins text-sm md:text-base ${
            type === "linear"
              ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
              : "text-gray-500 hover:bg-gray-100 "
          }`}
        >
          <TbAngle />
          Linear
        </button>
        <button
          onClick={() => handleType("radial")}
          className={`w-[50%] border-gray-300 md:h-12 outline-none h-10 rounded-r justify-center gap-2 flex items-center border font-semibold  hover:shadow font-poppins text-sm md:text-base ${
            type === "radial"
              ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
              : "text-gray-500 hover:bg-gray-100  "
          }`}
        >
          <GrRadialSelected />
          Radial
        </button>
      </div>
      <div className="flex flex-row w-[50%] h-fit relative">
        <input
          ref={rotationRef}
          onClick={() => {
            setRotationList(
              selectionList[type === "linear" ? "linearList" : "radialList"]
            ),
              setToggleList(!toggleList);
          }}
          onChange={(e) => {
            callbackRotation(e.target.value), setToggleList(true);
          }}
          value={rotation}
          type="text"
          className="z-20 w-full h-10 px-6 text-sm text-gray-500 border border-gray-300 rounded outline-none md:px-8 md:h-12 focus:ring-2 hover:shadow font-poppins md:text-base"
        />
        {toggleList && (
          <ul className=" gap-2 flex border-gray-300 z-10 flex-col overflow-y-scroll max-h-[300px] absolute top-0 w-full h-auto p-4 mt-10 bg-white border rounded shadow md:mt-12">
            {rotationList.map((item, index) => (
              <li
                onDoubleClick={() => setToggleList(false)}
                key={index}
                onClick={() => {
                  callbackRotation(item), setSelectedIndex(index);
                }}
                className={`flex items-center h-10 p-2 text-sm rounded md:h-12 hover:text-white  md:p-4 font-font-poppins md:text-base ${
                  rotation === item
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
  );
};
export default TypeRotation;
