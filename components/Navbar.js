import React, { useState } from 'react'
import { BsPerson, BsSearch, BsX } from 'react-icons/bs'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'
import Image from 'next/image'
import sterlingLogo from '../images/sterlingLogo.png'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <div className={'flex justify-between px-2 pb-8 md:py-1 items-center text-white'}>
        <div className='w-[50px] text-bold text-xl text-white'><Image src={sterlingLogo} alt='sterling logo'/></div>
        <div className='hidden md:flex items-center gap-5 font-bold'>
            <Link className='hover:border-b-2' href='/upload'>Upload</Link>
            <Link className='hover:border-b-2' href='/search'>Search</Link>
            <Link href='/'><BsPerson size={27} className='bg-white text-red-500 rounded-2xl p-1'/></Link>
        </div>
        <div  className='flex md:hidden'>
            <div className='relative'>
                {toggle ? <AiOutlineClose className='text-white' size={20} onClick={() => setToggle(false)}/> : <AiOutlineMenu className='text-white' size={20} onClick={() => setToggle(true)}/>}
            </div>
            {toggle && <div className='absolute top-10 right-0 flex flex-col gap-2 bg-white text-blue-950 p-4 mr-2 rounded-lg font-semibold'>
                <div className='hover:text-red-600 focus:text-red-600'><Link href='/upload'>Upload</Link></div>
                <div className='hover:text-red-600 focus:text-red-600'><Link href='/search'>Search</Link></div>
                <Link href='/'><BsPerson size={27} className='bg-red-700 text-white rounded-2xl p-1'/></Link>
            </div>}
        </div>
    </div>
  )
}

export default Navbar