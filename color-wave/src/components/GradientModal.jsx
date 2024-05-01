import { CgMinimizeAlt } from "react-icons/cg";

const GradientModal = ({ gradientModal, isOpen }) => {
  return (
    <div
      style={{ background: gradientModal }}
      className="z-30 absolute w-full h-full"
    >
      <button
        onClick={() => isOpen(false)}
        className="float-right mt-6 mr-6 text-white text-2xl text-opacity-75 outline-none hover:text-opacity-100"
      >
        <CgMinimizeAlt />
      </button>
    </div>
  );
};
export default GradientModal;
