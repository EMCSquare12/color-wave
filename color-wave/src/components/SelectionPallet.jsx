import { useEffect, useState } from "react";
import { IoColorPalette } from "react-icons/io5";
import ColorPosition from "./ColorPosition";
import { LuCircleSlash2 } from "react-icons/lu";
import { AiOutlinePlus } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import html2canvas from "html2canvas";
import TypeRotation from "./TypeRotation";

const randomColor = () => {
  const randomInt = Math.floor(Math.random() * 16777216);
  const hexColor = "#" + randomInt.toString(16).padStart(6, "0");
  return hexColor;
};
const SelectionPallet = ({ callbackGradient, callbackFirstColor }) => {
  const [type, setType] = useState("");
  const [rotation, setRotation] = useState("");
  const [newColor, setNewColor] = useState([]);
  const [gradient, setGradient] = useState("");
  const [color, setColor] = useState({
    firstColor: randomColor(),
    secondColor: randomColor(),
  });
  const [position, setPosition] = useState({
    firstPosition: 0,
    secondPosition: 100,
  });

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
    setGradient(bgGradient);
    callbackGradient(bgGradient);
    callbackFirstColor(color.firstColor);
  }, [color, position, type, rotation]);

  const handleNewColor = () => {
    const addedNewColor = randomColor();
    const addedNewPosition = newColor.length === 0 ? 30 : 70;
    const newIndex = newColor.length;

    setNewColor((prevNewColor) => [...prevNewColor, null]);

    setColor((prevColor) => ({
      ...prevColor,
      [`newColor${newIndex}`]: addedNewColor,
    }));

    setPosition((prevPosition) => ({
      ...prevPosition,
      [`newPosition${newIndex}`]: addedNewPosition,
    }));
    console.log(newColor);
  };

  console.log(newColor);
  const handleDelete = (index) => {
    const filteredNewColor = newColor.filter((_, id) => id !== index);
    const colorObj = Object.entries(color);
    const positionObj = Object.entries(position);
    const filteredColorEntries = colorObj.filter(([key], id) => {
      if (id < 2) {
        return true;
      } else {
        return id !== index + 2;
      }
    });
    const filteredPositionEntries = positionObj.filter(([key], id) => {
      if (id < 2) {
        return true;
      } else {
        return id !== index + 2;
      }
    });

    const newColorObj = Object.fromEntries(filteredColorEntries);
    const newPositionObj = Object.fromEntries(filteredPositionEntries);

    setColor(newColorObj);
    setPosition(newPositionObj);

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

  const handleCallbackColor = (key, value) => {
    setColor((prev) => ({
      ...prev,
      [key]: value,
    }));
    console.log(key, value);
  };
  const handleCallbackPosition = (key, value) => {
    setPosition((prev) => ({
      ...prev,
      [key]: value !== "" ? value : 0,
    }));
    console.log(key, value);
  };

  const downloadAsJPEG = () => {
    const element = {
      width: "1440px",
      height: "1104px",
      zIndex: "100",
      background: gradient,
      display: "flex",
      alignItems: "flex-end",
    };
    const footer = {
      height: "80px",
      width: "100%",
      background: "#ffffff",
      display: "flex",
      fontFamily: "Poppins, sans-serif",
      paddingLeft: "32px",
      justifyContent: "center",
      color: "#2563eb",
      fontSize: "32px",
      fontWeight: "bold",
    };

    const div = document.createElement("div");
    Object.assign(div.style, element);

    const footerDiv = document.createElement("div");
    Object.assign(footerDiv.style, footer);
    footerDiv.textContent = "Color Wave";
    div.appendChild(footerDiv);

    document.body.appendChild(div);

    html2canvas(div).then(function (canvas) {
      const imgData = canvas.toDataURL("image/jpeg");

      const a = document.createElement("a");
      a.href = imgData;
      a.download = "gradient.jpg";

      a.click();
      document.body.removeChild(div);
    });
  };

  return (
    <div className="flex flex-col w-full h-full gap-4 p-4 border border-gray-300 rounded-md shadow md:w-full md:gap-8 md:p-8">
      <TypeRotation
        callBackType={(value) => setType(value)}
        callbackRotation={(value) => setRotation(value)}
        type={type}
        rotation={rotation}
      />
      <hr />
      <div className="flex flex-col w-full h-auto gap-4 ">
        <div className="flex flex-row w-full h-10 bg-gray-200 border-gray-300">
          <div className="w-[15%] h-full flex items-center justify-center ">
            <IoColorPalette className="text-sm text-gray-400 md:text-base" />
          </div>
          <div className="w-[45%] h-full flex items-center justify-center ">
            <h1 className="text-sm font-bold text-gray-400 font-mont md:text-base">
              Color
            </h1>
          </div>
          <div className="w-[25%] h-full flex items-center justify-center ">
            <h1 className="text-sm font-bold text-gray-400 font-mont md:text-base">
              Position
            </h1>
          </div>
          <div className="w-[15%] h-full"></div>
        </div>
        <div className="flex flex-col w-full h-auto rounded shadow ">
          <div className="flex flex-row">
            <ColorPosition
              color={color.firstColor}
              position={position.firstPosition}
              callbackColor={(value) =>
                handleCallbackColor("firstColor", value)
              }
              callbackPosition={(value) =>
                handleCallbackPosition("firstPosition", value)
              }
              colorKey={"firstColor"}
              positionKey={"firstPosition"}
            />
            <div className="w-[15%] h-auto flex items-center justify-center p-2">
              <LuCircleSlash2 className="text-sm text-gray-500 cursor-not-allowed md:text-base" />
            </div>
          </div>
          <div className="flex flex-row">
            <ColorPosition
              color={color.secondColor}
              position={position.secondPosition}
              callbackColor={(value) =>
                handleCallbackColor("secondColor", value)
              }
              callbackPosition={(value) =>
                handleCallbackPosition("secondPosition", value)
              }
              colorKey={"secondColor"}
              positionKey={"secondPosition"}
            />
            <div className="w-[15%] h-auto flex items-center justify-center p-2">
              <LuCircleSlash2 className="text-sm text-gray-500 cursor-not-allowed md:text-base" />
            </div>
          </div>
          {newColor.map((item, index) => (
            <div key={index} className="flex flex-row">
              <ColorPosition
                color={color[`newColor${index}`]}
                position={position[`newPosition${index}`]}
                callbackColor={(value) =>
                  handleCallbackColor(`newColor${index}`, value)
                }
                callbackPosition={(value) =>
                  handleCallbackPosition(`newPosition${index}`, value)
                }
                colorKey={`newColor${index}`}
                positionKey={`newPosition${index}`}
              />

              <div className="w-[15%] h-auto flex items-center justify-center p-2">
                <button
                  onClick={() => {
                    console.log("Clicked delete button for index:", index);
                    handleDelete(index);
                  }}
                >
                  <MdDeleteForever className="text-sm text-red-500 md:text-base hover:text-red-600" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-end w-full -mt-2 md:-mt-6">
        <button
          disabled={newColor.length === 2}
          onClick={handleNewColor}
          className="w-[15%] flex items-center justify-center text-blue-500 hover:text-blue-600 font-poppins text-sm md:text-base"
        >
          <AiOutlinePlus /> Add
        </button>
      </div>
      <hr />
      <div className="flex items-center justify-end w-full gap-4 ">
        <button
          onClick={handleRandom}
          className="w-auto h-10 px-4 text-sm text-blue-600 bg-white border border-blue-600 rounded md:h-12 font-poppins md:text-base focus:ring-2 hover:text-blue-700 hover:border-blue-700 hover:shadow"
        >
          Random
        </button>
        <button
          onClick={downloadAsJPEG}
          className="w-auto h-10 px-4 text-sm text-white bg-blue-600 rounded md:h-12 font-poppins md:text-base hover:bg-blue-700 hover:shadow focus:ring-2"
        >
          Download
        </button>
      </div>
    </div>
  );
};
export default SelectionPallet;
