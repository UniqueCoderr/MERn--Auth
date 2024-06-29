import React from 'react'

export default function Header() {
  return (
   <header className='bg-slate-200'>
    <div className="flex justify-between max-w-7xl mx-auto items-center p-3">
      <div className="font-bold">
        <h1>Auth App</h1>
      </div>
      <div className="">
        <ul className='flex space-x-10'>
          <li>Home</li>
          <li>About</li>
          <li>SignIn</li>
        </ul>
      </div>
    </div>
   </header>
  )
}
