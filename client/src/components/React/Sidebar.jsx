import { Icon } from "@iconify-icon/react";
import AnimateShow from "./UI/AnimateShow";

const Sidebar = ({ currentPage, openSidebar }) => {
  return (
    <AnimateShow
      condition={openSidebar}
      initial={{ width: 0 }}
      animate={{
        width: "max-content",
        transition: "linear",
      }}
      exit={{ width: 0 }}
      className={"fixed top-0 !bottom-0 overflow-hidden z-[100]"}
    >
      <aside className="flex md:hidden w-max bg-gray-900/80 backdrop-blur-sm border-r border-gray-800 pb-1 flex-col shadow-lg shadow-black h-full">
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
