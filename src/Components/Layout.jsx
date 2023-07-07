import React, { useState } from 'react';
import NavBar from './NavBar';
import Siderbar from './Siderbar';

const Layout = ({ children }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="relative font-serif">
      <NavBar onBarsClick={toggleSidebar} className="fixed top-0 left-0 w-full z-10" />
      <div className="flex w-full">
        
        <div className={`transition-all duration-300 mt-16 overflow-auto ${sidebarVisible ? 'w-32' : 'w-0'} ${sidebarVisible ? 'sm:w-56' : 'w-0'} z-20 bg-slate-950  h-screen fixed`}>
          {sidebarVisible && <Siderbar />}
        </div>
        <main className={`transition-all duration-300 flex-grow overflow-auto ${sidebarVisible ? 'ml-32' : 'ml-0'} ${sidebarVisible ? 'sm:ml-56' : 'ml-0'}`}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
