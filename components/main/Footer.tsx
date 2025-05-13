import React from "react";

import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row lg:mx-96 justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-row items-center justify-start">
                    <div className="font-bold text-[16px]">Contact Us</div>
                   <p className="flex flex-row items-center my-[15px] cursor-pointer">
                     
                        <span className="text-[15px] ml-[6px]">01115166255</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                      
                        <span className="text-[15px] ml-[6px]">0222605347</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  
                        <a  href="https://itgateacademy.com" className="text-[15px] ml-[6px]">Visite Our Site</a>    
                    </p>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; Eng Ahmed Gamal @2023 . All rights reserved
            </div>
        </div>

        <div className="lg:text-end text-center lg:mx-40">
            <h3>BEST WISHES ENG Ahmed Halabi ♡</h3>
        </div>
    </div>
  )
}

export default Footer