const Display = ({ gradient, bgColor }) => {
  return (
    <div
      style={{ background: `${gradient}`, backgroundColor: `${bgColor}` }}
      className="md:w-full border-gray-300 h-[200px] bg-white  md:h-full w-full rounded-md shadow border "
    />
  );
};
export default Display;
