import React from 'react'
import { BsTwitterX } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";
import { SlSocialInstagram } from "react-icons/sl";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";


function SocialNavigation() {
    return (
        <div className=''>
          <div className="first-section mx-28 p-3">
            <div>
              <h1 className='mb-3'>home {" "}<span>/</span> <span className='text-primary font-extralight'>watchmaking</span></h1>
            </div>
    
            <div className="share flex ">
              <h2 className='text-textColor font-bold'>Share</h2>
              <div className="icons flex justify-between items-center text-primary">
               <BsTwitterX className='mx-3'/>
               <GrFacebookOption className='mx-3'/>
               <SlSocialInstagram className='mx-3'/>
               <FaLinkedin className='mx-3'/>
               <FaPinterestP className='mx-3'/>
              </div>
            </div>
    
          </div>   
        </div>
      )
}

export default SocialNavigation