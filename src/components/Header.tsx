import SearchBar from "./SearchBar";

function Header() {
  return (
    <div className="bg-cover bg-no-repeat bg-center bg-mobile md:bg-desktop w-screen h-1/3 flex flex-col  items-center relative">
      <h1 className="text-white font-rubik text-2xl mt-7">
        IP Address Tracker
      </h1>
      <br />
      <SearchBar />
    </div>
  );
}

export default Header;
