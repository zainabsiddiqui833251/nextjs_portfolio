import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
        <section className='about flex justify-between items-center w-[100%] pr-[3%] pl-[3%] ' id='about'>
            <div className="about-1 w-[60%]">
                <p className=' p-4 text-[1.2vw]'>I am Zainab Siddiqui, a Frontend Web Developer
                    passionate about creating beautiful, responsive, and dynamic websites. With a strong background in
                    IT and skills in HTML, CSS, JavaScript, TypeScript, Next.js, and Tailwind CSS, I focus on delivering
                    user-friendly and interactive web experiences. I enjoy building projects from scratch and
                    constantly improving my skill set. Currently pursuing a BS in Physiology, I am also expanding my
                    expertise in data analysis, business analytics, and graphic design. I'm always eager to embrace
                    new challenges and bring ideas to life through code.</p>
                <h3 className='uppercase text-[#00ffff] text-[2vw] ' id='proj-head1'>education</h3>
                <div className="education flex justify-between items-center m-[2%] capitalize text-[1.2vw] " id='container'>
                    <div className="edu-1" >
                        <ul className='text-[1.2vw] bg-[#2c2c2c] hover:bg-[#00ffff48]   p-2 w-[80%] rounded-[12px] transform transition duration-300 hover:scale-110'>
                            <li>BS physiology</li>
                            <li>university of karachi</li>
                            <li>jan,2024 - continued</li>
                        </ul >
                        <br />
                        <ul className='text-[1.2vw] bg-[#2c2c2c] p-2 w-[80%] hover:bg-[#00ffff48]  rounded-[12px] transform transition duration-300 hover:scale-110'>
                            <li>INTERMEDIATE ( PRE-MEDICAL )</li>
                            <li>BAMM PECHS GOVT COLLEGE  FOR WOMEN </li>
                            <li>2021-2023</li>
                        </ul>
                    </div>
                    <div className="edu-2">
                        <ul className='text-[1.2vw] bg-[#2c2c2c] p-2 w-[80%] hover:bg-[#00ffff48]  rounded-[12px] transform transition duration-300 hover:scale-110'>
                            <li>frontend developer</li>
                            <li>techforce pakistan</li>
                            <li>sep,2023 - june-2024</li>
                        </ul>
                        <br />
                        <ul className='text-[1.2vw] bg-[#2c2c2c] p-2 w-[80%] hover:bg-[#00ffff48]  rounded-[12px] transform transition duration-300 hover:scale-110'>
                            <li>Certified Cloud Applied Generative AI Engineer</li>
                            <li>GOVERNOR HOUSE</li>
                            <li>FEB,2024 - continued</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="about-2 w-[40%] flex items-center justify-between" id='container' >
                <div>
                    <h2 className='uppercase text-[2vw] text-[#00ffff] ' id='proj-head1'>skills</h2>
                    {/* First column of images and texts */}
                    <div className="flex items-center justify-start ">
                        <Image src='/images/html.png' height={50} width={50} className='m-[7%] w-[50%]' alt='html' />
                        <h4 className='ml-1 text-[1.3vw]'>HTML</h4>
                    </div>
                    <div className="flex items-center justify-start ">
                        <Image src='/images/css.png' height={50} width={50} className='m-[7%] w-[50%]' alt='css' />
                        <h4 className='ml-1 text-[1.3vw]'>CSS</h4>
                    </div>
                    <div className="flex items-center justify-start ">
                        <Image src='/images/js.png' height={50} width={50} className='m-[7%] w-[50%]' alt='js' />
                        <h4 className='ml-1 text-[1.3vw]'>JavaScript</h4>
                    </div>
                    <div className="flex items-center justify-start ">
                        <Image src='/images/ts.png' height={50} width={50} className='m-[7%] w-[50%]' alt='ts' />
                        <h4 className='ml-1 text-[1.3vw]'>TypeScript</h4>
                    </div>
                    <div className="flex items-center justify-start ">
                        <Image src='/images/react.png' height={50} width={50} className='m-[7%] w-[50%]' alt='react' />
                        <h4 className='ml-1 text-[1.3vw]'>React</h4>
                    </div>
                </div>

                {/* Second column of images and texts */}
                <div>
                    <div className="flex items-center justify-start ">
                        <Image src='/images/next.png' height={50} width={50} className='m-[7%] w-[50%]' alt='nextjs' />
                        <h4 className='ml-1 text-[1.3vw]'>Next.js</h4>
                    </div>
                    <div className="flex items-center justify-start ">
                        <Image src='/images/tailwind.png' height={50} width={50} className='m-[7%] w-[50%]' alt='tailwind' />
                        <h4 className='ml-1 text-[1.3vw]'>Tailwind CSS</h4>
                    </div>
                    <div className="flex items-center justify-start ">
                        <Image src='/images/bootstrap.png' height={50} width={50} className='m-[7%] w-[50%]' alt='bootstrap' />
                        <h4 className='ml-1 text-[1.3vw]'>Bootstrap</h4>
                    </div>
                    <div className="flex items-center justify-start ">
                        <Image src='/images/firebase.png' height={50} width={50} className='m-[7%] w-[50%]' alt='firebase' />
                        <h4 className='ml-1 text-[1.3vw]'>Firebase</h4>
                    </div>
                    <div className="flex items-center justify-start ">
                        <Image src='/images/netlify.png' height={50} width={50} className='m-[7%] w-[50%]' alt='netlify' />
                        <h4 className='ml-1 text-[1.3vw]'>Netlify</h4>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default About