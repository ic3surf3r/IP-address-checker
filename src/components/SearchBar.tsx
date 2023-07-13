import { useState, useContext } from "react";
import arrowIcon from "../assets/icon-arrow.svg";
import { getIPData } from "../functions/ipData";
import IPContext from "../context/ipContext";

function SearchBar() {
  const [ip, setIp] = useState("");
  const value = useContext(IPContext);
  const { data, setData } = value;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIp(e.target.value);
  };

  const submitIp = async () => {
    console.log(`ip sent: ${ip}`);
    setData(await getIPData(ip));
    console.log(data);
  };

  return (
    <div className="w-4/5 flex shadow-md md:max-w-xl">
      <input
        type="text"
        className="bg-white w-5/6 rounded-xl rounded-r-none p-4 font-rubik"
        placeholder={"Search for any IP"}
        value={ip}
        onChange={onChange}
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
