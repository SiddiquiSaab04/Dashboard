import NavbarIcon from "../icons/NavbarIcon";
import { Bell , Settings } from "lucide-react";
const Navbar = () => {
  return (
       <nav className="flex items-center justify-between w-full h-20 bg-base px-10 
    ">
      <div className="cursor-pointer">
        <NavbarIcon />
      </div>
      <div className="flex gap-x-4 items-center">
        <div className="relative bg-secondary  p-2.5 rounded-full cursor-pointer hover:scale-105 transition-transform">
          <Bell size={18} className="text-accent" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-pop rounded-full"></span>
        </div>
        <div className="p-2.5 bg-secondary rounded-full cursor-pointer hover:scale-105 transition-transform">
          <Settings size={20} className="text-accent" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar;