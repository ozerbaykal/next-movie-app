import { BiSearch } from "react-icons/bi";
const Header = () => {
  return (
    <div className="flex items-center gap-10 h-20 p-5">
      <div className="bg-amber-600 p-3 text-2xl rounded-lg font-bold">
        Movie App
      </div>

      <div className="flex flex-1 items-center gap-2 border rounded-md p-3">
        <input
          type="text"
          placeholder="Search Movie"
          className="flex-1 px-2 outline-none py-1 rounded-md text-black"
        />
        <BiSearch size={25} />
      </div>
    </div>
  );
};

export default Header;
