import React from 'react'
import Link from 'next/link'


const Footer = () => {
    return (
        <footer className='w-[100%] flex justify-between p-[3%] bg-[#2c2c2c]  text-[#00ffff]'>
            <div className="logo w-[25%] mt-[2%]">
                <div className="logo nav-sec text-[3vw] font-greatVibes font-black ml-[3%] text-center">
                    @Z.Sidd
                </div>
                <div className="copyright text-[1.2vw]">
                    <p><i className="bi-regular bi-copyright"></i>2023 Zainab Siddiqui. All rights reserved.</p>
                </div>
            </div>
            <div className="nav-links w-[25%] pl-[5%]">
                <ul className='capitalize text-[1.5vw]'>
                    <li><i className="bi-solid bi-chevron-right"></i><Link href='#home' className='ml-[5%] hover:ml-[15%] text-[#a09f9f] hover:text-[#00ffff]'>home</Link></li>
                    <li><i className="bi-solid bi-chevron-right"></i><Link href='#about' className='ml-[5%] hover:ml-[15%] text-[#a09f9f] hover:text-[#00ffff]'>about</Link></li>
                    <li><i className="bi-solid bi-chevron-right"></i><Link href='#skills' className='ml-[5%] hover:ml-[15%] text-[#a09f9f] hover:text-[#00ffff]' >skills</Link></li>
                    <li><i className="bi-solid bi-chevron-right"></i><Link href='#projects' className='ml-[5%] hover:ml-[15%] text-[#a09f9f] hover:text-[#00ffff]'>my work</Link></li>
                    <li><i className="bi-solid bi-chevron-right"></i><Link href='#contact' className='ml-[5%] hover:ml-[15%] text-[#a09f9f] hover:text-[#00ffff]'>contact me</Link></li>
                </ul>
            </div>
            <div className="contact-info w-25%">
                <ul className='text-[1.5vw]'>
                    <li><i className="bi bi-phone"></i> +92 313 8659252</li>
                    <li><i className="bi bi-envelope"></i>  zs833251@gmail.com</li>
                    <li><i className="bi bi-globe"></i> www.example.com</li>
                    <li><i className="bi bi-geo-alt"></i>  Plot A 1033, Sector 11-A <br /> North Karachi Twp <br /> Karachi ,Sindh</li>
                </ul>
            </div>
            <div className="social-links w-[25%] capitalize ">
                <ul className='pl-[25%] ' >
                    <li className='pb-2'><Link href="#" className='text-[1.5vw]'><i className="bi bi-twitter text-[2vw] hover:text-[#a09f9f] mr-[2%]"></i>twitter</Link></li>
                    <li className='pb-2'><Link href="#" className='text-[1.5vw]'><i className="bi bi-linkedin text-[2vw] hover:text-[#a09f9f] mr-[2%]"></i>linkedin</Link></li>
                    <li className='pb-2'><Link href="#" className='text-[1.5vw]'><i className="bi bi-github text-[2vw] hover:text-[#a09f9f] mr-[2%]"></i>github</Link></li>
                    <li className='pb-2'><Link href="#" className='text-[1.5vw]'><i className="bi bi-telegram text-[2vw] hover:text-[#a09f9f] mr-[2%]"></i>telegram</Link></li>
                    <li className='pb-2'><Link href="#" className='text-[1.5vw]'><i className="bi bi-whatsapp text-[2vw] hover:text-[#a09f9f] mr-[2%]"></i>whatsapp</Link></li>
                </ul>

            </div>
        </footer>
    )
}

export default Footer