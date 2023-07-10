import DataSlot from "./DataSlot";

function DataBlock() {
  return (
    <div className="bg-white font-rubik rounded-xl p-6 w-4/5 flex flex-col justify-center items-center shadow-md gap-5 z-50">
      <DataSlot title={"IP ADDRESS"} data={"192.212.174.101"} />
      <DataSlot title={"LOCATION"} data={"Brooklyn, NY 10001"} />
      <DataSlot title={"TIMEZONE"} data={"UTC -5:00"} />
      <DataSlot title={"ISP"} data={"SpaceX Starlink"} />
    </div>
  );
}

export default DataBlock;
