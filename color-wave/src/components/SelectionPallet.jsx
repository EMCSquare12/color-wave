const SelectionPallet = () => {
  return (
    <div className="md:w-[50%] h-auto md:h-[50%] w-full md:gap-8 gap-4 rounded-md shadow border md:p-8 p-4 flex flex-row">
      <div className="flex flex-row w-[50%] h-fit">
        <button className="w-[50%] md:h-12 h-10 rounded-l border border-r-transparent hover:shadow font-font-poppins text-sm md:text-base text-gray-500 hover:bg-gray-100">
          Linear
        </button>
        <button className="w-[50%] md:h-12 h-10 rounded-r  border hover:shadow font-font-poppins text-sm md:text-base text-gray-500 hover:bg-gray-100">
          Radial
        </button>
      </div>
      <div className="flex flex-row w-[50%] h-fit">
        <input
          type="text"
          className=" px-4 w-full md:h-12 h-10 rounded focus:ring-2 outline-none border hover:shadow font-font-poppins text-sm md:text-base text-gray-500"
        />
      </div>
    </div>
  );
};
export default SelectionPallet;
