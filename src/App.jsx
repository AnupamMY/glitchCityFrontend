import React, { useEffect, useState } from 'react'
import Landingpage from './components/Landingpage'
import { Routes , Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Chatgrp from './components/Chatgrp';
import Signup from './components/Signup';
import About from './components/About';
import Cheatsheet from './components/Cheatsheet';
import Home from './components/Home';
import { useLocation } from "react-router-dom";
import TopBtn from './components/TopBtn';
import Adminsup from './components/Adminsignup';
import Adminlogin from './components/Adminlogin';
import Userper from './components/Userpermission';
import AdminDashboard from './components/AdminDashboard';
import Help from './components/Help';
import Loginpage from './components/Loginpage';


function App() {

  const location = useLocation();
  const currentPath = location.pathname;
  const [isusersign,setusersign] = useState()
  useEffect(()=>{
    setusersign(!!localStorage.getItem('token'))
    console.log(isusersign);
  },[isusersign])

  return (
    <div>
      <Routes>
        <Route path="*" element={<Landingpage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/dashboard" element={isusersign?<Dashboard/>:<Loginpage/>}/>
        <Route path="/chat" element={isusersign?<Chatgrp/>:<Loginpage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Loginpage/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/adminsup" element={<Adminsup/>}/>
        <Route path="/adminlogin" element={<Adminlogin/>}/>
        <Route path="/userper" element={isusersign?<Userper/>:<Loginpage/>}/>
        <Route path="/admindash" element={isusersign?<AdminDashboard/>:<Adminlogin/>}/>
        <Route path="/cheatsheet" element={isusersign?<Cheatsheet/>:<Loginpage/>}/>
        <Route path="/help" element={<Help/>}/>
      </Routes>
      <TopBtn/>
    </div>
  )
}

export default App
