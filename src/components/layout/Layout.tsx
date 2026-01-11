import Content from "./Content";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout: React.FC = () => {
  return (
    <div className="flex w-full bg-base">
      <Sidebar />
      <div className="flex relative flex-col w-full  h-dvh">
        <Navbar />
        <Content />
      </div>
    </div>
  );
};

export default Layout;
