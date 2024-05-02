import { CgMaximizeAlt } from "react-icons/cg";
import { FaClipboard } from "react-icons/fa";
import copy from "clipboard-copy";
import { useRef, useState } from "react";

const Display = ({ gradient, bgColor, isOpen }) => {
  const timeOutRef = useRef(null);
  const [isCopied, setIsCopied] = useState(false);

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
  //     const formattedGradient = colorStops.map((stop, index) => {
  //       return index < colorStops.length - 1 ? `${stop},\n\t` : stop;
  //     });
  //     return formattedGradient.join("");
  //   } else {
  //     return gradientString;
  //   }
  // };

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
        <button className="md:flex items-center justify-center h-full px-4 text-sm font-bold text-gray-300 bg-[#5C4B99] outline-none w-fit font-mont md:text-base ">
          CSS
        </button>
        <button className=" gap-2 flex md:hidden items-center justify-center h-full px-4 text-xs font-bold text-gray-300 bg-[#301e51] outline-none md:w-fit w-full font-mont md:text-xs hover:bg-[#23163c]">
          <FaClipboard />
          Copy to Clipboard
        </button>
      </div>
      <div className="md:h-[calc(40%-3rem)] w-full h-0 bg-[#3D246C]  md:flex flex-col ">
        <div className="w-full md:h-[calc(100%-3rem)] h-0 bg-[#3D246C] p-6 md:flex flex-col gap-3">
          <div className="flex flex-row gap-3 ">
            <h1 className="flex items-start text-sm font-bold text-gray-300 font-poppins">
              Background:
            </h1>
            <p className="flex items-center gap-1 text-sm font-medium text-gray-200 font-mont">
              {bgColor}
            </p>
          </div>
          <div className="flex flex-row gap-3 ">
            <h1 className="flex items-start text-sm font-bold text-gray-300 font-poppins">
              Background:
            </h1>
            <p className="flex items-center w-full gap-1 text-sm font-medium text-gray-200 break-words whitespace-pre-line font-mont">
              {gradient}
            </p>
          </div>
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
