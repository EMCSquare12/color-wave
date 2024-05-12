const Tooltip = ({ text, position }) => {
  return (
    <div
      className={`absolute w-auto h-auto left-1/2 transform -translate-x-1/2 transition duration-200 ease-in-out ${position}`}
    >
      <h1 className="md:px-3 px-2 py-1 text-xs  text-white bg-[#51CFF9] rounded font-poppins w-fit">
        {text}
      </h1>
    </div>
  );
};
export default Tooltip;
