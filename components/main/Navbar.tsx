
import React from "react";
export const Navbar = () => {
  return (
    <div className="w-full h-[90px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 ">
      <div className="w-full h-full flex flex-row items-center justify-center m-auto ">
  
   

        <div className="w-[800px] h-full flex flex-row items-center justify-around ">
          
          <div className="flex items-end  justify-end border border-[#7042f861] bg-[#0300145e] w-40 p-3  rounded-full text-gray-200">
            <a href="https://studentss-inky.vercel.app/" className="cursor-pointer">
              Students Journey 
            </a>  
          </div>

        

             <div className="flex items-end  justify-end border border-[#7042f861] bg-[#0300145e] w-40 p-3  rounded-full text-gray-200">
            <a href="https://project-umber-kappa.vercel.app/" className="cursor-pointer">
              Students Projects 
            </a>  
          </div>
      
        </div>


      </div>
      
    </div>
    
  );
};

export default Navbar;
