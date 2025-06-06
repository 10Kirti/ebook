import React from 'react'

const Header = () => {
  return (
    <>
      <div className='m-auto px-20 py-10 flex items-center justify-between'>
          <h1 className='text-4xl font-extrabold text-gray-800'>STUDENTBOOK<span className='text-red-900'>SWAP</span></h1>
          <div>
            {/* <div>
              <ul className='grid grid-cols-2 items-center ml-18 text-2xl text-gray-800'>
                <li><a href="#" className='ml-14'>Home</a></li>
                <li><a href="#" className='ml-10'>Contact</a></li>
              </ul>
            </div>
            <div>
                <ul className='flex items-center gap-7  ml-20'>
                  <span className='text-2xl'>|</span>
                  <li><button className='bg-gray-400 p-3 rounded-sm text-white'><a href="#">Login</a></button></li>
                  <li><button className='bg-gray-800 p-3 rounded-sm text-white'><a href="#">Register</a></button></li>
                </ul>
            </div> */}
          <ul className='flex items-center justify-center gap-4 text-gray-500'>
            <li><a href="#">Home</a></li>
            <li className='mr-7'><a href="#">Contact</a></li>
            <li><span className='text-2xl'>|</span></li>
            <li><button className='bg-gray-400 p-3 rounded-sm text-white'><a href="#">Login</a></button></li>
            <li><button className='bg-gray-800 p-3 rounded-sm text-white'><a href="#">Register</a></button></li>
          </ul>
          </div>
      </div>
    </>
  )
}

export default Header