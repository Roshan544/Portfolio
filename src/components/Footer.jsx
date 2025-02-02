import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";


function Footer() {
    return (
        <>
            <div className="footer flex justify-center opacity-80">
                <div className="flex flex-col mt-24">
                    <div className="img flex justify-center space-x-3">
                        <a href="https://www.facebook.com/profile.php?id=100014189131444" target='_blank'>
                            <FaFacebook size={25} className='hover:cursor-pointer hover:scale-110 duration-150 hover:text-blue-900' /></a>
                        <a href="https://github.com/Roshan544" target='_blank'>
                            <FaGithub size={25} className='hover:cursor-pointer hover:scale-110 duration-150 hover:text-blue-900' /></a>
                        <a href="https://www.instgram.com/roshan._.0707_" target='_blank'>
                            <FaInstagramSquare size={25} className='rounded-full hover:cursor-pointer hover:scale-110 duration-150 hover:text-blue-900' /></a>
                        <a href="https://www.linkedin.com/in/roshan-yadav-81b83b2b1" target='_blank'>
                            <FaLinkedin size={25} className='hover:cursor-pointer hover:scale-110 duration-150 hover:text-blue-900' /></a>
                    </div>
                    <div className="hr mt-8 w-[80vw] md:w-[30vw] items-center"><hr /></div>
                    <div className="copy flex justify-center items-center mt-8">
                        <FaRegCopyright size={20} className='pr-1' />2024 . All right reserved
                    </div>
                    <div className='flex justify-center items-center text-base mb-8'> Created with <img className='w-4 mx-2' src="/heart.svg" alt="" /> by Roshan Yadav</div>
                </div>
            </div >

        </>
    )
}

export default Footer