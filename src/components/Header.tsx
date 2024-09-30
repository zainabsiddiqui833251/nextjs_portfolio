import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <header className='header text-[white] w-[100%] flex items-center justify-between' id='home'>
            <div className="header-container-2 border-solid border-[#00ffff] w-[20vw] h-[20vw] rounded-[50%] border-[4px] ml-[15%] relative overflow-hidden">
                <img
                    src="/images/profile.png"
                    alt="profile-pic"
                    className="image absolute top-0 left-0 w-full bg-[#00ffff] h-full object-contain"
                />
            </div>

            <div className="header-container-1 p-[5%] w-[50%] font-[baskervville] mr-[10%]" >
                <h1 className='text-[3.3vw]'>
                    Hello, It&apos;s Me <br />
                    <span>Zainab Siddiqui</span>
                    {/* <span id='title'> frontend developer</span> */}
                    <p id='title' className=' text-[#00ffff] font-[greatVibes]'>a frontend developer</p>
                </h1>
                <div className="social-links">
                    <ul className='flex justify-start  items-center gap-6' >
                        <li className='pb-2'><Link href="#" className='text-[1.5vw]'><i className="bi bi-twitter text-[2vw] hover:text-[#a09f9f] mr-[2%]"></i></Link></li>
                        <li className='pb-2'><Link href="#" className='text-[1.5vw]'><i className="bi bi-linkedin text-[2vw] hover:text-[#a09f9f] mr-[2%]"></i></Link></li>
                        <li className='pb-2'><Link href="#" className='text-[1.5vw]'><i className="bi bi-github text-[2vw] hover:text-[#a09f9f] mr-[2%]"></i></Link></li>
                        <li className='pb-2'><Link href="#" className='text-[1.5vw]'><i className="bi bi-telegram text-[2vw] hover:text-[#a09f9f] mr-[2%]"></i></Link></li>
                        <li className='pb-2'><Link href="#" className='text-[1.5vw]'><i className="bi bi-whatsapp text-[2vw] hover:text-[#a09f9f] mr-[2%]"></i></Link></li>
                    </ul>
                </div>
                <a href="/cv/zs.pdf" download='zs.pdf' className="download-button  ">
                    <button className='border-solid mt-[5%] border-[#00ffff] border-2 text-[#00ffff] p-2 rounded-[10px] hover:font-black text-[1.5vw] hover:text-[black] hover:bg-[#00ffff]'>Download CV</button>
                </a>

            </div>

        </header>
    )
}

export default Header