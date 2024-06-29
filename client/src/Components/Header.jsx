import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
   <header className='bg-slate-200'>
    <div className="flex justify-between max-w-7xl mx-auto items-center p-3">
      <div className="font-bold">
      <Link to = '/' ><h1>Auth App</h1> </Link>
      </div>
      <div className="">
        <ul className='flex space-x-10'>
          <Link to = '/' ><li className='cursor-pointer ' >Home</li></Link>
          <Link to = '/about' ><li>About</li></Link>
          <Link to = '/sign-in' ><li>SignIn</li></Link>
        </ul>
      </div>
    </div>
   </header>
  )
}
