import React from 'react'

const search = () => {
  return (
    <div className='h-screen text-white mx-2 my-8 flex items-center flex-col font-sans'>
        <div className='md:flex-row flex flex-col justify-between gap-2 items-center'>
            <label>Search Query</label>
            <input className='py-2 px-3 rounded-3xl bg-white text-gray-700 outline-none font-semibold'/>
            <button className='bg-white hover:bg-pink-100 text-red-700 font-semibold rounded-md p-2 my-1 mx-2'>Search</button>
        </div>
        <div className= 'text- my-4 w-full md:w-auto' style={{ overflowX: 'auto' }}>
            <table className=''>
                <thead>
                    <tr className='bg-white text-red-700'>
                        <th className='border-r border-gray-500 py-2 px-8'>First Name</th>
                        <th className='border-r border-gray-500 py-2 px-8'>Last Name</th>
                        <th className='border-r border-gray-500 py-2 px-8'>Referral</th>
                        <th className='border-r border-gray-500 py-2 px-8'>CV</th>
                        <th className='border-r border-gray-500 py-2 px-8'>Update Status</th>
                        <th className='py-2 px-8'>Email</th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
  )
}

export default search