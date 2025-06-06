import React from 'react'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <nav className='bg-blue-600 border-b shadow px-6 py-4 flex justify-between items-center'>
        <div className='text-xl font-bold text-white'>Logo</div>
        {/* Hides the <ul> by default and from medium screens and up, display it as a flexbox container */}
        <ul className='flex space-x-6 text-white font-medium'>
            <li><Link href='/home' className='hover:text-blue-500'>Home</Link></li>
            <li><Link href='/about' className='hover:text-blue-500'>About</Link></li>
        </ul> 
    </nav>
  )
}

export default Header