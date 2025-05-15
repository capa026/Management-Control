import { Menu } from "lucide-react";
import Sidebar from "../Sidebar";
import { useState } from "react";
import { Icon } from "@iconify-icon/react";

const MenuButton = ({ currentPage }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <>
      <div
        className="md:hidden flex items-center justify-center absolute top-0 right-0 h-full border-l aspect-square border-gray-800 select-none cursor-pointer hover:bg-gray-800 hover:text-teal-400 active:bg-gray-800 active:text-teal-400"
        onClick={() => setOpenSidebar(!openSidebar)}
      >
        {openSidebar ? (
          <Icon icon="line-md:close-small" width={28} />
        ) : (
          <Icon icon="line-md:close-to-menu-alt-transition" width={28} />
        )}
      </div>

      <Sidebar openSidebar={openSidebar} currentPage={currentPage} />
    </>
  );
};

export default MenuButton;
