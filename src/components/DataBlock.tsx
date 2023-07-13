import { useContext, useEffect } from "react";
import IPContext from "../context/ipContext";
import DataSlot from "./DataSlot";
import { getIPData } from "../functions/ipData";

function DataBlock() {
  const value = useContext(IPContext);
  const { data, setData } = value;

  const {
    ip,
    city,
    country_name,
    postal,
    timeZoneOffset,
    carrierName,
    isLoading,
  } = data;

  useEffect(() => {
    if (isLoading) {
      getInitialData;
    }
  }, []);

  const getInitialData = async () => {
    await setData(getIPData(null));
    console.log(data);
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
