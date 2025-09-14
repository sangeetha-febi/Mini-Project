import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function BookCard()
{
  const handleLogin = async (e) => {
    e.preventDefault();
    
    
  try{
 const book = await axios.post("http://localhost:8081/book", {
        img, title, author, description, rating
      });
  }
  catch
  {
    console.error("fetch failed");   
    
  }

  return (
    <div className="p-2 border-2 border-gray-500 w-64 shadow-sm hover:scale-105 cursor-pointer h-fit" key={book.id} >
      <img src={book.img} alt="book_image" className="w-full h-40" />
      <h3 className="font-semibold text-base font-Poppins mt-2">{book.title}</h3>
      <div className="flex gap-2 items-center mt-2 font-Poppins">
        <p className="bg-blue-50 border-2 border-blue-200 font-Poppins p-1 font-light text-Azure text-xs">Author</p>
        <p className="text-Gray-500 font-medium text-sm font-Poppins">{book.author}</p>
      </div>
      <p className="font-Poppins text-sm font-light mt-1">{book.description.length >= 40 ? book.description.substring(0, 50) + '...' : book.description}</p>
      <p className='font-Poppins text-sm font-medium mt-1 text-orange-500'>Ratings {book.rating}+</p>
      
    </div>
  )
}
}

export default BookCard;