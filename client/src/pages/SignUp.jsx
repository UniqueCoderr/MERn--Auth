import React from 'react'
import {Link} from 'react-router-dom'
export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Sign Up</h1>
      <form className='flex flex-col gap-3 ' >
        <input type="text" name="" id="username" placeholder='Username' className='bg-slate-100 p-3 rounded-lg'/>
        <input type="email" name="" id="email" placeholder='Email' className='bg-slate-100 p-3 rounded-lg my-3'/>
        <input type="password" name="" id="password" placeholder='Password' className='bg-slate-100 p-3 rounded-lg'/>
        <button className='bg-slate-700 p-3 rounded-lg my-3 text-white uppercase disabled:opacity-80'>Sign Up</button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to = '/sign-in'><span className='cursor-pointer text-blue-500 '>Sign in</span></Link>
        
      </div>

    </div>
  )
}
