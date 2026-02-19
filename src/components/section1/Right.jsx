import React from 'react'

import Rightcontent from './Rightcontent';
const Right = (props) => {
  return (
    <div className=' h-screen w-3/2  flex flex-nowrap  overflow-x-auto gap-4'>
      {props.users.map((user,index)=>(
        <Rightcontent key={index} img={user.img} tag={user.intro} id={index+1}/>
      ))}
    </div>
  )
}

export default Right
