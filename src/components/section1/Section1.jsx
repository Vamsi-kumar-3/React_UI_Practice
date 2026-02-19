import React from 'react'
import Navbar from './Navbar'
import Left from './Left'
import Right from './Right'
import Page1content from './Page1content'
const Section1 = (props) => {
  return (
    <div className=' min-h-screen  w-full'>
      <Navbar/>
      <Page1content users={props.users}/>
    

    </div>
  )
}

export default Section1
