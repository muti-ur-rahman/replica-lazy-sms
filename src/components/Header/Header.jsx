import React from 'react'
import Navbar from './components/Navbar'

function Header() {
  return (
    <>
    <div className="flex justify-between items-center min-h-[8vh] font-sans bg-black bg-opacity-50 p-1" > Header
    <div className='flex justify-center  '>
    <Navbar/>
    </div>
    </div>
    </>
  )
}

export default Header