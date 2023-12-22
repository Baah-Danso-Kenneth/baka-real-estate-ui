import React from 'react'
import { HiMenuAlt4 } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi";
import { HiLocationMarker } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import Image from 'next/image';

import CompanyLogo from '../../public/assets/images/company-logo.png';

function Header() {
  return (
    <div className='bg-ashColor'>
      <div className="flex justify-between mx-28 items-center">
        <div className="menu-icon flex items-center">
          <HiMenuAlt4 className='text-xl text-primary'/>
          <h3 className='ml-2 text-primary text-lg'>menu</h3>
        </div>

        <div className="company-logo">
         <Image src={CompanyLogo} alt="company-logo" width={250} height={150}/>
        </div>

        <div className="section-logo flex justify-around items-center text-primary text-xl">
            <AiOutlineSearch className='mr-5'/>
            <HiLocationMarker/>
         <HiOutlineHeart className='ml-5'/>
        </div>
        </div>
    </div>
  )
}

export default Header