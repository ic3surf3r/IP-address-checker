import { useState, useContext } from "react";
import arrowIcon from "../assets/icon-arrow.svg";
import { getIPData } from "../functions/ipData";
import IPContext from "../context/ipContext";

function SearchBar() {
  const [ip, setIp] = useState("");
  const value = useContext(IPContext);
  const { setData } = value;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIp(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      submitIp();
    }
  };

  const submitIp = async () => {
    setData(await getIPData(ip));
  };

  return (
    <div className="w-4/5 flex shadow-md md:max-w-xl">
      <input
        type="text"
        className="bg-white w-5/6 rounded-xl rounded-r-none p-4 font-rubik"
        placeholder={"Search for any IP"}
        value={ip}
        onChange={onChange}
        onKeyDown={handleKeyPress}
      />
      <div
        className="bg-black rounded-xl rounded-l-none flex justify-center items-center w-1/6 cursor-pointer"
        onClick={submitIp}
      >
        <img src={arrowIcon} alt="Go" />
      </div>
    </div>
  );
}

export default SearchBar;
