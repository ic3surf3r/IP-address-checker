import arrowIcon from "../assets/icon-arrow.svg";
import { useMediaQuery } from "react-responsive";

function SearchBar() {
  const isSmallScreen = useMediaQuery({ maxWidth: 640 });
  return (
    <div className="w-4/5 flex shadow-md md:max-w-xl">
      <input
        type="text"
        className="bg-white w-5/6 rounded-xl rounded-r-none p-4 font-rubik"
        placeholder={
          isSmallScreen
            ? "Search for any IP or domain"
            : "Seach for any IP address or domain"
        }
      />
      <div className="bg-black rounded-xl rounded-l-none flex justify-center items-center w-1/6">
        <img src={arrowIcon} alt="Go" />
      </div>
    </div>
  );
}

export default SearchBar;
