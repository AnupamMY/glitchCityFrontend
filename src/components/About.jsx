
import StarsCanvas from './canvas/Stars';

import React, { useState } from 'react'

import Nav from './Navbar'





const About = () => {
  const [toggle, settoggle] = useState(false)

  return (
    <div>
    <Nav/>
    <div class="flex w-full min-h-screen items-center justify-center bg-neutral-800 main">
      <div class="grid gap-5 ">
        <div class={`${toggle ?'hidden': ""} group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30`}>
          <div class="h-96 w-72">
            <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="../assets/ng.png" alt="" />
          </div>
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 class="font-dmserif text-3xl font-bold text-white">Nikhil Gupta</h1>
            <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Full Stack Developer </p>
            <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Graduating From Bhavans College </p>
            <p class="mb-3 text-[14px] italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Impleteing The knowledge Into The Real World Application </p>
            <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a href="https://portfolio-nikhil-gupta.netlify.app/" target='_blank'>See More</a></button>
          </div>
        </div>
        <div class={`${!toggle ? 'hidden' : ""} group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30`}>
          <div class="h-96 w-72">
            <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="../assets/nj.jpeg" alt="" />
          </div>
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 class="font-dmserif text-3xl font-bold text-white">Nikhil Jha</h1>
            <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Full Stack Developer </p>
            <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Graduating From Bhavans College</p>
            <p class="mb-3 text-[14px] italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Eager To apply Knowledge To The Real World Application</p>
            <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a href="https://www.linkedin.com/in/nikhil-jha-145793239/" target='_blank' >See More</a></button>
          </div>
        </div>

      </div>
      <div className={`${toggle ?'hidden': ""} border-2 mx-4 bg-[#460658] text-white rounded-xl font-bold px-4 py-2 my-4 `}>
        <h1 className='font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2'>Hi, I'm <span className='text-[#915eff]' >Nikhil</span></h1>
        <p className='text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]'>I am a fullstack Developer<br />I  develop 3D web applications.</p>
        <div className='font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2' >
          Skills
        </div>
        <div className=' capitalize text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]'>
          <div>reactjs</div>
          <div>nodejs</div>
          <div>tailwind</div>
          <div>mongodb</div>
          <div>react-three-fiber/threejs</div>
        </div>
      </div>
      <div className={`${!toggle ?'hidden': ""} border-2 mx-4 bg-[#460658] text-white rounded-xl font-bold px-4 py-2 my-4 `}>
        <h1 className='font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2'>Hi, I'm <span className='text-[#915eff]' >Nikhil</span></h1>
        <p className='text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]'>I am a fullstack Developer</p>
        <div className='font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2' >
          Skills
        </div>
        <div className=' capitalize text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]'>
          <div>reactjs</div>
          <div>PHP</div>
          <div>tailwind</div>
          <div>SQL</div>
        </div>
      </div>

      
      <button onClick={()=>settoggle(!toggle)} className=' hidden fixed bottom-10 bg-[#460658] text-white hover:bg-white hover:text-black font-bold border-2 px-4 py-2 rounded-xl' >
        Switch
      </button>
      <StarsCanvas />
    </div>
    
  </div>

  );

   
  

}

export default About;
