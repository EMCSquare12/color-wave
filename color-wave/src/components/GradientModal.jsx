import { CgMinimizeAlt } from "react-icons/cg";

const GradientModal = ({ gradientModal, isOpen }) => {
  return (
    <div
      style={{ background: gradientModal }}
      className="absolute z-30 w-full h-full"
    >
      <button
        onClick={() => isOpen(false)}
        className="float-right mt-6 mr-6 text-2xl text-white text-opacity-75 outline-none hover:text-opacity-100"
      >
        <CgMinimizeAlt />
      </button>
    </div>
  );
};
export default GradientModal;
