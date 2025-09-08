import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Dashboard() {
const user = useSelector(data => data.user);
  const dispatch = useDispatch();
  
  return (
   
    <div className='flex flex-col justify-center items-center min-h-screen bg-gray-50' >

<div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5" placeholder="Search by name,author..." required />
        <button type="submit" class="text-white end-2.5 top-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-3">Search</button>
</div>
    
    <img src='https://static.vecteezy.com/system/resources/thumbnails/020/626/920/small_2x/digitization-process-from-books-to-ebooks-from-paper-to-digital-in-a-laptop-photo.jpg'className=' bg-cover bg-center'></img>
      <h1 className='text-2xl font-bold mb-4'>Welcome to ebooksLibrary</h1>      
     
     <button className='bg-red-700 cursor-pointer text-white rounded px-4 py-2 absolute end-2.5 top-2.5' onClick={() => dispatch({ type: "LOGOUT" })}>Logout</button>
     
    </div>
  )
}

export default Dashboard