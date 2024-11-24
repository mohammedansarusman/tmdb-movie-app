import React from 'react'
// Calling from index.js and <NavigationBar />
const Contact = () => {
  return (
    <div className='w-screen min-h-screen py-20 bg-gradient-to-br from-slate-800 to-white-950 flex flex-col items-center relative'>
      <h1 className = "text-3xl text-white opacity-70">Contact</h1>
      <div className='flex flex-col items-start text-white opacity-70 w-[96%]  mt-[50px] sm:w-[90%] md:w-[75%] lg:w-[60%] xl:w-[50%]'>
        <h1 className='text-xl font-semibold'>Let’s get in touch.</h1>
        <p className='mt-[20px]'>Simply select your type of inquiry below and we’ll let the appropriate folks know.</p>
      </div>
      <form className='mt-[50px] w-[96%] sm:w-[90%] md:w-[75%] lg:w-[60%] xl:w-[50%]'> 
        <div className='flex flex-col gap-2'>
          <h1 className='text-white opacity-50'>Name <span className='text-red-500'>*</span></h1>
          <input type='text' className='w-full p-3 rounded-md border-none text-black' placeholder='Enter your name' data-testid='name-input'/>
          <h1 className='text-white opacity-50'>First</h1>
          <input type='text' className='w-full p-3 rounded-md border-none text-black' placeholder='Enteryourname' />
          <h1 className = 'text-white opacity-50'>Last</h1>
          <h1>Company</h1>
          <input type='text' className='w-full p-3 rounded-md border-none text-black' />
          <h1>Phone</h1>
          <input type='text' className='w-full p-3 rounded-md border-none text-black' />
          <h1>Email <span className='text-red-500'>*</span></h1>
          <input type='email' className='w-full p-3 rounded-md border-none text-black' />
          <h1>Message <span className='text-red-500'>*</span></h1>
          <textarea className='w-full p-3 rounded-md border-none text-black' rows='5' />
        </div>
        <button className='px-[20px] h-[40px] bg-orange-400 rounded-full mt-4 font-bold'>Submit</button>
      </form>
    </div>
  )
}

export default Contact