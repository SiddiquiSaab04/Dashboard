import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { menuItems } from "./menu/MenuList";
import { ToggleButton } from "../buttons/ToggleButton";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
const Sidebar = () => {
  const isSidebarOpen = useSelector((state: RootState) => state.auth.sidebarOpen);
  return (
    <aside className={`${isSidebarOpen ? "bg-primary h-dvh w-72 flex flex-col justify-between items-start py-5  " : "bg-primary h-dvh w-16 flex flex-col justify-between items-start py-5 "} transition-all duration-300`}>
      <div className="flex flex-col gap-y-24 w-full">
        <div className={`${isSidebarOpen ? "max-w-[3rem]  mx-8" : "max-w-[1.5rem] mx-5"}`}>
          <div className="flex space-x-1 items-center justify-center w-full">
            <img className="" src={logo} alt="Dashboard" />
          </div>
        </div>
        <div className={`${isSidebarOpen ? "w-full" : "w-16"} transition-all duration-300`}>
          <ul className="space-y-5  ">
            {menuItems.map((list) => (
              <li key={list.item} >
                <NavLink
                  to={list.item}
                  className={({ isActive }) =>
                    `flex space-x-4 items-center px-6 py-1.5  hover:border-r-4 hover:border-r-pop hover:bg-accent 
                ${isActive ? "text-text bg-accent border-r-4 border-r-pop" : "text-text"}`
                  }
                >
                  <span className="">{list.icon}</span>
                  <span className={isSidebarOpen ? "text-lg font-semibold" : "text-lg font-semibold hidden"}>{list.item}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={`${isSidebarOpen ? "mx-10" : "mx-2"}`}>
        <ToggleButton />
      </div>
    </aside>
  );
};

export default Sidebar;
