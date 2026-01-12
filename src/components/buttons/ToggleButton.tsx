import type{ RootState } from "../../store/store";
import { useSelector } from "react-redux";
export const ToggleButton = () => {
  const isSidebarOpen = useSelector((state: RootState) => state.auth.sidebarOpen);
  return (
    <div>
      <label className={`switch ${isSidebarOpen ? "w-[10rem]" : "w-[2.5rem]"}`}>
        <input type="checkbox" />
        <span className="slider"></span>
      </label>
    </div>
  );
};
