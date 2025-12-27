import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { menuItems } from "./menu/MenuList";
import { ToggleButton } from "../buttons/ToggleButton";
const Sidebar = () => {
  return (
    <aside className="bg-primary min-h-dvh w-72 flex flex-col justify-between items-start px-6 py-5">
      <div className="flex flex-col gap-y-24">
        <div className="max-w-[3rem]">
          <div className="flex space-x-1 items-center justify-center w-full">
            <img className="" src={logo} alt="Dashboard" />
          </div>
        </div>
        <div className="">
          <ul className="space-y-3  ">
            {menuItems.map((list) => (
              <li key={list.item} >
                <NavLink
                  to={list.item}
                  className={({ isActive }) =>
                    `flex space-x-4 items-center w-44 px-2 py-1.5 rounded-lg hover:bg-accent hover:text-primary
                ${isActive ? "text-primary bg-accent" : "text-white"}`
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
      <div className="mb-10">
        <ToggleButton />
      </div>
    </aside>
  );
};

export default Sidebar;
