import Content from "./Content";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout: React.FC = () => {
  return (
    <div className="flex bg-base">
      <Sidebar />
      <div className="flex relative flex-col w-full h-dvh overflow-x-hidden">
        <Navbar />
        <Content />
      </div>
    </div>
  );
};

export default Layout;
