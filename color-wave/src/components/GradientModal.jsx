import { CgMinimizeAlt } from "react-icons/cg";
import { useEffect } from "react";

const GradientModal = ({ gradientModal, isOpen }) => {
  useEffect(() => {
    document.body.classList.add("unscrollable");

    return () => {
      document.body.classList.remove("unscrollable");
    };
  }, []);
  return (
    <div
      style={{ background: gradientModal }}
      className="absolute z-30 w-screen h-screen"
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
