import { useRef, useState, useEffect } from "react";
import ColorPicker from "react-pick-color";
const ColorPosition = ({
  color,
  position,
  callbackColor,
  callbackPosition,
}) => {
  const [isOpenColor, setIsOpenColor] = useState(false);
  const colorRef = useRef(null);

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
  return (
    <>
      <div
        ref={colorRef}
        className="w-[15%] h-auto flex items-center justify-center p-2 relative"
      >
        <button
          style={{ backgroundColor: color }}
          onClick={() => setIsOpenColor(true)}
          className=" border-gray-300  hover:shadow md:h-12 h-10 w-full rounded focus:ring-2 border"
        ></button>
        {isOpenColor && (
          <div className="absolute top-0 mt-16 left-0 z-10">
            <ColorPicker
              color={color}
              onChange={(value) => callbackColor(value.hex)}
            />
          </div>
        )}
      </div>
      <div className="w-[45%] h-auto flex items-center justify-center   p-2">
        <input
          onChange={(e) => callbackColor(e.target.value)}
          onClick={() => setIsOpenColor(true)}
          value={color}
          type="text"
          className=" border-gray-300 hover:shadow focus:ring-2 text-center w-full md:h-12 h-10 border outline-none rounded text-gray-500 font-poppins text-sm md:text-base px-2 md:px-4"
        />
      </div>
      <div className="w-[25%] h-auto flex items-center justify-center   p-2">
        <input
          value={position}
          max={100}
          min={0}
          onChange={(e) => callbackPosition( e.target.value )}
          type="number"
          className="hover:shadow border-gray-300 focus:ring-2 text-center w-full md:h-12 h-10 border outline-none rounded text-gray-500 font-poppins text-sm md:text-base px-2 md:px-4"
        />
      </div>
    </>
  );
};
export default ColorPosition;
