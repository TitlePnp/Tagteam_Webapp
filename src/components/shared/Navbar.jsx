import React from 'react'
import '../../tailwind.css'

export default function Navbar() {
  return (
    <div className='py-5 px-20 bg-red-500'>
      <div className='flex justify-center w-full'>
        <div className='mx-5'>
          <p className='font-bold'>Logo</p>
        </div>
        <div className='mx-5 hover:bg-white rounded p-2'>
          <p className='font-regular'>Home</p>
        </div>
        <div className='mx-5'>
          <p className='font-regular'>Home</p>
        </div>
        <div className='mx-5'>
          <p className='font-regular'>Home</p>
        </div>
        <div className='mx-5'>
          <p className='font-regular'>Home</p>
        </div>
      </div>
    </div>
  )
}
