import NavbarIcon from "../icons/NavbarIcon";
import { LogOutIcon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { useNavigate } from "react-router";
import { logout } from "../../feature/authSlice";
const Navbar = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <nav
      className="flex items-center justify-between w-full h-20 py-4 bg-primary px-10 
    "
    >
      <div className="cursor-pointer">
        <NavbarIcon />
      </div>
      <div className="flex gap-x-4 items-center">
        {/* <div className="p-2.5 bg-pop border border-accent rounded-full cursor-pointer hover:scale-105 transition-transform">
          <Settings size={20} className="text-text" />
        </div> */}
        <div className="flex items-center gap-x-5">
          <img
            src={user?.image}
            alt="userImage"
            className="w-10 h-10 rounded-full  border-2 border-pop"
          />
          <div className="flex flex-col">
            <p className="text-text text-lg font-normal">
              {user?.firstName}{" "}
            </p>
          </div>
          <div className="bg-pop p-2 rounded-full">
          <LogOutIcon className="text-primary" onClick={handleLogout} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
