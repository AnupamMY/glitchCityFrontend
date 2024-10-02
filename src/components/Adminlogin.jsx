import React from 'react'
import { useEffect, useState } from 'react'
import axios from "axios";
import { useLocation, useNavigate,Link } from "react-router-dom";
import { StarsCanvas } from './canvas';
import Nav from './Navbar';

function Adminlogin() {

  const [name, setname] = useState('')
  const [pass, setpass] = useState('')
  const [msg,setmsg] = useState()
  const navigate = useNavigate()
  const location = useLocation();
  const currentPath = location.pathname;
  

  useEffect(() => {
    fetchUsers();
      
  }, [])

  const fetchUsers = () => {
    axios.get('https://glitchcitybackend1.onrender.com/adminreg').then((res) => {
    console.log(res.data);
    }).catch((e) => {
      console.log('error', e);
    })
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios
        .post('https://glitchcitybackend1.onrender.com/adminlogin', { username: name, password: pass })
      const token = response.data.token
      setname('')
      setpass('')
      fetchUsers();
      console.log(currentPath);
      navigate(`/${currentPath == '/adminlogin' ? 'home' : currentPath}`)
      
      localStorage.setItem('user','admin')
      localStorage.setItem('token', token)
      window.location.reload();


    } catch (error) {
      console.log('Login Error', error)
      setmsg(error.response.data.error)
    }
  }



  return (
    <div className=" main flex items-center justify-center bg-[#222020] w-[100vw] h-[100vh] gap-10 "  > <Nav/>
      <form onSubmit={handleLogin} className="border-4  border-[#ae09dc9f] p-20 bg-[#4c20b1] max-w-[90vw] bg-opacity-[0.7]  rounded-xl">
        <div className="text-[30px] font-bold text-white ">Admin Login </div>

        <div className=" m-2 ">
          <div className=" my-2 text-white font-semibold ">Username</div>
          <input className=" m-2 rounded w-full " required onChange={(e) => setname(e.target.value)} name="username" /><br />
          <div className=" my-2 text-white font-semibold ">Password</div>
          <input type='password' required className=" m-2 rounded w-full " onChange={(e) => setpass(e.target.value)} name="password" /><br />

          <button className="border-2 hover:bg-black bg-[#ae09dc9f] hover:border-white text-white rounded-xl font-bold px-4 py-2 my-4" type="submit">
            Login
          </button><br/>
          <Link to='/adminsup' className=" my-2 text-white font-semibold capitalize ">Not Have Account Sign-up Here </Link>
          <div className='my-2 text-red-500 font-bold text-[20px] capitalize' >{msg}</div>
        </div>
        
      </form>

       
    <StarsCanvas />
    </div>
  )
}

export default Adminlogin
