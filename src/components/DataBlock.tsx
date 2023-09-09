import { useContext, useEffect } from "react";
import IPContext from "../context/IPContext";
import DataSlot from "./DataSlot";
import { getIPData } from "../functions/ipData";
import { toast } from "react-toastify";

function DataBlock() {
  const value = useContext(IPContext);
  const { data, setData } = value;

  const { ip, city, country_name, postal, timeZoneOffset, carrierName } = data;

  useEffect(() => {
    if (ip === "") {
      getInitialData();
    }
  }, []);

  const getInitialData = async () => {
    try {
      const stuff = await getIPData(null);
      setData(stuff);
    } catch (error) {
      try {
        const fallbackdata = await getIPData("128.105.39.11");
        setData(fallbackdata);
      } catch (error) {
        toast.error("Oops");
      }
    }
  };

  return (
    <div className="bg-white font-rubik rounded-xl p-6 w-4/5 flex flex-col md:flex-row justify-center md:justify-around items-center shadow-md gap-5 z-50 md:h-32 md:absolute md:top-full md:-translate-y-1/2 md:px-10 md:max-w-5xl">
      <DataSlot title={"IP ADDRESS"} data={ip} />

      <DataSlot
        title={"LOCATION"}
        data={`${city}, ${country_name} ${postal}`}
        stripe={true}
      />

      <DataSlot
        title={"TIMEZONE"}
        data={`UTC ${timeZoneOffset}`}
        stripe={true}
      />

      <DataSlot title={"ISP"} data={carrierName} stripe={true} />
    </div>
  );
}

export default DataBlock;
