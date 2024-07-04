import { LuMenu } from "react-icons/lu";
import { MdOutlineAccountCircle } from "react-icons/md";
const HeaderComponent = ({ toggleSidebar }) => {
  return (
    <header className="flex items-center justify-between h-14 p-4 bg-gray-950 shadow-md">
      <button className="text-white focus:outline-none" onClick={toggleSidebar}>
        <LuMenu className="h-8 w-8" />
      </button>
      <h1 className="text-xl font-semibold text-white">Admin Dashboard</h1>
      <button className="text-white focus:outline-none" onClick={toggleSidebar}>
        <MdOutlineAccountCircle className="h-8 w-8" />
      </button>
    </header>
  );
};

export default HeaderComponent;
