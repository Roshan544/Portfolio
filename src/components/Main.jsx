import React from 'react'
import { ReactTyped } from "react-typed";
import pic from "../../public/Roshan_Yadav.png"
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";


function Home() {
    return (
        <>
            <div name="Home"
            className=' bg-black text-white flex flex-col-reverse md:flex-row h-[50] my-16 px-10 gap-5 md:px-24'>
                <div className="left md:w-1/2 w-full flex flex-col justify-center">
                    <div className="info">
                        <p className='text-xl md:text-xl py-1'>Welcome To My Profile...</p>
                        <h2 className='text-3xl md:text-4xl'>Hello , <ReactTyped
                            className='text-red-500 text-2xl'
                            strings={[
                                "Coder",
                                "Developer",
                                "I'm Roshan",
                            ]}
                            typeSpeed={40}
                            backSpeed={50}
                            loop
                        >
                            <input type="button" className='bg-black text-red-500' />
                        </ReactTyped>
                        </h2>
                        <p className='text-sm mt-5 text-justify'>I am Roshan Yadav, a dedicated web developer specializing in creating high-performance, responsive websites. With a strong foundation in front-end technologies such as HTML, CSS, JavaScript, and frameworks like React and Tailwind CSS, I focus on delivering user-centric solutions that are both functional and visually appealing. I am committed to continuously enhancing my expertise in web development to ensure seamless and efficient digital experiences. Let’s discuss how I can contribute to your next project.</p>
                    </div>
                    <div className="icons md:flex md:justify-between mt-8 px-5">
                        <div className="social flex flex-col items-center">
                            <h3>Available on</h3>
                            <div className="img">
                                <ul className='flex space-x-3 py-1'>
                                    <li>
                                        <a href="https://github.com/Roshan544" target='_blank'>
                                            <FaGithub size={25} className='hover:cursor-pointer hover:scale-110 duration-150 hover:text-red-400' /></a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/profile.php?id=100014189131444" target='_blank'>
                                            <FaFacebook size={25} className='hover:cursor-pointer hover:scale-110 duration-150 hover:text-blue-900' /></a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/roshan-yadav-81b83b2b1" target='_blank'>
                                            <FaLinkedin size={25} className='hover:cursor-pointer hover:scale-110 duration-150 hover:text-blue-600' /></a>
                                    </li>
                                    <li>
                                        <a href="https://www.instgram.com/roshan._.0707_" target='_blank'>
                                            <FaInstagramSquare size={25} className='hover:cursor-pointer hover:scale-110 duration-150 hover:text-blue-800' /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="lang flex flex-col items-center mt-5 md:mt-0">
                            <h3>Working On</h3>
                            <div className="img flex space-x-3 py-1">
                                <DiMongodb size={25} className='hover:cursor-pointer hover:scale-110 duration-150 hover:text-green-800' />
                                <FaNodeJs size={25} className='hover:cursor-pointer hover:scale-110 duration-150 hover:text-green-400' />
                                <FaJs size={25} className='hover:cursor-pointer hover:scale-110 duration-150 hover:text-yellow-400' />
                                <FaReact size={25} className='hover:cursor-pointer hover:scale-110 duration-150 hover:text-blue-400' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right md:w-1/2 w-full flex justify-center items-center mt-5">
                    <img className='rounded-full h-[85%]' src={pic} alt="" /></div>

            </div>
        </>
    )
}

export default Home
