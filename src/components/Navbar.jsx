import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Bot from './ChatsBot';



const Nav = () => {
  const [imdobileMenuOpen, setImdobileMenuOpen] = useState(false);
  const [help, sethelp] = useState(false)
  const navigate = useNavigate()
  const isusersign = !!localStorage.getItem('token')
  const [user, setuser] = useState()

  useEffect(() => {
    setuser(localStorage.getItem('user'))
    console.log(user);
  })

  const handlesignout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')

    user == 'student' ? navigate('/login') : navigate('/adminlogin')
    window.location.reload();
  }

  const toggleMobileMenu = () => {
    setImdobileMenuOpen(!imdobileMenuOpen);
    if (help == true) {
      sethelp(!help)
    }
  };

  return (
    <header className=' absolute  py-4 px-4 bg-opacity-[0.5] top-0  z-50 w-full'>
      <nav className=' flex justify-between items-center '>
        <Link to="/" className=' font-bold  text-white'>
          The GlitchCity
        </Link>



        <div className=''>
          <img
            src={`./assets/${!imdobileMenuOpen ? 'hamburger.svg' : 'close.svg'}`}
            alt="Hamburger"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={toggleMobileMenu}
          />
        </div>
      </nav>
      <div>
        <ul className={` ${imdobileMenuOpen ? '' : 'hidden'}  absolute top-[60px] right-[30px] bg-slate-700 bg-opacity-[0.9] p-4 rounded-2xl`}>
          <li>
            <Link
              to='/home'
              className=' leading-normal text-lg text-white font-bold hover:text-[#6793ea]'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to='/cheatsheet'
              className=' leading-normal text-lg text-white font-bold hover:text-[#6793ea]'
            >
              Event
            </Link>
          </li>
          <li>
            <Link
              to='/dashboard'
              className=' leading-normal text-lg text-white font-bold hover:text-[#6793ea]'
            >
              Schedule
            </Link>
          </li>
          <li>
            <Link
              to='/chat'
              className=' leading-normal text-lg text-white font-bold hover:text-[#6793ea]'
            >
              ChatGroup
            </Link>
          </li>

          <li className={`${user == 'admin' ? 'hidden' : '' } `}  >
            {isusersign ?
              <button
                onClick={handlesignout}
                className=' leading-normal text-lg text-white font-bold hover:text-[#6793ea]'
              >
                logout
              </button> :

              <Link
                to="/login"
                className=' leading-normal text-lg text-white font-bold hover:text-[#6793ea]'
              >
                Student login
              </Link>
            }
          </li>
          <li className={`${user == 'student' ? 'hidden' : ''}`}  >
            {isusersign ?
              <button
                onClick={handlesignout}
                className=' leading-normal text-lg text-white font-bold hover:text-[#6793ea]'
              >
                logout

              </button> :
              <Link
                to="/adminlogin"
                className=' leading-normal text-lg text-white font-bold hover:text-[#6793ea]'
              >
                Admin Login
              </Link>
            }
          </li>

          <li>
            <Link
              to='/adminsup'
              className=' leading-normal text-lg text-white font-bold hover:text-[#6793ea]'
            >
              Admin Registration
            </Link>
          </li>

          <li className={`${!user=='student'?'hidden':''}`} >
            <Link
              to='/userper'
              className=' leading-normal text-lg text-white font-bold hover:text-[#6793ea]'
            >
              Request To join Group
            </Link>
          </li>

          <li className={`${user=='student'?'hidden':''}`} >
            <Link
              to='/admindash'
              className=' leading-normal text-lg text-white font-bold hover:text-[#6793ea]'
            >
              Admin Dashboard
            </Link>
          </li>

          <li>
          <Link
              to='/help'
              className=' leading-normal text-lg text-white font-bold hover:text-[#6793ea]'
            >
              Help
            </Link>
          </li>
          <li>
            <Link
              to='/about'
              className=' leading-normal text-lg text-white font-bold hover:text-[#6793ea]'
            >
              About us
            </Link>
          </li>
        </ul>
      </div>
      <div className={`${help ? '' : 'hidden'}`} ><Bot /></div>
    </header>
  );
};

export default Nav;