import { useRef, useState, useEffect } from "react";
import ColorPicker from "react-pick-color";
const ColorPosition = ({
  color,
  position,
  callbackColor,
  callbackPosition,
  colorKey,
  positionKey,
}) => {
  const [isOpenColor, setIsOpenColor] = useState(false);
  const colorRef = useRef(null);
  const inputRef = useRef(null);

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

  const handleCallbackColor = (key, value) => {
    callbackColor(value);
  };
  const handleCallbackPosition = (key, value) => {
    callbackPosition(value);
  };
  return (
    <>
      <div
        ref={colorRef}
        className="w-[15%] h-auto flex items-center justify-center p-2 relative"
      >
        <button
          style={{ backgroundColor: color }}
          onClick={() => setIsOpenColor(true)}
          className="w-full h-10 border border-gray-300 rounded hover:shadow md:h-12 focus:ring-2"
        ></button>
        {isOpenColor && (
          <div className="absolute top-0 left-0 z-10 md:mt-16 mt-14">
            <ColorPicker
              color={color}
              onChange={(e) => handleCallbackColor(colorKey, e.hex)}
            />
          </div>
        )}
      </div>
      <div className="w-[45%] h-auto flex items-center justify-center   p-2">
        <input
          onChange={(e) => handleCallbackColor(colorKey, e.target.value)}
          onClick={() => setIsOpenColor(true)}
          value={color}
          type="text"
          className="w-full h-10 px-2 text-sm text-center text-gray-500 border border-gray-300 rounded outline-none hover:shadow focus:ring-2 md:h-12 font-poppins md:text-base md:px-4"
        />
      </div>
      <div className="w-[25%] h-auto flex items-center justify-center   p-2">
        <input
          value={position}
          max={100}
          min={0}
          onChange={(e) => handleCallbackPosition(positionKey, e.target.value)}
          type="number"
          className="w-full h-10 px-2 text-sm text-center text-gray-500 border border-gray-300 rounded outline-none hover:shadow focus:ring-2 md:h-12 font-poppins md:text-base md:px-4"
        />
      </div>
    </>
  );
};
export default ColorPosition;
