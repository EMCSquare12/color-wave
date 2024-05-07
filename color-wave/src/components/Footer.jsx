import { FaGithub } from "react-icons/fa";
import { RiInformation2Fill } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import { FaRegCopyright } from "react-icons/fa";
import { useState } from "react";

const Footer = () => {
  const [date, setDate] = useState(new Date().getFullYear());
  return (
    <footer className="w-full h-[20vh] bg-gray-100 border-t gap-2 flex flex-row lg:px-12 md:px-40 px-4 justify-between items-center ">
      <h1 className="flex flex-row items-center gap-2 text-xs text-gray-500 md:text-sm w-fit font-poppins">
        <FaRegCopyright />
        Color Wave by{" "}
        <span className="font-semibold">Erniel Caalim {date}</span>.
      </h1>
      <div className="flex flex-row gap-4 w-fit">
        <button className="text-sm text-gray-500 md:text-lg">
          <FaGithub />
        </button>
        <button className="text-base text-gray-500 md:text-lg">
          <RiInformation2Fill />
        </button>
        <button className="text-sm text-gray-500 md:text-lg">
          <SiGmail />
        </button>
      </div>
    </footer>
  );
};
export default Footer;
