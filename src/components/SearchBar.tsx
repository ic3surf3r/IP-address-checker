import arrowIcon from "../assets/icon-arrow.svg";

function SearchBar() {
  return (
    <div className="w-4/5 flex shadow-md">
      <input
        type="text"
        className="bg-white w-5/6 rounded-xl rounded-r-none p-4 font-rubik"
      />
      <div className="bg-black rounded-xl rounded-l-none flex justify-center items-center w-1/6">
        <img src={arrowIcon} alt="Go" />
      </div>
    </div>
  );
}

export default SearchBar;
