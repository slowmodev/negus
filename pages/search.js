import Layout from '@/components/Layout'
import Navbar from '@/components/Navbar'
import Search from '@/components/Search'
import React from 'react'

const search = () => {
  return (
    <div className='text-black'>
        <Layout>
            <Search className='' />
        </Layout>
    </div>
  )
}

export default search