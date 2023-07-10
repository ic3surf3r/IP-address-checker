type Props = {
  title: string;
  data: string;
  stripe?: boolean;
};

function DataSlot({ title, data, stripe }: Props) {
  return (
    <div className="flex h-full gap-3 items-center">
      {stripe && (
        <div className="invisible md:visible  bg-gray-200 h-4/6 w-[.15rem]"></div>
      )}
      <div className="flex flex-col text-center md:text-left gap-1">
        <p className="text-gray-400 text-[.6rem] font-bold tracking-widest">
          {title}
        </p>
        <p className="text-2xl font-normal">{data}</p>
      </div>
    </div>
  );
}

export default DataSlot;
