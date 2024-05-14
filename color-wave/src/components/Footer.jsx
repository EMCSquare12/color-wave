import { FaRegCopyright } from "react-icons/fa";
import { useState } from "react";

const Footer = () => {
  const [date, setDate] = useState(new Date().getFullYear());

  return (
    <footer className="w-full h-[10vh] bg-gray-200  gap-2 flex flex-row md:py-12 md:px-20 p-4 justify-between items-center ">
      <h1 className="flex flex-row items-center gap-2 text-sm text-gray-500 md:text-base w-fit font-poppins">
        <FaRegCopyright />
        Color Wave by{" "}
        <span className="font-semibold text-blue-text w-fit">
          Erniel Caalim
        </span>
        {date}.
      </h1>
    </footer>
  );
};
export default Footer;
