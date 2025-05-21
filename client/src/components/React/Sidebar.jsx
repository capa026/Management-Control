import { Icon } from "@iconify-icon/react";
import AnimateShow from "./UI/AnimateShow";

const Sidebar = ({ currentPage, openSidebar }) => {
  return (
    <AnimateShow
      condition={openSidebar}
      initial={{ width: 0 }}
      animate={{
        width: "max-content",
        transition: "ease",
      }}
      exit={{ width: 0 }}
      className={"fixed top-0 !bottom-0 overflow-hidden z-[100]"}
    >
      <aside className="flex md:hidden w-max bg-gray-900/80 backdrop-blur-sm border-r border-gray-800 pb-1 flex-col shadow-lg shadow-black h-full overflow-y-auto">
        <h2 className="flex items-center gap-1 text-lg font-bold mb-1 px-3 text-teal-400 text-center border-gray-800 w-full border-b h-12 max-h-12">
          <Icon icon="fluent-color:data-area-20" />
          <i> Management </i>
        </h2>

        <nav
          className="space-y-1
    [&_a]:flex [&_a]:px-3 [&_a]:py-2 [&_a]:text-sm [&_a]:hover:text-teal-400 [&_a]:hover:bg-gray-800 [&_a]:transition-colors [&_a]:duration-200
    [&_a]:items-center [&_a]:gap-2 [&_a]:font-normal"
        >
          <a
            href="/"
            className={`${
              currentPage == "Dashboard" &&
              "bg-gray-950 text-teal-400 hover:!bg-gray-950"
            }`}
          >
            <Icon icon="line-md:home" />
            Dashboard
          </a>
          <a
            href="/EstructuraDeCostos"
            className={`${
              currentPage == "Estructura de costos" &&
              "bg-gray-950 text-teal-400 hover:!bg-gray-950"
            }`}
          >
            <Icon icon="line-md:clipboard-list" />
            Estructura de costos
          </a>
          <a
            href="/Ventas"
            className={`${
              currentPage == "Ventas" &&
              "bg-gray-950 text-teal-400 hover:!bg-gray-950"
            }`}
          >
            <Icon icon="line-md:briefcase" />
            Ventas
          </a>
          <a
            href="/Facturas"
            className={`${
              currentPage == "Facturas" &&
              "bg-gray-950 text-teal-400 hover:!bg-gray-950"
            }`}
          >
            <Icon icon="line-md:document" />
            Facturas
          </a>
          <a
            href="/Inventario"
            className={`${
              currentPage == "Inventario" &&
              "bg-gray-950 text-teal-400 hover:!bg-gray-950"
            }`}
          >
            <Icon icon="line-md:check-list-3" />
            Inventario
          </a>
        </nav>
        <h3 className="mt-auto text-gray-600 text-xs text-center">
          ®Carlos pacheco 2025
        </h3>
      </aside>
    </AnimateShow>
  );
};

export default Sidebar;

/*
MEMOIZED COMPONENT

import { memo, useEffect } from "react";
import { Icon } from "@iconify-icon/react";
import AnimateShow from "./UI/AnimateShow";

const MenuItem = memo(({ href, currentPage, pageName, icon, children }) => (
  <a
    href={href}
    className={`flex px-3 py-2 text-sm items-center gap-2 font-normal transition-colors duration-200
      hover:text-teal-400 hover:bg-gray-800
      ${
        currentPage === pageName
          ? "bg-gray-950 text-teal-400 hover:!bg-gray-950"
          : ""
      }`}
    aria-current={currentPage === pageName ? "page" : undefined}
  >
    <Icon icon={icon} />
    {children}
  </a>
));

const Sidebar = ({ currentPage, openSidebar }) => {
  useEffect(() => console.log("Render"));
  return (
    <AnimateShow
      condition={openSidebar}
      initial={{ width: 0 }}
      animate={{
        width: "max-content",
        transition: "ease-in-out",
      }}
      exit={{ width: 0 }}
      className="fixed top-0 !bottom-0 overflow-hidden z-[100]"
    >
      <aside
        className="flex md:hidden w-max bg-gray-900/80 backdrop-blur-sm border-r border-gray-800 pb-1 flex-col shadow-lg shadow-black h-full"
        aria-label="Main navigation"
      >
        <h2 className="flex items-center gap-1 text-lg font-bold mb-1 px-3 text-teal-400 text-center border-gray-800 w-full border-b h-12 max-h-12">
          <Icon icon="fluent-color:data-area-20" />
          <i> Management </i>
        </h2>

        <nav className="space-y-1">
          <MenuItem
            href="/"
            currentPage={currentPage}
            pageName="Dashboard"
            icon="line-md:home"
          >
            Dashboard
          </MenuItem>
          <MenuItem
            href="/EstructuraDeCostos"
            currentPage={currentPage}
            pageName="Estructura de costos"
            icon="line-md:clipboard-list"
          >
            Estructura de costos
          </MenuItem>
          <MenuItem
            href="/Ventas"
            currentPage={currentPage}
            pageName="Ventas"
            icon="line-md:briefcase"
          >
            Ventas
          </MenuItem>
          <MenuItem
            href="/Facturas"
            currentPage={currentPage}
            pageName="Facturas"
            icon="line-md:document"
          >
            Facturas
          </MenuItem>
          <MenuItem
            href="/Inventario"
            currentPage={currentPage}
            pageName="Inventario"
            icon="line-md:check-list-3"
          >
            Inventario
          </MenuItem>
        </nav>

        <h3 className="mt-auto text-gray-600 text-xs text-center">
          ®Carlos pacheco 2025
        </h3>
      </aside>
    </AnimateShow>
  );
};

export default memo(Sidebar);

*/
