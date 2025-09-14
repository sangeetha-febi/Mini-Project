import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function Register() {

  // User data
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[role, setRole] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = async (e) => {
    e.preventDefault();

    try{
      // Register through API
      const res = await axios.post("http://localhost:8081/users", {
        email, password, role
      });
      dispatch({ type: "REGISTER_SUCCESS", payload: res.data });
      navigate("/login");
    }catch{
      console.error("Registration failed");      
    }
  }

  return (
    
    <div className='flex justify-center items-center min-h-screen bg-gray-300 '>
      <div>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXOgyNb8KhO8he-JZYsxOC4U4e80UHxyNAdQVK8ks3yZGSBNJqEC9WMqkZ6hF4R24tjE&usqp=CAU'className='w-full  pr-160'></img>
      <div class="absolute inset-0 flex items-center justify-center">
          <h1 className = "text-orange-800 text-7xl font-bold pr-80">E-Libray</h1>
          
      <form onSubmit={handleRegister} className=' p-6 rounded shadow w-80 bg-gray-300'>
        <h2 className='text-xl font-bold mb-4 text-center bg-colour-orange-600'>Register form</h2>
        <label htmlFor="email" className='font-bold'>Enter your Email</label>
        <input placeholder='john@mail.com' className='border p-2 w-full mb-3' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password" className='font-bold'>Enter your password</label>
        <input placeholder='******' className='border p-2 w-full mb-3' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
               
        <label htmlFor="Role" className='font-bold'> Enter your  Role</label>
        <input placeholder='User/Librarian' className='border p-2 w-full mb-3' type="text" value={role} onChange={(e) => setRole(e.target.value)} />
        
        
        <button type='submit' className='bg-green-700 cursor-pointer text-white px-4 py-2 w-full'>Register</button>
        <p className='text-sm mt-3'>Already have an account? <Link className='text-blue-600 font-bold' to="/login">Login</Link></p>
      </form>
    </div>
    </div>
    </div>
  )
}

export default Register