const ColorPositiosn = () => {
  return (
    <>
      <div className="w-[15%] h-auto flex items-center justify-center  p-2">
        <button className="  hover:shadow md:h-12 h-10 w-full rounded focus:ring-2 border"></button>
      </div>
      <div className="w-[35%] h-auto flex items-center justify-center   p-2">
        <input
          type="text"
          className="hover:shadow focus:ring-2 text-center w-full md:h-12 h-10 border outline-none rounded text-gray-500 font-poppins text-sm md:text-base px-2 md:px-4"
        />
      </div>
      <div className="w-[35%] h-auto flex items-center justify-center   p-2">
        <input
          type="number"
          className="hover:shadow focus:ring-2 text-center w-full md:h-12 h-10 border outline-none rounded text-gray-500 font-poppins text-sm md:text-base px-2 md:px-4"
        />
      </div>
    </>
  );
};
export default ColorPositiosn;
