import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div className='bg-container'>
        <main className='flex flex-col'>
          <Navbar />
          { children }
        </main>
    </div>
  )
}

export default Layout