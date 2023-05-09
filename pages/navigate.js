import Layout from '@/components/Layout'
import Link from 'next/link'
import React, { useState } from 'react'
import { BsFolderFill, BsSearch } from 'react-icons/bs'
// import { RiSearchFill } from 'react-icons/ri'

const Navigate = () => {
  return (
    <Layout>
        <div className='flex md:flex-row flex-col md:gap-16 text-white items-center justify-center h-screen'>
            <Link href='/upload'><BsFolderFill className='hover:scale-110 transition duration-500' size={150}/></Link>
            <Link href='/search'><BsSearch className='hover:scale-110 transition duration-500' size={130}/></Link>
        </div>
    </Layout>
  )
}

export default Navigate