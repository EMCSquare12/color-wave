import { useEffect, useState, useRef } from "react";
import selectionList from "./selectionList";
import { IoColorPalette } from "react-icons/io5";
import ColorPosition from "./ColorPosition";
import { LuCircleSlash2 } from "react-icons/lu";
import { AiOutlinePlus } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";

const SelectionPallet = ({ propsGradient, propsFirstColor }) => {
  const [type, setType] = useState("");
  const [rotation, setRotaion] = useState("");
  const [rotationList, setRotationList] = useState([]);
  const [toggleList, setToggleList] = useState(false);
  const dropdownRef = useRef(null);
  const [newColor, setNewColor] = useState([]);
  const [color, setColor] = useState({});
  const [position, setPosition] = useState({});

  const randomColor = () => {
    const randomInt = Math.floor(Math.random() * 16777216);
    const hexColor = "#" + randomInt.toString(16).padStart(6, "0");
    return hexColor;
  };

  useEffect(() => {
    setColor({ firstColor: randomColor(), secondColor: randomColor() });
    setPosition({ firstPosition: 0, secondPosition: 100 });
  }, []);
  useEffect(() => {
    const colorPosition0 = `${
      color.newColor0 !== undefined ? color.newColor0 : ""
    } ${
      position.newPosition0 !== undefined ? position.newPosition0 + "%," : ""
    }`;
    const colorPosition1 = `${
      color.newColor1 !== undefined ? color.newColor1 : ""
    } ${
      position.newPosition1 !== undefined ? position.newPosition1 + "%," : ""
    }`;
    const bgGradient = `${type}-gradient(${rotation}, ${color.firstColor} ${position.firstPosition}%, ${colorPosition0} ${colorPosition1}  ${color.secondColor} ${position.secondPosition}%)`;
    propsGradient(bgGradient);
    propsFirstColor(color.firstColor);
  }, [color, position, type, rotation]);

  useEffect(() => {
    setType("linear");
    setRotaion(selectionList.linearList[8]);
  }, []);

  useEffect(() => {
    const filteredList = selectionList[
      type === "linear" ? "linearList" : "radialList"
    ].filter((item) => item.toLowerCase().includes(rotation.toLowerCase()));

    setRotationList(
      rotation.trim() !== ""
        ? filteredList
        : selectionList[type === "linear" ? "linearList" : "radialList"]
    );
  }, [type, rotation]);

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
    setRotaion(typeList[randomType]);
    setToggleList(false);
  };

  const handleList = (value) => {
    setRotaion(value);
    setToggleList(false);
  };
  const handleListChange = (value) => {
    setRotaion(value);
    setToggleList(true);
  };

  const handleNewColor = () => {
    const addedNewColor = randomColor();
    const addedNewPosition = newColor.length === 0 ? 30 : 70;

    setNewColor([
      ...newColor,
      <ColorPosition color={addedNewColor} position={addedNewPosition} />,
    ]);
    setColor((prevState) => ({
      ...prevState,
      [`newColor${newColor.length}`]: addedNewColor,
    }));
    setPosition((prevState) => ({
      ...prevState,
      [`newPosition${newColor.length}`]: addedNewPosition,
    }));
    console.log(color);
  };

  const handleDelete = (index) => {
    const filteredNewColor = newColor.filter((_, id) => id !== index);

    setColor((prevColor) => {
      const updatedColor = { ...prevColor };
      delete updatedColor[`newColor${index}`];
      return updatedColor;
    });

    setPosition((prevPosition) => {
      const updatedPosition = { ...prevPosition };
      delete updatedPosition[`newPosition${index}`];
      return updatedPosition;
    });

    setNewColor(filteredNewColor);
  };

  const handleRandom = () => {
    const updatedColor = {};
    for (const key in color) {
      updatedColor[key] = randomColor();
    }
    console.log(updatedColor);
    setColor(updatedColor);
  };
  return (
    <div
      ref={dropdownRef}
      className="md:w-full h-full border-gray-300  w-full md:gap-8 gap-4 rounded-md shadow border md:p-8 p-4 flex flex-col"
    >
      <div className=" h-auto w-full md:gap-8 gap-4  flex flex-row">
        <div className="flex flex-row w-[50%] h-fit">
          <button
            onClick={() => handleType("linear")}
            className={`w-[50%] md:h-12 border-gray-300 h-10 rounded-l border border-r-transparent hover:shadow font-poppins text-sm md:text-base ${
              type === "linear"
                ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
                : "text-gray-500 hover:bg-gray-100 "
            }`}
          >
            Linear
          </button>
          <button
            onClick={() => handleType("radial")}
            className={`w-[50%] border-gray-300 md:h-12 h-10 rounded-r border  hover:shadow font-poppins text-sm md:text-base ${
              type === "radial"
                ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
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
            value={rotation}
            type="text"
            className="z-10 w-full border-gray-300 h-10 px-6 text-sm text-gray-500 border rounded outline-none md:px-8 md:h-12 focus:ring-2 hover:shadow font-poppins md:text-base"
          />
          {toggleList && (
            <ul className=" gap-2 flex border-gray-300 z-20 flex-col overflow-y-scroll max-h-[300px] absolute top-0 w-full h-auto p-4 mt-10 bg-white border rounded shadow md:mt-12">
              {rotationList.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleList(item)}
                  className={`flex items-center h-10 p-2 text-sm  rounded md:h-12 hover:text-white  md:p-4 font-font-poppins md:text-base ${
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
      <hr />
      <div className=" h-auto w-full gap-4 flex flex-col">
        <div className="flex flex-row border-gray-300 h-10 w-full bg-gray-200">
          <div className="w-[15%] h-full flex items-center justify-center ">
            <IoColorPalette className=" text-sm md:text-base text-gray-400" />
          </div>
          <div className="w-[45%] h-full flex items-center justify-center ">
            <h1 className="font-mont font-bold text-sm md:text-base text-gray-400">
              Color
            </h1>
          </div>
          <div className="w-[25%] h-full flex items-center justify-center ">
            <h1 className="font-mont font-bold text-sm md:text-base text-gray-400">
              Position
            </h1>
          </div>
          <div className="w-[15%] h-full"></div>
        </div>
        <div className="  flex flex-col h-auto w-full shadow rounded">
          <div className="flex flex-row">
            <ColorPosition
              color={color.firstColor}
              position={position.firstPosition}
            />
            <div className="w-[15%] h-auto flex items-center justify-center p-2">
              <LuCircleSlash2 className="text-gray-500 text-sm md:text-base cursor-not-allowed" />
            </div>
          </div>
          <div className="flex flex-row">
            <ColorPosition
              color={color.secondColor}
              position={position.secondPosition}
            />
            <div className="w-[15%] h-auto flex items-center justify-center p-2">
              <LuCircleSlash2 className="text-gray-500 text-sm md:text-base cursor-not-allowed" />
            </div>
          </div>
          {newColor.map((item, index) => (
            <div key={index} className="flex flex-row">
              <ColorPosition
                color={color[`newColor${index}`]}
                position={position[`newPosition${index}`]}
              />
              ,
              <div className="w-[15%] h-auto flex items-center justify-center p-2">
                <button
                  onClick={() => {
                    console.log("Clicked delete button for index:", index);
                    handleDelete(index);
                  }}
                >
                  <MdDeleteForever className="text-red-500 text-sm md:text-base  hover:text-red-600" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-end w-full md:-mt-6 -mt-2">
        <button
          disabled={newColor.length === 2}
          onClick={handleNewColor}
          className="w-[15%] flex items-center justify-center text-blue-500 hover:text-blue-600 font-poppins text-sm md:text-base"
        >
          <AiOutlinePlus /> Add
        </button>
      </div>
      <hr />
      <div className="flex justify-end items-center w-full gap-4 ">
        <button
          onClick={handleRandom}
          className="h-10 md:h-12 w-24 rounded bg-white border-blue-600 border text-blue-600 font-poppins text-sm md:text-base focus:ring-2 hover:text-blue-700 hover:border-blue-700 hover:shadow"
        >
          Random
        </button>
        <button className="h-10 md:h-12 w-24 rounded bg-blue-600 text-white font-poppins text-sm md:text-base hover:bg-blue-700 hover:shadow focus:ring-2">
          Download
        </button>
      </div>
    </div>
  );
};
export default SelectionPallet;
