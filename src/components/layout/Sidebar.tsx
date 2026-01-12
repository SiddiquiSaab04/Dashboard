import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { menuItems } from "./menu/MenuList";
import { ToggleButton } from "../buttons/ToggleButton";
const Sidebar = () => {
  return (
    <aside className="bg-primary h-dvh w-72 flex flex-col justify-between items-start py-5">
      <div className="flex flex-col gap-y-24 w-full">
        <div className="max-w-[3rem]">
          <div className="flex space-x-1 items-center justify-center w-full mx-8">
            <img className="" src={logo} alt="Dashboard" />
          </div>
        </div>
        <div className="w-full">
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
                  <span className="text-lg font-semibold">{list.item}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-10">
        <ToggleButton />
      </div>
    </aside>
  );
};

export default Sidebar;
