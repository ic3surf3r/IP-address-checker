import DataSlot from "./DataSlot";

function DataBlock() {
  return (
    <div className="bg-white font-rubik rounded-xl p-6 w-4/5 flex flex-col md:flex-row justify-center md:justify-around items-center shadow-md gap-5 z-50 md:h-32 md:absolute md:top-full md:-translate-y-1/2 md:px-10 md:max-w-5xl">
      <DataSlot title={"IP ADDRESS"} data={"192.212.174.101"} />

      <DataSlot title={"LOCATION"} data={"Brooklyn, NY 10001"} stripe={true} />

      <DataSlot title={"TIMEZONE"} data={"UTC -5:00"} stripe={true} />

      <DataSlot title={"ISP"} data={"SpaceX Starlink"} stripe={true} />
    </div>
  );
}

export default DataBlock;
