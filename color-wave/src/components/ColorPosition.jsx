import { useRef, useState, useEffect } from "react";
import ColorPicker from "react-pick-color";
const ColorPosition = ({
  color,
  position,
  callbackColor,
  callbackPosition,
  index,
}) => {
  const [isOpenColor, setIsOpenColor] = useState(false);
  const colorRef = useRef(null);
  const colorInputRef = useRef(null);
  const positionRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (colorRef.current && !colorRef.current.contains(event.target)) {
        setIsOpenColor(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        colorInputRef.current &&
        !colorInputRef.current.contains(event.target) &&
        (color === "" || color === "#")
      ) {
        callbackColor("#000000");
      } else if (
        positionRef.current &&
        !positionRef.current.contains(event.target) &&
        position === ""
      ) {
        const positionIndex = {
          0: 0,
          1: 100,
          2: 30,
          3: 70,
        };
        callbackPosition(positionIndex[index]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [color, position]);

  const handleCallbackColor = (value) => {
    const validValue = value.replace(/[^#0-9A-Fa-f]/g, "").substring(0, 9);
    callbackColor(validValue);
  };

  const handleCallbackPosition = (value) => {
    callbackPosition(value);
  };

  return (
    <>
      <div
        ref={colorRef}
        className="w-[20%] h-auto flex items-center justify-center md:p-3 p-2  relative"
      >
        <button
          style={{ backgroundColor: color }}
          onClick={() => setIsOpenColor(true)}
          className="w-full h-10 border border-gray-200 rounded hover:shadow md:h-12 focus:ring-2"
        ></button>
        {isOpenColor && (
          <div className="absolute top-0 left-0 z-10 md:mt-16 mt-14">
            <ColorPicker
              color={color}
              onChange={(e) => handleCallbackColor(e.hex)}
            />
          </div>
        )}
      </div>
      <div className="w-[50%] h-auto flex items-center justify-center   p-2">
        <input
          ref={colorInputRef}
          onChange={(e) => handleCallbackColor(e.target.value)}
          onClick={() => setIsOpenColor(true)}
          value={color}
          type="text"
          className="w-full h-10 px-2 text-sm text-center text-gray-500 border border-gray-200 rounded outline-none hover:shadow focus:ring-2 md:h-12 font-poppins md:text-base md:px-4"
        />
      </div>
      <div className="w-[20%] h-auto flex items-center justify-center   p-2">
        <input
          ref={positionRef}
          value={position}
          max={100}
          min={0}
          onChange={(e) => handleCallbackPosition(e.target.value)}
          type="number"
          className="w-full h-10 px-2 text-sm text-center text-gray-500 border border-gray-200 rounded outline-none hover:shadow focus:ring-2 md:h-12 font-poppins md:text-base md:px-4"
        />
      </div>
    </>
  );
};
export default ColorPosition;
