import React from 'react'
import { type ButtonProps } from '@/interfaces'

const Button: React.FC<ButtonProps> = ({size, shape, content}) => {
  return (
    <button className={`${size} ${shape} px-2 py-2 m-5 bg-blue-500 border-2 border-transparent hover:bg-blue-600`}>{content}</button>
  )
}

export default Button