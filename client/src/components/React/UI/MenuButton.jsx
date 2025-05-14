import { Menu } from "lucide-react";
import Sidebar from "../Sidebar";
import { useState } from "react";

const MenuButton = ({ currentPage }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <>
      <div
        className="md:hidden absolute top-0 right-0 h-full border-l aspect-square border-gray-800 flex select-none cursor-pointer hover:bg-gray-800 hover:text-teal-400 active:bg-gray-800 active:text-teal-400"
        onClick={() => setOpenSidebar(!openSidebar)}
      >
        <Menu className="m-auto" />
      </div>

      <Sidebar openSidebar={openSidebar} currentPage={currentPage} />
    </>
  );
};

export default MenuButton;
