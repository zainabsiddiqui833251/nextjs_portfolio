'use client'
import React, { useState } from 'react'; // Import useState
import Link from 'next/link';
import Chat from '../components/chat'; // Adjust the path as necessary

const Navbar = () => {
  const [isChatOpen, setChatOpen] = useState(false); // State to control chat overlay

  const toggleChat = () => {
    setChatOpen(!isChatOpen); // Toggle chat overlay
  };

  return (
    <div className='nav flex justify-between w-[100%] p-[1%] bg-[#2c2c2c] text-[#00ffff] '>
      <div className="logo nav-sec text-[2vw] font-greatVibes font-black ml-[3%]">
        @Z.Sidd
      </div>
      <div className="links nav-sec w-[40%]">
        <ul className='flex justify-between items-center mt-2 text-[1.5vw] text-[#a09f9f] uppercase'>
          <li>
            <Link href="#about" className='hover:text-[#00ffff]'>
              <i className="fa-solid fa-user text-[#00ffff]"></i>&#32;About
            </Link>
          </li>
          <li>
            <Link href="#skills" className='hover:text-[#00ffff]'>
              <i className="fa-solid fa-code text-[#00ffff]"></i> &#32;Skills
            </Link>
          </li>
          <li>
            <Link href="#projects" className='hover:text-[#00ffff]'>
              <i className="fa-solid fa-laptop-code text-[#00ffff]"></i> &#32;MY WORK
            </Link>
          </li>
          <li>
            <Link href="#contact" className='hover:text-[#00ffff]'>
              <i className="fa-solid fa-file-contract text-[#00ffff]"></i>&#32;Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="chat-sec w-[15%]">
        <button
          className='border-solid border-[2px] text-[1.2vw] border-[#00ffff] p-2 rounded-[10px] hover:bg-[#00ffff] hover:text-[#070606] mr-[3%]'
          onClick={toggleChat}
        >
          <i className="fa-solid fa-message"></i> Start Chat
        </button>
      </div>

      {/* Overlay Chat Component */}
      {isChatOpen && (
        <div className="overlay">
          <div className="overlay-content">
            <button onClick={toggleChat} className="close-button">Close</button>
            <Chat />
          </div>
        </div>
      )}
      
     
    </div>
  );
}

export default Navbar;
