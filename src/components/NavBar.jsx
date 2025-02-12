import React from 'react'
import { Link } from 'react-scroll'
import pic from "../../public/img/Roshan_Yadav.webp"
import { useState } from 'react';
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
// import {pdf} from "../../public/Roshan_Yadav_Resume.pdf"





function NavBar() {
    const [menu, setmenu] = useState(true)
    return (
        <>
            <div className="flex max-w-full h-18 container bg-black text-white justify-between items-center px-4 py-2 md:px-10 lg:px-10 fixed top-0 z-10">
                <Link to="Home"
                    smooth={true}
                    duration={500}
                    activeClass="active"
                    title='Home'
                    as="a"
                    href='/#Home'
                ><div className="logo hover:cursor-pointer">
                        <div className='flex gap-2'>
                            {/* <img className='h-12 w-15 rounded-full' src={pic} alt="" /> */}
                            <div className="info flex flex-col justify-center items-start md:pl-14 pt-2">
                                <h2 className='text-xl font-semibold'>Roshan Yadav</h2>
                                <p className='text-sm opacity-80'>
                                    <span className='text-green-500 font-semibold text-lg'>&lt;</span>
                                    Web Developer
                                    <span className='text-green-500 font-semibold text-lg'>/&gt;</span>
                                </p>
                            </div>
                        </div>
                    </div></Link>
                <div className="ul hidden md:flex gap-3 items-center pr-11">
                    <ul className='flex gap-4'>
                        <li className='hover:cursor-pointer hover:scale-105 duration-150 hover:text-red-600'>
                            <Link to="Home"
                                smooth={true}
                                duration={500}
                                offset={-70}
                                activeClass="active"
                                as="a"
                                href='/#Home'
                            >Home</Link></li>
                        <li className='hover:cursor-pointer hover:scale-105 duration-150 hover:text-red-600'>
                            <Link to="About"
                                smooth={true}
                                duration={500}
                                offset={-70}
                                activeClass="active"
                                as="a"
                                href='/#About'
                            >About</Link></li>
                        <li className='hover:cursor-pointer hover:scale-105 duration-150 hover:text-red-600'>
                            <Link to="Project"
                                smooth={true}
                                duration={500}
                                offset={-70}
                                activeClass="active"
                                as="a"
                                href='/#Project'
                            >Projects</Link></li>
                        <li className='hover:cursor-pointer hover:scale-105 duration-150 hover:text-red-600'>
                            <Link to="Contact"
                                smooth={true}
                                duration={500}
                                offset={-70}
                                activeClass="active"
                                as="a"
                                href='/#Contact'
                            >Contact</Link></li>
                    </ul>
                    <a href="https://drive.google.com/file/d/12Iy3FE6PihXesqngcH7wk_QiqoSTciFF/view" target='_blank' title='Resume'><button
                        className='border px-2 py-1 rounded-full hover:cursor-pointer hover:scale-105 duration-150 bg-red-600'>Resume</button></a>
                </div>
                <div className="menu flex flex-col md:hidden px-4" onClick={() => setmenu(!menu)}>{menu ? <TiThMenu size={30} /> : <IoClose size={30} />}
                </div>

            </div>

            {!menu && (
                <div className="ul md:hidden flex bg-black text-white px-4 py-[20%] h-full mt-5 fixed top-7 right-0 z-10">
                    <ul className='flex  flex-col gap-4 items-center w-full px-5'>
                        <li className='hover:cursor-pointer hover:scale-105 duration-150 hover:text-red-600'>
                            <Link to="Home"
                                onClick={() => setmenu(!menu)}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                activeClass="active"
                                as="a"
                                href='/#Home'
                            >Home</Link></li>
                        <li className='hover:cursor-pointer hover:scale-105 duration-150 hover:text-red-600'>
                            <Link to="About"
                                onClick={() => setmenu(!menu)}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                activeClass="active"
                                as="a"
                                href='/#About'
                            >About</Link></li>
                        <li className='hover:cursor-pointer hover:scale-105 duration-150 hover:text-red-600'>
                            <Link to="Project"
                                onClick={() => setmenu(!menu)}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                activeClass="active"
                                as="a"
                                href='/#Project'
                            >Projects</Link></li>
                        <li className='hover:cursor-pointer hover:scale-105 duration-150 hover:text-red-600'>
                            <Link to="Contact"
                                onClick={() => setmenu(!menu)}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                activeClass="active"
                                as="a"
                                href='/#Contact'
                            >Contact</Link></li>
                        <a href="https://drive.google.com/file/d/12Iy3FE6PihXesqngcH7wk_QiqoSTciFF/view" target='_blank' title='Resume'><button
                            className='border px-2 py-1 rounded-full hover:cursor-pointer hover:scale-105 duration-150 hover:bg-red-600'>Resume</button></a>
                    </ul>

                </div>)}
        </>
    )
}

export default NavBar
