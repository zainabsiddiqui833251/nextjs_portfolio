'use client'; // Ensures that the component runs on the client side

import React, { useState } from 'react';
import Link from 'next/link';
import Chat from '../components/chat'; // Adjust the path as necessary

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false); // State to control sidebar visibility
  const [isChatOpen, setChatOpen] = useState(false); // State to control chat overlay

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen); // Toggle sidebar
  };

  const toggleChat = () => {
    setChatOpen(!isChatOpen); // Toggle chat overlay
  };

  return (
    <div>
      {/* Navbar for larger screens */}
      <div className="nav hidden custom-md:flex justify-between w-full p-4 bg-[#2c2c2c] text-[#00ffff]">
        <div className="logo nav-sec text-[2vw] font-greatVibes font-black ml-4">
          <Link href='/'>@Z.Sidd</Link>
        </div>
        <div className="links nav-sec w-[40%]">
          <ul className="flex justify-center gap-11 items-center mt-2 text-[1.5vw] text-[#a09f9f] uppercase">
            <li>
              <Link href="/About" className="hover:text-[#00ffff]">
                <i className="bi bi-info-circle text-[#00ffff]"></i>&#32;About
              </Link>
            </li>
            <li>
              <Link href="/Projects" className="hover:text-[#00ffff]">
                <i className="bi bi-laptop text-[#00ffff]"></i>&#32;MY WORK
              </Link>
            </li>
            <li>
              <Link href="/Contact" className="hover:text-[#00ffff]">
                <i className="bi bi-telephone text-[#00ffff]"></i>&#32;Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="chat-sec w-[15%]">
          <button
            className="border-solid border-2 text-[1.2vw] border-[#00ffff] p-2 rounded-lg hover:bg-[#00ffff] hover:text-[#070606] mr-4"
            onClick={toggleChat}
          >
            <i className="bi bi-chat-left"></i> Start Chat
          </button>
        </div>
      </div>

      {/* Mobile Navbar with Sidebar Toggle */}
      <div className="flex justify-between w-full p-4 bg-[#2c2c2c] text-[#00ffff] custom-md:hidden">
        <div className="logo text-[6vw] font-greatVibes font-black ml-4">
          <Link href='/'>@Z.Sidd</Link>
        </div>
        <div className="menu-icon text-[#00ffff] text-[6vw] mr-4" onClick={toggleSidebar}>
          <i className="bi bi-list"></i> {/* Hamburger menu icon */}
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[60%] bg-[#2c2c2c] text-[#00ffff] transform ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-[1000]`}
      >
        <div className="flex justify-end p-4">
          <button className="text-[#00ffff] text-xl" onClick={toggleSidebar}>
            <i className="bi bi-x-lg"></i> {/* Close icon */}
          </button>
        </div>
        <ul className="flex flex-col items-center gap-6 mt-8 text-[3vw] uppercase">
          <li>
            <Link href="/About" className="hover:text-[#00ffff]" onClick={toggleSidebar}>
            <i className='bi bi-info-circle'></i>&#32;  About
            </Link>
          </li>
          <li>
            <Link href="/Projects" className="hover:text-[#00ffff]" onClick={toggleSidebar}>
              <i className='bi bi-laptop'></i>&#32; MY WORK
            </Link>
          </li>
          <li>
            <Link href="/Contact" className="hover:text-[#00ffff]" onClick={toggleSidebar}>
              <i className='bi bi-telephone'></i>&#32; Contact
            </Link>
          </li>
        </ul>
        <div className="flex justify-center mt-8">
          <button
            className="border-solid border-2 text-[3vw] border-[#00ffff] p-2 rounded-lg hover:bg-[#00ffff] hover:text-[#070606]"
            onClick={toggleChat}
          >
            <i className="bi bi-chat-left"></i>&#32; Start Chat
          </button>
        </div>
      </div>

      {/* Overlay Chat Component */}
      {isChatOpen && (
        <div className="overlay fixed top-0 left-0 right-0 bottom-0 bg-[#000000b3] flex items-center justify-center z-[1000]">
          <div className="overlay-content bg-[#2c2c2c] p-[20px] rounded-[10px] w-[310px] relative">
            <button onClick={toggleChat} className="close-button absolute top-[10px] right-[10px] bg-transparent border-solid border-[red] border-[1px] font-bold cursor-pointer text-[white] bg-[red] rounded-[8px] p-[1%]">
              Close
            </button>
            <Chat />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
