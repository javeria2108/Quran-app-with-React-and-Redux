import React, { useState } from 'react';
import NavBar from './NavBar';
import Siderbar from './Siderbar';

const Layout = ({ children }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="relative">
      <NavBar onBarsClick={toggleSidebar} className="fixed top-0 left-0 w-full z-10" />
      <div className="flex w-full">
        <div className={`transition-all duration-300 mt-16 overflow-auto ${sidebarVisible ? 'w-64' : 'w-0'} z-20 bg-white h-screen fixed`}>
          {sidebarVisible && <Siderbar />}
        </div>
        <main className="flex-grow overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
