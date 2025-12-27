import NavbarIcon from "../icons/NavbarIcon";
import { Bell, Settings } from "lucide-react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
const Navbar = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  console.log(user);
  return (
    <nav
      className="flex items-center justify-between w-full h-20 bg-primary px-10 
    "
    >
      <div className="cursor-pointer">
        <NavbarIcon />
      </div>
      <div className="flex gap-x-4 items-center">
        <div className="relative bg-accent border border-secondary  p-2.5 rounded-full cursor-pointer hover:scale-105 transition-transform">
          <Bell size={18} className="text-secondary" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-pop rounded-full"></span>
        </div>
        <div className="p-2.5 bg-accent border border-secondary rounded-full cursor-pointer hover:scale-105 transition-transform">
          <Settings size={20} className="text-secondary" />
        </div>
        <div className="flex items-center gap-x-2">
          <img
            src={user?.image}
            alt="userImage"
            className="w-10 h-10 rounded-full border border-secondary"
          />
          <div className="flex flex-col">
            <p className="text-primary text-sm font-normal">{user?.firstName} </p>
            <p className="text-primary text-sm font-normal">{user?.lastName}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
