import { TbArrowsMinimize } from "react-icons/tb";

import { useEffect } from "react";

const GradientModal = ({ gradientModal, isOpen }) => {
  // useEffect(() => {
  //   document.body.classList.add("unscrollable");

  //   return () => {
  //     document.body.classList.remove("unscrollable");
  //   };
  // }, []);
  return (
    <div
      style={{ background: gradientModal }}
      className="fixed z-30 w-screen h-screen"
    >
      <button
        onClick={() => isOpen(false)}
        className="sticky float-right mr-6 text-lg text-white text-opacity-75 outline-none md:text-2xl top-6 hover:text-opacity-100"
      >
        <TbArrowsMinimize />
      </button>
    </div>
  );
};
export default GradientModal;
