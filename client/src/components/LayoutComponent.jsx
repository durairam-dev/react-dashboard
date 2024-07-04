import { useState } from "react";
import Header from "./layout/HeaderComponent";
import Sidebar from "./layout/SidebarComponent";
import Content from "./layout/ContentComponent";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex flex-col flex-1 w-full">
        <Header toggleSidebar={toggleSidebar} />
        <Content>{children}</Content>
      </div>
    </div>
  );
}
