import { useRef, useState, useEffect } from "react";
import ColorPicker from "react-pick-color";
const ColorPosition = ({ propsColor, propsPosition }) => {
  const [isOpenColor, setIsOpenColor] = useState(false);
  const colorRef = useRef(null);
  // const [color, setColor] = useState("");
  // const [position, setPosition] = useState(0);

  // useEffect(() => {
  //   const randomInt = Math.floor(Math.random() * 16777216);
  //   const hexColor = "#" + randomInt.toString(16).padStart(6, "0");
  //   const randomPostion = Math.floor(Math.random() * 100) + 1;
  //   setPosition(randomPostion);
  //   setColor(hexColor);
  // }, []);

  // useEffect(() => {
  //   propsColor(color);
  //   propsPosition(position);
  // }, [color, position]);
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
          style={{ backgroundColor: propsColor }}
          onClick={() => setIsOpenColor(!isOpenColor)}
          className=" border-gray-300  hover:shadow md:h-12 h-10 w-full rounded focus:ring-2 border"
        ></button>
        {isOpenColor && (
          <div className="absolute top-0 mt-16 left-0 z-10">
            <ColorPicker
              color={color}
              onChange={(value) => setColor(value.hex)}
            />
          </div>
        )}
      </div>
      <div className="w-[45%] h-auto flex items-center justify-center   p-2">
        <input
          // onChange={(e) => setColor(e.target.value)}
          onClick={() => setIsOpenColor(true)}
          value={propsColor}
          type="text"
          className=" border-gray-300 hover:shadow focus:ring-2 text-center w-full md:h-12 h-10 border outline-none rounded text-gray-500 font-poppins text-sm md:text-base px-2 md:px-4"
        />
      </div>
      <div className="w-[25%] h-auto flex items-center justify-center   p-2">
        <input
          value={propsPosition}
          max={100}
          min={0}
          // onChange={(e) => setPosition(e.target.value)}
          type="number"
          className="hover:shadow border-gray-300 focus:ring-2 text-center w-full md:h-12 h-10 border outline-none rounded text-gray-500 font-poppins text-sm md:text-base px-2 md:px-4"
        />
      </div>
    </>
  );
};
export default ColorPosition;
