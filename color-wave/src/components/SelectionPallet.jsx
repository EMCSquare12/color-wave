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
  const [gradient, setGradient] = useState("");
  const [mapItem, setMapItem] = useState([]);
  const [colorPosition, setColorPosition] = useState({
    color: [randomColor(), randomColor()],
    position: [0, 100],
  });

  useEffect(() => {
    let bgGradient = `${type}-gradient(${rotation}, ${colorPosition.color[0]} ${colorPosition.position[0]}%, `;

    for (let i = 2; i <= 3; i++) {
      if (
        colorPosition.color[i] !== undefined &&
        colorPosition.position[i] !== undefined
      ) {
        bgGradient += `${colorPosition.color[i]} ${colorPosition.position[i]}%, `;
      }
    }

    bgGradient += `${colorPosition.color[1]} ${colorPosition.position[1]}%)`;

    setGradient(bgGradient);
    callbackGradient(bgGradient);
    callbackFirstColor(colorPosition.color[0]);
  }, [colorPosition, type, rotation]);

  const handleNewColorPosition = () => {
    const index = mapItem.length;
    setMapItem([...mapItem, null]);

    setColorPosition((prevValue) => ({
      ...prevValue,
      color: [...prevValue.color, randomColor()],
      position: [...prevValue.position, index === 0 ? 30 : 70],
    }));
    console.log(colorPosition);
  };

  const handleDelete = (index) => {
    const filteredColor = colorPosition.color.filter(
      (_, id) => id !== index + 2
    );
    const filteredPosition = colorPosition.position.filter(
      (_, id) => id !== index + 2
    );
    const filteredMapItem = mapItem.filter((_, id) => id !== index);

    setColorPosition({
      color: filteredColor,
      position: filteredPosition,
    });
    setMapItem(filteredMapItem);
    console.log(filteredColor);
  };

  const handleRandom = () => {
    const updatedColor = { ...colorPosition };
    updatedColor.color = updatedColor.color.map(() => randomColor());
    setColorPosition(updatedColor);
  };

  const handleColorPosition = (value, index, array) => {
    const updatedColor = { ...colorPosition };
    updatedColor[array][index] = value;
    setColorPosition(updatedColor);
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
          <div className="w-[20%] h-full flex items-center justify-center ">
            <IoColorPalette className="text-sm text-gray-400 md:text-base" />
          </div>
          <div className="w-[50%] h-full flex items-center justify-center ">
            <h1 className="text-sm font-bold text-gray-400 font-mont md:text-base">
              Color
            </h1>
          </div>
          <div className="w-[20%] h-full flex items-center justify-center ">
            <h1 className="text-sm font-bold text-gray-400 font-mont md:text-base">
              Position
            </h1>
          </div>
          <div className="w-[10%] h-full"></div>
        </div>
        <div className="flex flex-col w-full h-auto rounded shadow ">
          <div className="flex flex-row">
            <ColorPosition
              color={colorPosition.color[0]}
              position={colorPosition.position[0]}
              callbackColor={(value) => handleColorPosition(value, 0, "color")}
              callbackPosition={(value) =>
                handleColorPosition(value, 0, "position")
              }
            />
            <div className="w-[10%] h-auto flex items-center justify-center p-2">
              <LuCircleSlash2 className="text-sm text-gray-500 cursor-not-allowed md:text-base" />
            </div>
          </div>
          <div className="flex flex-row">
            <ColorPosition
              color={colorPosition.color[1]}
              position={colorPosition.position[1]}
              callbackColor={(value) => handleColorPosition(value, 1, "color")}
              callbackPosition={(value) =>
                handleColorPosition(value, 1, "position")
              }
            />
            <div className="w-[10%] h-auto flex items-center justify-center p-2">
              <LuCircleSlash2 className="text-sm text-gray-500 cursor-not-allowed md:text-base" />
            </div>
          </div>
          {mapItem.map((item, index) => (
            <div key={index} className="flex flex-row">
              <ColorPosition
                color={colorPosition.color[index + 2]}
                position={colorPosition.position[[index + 2]]}
                callbackColor={(value) =>
                  handleColorPosition(value, index, "color")
                }
                callbackPosition={(value) =>
                  handleCallbackPosition(value, index, "position")
                }
              />

              <div className="w-[10%] h-auto flex items-center justify-center p-2">
                <button
                  onClick={() => {
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
          disabled={mapItem.length === 2}
          onClick={handleNewColorPosition}
          className={`w-[15%] flex items-center justify-center ${
            mapItem.length === 2
              ? "text-gray-500 cursor-not-allowed"
              : "text-blue-500 hover:text-blue-600"
          } font-poppins text-sm md:text-base`}
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
