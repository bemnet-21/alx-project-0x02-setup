import Button from '@/components/common/Button'
import React from 'react'

const about: React.FC = () => {
  return (
    <>
      <Button size='small' shape='rounded-full' content='Post'/>
      <Button size='medium' shape='rounded-full' content='Post'/>
      <Button size='large' shape='rounded-md' content='Post'/>
    </>
  )
}

export default about