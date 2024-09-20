import React from 'react'

const Header = () => {
    return (
        <header className='text-[white] w-[100%] flex items-center justify-between' id='home'>
            <div className="header-container-1 p-[5%] w-fit font-[baskervville] ml-[10%]" >
                <h1 className='text-[3.3vw]'>
                    Hello, It's Me <br />
                    <span>Zainab Siddiqui</span>
                    {/* <span id='title'> frontend developer</span> */}
                    <p id='title' className=' text-[#00ffff] font-[greatVibes]'>a frontend developer</p>
                </h1>

                <a href="/cv/zs.pdf" download='zs.pdf' className="download-button  ">
                    <button className='border-solid mt-[5%] border-[#00ffff] border-2 text-[#00ffff] p-2 rounded-[10px] hover:font-black text-[1.5vw] hover:text-[black] hover:bg-[#00ffff]'>Download CV</button>
                </a>

            </div>
            <div className="header-container-2 border-solid border-[#00ffff] w-[20vw] h-[20vw] rounded-[50%] border-[4px] mr-[15%]">
                {/* <Image src='/images/profile.png' width={100} height={100} alt='profile-pic' className='image'>

                </Image> */}
            </div>
        </header>
    )
}

export default Header