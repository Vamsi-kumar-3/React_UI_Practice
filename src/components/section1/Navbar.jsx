import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center p-6"> 
        <button className='bg-black text-white text-sm uppercase rounded-3xl mx-12 p-2'>Legendary Ranks</button>
        <div className='uppercase text-black gap-8 px-9 tracking-widest font-bold flex '>
          <h1 className=''>Warriors</h1> 
          <h1 className=''>Philosophies</h1>
          <h1 className=''>Alliances</h1>
          <h1 className=''>JointheCrew</h1>  </div>
      </nav>
    </div>
  )
}

export default Navbar
