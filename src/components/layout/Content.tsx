import { Outlet } from "react-router-dom";

const Content = () => {
  return (
    <main className=" overflow-y-scroll">
      <Outlet />
    </main>
  );
};

export default Content;
