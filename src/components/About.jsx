import React from 'react'
import HTML from '../../public/HTML.svg'
import CSS from '../../public/CSS.svg'
import JS from '../../public/JS.svg'
import REACT from '../../public/REACT.svg'
import TAILWIND from '../../public/TAILWIND.svg'
import GIT from '../../public/GIT.svg'
import GITHUB from '../../public/GITHUB.svg'

function About() {
    return (
        <>
            <div name="About" 
            className=' bg-black text-white flex flex-col justify-center items-center'>
                <div className='flex flex-col w-[80vw] justify-center items-center'>
                    <h1 className='flex text-3xl hover:scale-125 duration-150 hover:text-red-600'>About</h1>
                    <p className='pl-1 mt-2 text-justify text-sm opacity-75'>I am a recent graduate from Mumbai University with a degree in Artificial Intelligence and Machine Learning. I specialize in front-end development, with strong skills in HTML, CSS, and JavaScript, along with proficiency in Tailwind CSS and the React library. Throughout my journey, I have successfully completed several projects focused on building responsive and user-friendly websites. I am passionate about developing clean, efficient, and visually appealing web applications, while continuously learning and exploring new technologies to enhance my expertise.</p>
                </div>
                <br />
                <div className='Edu'>
                    <h1 className='flex justify-center text-2xl mb-3 hover:scale-125 duration-150 hover:text-red-600'>Education</h1>
                    <table className="flex flex-row justify-between mx-3">
                        <tbody className=''>
                            <tr className='text-sm flex flex-col gap-0 md:flex-row md:gap-20  px-5 mb-2 mx-4 md:mx-2 border py-3 hover:scale-x-105'>
                                <td className='flex flex-col mt-2 md:w-[20%]'>
                                    <span>12/2021 - 06/2024</span>
                                    <span className='text-xs opacity-80'>Kaman Road - Mumbai</span>
                                </td>
                                <td className='flex flex-col mt-2 md:w-[50%]'>
                                    <span>B.E Artificial Intelligence & Machine Learning</span>
                                    <span className='text-xs opacity-80'>Universal College of Engineering</span>
                                </td>
                                <td className='flex flex-col mt-2 md:w-[10%]'>
                                    <span>CGPI 8.12 / 10</span>
                                </td>
                            </tr>
                            <tr className='text-sm flex flex-col gap-0 md:flex-row md:gap-20  px-5 mb-2 mx-4 md:mx-2 border py-3 hover:scale-x-105'>
                                <td className='flex flex-col mt-2 md:w-[20%]'>
                                    <span>10/2018 - 05/2021</span>
                                    <span className='text-xs opacity-80'>Bhayandar - Mumbai
                                    </span>
                                </td>
                                <td className='flex flex-col mt-2 md:w-[50%]'>
                                    <span>Diploma in Information Technology</span>
                                    <span className='text-xs opacity-80'>Pravin Patil College of Diploma Engineering
                                    </span>
                                </td>
                                <td className='flex flex-col mt-2 md:w-[10%]'>
                                    <span>Percentage 82 / 100</span>
                                </td>
                            </tr>
                            <tr className='text-sm flex flex-col gap-0 md:flex-row md:gap-20  px-5 mb-2 mx-4 md:mx-2 border py-3 hover:scale-x-105'>
                                <td className='flex flex-col mt-2 md:w-[20%]'>
                                    <span>06/2017 - 04/2018</span>
                                    <span className='text-xs opacity-80'>Malad - Mumbai</span>
                                </td>
                                <td className='flex flex-col mt-2 md:w-[50%]'>
                                    <span>Maharashtra State Board of Secondary and Higher Secondary Education</span>
                                    <span className='text-xs opacity-80'>Swami Vivekanand High School
                                    </span>
                                </td>
                                <td className='flex flex-col mt-2 md:w-[10%]'>
                                    <span>Percentage 67.4 / 100</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='Skills flex flex-col mx-3 mb-5 justify-center items-center mt-5'>
                    <h1 className='flex justify-center text-2xl mt-4 mb-3 hover:scale-125 duration-150 hover:text-red-600 w-[50vw]'>Skills</h1>
                    <div className="flex flex-col md:flex-row  md:flex card mb-5 md:justify-between md:items-center w-[90vw]">
                        <div className="flex flex-col items-center p-1 hover:scale-125">
                            <img className='w-[15%] md:w-[20%] mb-2' src={HTML} alt="" />
                            <p className='hidden md:block'>HTML</p>
                        </div>
                        <div className="flex flex-col items-center p-1 hover:scale-125">
                            <img className='w-[15%] md:w-[20%] mb-2' src={CSS} alt="" />
                            <p className='hidden md:block'>CSS</p>
                        </div>
                        <div className="flex flex-col items-center p-1 hover:scale-125">
                            <img className='w-[15%] md:w-[20%] mb-2' src={JS} alt="" />
                            <p className='hidden md:block'>JS</p>
                        </div>
                        <div className="flex flex-col items-center p-1 hover:scale-125">
                            <img className='w-[15%] md:w-[20%] mb-2' src={REACT} alt="" />
                            <p className='hidden md:block'>REACT</p>
                        </div>
                        <div className="flex flex-col items-center p-1 hover:scale-125">
                            <img className='w-[15%] md:w-[20%] mb-2' src={TAILWIND} alt="" />
                            <p className='hidden md:block'>TAILWIND</p>
                        </div>
                        <div className="flex flex-col items-center p-1 hover:scale-125">
                            <img className='w-[15%] md:w-[20%] mb-2' src={GIT} alt="" />
                            <p className='hidden md:block'>GIT</p>
                        </div>
                        <div className="flex flex-col items-center p-1 hover:scale-125">
                            <img className='w-[15%] md:w-[20%] mb-2' src={GITHUB} alt="" />
                            <p className='hidden md:block'>GITHUB</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About