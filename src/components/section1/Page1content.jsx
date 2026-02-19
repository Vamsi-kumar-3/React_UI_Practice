import React from 'react'
import Left from './Left'
import Right from './Right'

const Page1content = (props) => {
  return (
    <div className='flex items-center gap-23  px-16'>
      <Left/>
      <Right users={props.users}/>
    </div>
  )
}

export default Page1content
