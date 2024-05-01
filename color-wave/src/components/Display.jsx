import { CgMaximizeAlt } from "react-icons/cg";

const Display = ({ gradient, bgColor, isOpen }) => {
  return (
    <div
      style={{ background: `${gradient}`, backgroundColor: `${bgColor}` }}
      className=" md:w-full border-gray-300 h-[200px] bg-white  md:h-full w-full rounded-md shadow border "
    >
      <button
        onClick={() => isOpen(false)}
        className="float-right mt-6 mr-6 text-white text-2xl text-opacity-75 outline-none hover:text-opacity-100"
      >
        <CgMaximizeAlt />
      </button>
    </div>
  );
};
export default Display;
