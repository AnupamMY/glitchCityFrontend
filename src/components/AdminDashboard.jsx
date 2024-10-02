import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from './Navbar';
import { StarsCanvas } from './canvas';

function AdminDashboard() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get('https://glitchcitybackend1.onrender.com/request-permission');
        setRequests(response.data);

      } catch (error) {
        console.error('Error fetching permission requests:', error);
      }
    };

    fetchRequests();
  }, []);

  const handleAcceptRequest = async (userId) => {
    try {
      await axios.put(`https://glitchcitybackend1.onrender.com/grant-permission/${userId}`);
      setRequests(requests.filter((request) => request.userId !== userId));
    } catch (error) {
      console.error('Error accepting permission request:', error);
    }
  };

  const handleDenyRequest = async (userId) => {
  };

  return (
    <div className='main font-bold flex items-center justify-center bg-[#222020] w-[100vw] h-[100vh] gap-10 ' >
      <div className="text-white h-fit border-4  border-[#ae09dc9f] p-20 bg-[#4c20b1] max-w-[90vw]  rounded-xl bg-opacity-[0.7] flex flex-col items-center justify-centerw-[100vw] gap-10 "  > <Nav />
        <h2 className='bg-white text-black p-2 rounded-xl '>All Permission Requests</h2>
        <ul>
          {requests.map((request) => (
            <li key={request._id}>
              <p className=' text-black p-2 text-center rounded-xl m-2 bg-white' >User ID: {request.userId}</p>
              <p className='text-black p-2 text-center rounded-xl m-2 bg-white' >Status: {request.status}</p>
              <button className=' hover:bg-black hover:text-white text-black p-2 text-center rounded-xl m-2 bg-white' onClick={() => handleAcceptRequest(request.userId)}>Accept</button>
            </li>
          ))}
        </ul>



      </div>
      <StarsCanvas />
    </div>
  );
}

export default AdminDashboard;
