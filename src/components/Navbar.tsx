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
              <i className="bi bi-info-circle text-[#00ffff]"></i>&#32;About
            </Link>
          </li>
          <li>
            <Link href="#skills" className='hover:text-[#00ffff]'>
              <i className="bi-solid bi-code text-[#00ffff]"></i> &#32;Skills
            </Link>
          </li>
          <li>
            <Link href="#projects" className='hover:text-[#00ffff]'>
              <i className="bi bi-laptop text-[#00ffff]"></i> &#32;MY WORK
            </Link>
          </li>
          <li>
            <Link href="#contact" className='hover:text-[#00ffff]'>
              <i className="bi bi-telephone text-[#00ffff]"></i>&#32;Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="chat-sec w-[15%]">
        <button
          className='border-solid border-[2px] text-[1.2vw] border-[#00ffff] p-2 rounded-[10px] hover:bg-[#00ffff] hover:text-[#070606] mr-[3%]'
          onClick={toggleChat}
        >
          <i className="bi-solid bi-message"></i> Start Chat
        </button>
      </div>

      {/* Overlay Chat Component */}
      {isChatOpen && (
        <div className="overlay fixed top-0 left-0 right-0 bottom-0 bg-[#000000b3] flex items-center justify-center z-[1000]">
          <div className="overlay-content bg-[#2c2c2c] p-[20px] rounded-[10px] w-[310px] relative">
            <button onClick={toggleChat} className="close-button absolute top-[10px] right-[10px] bg-transparent border-solid border-[red] border-[1px] font-bold cursor-pointer text-[white] bg-[red] rounded-[8px] text-[1.2vw] p-[1%] ">Close</button>
            <Chat />
          </div>
        </div>
      )}
      
     
    </div>
  );
}

export default Navbar;
