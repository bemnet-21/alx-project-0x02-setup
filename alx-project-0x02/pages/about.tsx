import Button from '@/components/common/Button'
import Header from '@/components/layout/Header'
import React from 'react'

const about: React.FC = () => {
  return (
    <>
      <Header />
      <Button size='small' shape='rounded-full' content='Post'/>
      <Button size='medium' shape='rounded-full' content='Post'/>
      <Button size='large' shape='rounded-md' content='Post'/>
    </>
  )
}

export default about