import { CgMaximizeAlt } from "react-icons/cg";
import { FaClipboard } from "react-icons/fa";
import copy from "clipboard-copy";
import { useRef, useState, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";

const Display = ({ gradient, bgColor, isOpen }) => {
  const timeOutRef = useRef(null);
  const [isCopied, setIsCopied] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [isCodeOpen, setIsCodeOpen] = useState(false);

  const handleCopyToClipBoard = () => {
    copy(
      `background: ${bgColor};\nbackground: ${gradient
        .replace(/\s+/g, " ")
        .trim()};`
    );
    setIsCopied(true);

    timeOutRef.current = setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  // const codeFormatter = (gradientString) => {
  //   if (typeof gradientString === "string") {
  //     const colorStops = gradientString.split(",");
  //     const formattedGradient = colorStops.map((stop, i  ndex) => {
  //       return index < colorStops.length - 1 ? `${stop},\n\t` : stop;
  //     });
  //     return formattedGradient.join("");
  //   } else {
  //     return gradientString;
  //   }
  // };

  const addSpanToColorValues = (gradient) => {
    const colors = gradient.split(",").map((color, index, array) => {
      const colorValue = color.match(/#[0-9a-fA-F]{6}/);
      if (colorValue) {
        const isLastColor = index === array.length - 1;
        const suffix = isLastColor ? ";" : ",";

        return (
          <span
            className="flex flex-row items-center justify-center h-auto gap-1 w-fit"
            key={index}
          >
            <span
              style={{ background: colorValue[0] }}
              className="w-2 h-2 gap-2 border md:w-3 md:h-3"
            />
            {color + suffix}
          </span>
        );
      }
      return `${color},`;
    });

    return colors;
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width, isCodeOpen]);

  return (
    <div className="relative md:w-full border-gray-300 h-[250px]  md:h-full w-full rounded-md shadow border overflow-hidden">
      <div
        style={{ background: `${gradient}`, backgroundColor: `${bgColor}` }}
        className="md:h-[60%] h-[calc(100%-2.5rem)]"
      >
        <button
          onClick={() => isOpen(false)}
          className="float-right mt-4 mr-4 text-lg text-white text-opacity-75 outline-none md:text-2xl md:mt-6 md:mr-6 hover:text-opacity-100"
        >
          <CgMaximizeAlt />
        </button>
      </div>
      <div className="w-full md:h-[3rem] h-[2.5rem] bg-[#7f6eb8] flex justify-end md:justify-between items-center ">
        <button
          disabled={width >= 768}
          onClick={() => setIsCodeOpen(true)}
          className={`md:flex items-center justify-center h-full px-4 text-sm font-bold text-gray-200 ${
            width < 768
              ? " hover:bg-[#52418d] focus:bg-[#423474] bg-[#5C4B99] "
              : ""
          }bg-[#5C4B99]  outline-none w-fit font-mont md:text-base`}
        >
          CSS
        </button>
        <button
          style={{
            background: isCopied ? gradient : "",
          }}
          onClick={handleCopyToClipBoard}
          className=" gap-2 flex md:hidden items-center justify-center h-full px-4 text-xs font-bold text-gray-200  bg-[#301e51] outline-none md:w-fit w-full font-mont md:text-xs hover:bg-[#23163c]"
        >
          <FaClipboard />
          {isCopied ? "Copied!" : "Copy to Clipboard"}
        </button>
      </div>
      <div className="md:h-[calc(40%-3rem)] w-full h-0 bg-[#3D246C]  md:flex flex-col ">
        <div
          className={`w-full md:h-[calc(100%-3rem)] overflow-y-auto h-[50%] bg-[#3D246C] p-6 flex flex-col  gap-2 ${
            width < 768
              ? `${isCodeOpen === false ? "hidden" : "absolute top-0"} `
              : ""
          }`}
        >
          <div className="flex flex-row gap-2 ">
            <h1 className="flex items-start font-mono text-xs font-bold text-gray-200 md:text-sm">
              Background:
            </h1>
            <p className="flex items-center gap-1 font-mono text-xs font-semibold text-gray-200 md:text-sm ">
              {addSpanToColorValues(bgColor)}
            </p>
          </div>
          <div className="flex flex-row gap-2 ">
            <h1 className="flex items-start font-mono text-xs font-bold text-gray-200 md:text-sm">
              Background:
            </h1>
            <p className="flex flex-row flex-wrap items-center w-full gap-1 font-mono text-xs font-semibold text-gray-200 md:gap-2 md:text-sm">
              {addSpanToColorValues(gradient)}
            </p>
          </div>
          {width < 768 && (
            <button
              onClick={() => setIsCodeOpen(false)}
              className="absolute top-0 right-0 mt-4 mr-4 text-lg text-red-500 hover:text-red-600"
            >
              <IoCloseSharp />
            </button>
          )}
        </div>
        <button
          style={{ background: isCopied ? gradient : "" }}
          onClick={handleCopyToClipBoard}
          className=" gap-2 flex items-center justify-center md:h-[3rem] h-[2.5rem] w-full px-4 text-sm font-bold text-gray-300 bg-[#301e51] outline-none font-mont md:text-sm hover:bg-[#23163c]"
        >
          <FaClipboard />
          {isCopied ? "Copied!" : "Copy to Clipboard"}
        </button>
      </div>
    </div>
  );
};
export default Display;
