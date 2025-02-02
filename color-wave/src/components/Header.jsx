import { FaGithub } from "react-icons/fa";
import Logo from "../assets/icon.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setIsOpen(width < 768);
      console.log(width);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width, isOpen]);

  return (
    <>
      <header className="flex flex-col md:flex-row w-full px-0 md:px-20 md:h-[12vh] h-[10vh]  border-b shadow-sm right-0 md:w-full items-center md:justify-between md:bg-transparent relative  z-30 ">
        <div className="flex flex-row items-center justify-between w-full h-full px-8 md:h-fit md:w-fit md:px-0">
          <div className="flex flex-row items-center gap-4 py-4 w-fit md:p-0 ">
            <img
              className="w-6 h-6 md:w-8 md:h-8"
              src={Logo}
              alt="Fish Icon in Gradient"
            />
            <h1 className="flex items-center w-full text-xl font-bold text-blue-text md:text-2xl font-poppins md:w-fit">
              Color Wave
            </h1>
          </div>
          {width < 768 && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-3 text-sm font-bold rounded-[50%] shadow-xl font-poppins text-gray-50  ${
                !isOpen
                  ? "bg-blue-text hover:bg-blue-400"
                  : "bg-red-400 hover:bg-red-500"
              }`}
            >
              {!isOpen ? <GiHamburgerMenu /> : <IoCloseSharp />}
            </button>
          )}
        </div>

        {isOpen === true && (
          <nav className="absolute right-0 z-30 flex flex-col md:top-0 top-[10vh] items-end justify-center gap-4 md:mr-0 mr-8  md:relative  md:bg-transparent md:items-center md:gap-8 md:flex-row">
            <li className="flex items-center px-4 py-2 text-sm font-semibold w-fit transition duration-200 ease-in-out md:hover:bg-transparent text-gray-50 md:hover:text-blue-300 md:text-blue-text  hover:bg-blue-400 font-poppins md:text-base bg-blue-text md:bg-transparent  md:p-0 md:rounded-none rounded-[50px] md:shadow-none  shadow-xl ">
              <Link
                to="gradient"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Gradient
              </Link>
            </li>
            <li className="flex items-center px-4 py-2 text-sm font-semibold w-fit transition duration-200 ease-in-out md:hover:bg-transparent text-gray-50 md:hover:text-blue-300 md:text-blue-text  hover:bg-blue-400 font-poppins md:text-base bg-blue-text md:bg-transparent  md:p-0 md:rounded-none rounded-[50px] md:shadow-none shadow-xl ">
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                About
              </Link>
            </li>
            <li className="flex items-center px-4 py-2 text-sm font-semibold w-fit transition duration-200 ease-in-out md:hover:bg-transparent text-gray-50 md:hover:text-blue-300 md:text-blue-text  hover:bg-blue-400 font-poppins bg-blue-text md:bg-transparent  md:text-base md:p-0 md:rounded-none rounded-[50px] md:shadow-none  shadow-xl ">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Contact
              </Link>
            </li>
            <li className="flex items-center px-4 py-2 text-base font-semibold w-fit transition duration-200 ease-in-out md:hover:bg-transparent text-gray-50 md:hover:text-blue-300 md:text-blue-text  hover:bg-blue-400 font-poppins bg-blue-text md:bg-transparent  md:text-lg md:p-0 md:rounded-none rounded-[50px] md:shadow-none  shadow-xl ">
              <a
                href="https://github.com/EMCSquare12/color-wave"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            {/* <li className="flex items-center px-4 py-2 text-base font-semibold w-fit transition duration-200 ease-in-out md:hover:bg-transparent md:hover:text-blue-300 text-gray-50 hover:bg-blue-400 font-poppins bg-blue-300 md:bg-transparent  md:text-lg md:p-0 md:rounded-none rounded-[50px] md:shadow-none  shadow-xl ">
              <a href="#">
                <FaGithub />
              </a>
            </li> */}
          </nav>
        )}
      </header>
    </>
  );
};
export default Header;
