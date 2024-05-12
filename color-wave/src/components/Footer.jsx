import { FaGithub } from "react-icons/fa";
import { RiInformation2Fill } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import { FaRegCopyright } from "react-icons/fa";
import { useState } from "react";
import Tooltip from "./Tooltip";

const Footer = () => {
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const [date, setDate] = useState(new Date().getFullYear());
  const [tooltipKey, setTooltipKey] = useState("");

  const handleMouseEnter = (key) => {
    setTooltipKey(key);
    setIsMouseEnter(true);
  };

  return (
    <footer className="w-full h-[10vh] bg-gray-200  gap-2 flex flex-row md:py-12 md:px-20 p-4 justify-between items-center ">
      <h1 className="flex flex-row items-center gap-2 text-xs text-gray-500 md:text-sm w-fit font-poppins">
        <FaRegCopyright />
        Color Wave by{" "}
        <span className="font-semibold text-blue-400 w-fit">Erniel Caalim</span>
        {date}.
      </h1>
      {/* <ul className="flex flex-row gap-4 w-fit h-fit">
        <li
          onMouseEnter={() => handleMouseEnter("github")}
          onMouseLeave={() => setIsMouseEnter(false)}
          className="relative w-fit h-fit transition duration-200 ease-in-out  text-gray-500 md:text-xl hover:text-[#51CFF9] cursor-pointer"
        >
          {isMouseEnter && tooltipKey === "github" && (
            <Tooltip text={"Github Repository"} position={"bottom-[24px]"} />
          )}
          <a
            href="https://github.com/EMCSquare12/color-wave.git"
            target="_blank"
          >
            <FaGithub />
          </a>
        </li>
        <li
          onMouseEnter={() => handleMouseEnter("info")}
          onMouseLeave={() => setIsMouseEnter(false)}
          className="relative w-fit h-fit transition duration-200 ease-in-out  text-gray-500 md:text-xl hover:text-[#51CFF9] cursor-pointer"
        >
          {isMouseEnter && tooltipKey === "info" && (
            <Tooltip text={"About"} position={"bottom-[24px]"} />
          )}
          <a>
            <RiInformation2Fill />
          </a>
        </li>
        <li
          onMouseEnter={() => handleMouseEnter("email")}
          onMouseLeave={() => setIsMouseEnter(false)}
          className="relative w-fit h-fit transition duration-200 ease-in-out  text-gray-500 md:text-xl hover:text-[#51CFF9] cursor-pointer"
        >
          {isMouseEnter && tooltipKey === "email" && (
            <Tooltip text={"Email Developer"} position={"bottom-[24px]"} />
          )}
          <a href="mailto:ninelcaalim12@gmail.com">
            <SiGmail />
          </a>
        </li>
      </ul> */}
    </footer>
  );
};
export default Footer;
