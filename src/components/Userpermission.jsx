import React, { useState } from 'react';
import axios from 'axios';
import Nav from './Navbar';
import { useLocation, useNavigate,Link } from "react-router-dom";
import { StarsCanvas } from './canvas';

function Userper() {
  const [userId, setUserId] = useState('');
  const [message, setMessage] = useState('');

  const handleRequestPermission = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://glitchcitybackend1.onrender.com/request-permission', { userId });
      setMessage(response.data.msg);
    } catch (error) {
      setMessage(error.response.data.msg);
    }
  };

  return (
    
    <div className=" main flex items-center justify-center bg-[#222020] w-[100vw] h-[100vh] gap-10 "  > <Nav/>
      <form onSubmit={handleRequestPermission} className="border-4  border-[#ae09dc9f] p-20 bg-[#4c20b1] max-w-[90vw] bg-opacity-[0.7]  rounded-xl">
        <div className="text-[30px] font-bold text-white "> Student Login </div>

        <div className=" m-2 ">
          <div className=" my-2 text-white font-semibold ">Username</div>
          <input className=" m-2 rounded w-full " required onChange={(e) => setUserId(e.target.value)} name="username" /><br />
          
          <button className="border-2 hover:bg-black bg-[#ae09dc9f] hover:border-white text-white rounded-xl font-bold px-4 py-2 my-4" type="submit">
            Request
          </button><br/>
          <div className='my-2 text-red-500 font-bold text-[20px] capitalize' >{message}</div>
        </div>
        
      </form>

       
    <StarsCanvas />
    </div>
  );
}

export default Userper;
