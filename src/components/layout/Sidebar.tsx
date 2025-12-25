import { NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { menuItems } from "./menu/MenuList";
import { ToggleButton } from "../buttons/ToggleButton";
const Sidebar = () => {
  return (
    <aside className="bg-primary min-h-dvh w-60 flex flex-col justify-between items-start px-10 py-5">
      <div className="flex flex-col gap-y-24">
        <div className="max-w-[3rem]">
          <div className="flex space-x-1 items-center">
            <img className="" src={logo} alt="Dashboard" />
            <p className="text-white font-bold text-xl">Dashboard</p>
          </div>
        </div>
        <div className="">
          <ul className="space-y-4  ">
            {menuItems.map((list) => (
              <li key={list.item}>
                <NavLink
                  to={list.item}
                  className={({ isActive }) =>
                    `flex space-x-4 items-center text-white hover:text-accent
                ${isActive ? "text-accent" : "text-white"}`
                  }
                >
                  <span className="">{list.icon}</span>
                  <span className="text-lg font-bold">{list.item}</span>
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
