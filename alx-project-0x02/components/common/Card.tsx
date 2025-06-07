import React from 'react'
import { type CardProps } from '@/interfaces'

const Card: React.FC<CardProps> = ({title, content}) => {
  return (
    <div className='shadow-2xl w-ful h-50 text-center m-2.5 bg-blue-400 rounded-3xl text-white hover:bg-blue-500'>
        <h2 className='text-5xl mb-15 font-bold'>{title}</h2>
        <p>{content}</p>
    </div>
  )
}

export default Card