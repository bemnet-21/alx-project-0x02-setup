import React from 'react'
import Header from '../components/layout/Header'
import PostModal from '@/components/common/PostModal'
const index: React.FC = () => {
  return (
    <>
      <Header />
      <div className='min-h-screen flex items-center justify-center'>
        <div className='p-8 shadow-lg bg-blue-500 text-white w-100 mx-auto rounded-2xl  text-center '>
            Welcome to ALX
        </div>
      </div>
    </>
  )
}

export default index