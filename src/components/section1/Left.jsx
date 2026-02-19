import React from 'react'
import Herotext from './Herotext'
import Arrow from './Arrow'
const Left = () => {
  return (
    <div className='  h-screen w-1/4  justify-between flex-col mt-12'>
      <div> 
        <Herotext/>
        <Arrow/>
      </div>
      

    </div>
  )
}

export default Left
