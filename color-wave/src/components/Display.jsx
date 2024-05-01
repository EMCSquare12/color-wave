import { CgMaximizeAlt } from "react-icons/cg";
import { FaClipboard } from "react-icons/fa";
import { Fragment } from "react";

const Display = ({ gradient, bgColor, isOpen }) => {
  const codeFormatter = (gradientString) => {
    if (typeof gradientString === "string") {
      const colorStops = gradientString.split(",");
      const formattedGradient = colorStops.map((stop, index) => {
        return index < colorStops.length - 1 ? `${stop},\n\t` : stop;
      });
      return formattedGradient.join("");
    } else {
      return gradientString;
    }
  };

  return (
    <div className=" md:w-full border-gray-300 h-[300px]  md:h-full w-full rounded-md shadow border overflow-hidden">
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
        <button className="md:flex items-center justify-center h-full px-4 text-sm font-bold text-gray-300 bg-[#5C4B99] outline-none w-fit font-mont md:text-base hidden">
          CSS
        </button>
        <button className=" gap-2 flex items-center justify-center h-full px-4 text-xs font-bold text-gray-300 bg-[#301e51] outline-none w-fit font-mont md:text-xs hover:bg-[#23163c]">
          <FaClipboard />
          Copy to Clipboard
        </button>
      </div>
      <div className="md:h-[40%] w-full h-0 bg-[#3D246C] p-4 flex flex-col gap-4">
        <div className="flex flex-row gap-3 ">
          <h1 className="flex items-start text-sm font-bold text-gray-300 font-poppins">
            Background:
          </h1>
          <p className="flex items-center gap-1 text-sm font-medium text-gray-200 font-mont">
            {codeFormatter(bgColor)}
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
    </div>
  );
};
export default Display;
