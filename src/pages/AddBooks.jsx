
import React, { useState } from 'react';
import DisplayData from './DisplayData';

function AddBooks() {
  const [formData, setFormData] = useState({});

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Assume you have state for each input
    const data = {
      id: e.target.id.value,
      title: e.target.title.value,
      authorname: e.target.authorname.value,
      price: e.target.price.value
    };
    setFormData(data);
  }

  return (
      <div className='bg-orange-200'>
        <h1 className='text-center text-4xl mb-10 '> Add Books to the Library</h1>
    <div className='flex justify-center items-center min-h-screen bg-gray-300 '>


        <form onSubmit={handleSubmit}  className='bg-gray-300 p-6 rounded shadow w-80 h-80 mb-40 '>
          <label for id ="" className='font-bold'>Enter book id </label>
            <input className='border p-2 w-45 mb-3' type='text'required ></input><br></br>
            <label for Name="" className='font-bold'>Enter the book title</label>
            <input className='border p-2 w-45mb-3' type='text'required></input><br></br>
             <label for Name="" className='font-bold'>Enter the Author Name</label>
            <input className='border p-2 w-45 mb-3' type='text'required ></input><br></br>
             <label for price="" className='font-bold'>Enter the Price</label>
            <input className='border p-2 w-45 mb-3' type='text'required ></input><br></br>
            <button type='submit' className='bg-green-600 cursor-pointer text-white px-4 py-2 w-full'>ADD</button>
 <DisplayData data={formData} />

        </form>
    
    </div>
    </div>
  );
}
export default AddBooks
