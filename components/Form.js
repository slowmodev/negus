import Link from 'next/link'
import React from 'react'

const Form = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
        <div className='bg-white text-gray-500 flex flex-col w-full mx-2 items-center justify-center font-sans container border rounded-xl py-4 shadow-2xl max-w-[800px]'>
          <h1 className='text-2xl mt-4 mb-6 text-blue-950'>Upload</h1>
          <form className='flex flex-col w-full p-3 md:p-5 items-center font-semibold'>
            <div className='w-full'>
                <div className='flex flex-col md:flex-row md:items-center md:jusify-between md:mb-5'>
                    <label className='md:w-[15%]'>First Name</label>
                    <input className='bg-white border border-gray-500 rounded-lg py-2 my-1 px-2 md:w-[85%] focus:border-red-600 bg-transparent outline-none' placeholder='Enter first name'/>
                </div>
                <div className='flex flex-col my-2 md:flex-row md:items-center md:justify-between md:mb-5'>
                    <label className='md:w-[15%]'>Last Name</label>
                    <input className='bg-white border border-gray-500 rounded-lg px-2 py-2 md:w-[85%] focus:border-red-600 bg-transparent outline-none'
                    placeholder='Enter last name'/>
                </div>
                <div className='flex flex-col my-2 md:flex-row md:items-center md:justify-between md:mb-5'>
                    <label className='md:w-[15%]'>Email</label>
                    <input className='bg-white border border-gray-500 rounded-lg px-2 py-2 md:w-[85%] focus:border-red-600 bg-transparent outline-none'
                    placeholder='@example.com'/>
                </div>
                <div className='flex flex-col md:mb-5 md:flex-row md:items-center md:justify-between'>
                    <label className='md:w-[15%]'>Referral</label>
                    <input className='bg-white border border-gray-500 rounded-lg px-2 py-2 md:w-[85%] focus:border-red-600 bg-transparent outline-none'
                    placeholder='Enter referral name'/>
                    </div>
                <div className='flex flex-col md:flex-row md:items-center my-5'>
                    <label className='md:w-[15%]'>Upload CV</label>
                    <input className='w-[250px] my-2 md:w-[85%] custom-file-input' type='file' />
                </div>
            </div>
            <div>
                <Link href='/form'>
                <button className='bg-red-600 hover:bg-red-800 text-white rounded-md px-3 py-2 my-4'>Submit</button>
                </Link>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Form