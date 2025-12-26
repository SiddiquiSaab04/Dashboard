import { Outlet } from "react-router-dom";

const Content = () => {
  return (
    <main className="h-full">
      <Outlet />
    </main>
  );
};

export default Content;
