import React from 'react'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <nav className='shadow-lg text-gray-800 px-6 py-4 flex justify-between items-center'>
        
        <div className='hover:text-blue-500 text-xl font-bold '><Link href='/'>Logo</Link></div>
        {/* Hides the <ul> by default and from medium screens and up, display it as a flexbox container */}
        <ul className='flex space-x-6  font-medium'>
            <li><Link href='/home' className='hover:text-blue-500'>Home</Link></li>
            <li><Link href='/posts' className='hover:text-blue-500'>Posts</Link></li>
            <li><Link href='/about' className='hover:text-blue-500'>About</Link></li>
        </ul> 
    </nav>
  )
}

export default Header