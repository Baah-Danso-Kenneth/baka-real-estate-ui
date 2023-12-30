'use client'
import React from 'react'
import { BsTwitterX } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";
import { SlSocialInstagram } from "react-icons/sl";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

import CompanyLogo from '../../public/assets/images/logo-prompt.png';

import Image from 'next/image';

function Footer() {

  return (
    <div className='mt-5 bg-ashColor p-5'>
      <div className="content mx-28 flex">
         <div className="logo flex-none">
             <Image  src={CompanyLogo} alt="company-logo" width={250} height={150}/> 
         </div>

         <div className="content-info flex-grow  ml-10 ">
          <div className="handle-grids grid grid-cols-3 w-full">

               <div className="houses cursor-pointer">
                 <h3 className='cursor-pointer'>houses</h3>
                 <p>lands</p>
                 <p>building materials</p>
                 <p>pampulus</p>
                 <p>about us</p>
                 <p>buying house</p>
               </div>


               <div className="houses">
                 <h3>East-legon</h3>
                 <p>lesley</p>
                 <p>lesley</p>
                 <p>lesley</p>
                 <p>lesley</p>
                 <p>lesley</p>
               </div>


               <div className="houses">
                 <h3>Services</h3>
                 <p>frequently asked questions</p>
                 <p>locations</p>
                 <p>lesley</p>
                 <p>lesley</p>
                 <p>lesley</p>
               </div>


               <div className="houses">
                 <h3>officialchannel</h3>
                 <p>lesley</p>
                 <p>lesley</p>
                 <p>lesley</p>
                 <p>lesley</p>
                 <p>lesley</p>
               </div>


               <div className="houses">
                 <h3>East-legon</h3>
                 <p>lesley</p>
                 <p>lesley</p>
                 <p>lesley</p>
                 <p>lesley</p>
                 <p>lesley</p>
               </div>


               <div className="houses">
                 <h3>East-legon</h3>
                 <p>lesley</p>
                 <p>lesley</p>
                 <p>lesley</p>
                 <p>lesley</p>
                 <p>lesley</p>
               </div>
          </div>

         </div>
      </div>
    </div>
  )
}

export default Footer