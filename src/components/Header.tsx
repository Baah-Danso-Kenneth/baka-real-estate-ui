"use client"
import React, {useEffect, useState } from 'react'
import { HiMenuAlt4 } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi";
import { HiLocationMarker } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import Image from 'next/image';

import CompanyLogo from '../../public/assets/images/modified-logo.png';
import {motion} from 'framer-motion'
import { baseInfo, products } from '@/lib/NavigationLinks';
import Link from 'next/link';

function Header() {
  const [open,setOpen]=useState(false)

  const toggleProps=()=>{
      setOpen((prevState)=>!prevState)
      console.log('gee')
  }

  return (
    <div className='bg-primary relative'>
      <div className="flex justify-between mx-28 items-center">

            <div className="menu-icon flex items-center"> 
             {open ? <HiX onClick={toggleProps} className='text-3xl text-secondary cursor-pointer ' /> : <HiMenuAlt4 onClick={toggleProps}  className='text-3xl text-secondary cursor-pointer ' />} 
              <h3 className='ml-2 text-secondary text-sm capitalize'>{open ? 'close':'menu'}</h3>       
            </div>

        <div className="company-logo">
         <Image src={CompanyLogo} alt="company-logo" width={100} height={100}/>
        </div>

        <div className="section-logo flex justify-around items-center text-secondary text-xl">
                <AiOutlineSearch className='mr-5'/>
                <HiLocationMarker/>
                <HiOutlineHeart className='ml-5'/>

             </div>
        </div>

        {open && (
      <motion.div
       initial={{ opacity: 0, y: -50 }}
       animate={{ opacity: open ? 1 : 0, y: open ? 0 : -50 }}
       transition={{ duration: 0.5 }}
       className="drop-down absolute bg-primary w-full h-[520%]"
      >
       <div className='mx-28 grid grid-cols-4 gap-10'>
        <div className='mt-5'>
          <ul className='mb-8'>
          {products.map(({id, title, path, cName})=>{
            return( 
              <li key={id} className={`${cName} mb-5`}>
                <Link href={path} className='text-[#fff] hover:text-[#51a17d] text-xl font-bold capitalize'>{title}</Link>
              </li>
          
            )
          })}
         </ul>

         <ul>
         {baseInfo.map(({id, title, path, cName})=>{
            return( 
              <li key={id} className={`${cName}`}>
                <Link href={path} className='text-[#fff] text-sm capitalize hover:text-[#51a17d]'>{title}</Link>
              </li>
            )
          })}
         </ul>

        </div>

        <div className=' col-span-3'>
          <div className='flex  items-center mt-10'><h1 className='text-3xl capitalize font-bold text-[#fff]'>Our services</h1></div>
         
        </div>

        </div>
    </motion.div>
        )}
    </div>
  )
}

export default Header