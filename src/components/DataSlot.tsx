type Props = {
  title: string;
  data: string;
};

function DataSlot({ title, data }: Props) {
  return (
    <div className="flex flex-col text-center gap-1">
      <p className="text-gray-400 text-[.6rem] font-bold tracking-widest">
        {title}
      </p>
      <p className="text-2xl font-normal">{data}</p>
    </div>
  );
}

export default DataSlot;
