import React from 'react'
import img from '/1.png'
import { useNavigate } from 'react-router-dom'

function Header() {


    const navigate =useNavigate()
  return (
    <>
        <div className='w-full h-16 bg-slate-900 px-20 flex items-center justify-between'>
           <p className='text-2xl text-blue-600'>InstaMart</p>
           <button 
           onClick={()=>navigate("/sign")}
           className='px-3 py-1 rounded-full bg-green-500 text-white font-semibold'>Sign In</button>
        </div>
        <div className='w-full h-full'>
            <img src={img} alt='' className='w-full h-full object-cover'></img>
        </div>
    </>
  )
}

export default Header