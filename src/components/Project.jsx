import React from 'react'
import x from '../../public/X.png'
import SPC from '../../public/SPC-1.png'
import RCS from '../../public/Dashboard Page.png'
import NC from '../../public/Netflix Clone - 1.png'
import ULB from '../../public/ULB - About Page.png'
import RPS from '../../public/Rock-paper-scissors.png'
import CC from '../../public/Currency Converter.png'
import AC from '../../public/Amazon - 1.png'

function Project() {
    return (
        <>
            <div name="Project"
             className="project flex flex-col justify-center items-center">
                <h1 className='flex justify-center items-center mb-4 text-2xl hover:scale-125 duration-150 hover:text-red-600 w-[50vw]'>Project</h1>
                <div className="flex flex-col xl:flex-row xl:flex-wrap justify-center items-center w-[97vw]">
                    <div className="flex flex-col items-center py-4 w-[90%] h-[100%]  xl:w-[30%] xl:px-14 hover:scale-95 border-b-2 xl: border-none mb-2 xl:mb-5 gap-5">
                        <a href="https://github.com/Roshan544/X.com-Clone" target='_blank'><img className='w-[100%] mb-2' src={x} alt="" />
                        <p className='flex justify-center'>Twitter Clone</p></a>
                    </div>
                    <div className="flex flex-col items-center py-4 w-[90%] h-[100%]  xl:w-[30%] xl:px-14 hover:scale-95 border-b-2 xl: border-none mb-2 xl:mb-5 gap-5">
                        <a href="https://github.com/Roshan544/Spotify-Clone" target='_blank'><img className='w-[100%] mb-2' src={SPC} alt="" />
                        <p className='flex justify-center'>Spotify Clone</p></a>
                    </div>
                    <div className="flex flex-col items-center py-4 w-[90%] h-[100%]  xl:w-[30%] xl:px-14 hover:scale-95 border-b-2 xl: border-none mb-2 xl:mb-5 gap-5">
                        <a href="https://github.com/Roshan544/RUDRA_CYBERSECURITY_PROJECT" target='_blank'><img className='w-[100%] mb-2' src={RCS} alt="" />
                        <p className='flex justify-center'>Rudra CyberSecurity</p></a>
                    </div>
                    <div className="flex flex-col items-center py-4 w-[90%] h-[100%]  xl:w-[30%] xl:px-14 hover:scale-95 border-b-2 xl: border-none mb-2 xl:mb-5 gap-5">
                        <a href="https://github.com/Roshan544/Netflix-Clone" target='_blank'><img className='w-[100%] mb-2' src={NC} alt="" />
                        <p className='flex justify-center'>Netfix Clone</p></a>
                    </div>
                    <div className="flex flex-col items-center py-4 w-[90%] h-[100%]  xl:w-[30%] xl:px-14 hover:scale-95 border-b-2 xl: border-none mb-2 xl:mb-5 gap-5">
                        <a href="https://github.com/Roshan544/UnityLingual-Bharat-Language-Translator-System" target='_blank'><img className='w-[100%] mb-2' src={ULB} alt="" />
                        <p className='flex justify-center'>Unity Lingual Bharat</p></a>
                    </div>
                    <div className="flex flex-col items-center py-4 w-[90%] h-[100%]  xl:w-[30%] xl:px-14 hover:scale-95 border-b-2 xl: border-none mb-2 xl:mb-5 gap-5">
                        <a href="https://github.com/Roshan544/Rock_Paper_Sscisscors" target='_blank'><img className='w-[100%] mb-2' src={RPS} alt="" />
                        <p className='flex justify-center'>Rock Paper Scissors</p></a>
                    </div>
                    <div className="flex flex-col items-center py-4 w-[90%] h-[100%]  xl:w-[30%] xl:px-14 hover:scale-95 border-b-2 xl: border-none mb-2 xl:mb-5 gap-5">
                        <a href="https://github.com/Roshan544/Currency-Converter" target='_blank'><img className='w-[100%] mb-2' src={CC} alt="" />
                        <p className='flex justify-center'>Currency Converter</p></a>
                    </div>
                    <div className="flex flex-col items-center py-4 w-[90%] h-[100%]  xl:w-[30%] xl:px-14 hover:scale-95 border-b-2 xl: border-none mb-2 xl:mb-5 gap-5">
                        <a href="https://github.com/Roshan544/Amazon-Clone" target='_blank'><img className='w-[100%] mb-2' src={AC} alt="" />
                        <p className='flex justify-center'>Amazon Clone</p></a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Project
