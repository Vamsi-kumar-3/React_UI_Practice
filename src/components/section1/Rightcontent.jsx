import React from 'react'
import { ArrowRight } from 'lucide-react';
const Rightcontent = (props) => {
  return (
    
       <><div className="h-155 p-2 w-80 shrink-0 overflow-hidden relative rounded-4xl">
  
                    <img src={props.img}  className=" object-cover w-full h-full rounded-4xl" alt=" " />
                    <div className='absolute top-0 left-0'>
                      <div className='bg-white   w-10 m-16 flex items-center justify-center rounded-full p-2 text-black font-bold'>
                      {props.id}
                        
                    </div> 
                    <p className='text-white text-2xl tracking-tighter px-3 mt-60 mb-7 w-80 font-bold'>
                      {props.tag}
                    </p>
                    <div className='flex gap-1 ml-4 '>
                    <button className='bg-blue-500 p-2 rounded-full text-white font-bold mt-13'>
                      Select The Warrior
                    </button>
                    <button className='bg-blue-500 p-2 rounded-full text-white font-bold mt-13'>
                    <ArrowRight />
                    </button>
                    </div>
                    
                      </div>
                
                        
               
                   </div>
              
                   </>

   
  )
}

export default Rightcontent
