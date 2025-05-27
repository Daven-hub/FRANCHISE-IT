import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react'
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vh] bg-accent/5 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[15%] right-[10%] w-[35vw] h-[35vh] bg-accent/5 rounded-full blur-[150px]"></div>
        <div className="absolute top-[60%] left-[20%] w-[25vw] h-[25vh] bg-white/5 rounded-full blur-[120px]"></div>
      </div>

      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout